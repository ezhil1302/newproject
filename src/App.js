import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav} from 'react-bootstrap';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import MetricPage from './components/MetricPage';
import Dashboard from './components/Dashboard';
// import UserDetail from './components/UserDetail';
// import MultiForm from './components/forms/MultiForm';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          
          <Nav className="me-auto nav-link">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link  as={Link} to="/matricpage">MetricPage</Nav.Link>
            <Nav.Link  as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      </>
      <div>
        <Routes>
          <Route path='/home' element={<Home/>} /> 
          <Route path='/matricpage' element={<MetricPage/>} /> 
          <Route path='/dashboard' element={<Dashboard/>} /> 

        </Routes>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
