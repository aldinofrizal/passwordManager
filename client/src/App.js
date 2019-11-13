import React  from 'react';
import Navbar from './components/Navbar'
import PasswordForm from './components/Form'
import Main from './components/Main'
import Notification from './components/Notification'
import { Row, Col } from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "antd/dist/antd.css";

const marginTop = {
  marginTop: '10vh'
}

function App() {
   
  return (
    <div className="App">
      <Router>
        <Notification />
        <Row style={marginTop}>
          <Col span={2} />
          <Col span={6}>
            <Navbar />
          </Col>
          <Col span={12}>
            <Switch>
              <Route path="/form">
                <PasswordForm />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
