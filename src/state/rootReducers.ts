import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./actions/user/userSlice"
import {assessmentSlice} from "./actions/assessment/assessment.slice";
// Combine Reducers
const rootReducer = combineReducers({
    user: userSlice,
    assessment: assessmentSlice.reducer,
});

export default rootReducer;
