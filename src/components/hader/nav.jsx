
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";


const nav = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-slate-100" >
            <h1 className='w-[251px] h-[40px] text-2xl font-bold'>Recipe Calories</h1>
            <ul className="hidden md:flex space-x-6 text-lg">
                <li><a href="#" className="hover:text-blue-500">Home</a></li>
                <li><a href="#" className="hover:text-blue-500">Recipes</a></li>
                <li><a href="#" className="hover:text-blue-500">About</a></li>
                <li><a href="#" className="hover:text-blue-500">Search</a></li>
            
            </ul>

            <div className="flex items-center space-x-2">
  <div className="relative">
    <input
      className="rounded-full border border-gray-600 p-2 pl-10 w-64 outline-none"
      type="text"
      placeholder="Search..."
    />
    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
  </div>

  <div className="bg-green-500 rounded-full p-1">
    <CgProfile className="rounded-full h-8 w-8" />
  </div>
</div>


            
        </div>
    );
};

export default nav;