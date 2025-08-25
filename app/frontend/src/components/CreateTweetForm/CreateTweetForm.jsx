import React from "react";
import { createTweet } from "../../utils/requests";

class CreateTweetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: {
        message: "",
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const message = this.state.tweet.message;

    createTweet(message).then(() => {
      this.props.onCreate();

      this.setState({
        tweet: {
          message: "",
        },
      });
    });
  }

  render() {
    const { onCreate } = this.props;

    return (
      <div className="col-12 box-component p-5">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.tweet.message}
            onChange={(event) => {
              this.setState({
                tweet: {
                  message: event.target.value,
                },
              });
            }}
            placeholder="Write Your Message Here"
            className="form-control mb-3"
          />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => {
              onCreate();
            }}
          >
            Make a Wave
          </button>
        </form>
      </div>
    );
  }
}

export default CreateTweetForm;
