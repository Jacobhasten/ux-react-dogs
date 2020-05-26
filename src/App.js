import React from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {

  state = {
    dogs: [
      {
        name: "Scruffles",
        type: "Chihuahua",
      },
      {
        name: "Snarf",
        type: "Border Collie",
      },
      {
        name: "Wookie",
        type: "English Sheepdog",
      },
    ],
    favoriteDog: "",
  };
  pickNewFavorite = () => {
    let newDogIndex = Math.floor(Math.random() * this.state.dogs.length);
    const newDog = this.state.dogs[newDogIndex]
    this.setState({favoriteDog: newDog});
  }

 

  render() {
    
    return (
      
      <div className="dogs">
        <Header numDogs={this.state.dogs.length} />
        <h2>My Dogs</h2>
        <div>
          {this.state.dogs.map((dog) => (
            <Dog dog={dog} />
          ))}
        </div>
        <button onClick={this.pickNewFavorite} >My Favorite dog is {this.state.favoriteDog.name}</button>
      </div>
    );
  }
}


export default App;
