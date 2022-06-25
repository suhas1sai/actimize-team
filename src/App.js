import './App.css';
import Sidebar from './Sidebar';
import Profile from './Profile';
import Topbar from './Topbar';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
         <Topbar />
        <Row>
          <Col sm={2}>
        <Sidebar />
          </Col>
          <Col sm={10}>
          <Profile />
          </Col>
        </Row>
      </div>
    </Router>
  );
}

export default App;