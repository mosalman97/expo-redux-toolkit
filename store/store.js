import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "./rootReducer";

// Define the persist configuration
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ["todo", "posts"],
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Use configureStore to create the Redux store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore persist actions
                ignoredPaths: ["register"], // Ignore paths that contain non-serializable values
            },
        }),
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
