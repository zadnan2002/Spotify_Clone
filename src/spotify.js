export const authEndpoint="https://accounts.spotify.com/authorize";
const redirectUri="https://spotify-clone-git-main-zadnan2002.vercel.app/";
const clientId="94853e977db848a7b49ba563fe75eea0";
const scopes =["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"];

export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        //#accesstoken=key&shee&shshs => splits it at equal sign from zero till first &
        let parts=item.split('=');//metel array 2 parts wahad abel wahad b3d il =
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial
    },{})// the {} is to say what it starts with
}

export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
//takes care of redirect and login and token==true logins a user

