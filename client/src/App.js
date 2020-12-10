import { Router } from '@reach/router';
import './App.css';
import Form from './components/Form';
import ViewP from './components/ViewP';
function App() {



  return (
    <div className="App">
      <Router>
          <Form path='/api/products' />
          <ViewP path='/api/products/:id' />
      </Router>
    </div>
  );
}

export default App;
