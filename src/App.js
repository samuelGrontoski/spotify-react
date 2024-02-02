import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Playlist from './Playlist/Playlist';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Footer/>
      <Playlist/>
      <Sidebar/>
    </div>
  );
}

export default App;
