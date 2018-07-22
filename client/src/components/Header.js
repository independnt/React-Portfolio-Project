import React from 'react'

const Header = () => {

  componentDidMount(){
    if(localStorage.getItem('token')){
      this.props.history.push('/home')
    }
  }

  return (
    <div className="frontTitle" align="center">
      <header>
        <h1>Welcome to BrewView</h1>
      </header>
    </div>
    )
  }

export default Header;
