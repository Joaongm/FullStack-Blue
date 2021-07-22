import './App.css';
import CreatePost from './components/CreatePost/CreatePost';
import MainHeader from './components/MainHeader/MainHeader';
import Posts from './components/Posts/Posts'

function App() {
  return (
    <div className="App">
      <MainHeader/>

      <CreatePost/>

      <Posts/>
    </div>
  );
}

export default App;
