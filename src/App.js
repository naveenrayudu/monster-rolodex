import React from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchValue: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(monsters =>
        this.setState({
          monsters
        })
      );
  }

  filteredMonsters() {
    const { monsters, searchValue } = this.state;

    if (!searchValue || !searchValue.trim()) return monsters;

    return monsters.filter(
      monster =>
        monster.name.toLowerCase().indexOf(searchValue.trim().toLowerCase()) !==
        -1
    );
  }

  render() {
    return (
      <div className="app-container">
        <h1>Monsters Rolodex</h1>

        <SearchBox
          value={this.state.searchValue}
          placeholder="Search Monsters"
          onTextChange={e =>
            this.setState({
              searchValue: e.currentTarget.value
            })
          }
        />

        <CardList monsters={this.filteredMonsters()} />
      </div>
    );
  }
}

export default App;
