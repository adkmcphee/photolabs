import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList photos={props.photos} topics={props.topics} handleTopicClick={props.handleTopicClick} />
      {<FavBadge isFavPhotoExist={props.hasFavourites}/>}
    </div>
  );
};

export default TopNavigation;