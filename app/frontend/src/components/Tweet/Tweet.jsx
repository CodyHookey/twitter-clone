import React from "react";

class Tweet extends React.Component {
  render() {
    const { tweet, currentUser, onDelete } = this.props;
    const { id, username, message, image } = tweet;

    const isOwner = currentUser && currentUser.id === tweet.user_id;

    return (
      <div className="tweet-card box-component p-3">
        <img src={image} alt="" />
        <div className="d-flex justify-content-between mb-3">
          <h5 className="align-self-center mb-0">
            <a href={`/users/${username}`}>{username}</a>
          </h5>
          {isOwner && (
            <button onClick={() => onDelete(id)} className="btn btn-danger">
              Delete
            </button>
          )}
        </div>
        <p>{message}</p>
      </div>
    );
  }
}

export default Tweet;
