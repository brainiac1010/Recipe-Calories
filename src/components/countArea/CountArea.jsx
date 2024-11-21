import PropTypes from "prop-types";
import Cooking from "../cooking/Cooking";

const CountArea = ({ wantToCooks, handleStartCooking }) => {
  return (
    <div className="md:w-1/3 text-center border p-4 rounded-lg shadow-lg">
      <h2 className="font-semibold text-[24px]">
        Want to cook: {wantToCooks.length}
      </h2>
      <hr />

      <table className="table-auto w-full border-collapse mt-4">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">#</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Time</th>
            <th className="p-2 text-left">Calories</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {wantToCooks.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{item.recipe_name}</td>
              <td className="p-2">{item.preparing_time} minutes</td>
              <td className="p-2">{item.calories} calories</td>
              <td className="p-2">
                <button
                onClick={() => handleStartCooking(item)}
                className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                Preparing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Cooking></Cooking>
    </div>
  );
};


CountArea.propTypes = {
  wantToCooks: PropTypes.arrayOf(
    PropTypes.shape({
      recipe_name: PropTypes.string.isRequired,
      preparing_time: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CountArea;
