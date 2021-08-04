import './App.css';
import CreatePost from './components/CreatePost/CreatePost';
import MainHeader from './components/MainHeader/MainHeader';
import Posts from './components/Posts/Posts'
// import Login from './components/UserLogin/Login'
import React, { Component } from 'react'



class App extends Component {
  state = {
    postagem : null
  }

  GetFormHandler = (data) => {
    this.setState({postagem:data})

  }


  render() {
  return (
    <div className="App">
      <MainHeader />

      <CreatePost onGetForm={this.GetFormHandler} />

      <Posts post={this.state.postagem} />
    </div>



  );
};
}
export default App;
