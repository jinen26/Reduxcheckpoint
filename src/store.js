import { configureStore } from '@reduxjs/toolkit'
import TasksliceReducer from '../src/slice/Taskslice'; //error solved

export const store = configureStore({
  reducer: {
    todo:TasksliceReducer //error solved
  },
})
