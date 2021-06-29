import './App.css';
import Container from 'react-bootstrap/Container'
import Header from './components/Header';
import { Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';
import AddProductScreen from './screens/AddProductScreen';
import CartScreen from './screens/CartScreen';
import EditProductScreen from './screens/EditProductScreen'
import LoginScreen from './screens/LoginScreen'



function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Route  exact path="/products/new" component={AddProductScreen}/>
        <Route  exact path="/product/:id/edit" component={EditProductScreen} />
        <Route  exact path="/product/:id" component={ProductScreen} />
        <Route  exact path="/login" component={LoginScreen} />
        <Route  path="/cart" component={CartScreen} />
        <Route exact path="/" component={HomeScreen}/>
      </Container>
    </div>
  );
}

export default App;
