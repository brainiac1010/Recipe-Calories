import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const Card = ({ card }) => {
  const { recipe_name, cover, short_description, ingredients, preparing_time, calories } = card;

  return (
    <div className="border p-4 rounded-lg shadow-lg ">
      <img
        className="w-[331px] h-[200px] rounded-lg object-cover"
        src={cover}
        alt={`Cover image of recipe ${recipe_name}`}
      />
      <h2 className="text-4xl font-semibold mt-4">{recipe_name}</h2>
      <p className="mt-2 text-gray-700">{short_description}</p>
      <hr className="my-4" />
      
      <h3 className="font-medium">Ingredients ({ingredients.length}):</h3>
      <ul className="list-disc pl-5 mt-2 text-gray-700">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <hr className="my-4" />
      
      <div className="flex gap-4 text-gray-600">
        <div className="flex items-center">
          <IoMdTime />
          <span className="ml-2">{preparing_time} minutes</span>
        </div>
        <div className="flex items-center">
          <FaFire />
          <span className="ml-2">{calories} calories</span>
        </div>
      </div>
      
      <button className="bg-green-300 hover:bg-green-400 text-white rounded-full p-4 mt-4 w-full">
        Want to Cook
      </button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    recipe_name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    preparing_time: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
