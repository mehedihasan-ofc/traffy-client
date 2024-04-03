import traffyApi from "../traffyApi";

const blogsApi = traffyApi.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => `/blogs`,
            providesTags: ["Main"]
        })
    })
})

export const {
    useGetBlogsQuery
} = blogsApi;