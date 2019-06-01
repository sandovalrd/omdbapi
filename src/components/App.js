import React from "react";
import Movies from "./Movies";
import Nav from "./Nav";
import MovieDetail from "./MovieDetail";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {<Nav />}
        <div className="ui relaxed divided list">
          <MovieDetail />
        </div>
        <div className="ui relaxed divided list">
          <Movies />
        </div>
      </div>
    );
  }
}

export default App;
