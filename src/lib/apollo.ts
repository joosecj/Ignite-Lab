import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4okow0i0fxl01xl0nik1yws/master',
    cache: new InMemoryCache()
})