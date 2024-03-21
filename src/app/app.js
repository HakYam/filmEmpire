import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB'

const store = configureStore({
    reducer: {
        // Add the API reducer to the store
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        // other reducers...
    },
    // Adding the middleware is necessary for RTK Query's automatic caching, invalidation, polling, and other features
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;
