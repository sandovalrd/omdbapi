import React from "react";
import Movies from "./Movies";
import Nav from "./Nav";
import MovieDetail from "./MovieDetail";
import Favorites from "./Favotites";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <BrowserRouter>
          {<Nav />}
          <div className="ui relaxed divided list">
            <Route path="/" exact component={MovieDetail} />
            <Route path="/" exact component={Movies} />
            <Route path="/favorites" exact component={Favorites} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
