import React from 'react';
import photosData from './mocks/photos.json';
import topicsData from './mocks/topics.json';
import './App.scss';

import HomeRoute from './routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    <HomeRoute photos={photosData} topics={topicsData}/>
    {/* <TopNavigationBar/> */}
    {/* <TopicList/> */}
    {/* <PhotoList/> */}
    {/* <PhotoListItem/> */}
    {/* <TopicListItem/> */}
  </div>
);

export default App;