import {
  ApolloClient,
  ApolloProvider,
  // useQuery,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { useMutation } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.dev.fmclarity.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = "eHsFWKuLrGVJR0fKRvx52dCDkAumfnUHuQCp2mTcU8n";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  // uri: 'https://api.dev.fmclarity.com/graphql',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const ASSETS_QUERY = gql`
  query {
    assets(where: { name: { contains: "PhotoSphereView" } }) {
      name
      locationDescription
      gpsLat
      gpsLng
      _id
      clientId
      guId
    }
  }
`;
//   async function getData() {
//     let asset;
//     await client
//       .query({
//         query: gql`
//           query {
//             assets(where: { name: { contains: "PhotoSphereView" } }) {
//               name
//               locationDescription
//               gpsLat
//               gpsLng
//               _id
//               clientId
//               guId
//             }
//           }
//         `,
//       })
//       .then((result) => {
//         console.log(result)
//         asset = result.data.assets;
//       });
//     return asset;
//   }
//   console.log(getData())
