import banner from '../../assets/image/banner.webp'

const Banner = () => {
    return (
        <div>
            <div 
                className='relative flex flex-col justify-center items-center p-5 w-full h-[600px] bg-cover bg-center rounded-xl' 
                style={{ backgroundImage: `url(${banner})` }}
            >
               
                <div className='absolute inset-0 bg-black opacity-40 rounded-xl'></div>

                <h2 className="relative text-4xl sm:text-5xl md:text-6xl text-white font-bold text-center">
  Discover an exceptional cooking <br />
  class tailored for you!
</h2>
                
<p className="pt-5 relative text-sm sm:text-lg md:text-xl text-white font-bold text-center">
  Learn how to create delicious recipes, master the art of meal planning, <br />
  understand nutrition, and calculate the calories of each dish. <br /> 
  Explore over 500 recipes and tips to become an expert in cooking and healthy eating.
</p>


<div className="flex gap-4 pt-5 flex-col sm:flex-row">
  <button className="text-white relative bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-full hover:from-blue-500 hover:to-green-400 hover:scale-105 transition-transform duration-500 ease-in-out shadow-lg">
    Explore Now
  </button>
  <button className="text-white relative bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-full hover:from-blue-500 hover:to-green-400 hover:scale-105 transition-transform duration-500 ease-in-out shadow-lg">
    Our Feedback
  </button>
</div>


            </div>
        </div>
    );
};

export default Banner;
