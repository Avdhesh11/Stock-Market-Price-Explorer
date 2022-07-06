import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import InputStock from './components/InputStock'

function App() {
  return (

    <Router>
      <main className='p-3'>
      <Container fluid className='p-0'>
        <Routes>
          <Route path="/" element={<InputStock/>} exact/>
        </Routes>
      </Container>
      </main>
    </Router>
  );
}

export default App;
