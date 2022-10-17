export const initialState={
    user: null,
    playlists: [],
    //remove initial value to null after completion!!!!!!
    //token:"BQB0GsaRAsTUIBfj17vB2euxNPFCOobendTtJ41MAp7KH0Aa9IEmOWJWmpoGaK-d5Dfs3CK8XN8EqZkMteJlkTODPOaH3ENL3uskl6tUwbSv5qzxVXM-0a96zhp7D2JGU3X03o7SEBagj9CdA0NPohFVYk3cXzHCoMvGLD3PR_qejmi6AtgSsHdi8rRZ44zqmQPsGPKTksOrUtP_",
   top_artists:null,
   discover_weekly:null,
    playing: false,
    item:null
};
const reducer=(state,action)=>{
console.log("action: "+action);
switch(action.type){
case 'SET_USER':

   return {
        ...state,
        user:action.user
    };

    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists:action.playlists //populate with playlist
            };

            case "SET_DISCOVER_WEEKLY":return {
               ...state,
                   discover_weekly:action.discover_weekly,
            };

            case "SET_TOP_ARTISTS" :return{
                ...state,
                top_artists:action.top_artists,
                
            };
            case "SET_ITEM": return{
...state,
item:action.item,
            };


default: return state;

}



}
export default reducer;