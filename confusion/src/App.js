
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
      <h1>
        Hello   
      </h1>
    </div>
  );
}

export default App;
