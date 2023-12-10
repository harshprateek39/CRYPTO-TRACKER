
import './App.css';
import Dashboard from './components/Dashboard.jsx';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App bg-white  dark:bg-[#191d28] min-h-screen pt-7 px-10">
     <Nav/> 
     <Dashboard/>
      <Main/>
      <Footer/>
    </div>
   
  );
}

export default App;
