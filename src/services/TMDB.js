import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Directly using the Bearer token as provided.
const bearerToken = import.meta.env.VITE_TMDB_BEARER_TOKEN;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
        prepareHeaders: (headers) => {
            // Set the Authorization header using the provided Bearer token
            headers.set('Authorization', `Bearer ${bearerToken}`);
            headers.set('Accept', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        //get genres
        getGenre: builder.query({
            query: () => `genre/movie/list?language=en`
        }),


        //  endpoint of Fetch popular movies
        getMovies: builder.query({
            query: (page = 1) => `movie/popular?page=${page}`,
        }),
    }),
});

export const { useGetGenreQuery, useGetMoviesQuery  } = tmdbApi;

