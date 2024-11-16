import banner from '../../assets/image/banner.webp'

const Banner = () => {
    return (
        <div>
            <div 
                className='relative flex flex-col justify-center items-center p-5 w-full h-[600px] bg-cover bg-center rounded-xl' 
                style={{ backgroundImage: `url(${banner})` }}
            >
                {/* Overlay for darkening the background */}
                <div className='absolute inset-0 bg-black opacity-30 rounded-xl'></div>

                <h2 className='relative text-6xl text-white font-bold text-center'>
                    Discover an exceptional cooking <br />
                    class tailored for you!
                </h2>
                
                <p className='pt-5 relative text-white font-bold text-center'>
                    Learn how to create delicious recipes, master the art of meal planning, understand nutrition, and calculate the calories of each dish. <br /> 
                    Explore over 500 recipes and tips to become an expert in cooking and healthy eating.
                </p>


                <div className='flex gap-4 pt-5'>
    <button className='text-white relative bg-transparent border border-white p-4 rounded-full hover:bg-green-300 hover:border-green-300 transition duration-300'>
        Explore Now
    </button>
    <button className='text-white relative bg-transparent border border-white p-4 rounded-full hover:bg-green-300 hover:border-green-300 transition duration-300'>
        Our Feedback
    </button>
</div>


            </div>
        </div>
    );
};

export default Banner;
