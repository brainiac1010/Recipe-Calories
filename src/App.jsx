import './App.css';
import Nav from './components/navbar/nav'; 
import Banner from './components/banner/Banner';
import Container from './container/container';
import Recipes from './components/Our Recipes/Recipes';
import Cards from './components/Recepie-cards/Cards';
import CountArea from './components/countArea/countArea';
import { useState } from 'react';

function App() {


  const  [wantToCooks,setWantToCooks] =useState([]);
  const handelAddWantToCook = (card) =>{

    console.log('bookmark ading soon',card)
  }
  return (
    <>
      

      <Container> 
        <Nav /> 
        <Banner />
        <Recipes></Recipes>

        <div className='md:flex'>
          <Cards handelAddWantToCook={handelAddWantToCook}></Cards>
          <CountArea></CountArea>
        </div>
        
       
        
      </Container>
    </>
  );
}

export default App;
