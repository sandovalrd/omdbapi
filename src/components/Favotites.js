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

  onDeleteFavorite = id => {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  onFavoriteClick = favorite => {
    const eliminar = window.confirm(
      `Desea eliminar a ${favorite.title} de la lista de favoritos?`
    );
    if (eliminar) {
      this.onDeleteFavorite(favorite.id);
    }
  };

  getFavorite = () => {
    const list = JSON.parse(localStorage.getItem("list"));
    if (list) {
      return list;
    }
    return [];
  };

  onRenderFavorite = (list, onFavoriteClick) => {
    const renderList = list.map(favorite => {
      return (
        <div className="ui relaxed divided list" key={favorite.id}>
          <div className="ui items">
            <div className="item">
              <i className="ui mini image">
                <img src={favorite.poster} alt={favorite.id} />
              </i>
              <div className="content">
                <i
                  className="favorite icon active"
                  id={favorite.id}
                  onClick={() => onFavoriteClick(favorite)}
                />
                <p className="header">{favorite.title}</p>
                <div className="extra">
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
    return (
      <div>{this.onRenderFavorite(listFavotires, this.onFavoriteClick)}</div>
    );
  }
}

export default Favorites;
