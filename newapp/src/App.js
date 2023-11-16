import React from "react";
import { Component } from "react";

class App extends Component {
state =  {
  person : {
  fullName : "EL RHAZALI Anas",
  bio : "Welcome",
  imgSrc : "https://imageio.forbes.com/specials-images/imageserve/5f5be112e7f395dc08ef8e58/Lionel-Messi-celebrating-scoring-a-goal-in-the-2019-20-UEFA-Champions-League/1960x0.jpg?format=jpg&width=960",
  profession : "Salary"
},
  shows : false,
};

affichage = ()=>{
  this.setState((showState) =>({
    shows:!showState.shows,
  }));
}
  render(){
    return (
    <div>
      <button onClick={this.affichage}>Show Profil</button>
      {this.state.shows && ( 
      <div>
        <h1>{this.state.person.fullName}</h1>
        <h1>{this.state.person.bio}</h1>
        <img src={this.state.person.imgSrc} alt="img"/>
        <h1>{this.state.person.profession}</h1>
      </div>
      )}

    </div>
    
  )}}

  export default App;