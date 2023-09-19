import React from "react";
import HornedBeast from "./HornedBeast";

class Gallery extends React.Component{
  render(){
    return(
      <div>
        <HornedBeast title='Horned Lizard' imageUrl='../assets/HornedLizard.jpeg' description='This is a toad which has poking pretrutions which look like horns'/>
        <HornedBeast title='Horned Owl' imageUrl='../assets/HornedOwl.jpg' description='This is a toad which has poking pretrutions which look like horns'/>
      </div>
  ) 
  }
}

export default Gallery;
