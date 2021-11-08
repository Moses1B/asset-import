import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import './App.css';

function App() {
  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });
  return (
    <div className="App">
      <h1>Asset import</h1>
    </div>
  );
}

export default App;
