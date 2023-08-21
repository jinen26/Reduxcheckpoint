import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  tasks:[
    {
      name: "LearnHTML",
      isDone: false,
    },
    {
      name: "LearnCSS",
      isDone: true,
    },
    {
      name: "LearnJS",
      isDone: false,
    }
  ]
};

export const TaskSlice = createSlice({
  name:"todo",
  initialState,
  reducers: {
    addtask:(state,action)=>{
        state.tasks=[...state.tasks,action.payload]
        
    }
  },
});

// Action creators are generated for each case reducer function
export const {addtask} = TaskSlice.actions;

export default TaskSlice.reducer;
