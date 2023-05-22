import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div
      className="topic-list--item"
      onClick={() => props.handleTopicClick(props.topicId)}
    >
      <a>
        <span>{props.topic}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
