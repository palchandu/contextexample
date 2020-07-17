import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserProvider } from './UserContext'
import  HomePage  from './HomePage';
class App extends Component {

  componentDidMount() {
   
}

  render(){
  const user = { name: 'Tania', loggedIn: true }

  return (
    <UserProvider value={user}>
      <HomePage />
    </UserProvider>
  );
  }
}

export default App;
