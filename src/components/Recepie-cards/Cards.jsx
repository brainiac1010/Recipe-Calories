import { useEffect, useState } from "react";
import Card from "../card/Card";

const Cards = () => {

    const[cards,setCards]= useState([])
    useEffect(()=>{

        fetch('recipes.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className="md:w-2/3   mx-auto">
            <h2 className="text-5xl mb-4">Cards:{cards.length} </h2>
       
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
        </div>
    );
};

export default Cards;