import React from 'react'

class Search extends React.Component {
  constructor (props){
    super(props)
		console.log(this.props)
    this.state = {

    }  
  }
    
    render (){
    return (
    	<div>
				<form>
					<input type="text" name="search" placeholder="Search jobs.."/>
				
					<button onClick={this.getData}>click me</button>
					
				</form>
      </div>
    )
  }
}
  
  export default Search
  