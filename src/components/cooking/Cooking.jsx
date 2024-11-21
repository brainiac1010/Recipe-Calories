import PropTypes from 'prop-types';

const Cooking = ({ currentlyCooking }) => {

    console.log('wprking',currentlyCooking)
    return (
        <div className="mt-10">
            <h2 className="font-semibold text-[24px]">Currently cooking:</h2>
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

                {/* {currentlyCooking.map((item, index) => (

                       
<tr key={index} className="border-b">
    <td className="p-2">{index + 1}</td>
    <td className="p-2">{item.recipe_name}</td>
    <td className="p-2">{item.preparing_time} min</td>
    <td className="p-2">{item.calories} kcal</td>
    <td className="p-2">{item.status || 'N/A'}</td>
</tr>
))} */}
              

                 </tbody>
            </table>
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
