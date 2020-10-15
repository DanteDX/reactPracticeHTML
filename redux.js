//creating redux store
const {createStore,combineReducers} = Redux;


//creating myReducer and its initial state
const initState = {
    todos:[],
}
const myReducer = (state=initState,action) =>{
    // console.log(state,action);
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        default:
            return state

    }
}

//creating postreducer and its initial state

const postInitState = {
    posts:[]
};

const postReducer = (state=postInitState,action) =>{
    // console.log(state,action);
    switch(action.type){
        case 'ADD_POST':
            return{
                ...state,
                posts:[...state.posts,action.payload]
            }
        default:
            return state

    }
}

//combining reducers in the redux store
const rootReducer = combineReducers({myReducer,postReducer});
const store = createStore(rootReducer);
store.subscribe(function(){
    console.log('Changed');
    console.log(store.getState());
})
//declaring actions and dispatching them

const todoAction = {type:'ADD_TODO',payload:'BUY MILK'};
const postAction = {type:'ADD_POST',payload:'This is just a dummy post'};
store.dispatch(todoAction);
store.dispatch(postAction);

