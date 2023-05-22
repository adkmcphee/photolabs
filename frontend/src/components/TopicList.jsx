import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const mappedTopics = props.topics.map((topic) => {
    return (
      <TopicListItem
        handleTopicClick={props.handleTopicClick}
        topic={topic.title}
        link={topic.link}
        topicId={topic.id}
        key={topic.id}
      />
    );
  });
  return <div className="top-nav-bar--topic-list">{mappedTopics}</div>;
};

export default TopicList;
