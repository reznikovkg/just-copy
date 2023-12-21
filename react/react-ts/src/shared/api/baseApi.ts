import {createApi} from '@reduxjs/toolkit/query/react'
import {baseQuery} from "@/shared/api/baseQuery";

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: () => ({}),
})
