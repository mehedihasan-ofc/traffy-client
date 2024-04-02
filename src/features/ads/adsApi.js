import traffyApi from "../traffyApi";

const adsApi = traffyApi.injectEndpoints({
    endpoints: (builder) => ({
        getAds: builder.query({
            query: () => `/ads`,
            providesTags: ["Main"]
        })
    })
})

export const {
    useGetAdsQuery
} = adsApi;