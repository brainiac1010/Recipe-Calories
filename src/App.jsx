import './App.css';
import Nav from './components/navbar/nav'; 
import Banner from './components/banner/Banner';
import Container from './container/container';
import Recipes from './components/Our Recipes/Recipes';
import Cards from './components/Recepie-cards/Cards';


function App() {
  return (
    <>
      

      <Container> 
        <Nav /> 
        <Banner />
        <Recipes></Recipes>
        <Cards></Cards>
       
        
      </Container>
    </>
  );
}

export default App;
