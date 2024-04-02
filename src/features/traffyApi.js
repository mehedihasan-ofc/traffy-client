import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const traffyApi = createApi({
    reducerPath: "traffyApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["Main"],
    endpoints: builder => ({})
})

export default traffyApi;