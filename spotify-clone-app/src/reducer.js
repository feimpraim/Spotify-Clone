export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,

    //Remove after finised developing
   // token: 'BQBV--HDrgylpYgeBbS_Ihqt3vhiJk5aOz5D8Q-HTPh0jGklAQY9jIkR8UQk5xfRGOVyoDj7-pX85fYuZB8lorDsNjGzGQpwjY8nQHi5AOHi8gt5tRcSGj6IuneWezJjpwkWYO3kZay7ILPtP7hjZ8RcbDw25QapK73UzGs',
};

const reducer = (state, action)=>{
console.log(action);
switch(action.type){
    case 'SET_USER':
        return{
            ...state, //keep current state
        user: action.user,
        };


    case 'SET_TOKEN':
        return{
            ... state,
        token: action.token,

        }

    case 'SET_PLAYLISTS' :
        return{
            ...state,
            playlists: action.playlists,
        }
    case 'SET_DISCOVER_WEEKLY' :
    return{

    ...state,
    SET_DISCOVER_WEEKLY:action.SET_DISCOVER_WEEKLY
}
        default:
            return state;
}

}

export default reducer;