import PropTypes from 'prop-types';

const Cooking = ({ currentlyCooking }) => {
    
    const totalTime = currentlyCooking.reduce((sum, item) => sum + item.preparing_time, 0);
    const totalCalories = currentlyCooking.reduce((sum, item) => sum + item.calories, 0);

    return (
        <div className="mt-10">
            <h2 className="font-semibold text-[24px]">Currently cooking:</h2>
            <hr />

            <div className='overflow-x-auto'>
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
                    {currentlyCooking.map((item, index) => (
                        <tr key={index} className="border-b">
                            <td className="p-2">{index + 1}</td>
                            <td className="p-2">{item.recipe_name}</td>
                            <td className="p-2">{item.preparing_time} min</td>
                            <td className="p-2">{item.calories} kcal</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            

            
            <div className="mt-6 p-4 border rounded-lg bg-gray-100">
                <h3 className="font-semibold text-[20px]">Totals:</h3>
                <p className="mt-2 text-[16px]">Total Time: <span className="font-bold">{totalTime} minutes</span></p>
                <p className="mt-2 text-[16px]">Total Calories: <span className="font-bold">{totalCalories} kcal</span></p>
            </div>
        </div>
    );
};

Cooking.propTypes = {
    currentlyCooking: PropTypes.arrayOf(
        PropTypes.shape({
            recipe_name: PropTypes.string.isRequired,
            preparing_time: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired,
            status: PropTypes.string,
        })
    ).isRequired,
};

export default Cooking;
