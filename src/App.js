import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Trending from "./components/Layout/Trending";
import Fyi from "./components/Layout/Fyi";
import Genre from "./components/Layout/Genre";

function App() {
  return <Fragment>
    <Header />
    <Trending />
    <Fyi />
    <Genre />
  </Fragment>
}

export default App;
