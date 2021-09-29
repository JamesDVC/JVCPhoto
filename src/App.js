import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div id="colorlib-page">
      <NavBar></NavBar>
      <div id="colorlib-main">
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
