import { useEffect, useState } from "react";


const Cards = () => {

    const[cards,setCards]= useState([])
    useEffect(()=>{

        fetch('recipes.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-5xl">Cards:{cards.length} </h2>
        </div>
    );
};

export default Cards;