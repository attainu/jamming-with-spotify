export const albumsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_ALBUMS_PENDING":
      return {
        ...state,
        fetchAlbumsPending: true
      };

    case "FETCH_ALBUMS_SUCCESS":
      return {
        ...state,
        albums: action.albums,
        fetchAlbumsError: false,
        fetchAlbumsPending: false
      };

    case "FETCH_ALBUMS_ERROR":
      return {
        ...state,
        fetchAlbumsError: true,
        fetchAlbumsPending: false
      };

    case "ADD_ALBUM":
      return {
        ...state,
        //albums: action.album
        releaseAlbum: action.album
      };

    default:
      return state;
  }
};

export const albumTracksReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_ALBUM_TRACKS_PENDING":
      return {
        ...state,
        fetchAlbumTracksPending: true
      };

    case "FETCH_ALBUM_TRACKS_SUCCESS":
      return {
        ...state,
        albumTracks: action.albumTracks,
        fetchAlbumTracksError: false,
        fetchAlbumTracksPending: false,
        viewType: "Album"
      };

    case "FETCH_ALBUM_TRACKS_ERROR":
      return {
        ...state,
        fetchAlbumTracksError: true,
        fetchAlbumTracksPending: false
      };

    default:
      return state;
  }
};