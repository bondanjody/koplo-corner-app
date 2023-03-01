import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Trending from "./components/Layout/Trending";
import Fyi from "./components/Layout/Fyi";

function App() {
  return <Fragment>
    <Header />
    <Trending />
    <Fyi />
  </Fragment>
}

export default App;
