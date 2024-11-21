import './App.css';
import Nav from './components/navbar/nav'; 
import Banner from './components/banner/Banner';
import Container from './container/container';
import Recipes from './components/Our Recipes/Recipes';
import Cards from './components/Recepie-cards/Cards';
import CountArea from './components/countArea/countArea';
import { useState } from 'react';
import Cooking from './components/cooking/Cooking';

function App() {


  const  [wantToCooks,setWantToCooks] =useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);



  const handleStartCooking = (recipe) => {
    setWantToCooks(wantToCooks.filter(item => item !== recipe));
    
    setCurrentlyCooking([...currentlyCooking, recipe]);
  };



  const handelAddWantToCook = (card) =>{

    const newWantToCooks=[...wantToCooks,card]
    setWantToCooks(newWantToCooks)
  }
  return (
    <>
      

      <Container> 
        <Nav /> 
        <Banner />
        <Recipes></Recipes>

        <div className='md:flex  gap-5'>
          <Cards handelAddWantToCook={handelAddWantToCook}></Cards>
          <CountArea
          wantToCooks={wantToCooks}
          handleStartCooking={handleStartCooking}
          ></CountArea>
        </div>
        
       <Cooking currentlyCooking={currentlyCooking}
       ></Cooking>
        
      </Container>
    </>
  );
}

export default App;
