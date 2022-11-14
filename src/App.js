import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import ContentRowTop from './components/ContentRowTop'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <TopBar/>
      <Sidebar/>
      <ContentRowTop/>
      <ContentWrapper/>
      <Footer/>
    </div>
  );
}

export default App;
