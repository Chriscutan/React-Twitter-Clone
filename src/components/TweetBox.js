import { Avatar, Button } from "@mui/material";
import { addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { colRef } from "../firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      displayName: "Jacob",
      username: "Jacob tennyson",
      text: tweetMessage,
      image: tweetImage,
      verified: false,
      avatar: "https://avatars.githubusercontent.com/u/97525332?v=4",
    });

    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/97525332?v=4" />
          <input
            placeholder="What's happening"
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          placeholder="Optional: Enter image URL"
          type="text"
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
