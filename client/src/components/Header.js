import React from 'react'

class Header extends React.Component{

  componentDidMount(){
    if(localStorage.getItem('token')){
      this.props.history.push('/home')
    }
  }
  
  render(){
  return (
    <div className="frontTitle" align="center">
      <header>
        <h1>Welcome to BrewView</h1>
      </header>
    </div>
    )
  }
}


export default Header;
