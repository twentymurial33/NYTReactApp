import axios from 'axios';
import React from "react";
const apiKey = '624e9c63b89845249a435dafad5f83d9';
class API extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
		articles:undefined
	  };
	
	}
  
	componentWillMount(){

		let api_url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?' 
	
		axios.get(api_url, {
	
		  headers: {
	
			'content-type': 'application/json',
	
			'accept': 'application/json'
	
		  }
	
		}).then((results) => {
		  this.setState({
			articles: results.data
		  })
	
		});
	
	  }
	  render(){
		const displayArticles = () => {
	
		  if(this.state.articles){
	
			return (
	
			  <div>
	
				<h5>Article Result</h5>
	
	
			  </div>
	
			)
	
		  };
	
		}
			return (
		  <div>
			  <label>New York</label>

<input type="text" ref="NewYorkTimes"/>

<input type="submit"/>
<br></br>
{displayArticles()}

</div>

);
}
}



export default API;