// Reducers
export const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:05' },
    { title: 'Macerena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want It That Way', duration: '1:22' },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) {
    if (action.type === "SELECTED_SONG") {
        return action.payload   
    }
    return selectedSong
}
