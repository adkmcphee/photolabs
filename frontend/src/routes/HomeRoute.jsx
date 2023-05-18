import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) =>
  <div className="home-route">
    <TopNavigationBar topics={props.topics}/>
    <PhotoList photos={props.photos}/>
  </div>;

export default HomeRoute;