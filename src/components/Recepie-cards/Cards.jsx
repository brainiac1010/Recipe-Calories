import { useEffect, useState } from "react";
import Card from "../card/Card";
import PropTypes from "prop-types";

const Cards = ({ handelAddWantToCook }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  return (
    <div className="md:w-2/3 mx-auto">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pl-2">
  {cards.map((card, index) => (
    <Card key={card.id || `card-${index}`} card={card} handelAddWantToCook={handelAddWantToCook} />
  ))}
</div>
    </div>
  );
};

Cards.propTypes = {
  handelAddWantToCook: PropTypes.func.isRequired,
};

export default Cards;
