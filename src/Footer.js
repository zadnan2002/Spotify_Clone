import React from 'react'
import './Footer.css';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import {useDataLayerValue} from "./DataLayer";
import { PauseCircleOutline, PlaylistPlayOutlined, VolumeDownOutlined } from '@mui/icons-material';



function Footer({spotify}) {

    const [{ token, item, playing }, dispatch] = useDataLayerValue();

    useDataLayerValue(() => {
      spotify.getMyCurrentPlaybackState().then((r) => {
        console.log(r);
  
        dispatch({
          type: "SET_PLAYING",
          playing: r.is_playing,
        });
  
        dispatch({
          type: "SET_ITEM",
          item: r.item,
        });
      });
    }, [spotify]);
  
    const handlePlayPause = () => {
      if (playing) {
        spotify.pause();
        dispatch({
          type: "SET_PLAYING",
          playing: false,
        });
      } else {
        spotify.play();
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      }
    };
  
    const skipNext = () => {
      spotify.skipToNext();
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
    };
  
    const skipPrevious = () => {
      spotify.skipToPrevious();
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
    };









    return (
        <div className="footer">
            
            <div className="footer_left">
               <img src={item?.album.images[0].url} alt={item?.name} className="footer_albumLogo"/>
               {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
            </div>
            <div className="footer_center">
            <ShuffleIcon className="footer_green"/>
            <SkipPreviousIcon onClick={skipNext} className="footer_icon"/>
            {playing?
            (<PauseCircleOutline onClick={handlePlayPause} className="footer_icon" fontSize="large"/>)
            :
            (<PlayCircleOutlineOutlinedIcon onClick={handlePlayPause} className="footer_icon" fontSize="large"/>)
            }
            <SkipNextIcon onClick={skipPrevious} className="footer_icon"/>
            <RepeatIcon className="footer_green"/>
                </div> 
            <div className="footer_right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayOutlined/>
            </Grid>
            <Grid item>
                
                <VolumeDownOutlined/>
            </Grid>
            
            <Grid item xs>
                <Slider size="small"/>
            </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Footer

