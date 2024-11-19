import { useEffect, useState } from "react";
import Card from "../card/Card";
import PropTypes from "prop-types";

const Cards = ({handelAddWantToCook}) => {

    const[cards,setCards]= useState([])
    useEffect(()=>{

        fetch('recipes.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className="md:w-2/3  mx-auto">
            
       
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-2">
        {cards.map(card => (
          <Card 
          key={card.id} 
          card={card} 
          handelAddWantToCook={handelAddWantToCook}
          />
        ))}
      </div>
        </div>
    );
};

Cards.propTypes={
  handelAddWantToCook:PropTypes.func.isRequired,
}
export default Cards;