import {createSlice,nanoid} from "@reduxjs/toolkit"

export const counterslice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
           state.value +=1
        },
        decrement:(state)=>{
            state.value -= 1
        }
    }
})


export const {increment,decrement} = counterslice.actions
export const selectCount = (state)=> state.counter.value
export default counterslice.reducer