import traffyApi from "../traffyApi";

const blogsApi = traffyApi.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => `/blogs`,
            providesTags: ["Main"]
        }),
        getBlogById: builder.query({
            query: (id) => `/blogs/${id}`,
            providesTags: ["Main"]
        })
    })
})

export const {
    useGetBlogsQuery,
    useGetBlogByIdQuery
} = blogsApi;