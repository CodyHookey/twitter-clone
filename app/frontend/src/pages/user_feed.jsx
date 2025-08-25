import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Tweet from "../components/Tweet/Tweet";
import {
  fetchTweetsByUser,
  deleteTweet,
  authenticated,
} from "../utils/requests";

class UserFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      currentUser: null,
    };

    this.indexTweets = this.indexTweets.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.authenticate();
    this.indexTweets();
  }

  authenticate() {
    authenticated()
      .then((response) => {
        this.setState({
          currentUser: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  indexTweets() {
    const { username } = this.props;
    fetchTweetsByUser(username).then((response) => {
      console.log(response);
      this.setState({
        tweets: response.tweets,
      });
    });
  }

  handleDelete(id) {
    if (!id) {
      return;
    }

    deleteTweet(id)
      .then(() => {
        this.indexTweets();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { tweets, currentUser } = this.state;
    const { username } = this.props;
    const isOwner = currentUser && currentUser.username === username;

    return (
      <>
        {isOwner ? (
          <h2 className="mb-5">Your Ripples</h2>
        ) : (
          <h2 className="mb-5">{username}'s Ripples</h2>
        )}
        <div className="feed-container text-start">
          {tweets.length > 0 ? (
            tweets.map((tweet) => {
              return (
                <Tweet
                  key={tweet.id}
                  tweet={tweet}
                  currentUser={this.state.currentUser}
                  onDelete={this.handleDelete}
                />
              );
            })
          ) : (
            <p>No Tweets Added</p>
          )}
        </div>
      </>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  if (container) {
    const pathParts = window.location.pathname.split("/");
    const username = pathParts[pathParts.length - 1];

    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <div className="flex-fill">
            <div className="container">
              <div className="row my-5 h-100 text-center">
                <UserFeed username={username} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </React.StrictMode>
    );
  }
});
