import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const createEmploye =  createAsyncThunk("employees/createEmployee",async (payload)=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
            "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
        if (!response.ok) {
            throw new Error("Failed to create employee");
          }
    
          const data = await response.json();
          return data 
    } catch (error) {
         console.log("ERROr",error)
    } 
})

export const updateEmploye =  createAsyncThunk("employees/updateEmployee",async(payload,{rejectWithValue})=>{
    try {
        const response = await fetch(`https://dummy.restapiexample.com/public/api/v1/update/${payload.id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(payload.data)
        })
        if(!response.ok){
            throw new Error("Failed to update employee data");
        }
        const data = await response.json();
        return { id: payload.id, data }; 
    } catch (error) {
        console.log("ERROr",error)
    }
})

export const getPosts = createAsyncThunk("posts",async()=>{
    try {
         const response = await fetch("https://dummyjson.com/posts/6",{
            method:"GET",
            headers:{
             "Content-Type": "application/json",
            }
         })
         if(!response.ok){
            throw new Error("Post Failed");
        }

        const data  = await response.json()
        return data

    } catch (error) {
        console.log("Error",error)
    }
})


const employeeSlice = createSlice({
    name:"employees",
    initialState:{
        employees:[],
        isLoading: false,
        isError: false,
        posts:{},
        posterror:null
    },
  extraReducers:(builder)=>{
    builder.addCase(createEmploye.pending,(state,action)=>{
        state.isLoading = true
    })
    builder.addCase(createEmploye.fulfilled,(state,action)=>{
        state.isLoading = false,
        state.employees.push(action.payload)
    })
    builder.addCase(createEmploye.rejected,(state,action)=>{
        state.isLoading= false
        state.isError = true
    })
   builder.addCase(getPosts.pending,(state,action)=>{
    state.isLoading = true
   })
   builder.addCase(getPosts.fulfilled,(state,action)=>{
    state.isLoading = false
    state.posts = action.payload
   })
   builder.addCase(getPosts.rejected,(state,action)=>{
    state.isLoading = false
    state.posterror = action.payload
   })
  }
})

export default employeeSlice.reducer