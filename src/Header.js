import React from 'react'
import './Header.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';
import {useDataLayerValue} from "./DataLayer";
function Header() {
    const [{user},dispatch]=useDataLayerValue();
    return (
        <div className="header">
            <div className="header_left">
                <SearchOutlinedIcon></SearchOutlinedIcon>
                <input placeholder="Searh for Artists, Songs, or Playlists" type="text">
                
                </input>
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
    <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header


