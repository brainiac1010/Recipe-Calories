import PropTypes from 'prop-types';

const Cooking = () => {
    return (
        <div className=' mt-10'>
            <h2 className="font-semibold text-[24px]">
            Currently cooking:
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
                    
                </tbody>
            </table>
        </div>
        
    );
};
Cooking.propTypes = {
    cooking: PropTypes.object.isRequired,
};

export default Cooking;