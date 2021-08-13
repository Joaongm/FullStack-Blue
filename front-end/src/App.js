import './App.css';
import CreatePost from './components/CreatePost/CreatePost';
import MainHeader from './components/MainHeader/MainHeader';
import Posts from './components/Posts/Posts'
import React, { Component } from 'react'



class App extends Component {
  state = {
    postData : false
  }

  getFormHandler = async(data) => {
    await fetch('http://localhost:8080/nova-publicacao', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    this.setState( prevState => { return {postData: !prevState.postData} })
  }


  render() {
  return (
    <div className="App">
      <MainHeader />

      <CreatePost onGetForm={this.getFormHandler} />

      <Posts post={this.state.postagem} addNewPost={this.state.postData}/>
    </div>

  );
};
}
export default App;
