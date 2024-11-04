import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"


// action
export const fetchTodos =  createAsyncThunk("fetchTodo", async ()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  return response.json()
})

const todoSlice = createSlice({
    name:"todo",
    initialState:{
    isLoading:false,
    data:null,
    isError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.isLoading = true
        })
      builder.addCase(fetchTodos.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.data =  action.payload 
      })
      builder.addCase(fetchTodos.rejected,(state,action)=>{
        console.log("ERROR",action.payload)
        state.isError = true
      })
    }
})

export default todoSlice.reducer