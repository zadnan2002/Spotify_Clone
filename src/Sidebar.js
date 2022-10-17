import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useDataLayerValue } from './DataLayer';
import { PlaylistAddTwoTone } from '@mui/icons-material';

function Sidebar() {
    const [{playlists},dispatch]=useDataLayerValue();
    return (
        <div className="sidebar">
           <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" className="sidebar_logo"></img>
        
        <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
        <SidebarOption title="Search" Icon={SearchOutlinedIcon}/>
        <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon}/>
       
        <strong className="sidebar_title">PLAYLISTS</strong> 
        <hr/>
        {playlists?.items?.map(playlist=>(<SidebarOption title={playlist.name}/>))}
        
        </div>
    )
}

export default Sidebar
