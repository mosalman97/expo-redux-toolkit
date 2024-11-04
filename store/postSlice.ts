import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk("posts/post", async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    return response.data
})
const postSlice = createSlice({
    name: "posts",
    initialState:{
        data:null,
        isloading:false,
        error:null
    },
    reducers:{

    },
    extraReducers(builder) {
        builder.addCase(getPost.pending,(state,action)=>{
            state.isloading = true
        }),
        builder.addCase(getPost.fulfilled,(state,action)=>{
            state.isloading = false,
            state.data = action.payload
        }),
        builder.addCase(getPost.rejected,(state,action)=>{
            state.isloading = false,
            state.error = action.payload
            console.log(action,"++sal")
        })
        
    },
})

export default postSlice.reducer