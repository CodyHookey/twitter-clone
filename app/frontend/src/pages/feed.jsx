import React from "react";
import { createRoot } from "react-dom/client";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Tweet from "../components/Tweet/Tweet";
import { fetchTweets, deleteTweet, authenticated } from "../utils/requests";
import CreateTweetForm from "../components/CreateTweetForm/CreateTweetForm";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      currentUser: null,
    };

    this.indexTweets = this.indexTweets.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    this.authenticate();
    this.indexTweets();
  }

  authenticate() {
    authenticated()
      .then((response) => {
        this.setState({
          tweets: this.state.tweets,
          currentUser: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  indexTweets() {
    fetchTweets().then((response) => {
      console.log(response);
      this.setState({
        tweets: response.tweets,
      });
    });
  }

  handleCreate() {
    this.indexTweets();
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
    const { tweets } = this.state;
    return (
      <>
        <CreateTweetForm onCreate={this.handleCreate} />
        <div className="row my-5 h-100 text-center">
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
        </div>
      </>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  if (container) {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <div className="flex-fill">
            <div className="container">
              <Feed />
            </div>
          </div>
          <Footer />
        </div>
      </React.StrictMode>
    );
  }
});
