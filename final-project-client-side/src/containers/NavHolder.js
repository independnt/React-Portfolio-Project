import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import { connect } from 'react-redux'

class NavHolder extends React.Component{
  constructor(){
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount(){
    if(!!localStorage.getItem("token")){
      this.setState({
        isLoggedIn: true
      })
    }
  }


  render(){
    return(
      <NavBar isLoggedIn={this.state.isLoggedIn}/>
    )
  }
}

const mapStateToProps = (state) =>{
  return {state: state.loginReducer}
}

export default connect(mapStateToProps)(NavHolder)
