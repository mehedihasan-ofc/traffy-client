import traffyApi from "../traffyApi";

const faqApi = traffyApi.injectEndpoints({
    endpoints: (builder) => ({
        getFaq: builder.query({
            query: () => `/faq`,
            providesTags: ["Main"]
        })
    })
})

export const {
    useGetFaqQuery
} = faqApi;