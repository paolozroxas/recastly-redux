import Redux from 'redux';

var currentVideoReducer = (state = 0, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video;
    break;
  default:
    return state;
  }
};

export default currentVideoReducer;
