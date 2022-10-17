import { FavoriteOutlined, MoreHorizOutlined,PlayCircleFilled } from '@mui/icons-material';
import { render } from '@testing-library/react';
import React from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import SongRow from './SongRow';
function Body({spotify}) {
    const [{discover_weekly},dispatch]=useDataLayerValue();
   // set constants heree to add playability lmao
   
   const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
   
   
   
   
    return (
        <div className="body">
           <Header spotify={spotify}/>
        <div className="body_info">
<img src={discover_weekly?.images[0].url}>
</img>

<div className="body_infoText">  
<strong>PLAYLIST</strong>
<h2>Discover Weekly</h2>
<p>
    {discover_weekly?.description}  
</p>
 </div>
        </div>
<div className="body_songs">
    <div className="body_icons">
<PlayCircleFilled   onClick={playPlaylist} className="body_shuffle"/>
<FavoriteOutlined fontSize="large"/>
<MoreHorizOutlined/>

    </div>
    {discover_weekly?.tracks.items.map((item) => (
          <SongRow  playSong={playSong} track={item.track} />
))}


    {/*songs*/}
</div>
        </div>
    )
}

export default Body
