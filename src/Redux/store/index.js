
import rootReducer from "../reducers";

import { configureStore ,applyMiddleware} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const store=configureStore({reducer:rootReducer},applyMiddleware(thunk));


export default store;