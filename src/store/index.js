import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux'

const initialCounterState={
    counter:0,
    showToggle:true
}

 const counterSlice= createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increament(state){
            state.counter++;
        },
        decreament(state){
            state.counter--;
        },
        increase(state,action){
            state.counter=state.counter+action.payload
        },
        toggle(state){
            state.showToggle=!state.showToggle
        }
    }
});

const initialAuthState={
    isAthenticated:false,
}

const authSlice=createSlice({
    name:'Authentication',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAthenticated=true
        },
        logout(state){
            state.isAthenticated=false
        }
    }
})

const store =configureStore({
    reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
});

export const counterAction=counterSlice.actions;
export const authAction=authSlice.actions;

export default store;