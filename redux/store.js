import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as userReducer} from "./reducers/userReducer";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};


const rootReducer = combineReducers({
     user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});



export {store}
