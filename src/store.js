// import { configureStore } from '@reduxjs/toolkit'
// import { TaskSlice } from './Slices/Taskslice'

// export const store = configureStore({
//   reducer: {
//     todo:TaskSlice
//   },
// })
import { configureStore } from '@reduxjs/toolkit'
import { TaskSlice } from './Slices/Taskslice'

export const store = configureStore({
  reducer: {
    todo:TaskSlice
  },
})