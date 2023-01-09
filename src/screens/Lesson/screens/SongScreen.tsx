import React from 'react';
import SongView from '~/components/SongView/SongView';

const SongScreen = ({route}) => {
  const song = route.params.song;
  return <SongView song={song} />;
};

export default SongScreen;
