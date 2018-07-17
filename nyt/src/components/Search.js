import React from "react";

class Search extends React.Component{
  render(){
		return (
			<div className="container">
			 	<div className="row">
			 		<div className="col-md-4 col-md-offset-4 well">
						<h1 className="text-center" id="resultsTitle">Search NY Times Articles</h1>
						<form id="searchForm">
							<div className="form-group text-center">
								<label>Article Keywords</label>
								<div className="input-group center-block">
									<input type="text" name="title" className="form-control" id="titleInput"/>
								</div>
							</div>
							<div className="form-group text-center">
								<label>Start Date</label>
								<div className="input-group center-block">
									<input type="text" name="startDate" className="form-control" id="startDateInput"/>
								</div>
							</div>
							<div className="form-group text-center">
								<label>End Date</label>
								<div className="input-group center-block">
									<input type="text" name="endDate" className="form-control" id="endDateInput"/>
								</div>
							</div>
							<div className = "form-group">
								<input id="submitButton" type="submit" className="btn btn-default btn-block"/>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	
  }

}
export default Search;

