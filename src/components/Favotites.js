import React from "react";

class Favorites extends React.Component {
  state = { list: [] };

  componentDidMount() {
    this.loadLocalStorage();
  }

  loadLocalStorage = () => {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  };

  getFavorite = () => {
    const list = JSON.parse(localStorage.getItem("list"));
    return list;
  };

  onRenderFavorite = list => {
    const renderList = list.map(favorite => {
      return (
        <div className="ui relaxed divided list" key={favorite.id}>
          <div className="ui items">
            <div className="item">
              <i className="ui mini image">
                <img src={favorite.poster} alt={favorite.id} />
              </i>
              <div className="content">
                <p className="header">{favorite.title}</p>
                <div className="description">
                  <p>{favorite.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return renderList;
  };

  render() {
    const listFavotires = this.getFavorite();
    return <div>{this.onRenderFavorite(listFavotires)}</div>;
  }
}

export default Favorites;
