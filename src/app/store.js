import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
// Import the genreOrCategory slice's reducer with a clear name
import genreOrCategoryReducer from '../features/currentGenreOrCategory';

const store = configureStore({
    reducer: {
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        // Use the imported reducer here, making sure the key matches what you want to use in your state
        currentGenreOrCategory: genreOrCategoryReducer,

    },
    // Your middleware configuration remains unchanged
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware),
    serializableCheck: false,
});

export default store;
