import React from "react";
import Search from "./Search";
import Saved from "./Saved";
import Results from "./Results";
import API from "../utils/API";


class mainPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
     
    };
  
  }


	render(){
   
		return (
      <div>
				<Search/>
				<Results/>
				<Saved/>
			</div>
		);
  }
}


export default mainPage;