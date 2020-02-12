import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchPodcastMenu,
//   fetchPodcastSongs
} from "../../redux/actions/podcastActions";
import { updateHeaderTitle } from "../../redux/actions/uiActions";
import "../UserPlaylists/UserPlaylists.css";

const UserPodcasts = (props) => {  
 props.fetchPodcastMenu()
  const renderPodcasts = () => {
    return props.podcastMenu.map(podcast => {
      const getPodcastSongs = () => {
        // props.fetchPodcastSongs(
        //   podcast.owner.id,
        //   podcast.id,
        // );
        props.updateHeaderTitle(podcast.name);
      };

      return (
        <li
          onClick={getPodcastSongs}
          className={
            props.title === podcast.name
              ? "active side-menu-item"
              : "side-menu-item"
          }
          key={podcast.id}
        >
          {podcast.name}
        </li>
      );
    });
  }

    return (
      <div className="user-playlist-container">
        <h3 className="user-playlist-header">Podcasts</h3>
        {console.log(props.podcastMenu)}
        {props.podcastMenu && renderPodcasts()}
      </div>
    );
  
}

UserPodcasts.propTypes = {
  // userId: PropTypes.string,
  title: PropTypes.string,
  podcastMenu: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fetchPodcastMenu: PropTypes.func,
  // fetchPodcastSongs: PropTypes.func,
  updateHeaderTitle: PropTypes.func
};

const mapStateToProps = state => {
  return {
    podcastMenu: state.podcastReducer.podcastMenu
      ? state.podcastReducer.podcastMenu
      : "",
    // token: state.tokenReducer.token ? state.tokenReducer.token : "",
    title: state.uiReducer.title
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchPodcastMenu,
    //   fetchPodcastSongs,
      updateHeaderTitle
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPodcasts);