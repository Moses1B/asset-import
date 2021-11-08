import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { ASSETS_QUERY } from "./graphql";

function App() {
  const { loading, error, data } = useQuery(ASSETS_QUERY);

  console.log(data && data)
  return (
    <div className="App">
      <h1>Asset import</h1>
    </div>
  );
}

export default App;
