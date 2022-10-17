import React from 'react';
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from './Body';
import Footer from './Footer';

function Player({spotify}) {
    return (
        <div className="player">
            <div className="player_body">
            {/*sidebar*/}
            <Sidebar />
          <Body spotify={spotify} />
           </div>
           <div className="player_footer">
               <Footer />
           </div>
        </div>
    )
}

export default Player
