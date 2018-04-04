import Redux from 'redux';
import sampleData from '../data/exampleVideoData.js';

var videoListReducer = (state = sampleData, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return action.videos;
    break;
  default:
    return state;
  }
};

export default videoListReducer;
