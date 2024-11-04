import {createSlice,nanoid} from "@reduxjs/toolkit"

export const contentSlice = createSlice({
    name:"content",
    initialState:{
        name:"",
        place:"",
        age:0
    },
    reducers:{
        updateData:(state,action)=>{
            state.name = action.payload.name,
            state.place = action.payload.place,
            state.age = action.payload.age
        },
        resetData:(state)=>{
            state.name = "",
            state.place = "",
            state.age = 0
        }
    }
})


export const {updateData,resetData} = contentSlice.actions;
export default contentSlice.reducer;
