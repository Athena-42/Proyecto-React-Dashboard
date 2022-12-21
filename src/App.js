import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import ContentRowTop from './components/ContentRowTop'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'

function App() {
  return (
    <div id="wrapper">
        <Sidebar/>
      <ContentWrapper/>
    </div>
    
  );
}

export default App;
