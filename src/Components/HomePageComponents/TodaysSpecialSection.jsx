import { Link } from "react-router-dom"


const TodaysSpecialSection = () => {
    return (
        <div style={{ backgroundImage: `url("https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-1304.png")` }} className="relative w-full grid grid-cols-1 lg:grid-cols-2 mb-20 items-center p-8 md:p-16 xl:p-24 gap-16">
            <img className="absolute right-[50%] top-0" src="https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-1305.png" alt="" />
            <img className="absolute right-10 -bottom-[10%] hidden sm:block xl:-bottom-[25%] max-w-[200px] 2xl:max-w-[300px]" src="https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-1306.png" alt="" />
            <div className=" flex justify-end relative">
                <img className="hidden 2xl:block absolute left-0 top-[0%]" src="https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-1308.png" alt="" />
                <img src="https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-301.png" alt="" />
            </div>
            <div className=' text-white space-y-3'>
                <h1 className=' text-5xl xl:text-7xl font-custom italic font-bold text-yellow-500'>Special kombo Pack</h1>
                <h1 className=' text-3xl xl:text-6xl text-black font-semibold'>Today's Special Pizza Menu</h1>
                <p className=' text-base xl:text-xl text-gray-600'>Maecenas tempus, tellus eget condimentum rhoncus,<br /> sem quam semper libero, sit amet sem neque sed ipsum.</p>
                <div className=' flex items-center space-x-3 pt-8'>
                    <Link to={'/allfoods'}><button className=' btn shadow-lg px-8 hover:bg-yellow-500 bg-yellow-300 border-none text-base uppercase rounded-lg'>Find Foods</button></Link>
                    <h1 className=' text-5xl font-bold font-custom tracking-wider text-yellow-500 block'>$149</h1>
                    <small className=' font-custom tracking-wider line-through text-yellow-300 text-2xl font-bold hidden md:block'>$200</small>
                </div>
            </div>
        </div>
    )
}

export default TodaysSpecialSection