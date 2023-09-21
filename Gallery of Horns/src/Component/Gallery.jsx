import React from "react";
import HornedBeast from "./HornedBeast";
import hornedLizard from '../assets/HornedLizard.jpeg'
import hornedOwl from '../assets/HornedOwl.jpg' 

class Gallery extends React.Component{
  render(){
    return(
      <div>
        <HornedBeast title='Horned Lizard' imageUrl={hornedLizard} description='This is a toad which has poking pretrutions which look like horns'/>
        <HornedBeast title='Horned Owl' imageUrl={hornedOwl} description='This is an owl which has poking feathers which look like horns'/>
      </div>
  ) 
  }
}

export default Gallery;
