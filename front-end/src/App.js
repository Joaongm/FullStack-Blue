import './App.css';
import CreatePost from './components/CreatePost/CreatePost';
import MainHeader from './components/MainHeader/MainHeader';
import Posts from './components/Posts/Posts';
import React, { Component } from 'react';

class App extends Component {
    state = {
        postData: false,
        editing: false,
        _id: '',
        author: '',
        title: '',
        text: '',
        image: '',
    };

    getFormHandler = async (data) => {
        await fetch('http://localhost:8080/nova-publicacao', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        this.setState((prevState) => {
            return { postData: !prevState.postData };
        });
    };

    captureUpdatePublicationHandler = (publicationData) => {
        console.log(publicationData);

        this.setState({
            editing: true,
            _id: publicationData._id,
            author: publicationData.author,
            title: publicationData.title,
            text: publicationData.text,
            image: publicationData.image,
        });
    };

    render() {
        return (
            <div className="App">
                <MainHeader />

                <CreatePost onGetForm={this.getFormHandler} editingPost={{...this.state}} />

                <Posts
                    post={this.state.postagem}
                    addNewPost={this.state.postData}
                    onCaptureUpdatePublication={
                        this.captureUpdatePublicationHandler
                    }
                />
            </div>
        );
    }
}
export default App;
