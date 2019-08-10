import React from 'react';
import { connect } from 'react-redux';

const SongDetail = () => {
  return <div>Song Detail</div>;
};

const mapStateToProps = state => {
  console.log(state.selectedSong);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
