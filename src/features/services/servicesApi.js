import traffyApi from "../traffyApi";

const servicesApi = traffyApi.injectEndpoints({
    endpoints: (builder) => ({
        getServices: builder.query({
            query: () => `/services`,
            providesTags: ["Main"],
        })
    })
})

export const {
    useGetServicesQuery
} = servicesApi;