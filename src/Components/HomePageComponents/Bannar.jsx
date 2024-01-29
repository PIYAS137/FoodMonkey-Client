import React from 'react'

const Bannar = () => {
    return (
        <div style={{ backgroundImage: `url("https://dev.foodotawp.com/wp-content/uploads/2021/08/banner-img-1-1.png")` }} className='  bg-red-300 bg-cover'>
            <img className=' absolute bottom-10' src="https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-1202-1.png" alt="" />
            <img className=' absolute top-20' src="https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-1201-1.png" alt="" />
            <div className='grid w-full h-screen gap-16 grid-cols-2 items-center container mx-auto'>
                <div className=' text-white space-y-3'>
                    <h1 className=' text-7xl font-custom italic font-bold'>Special kombo Pack</h1>
                    <h1 className=' text-yellow-300 text-6xl font-semibold'>Today's Special Pizza Menu</h1>
                    <p className=' text-xl text-gray-200'>Maecenas tempus, tellus eget condimentum rhoncus,<br/> sem quam semper libero, sit amet sem neque sed ipsum.</p>
                    <div className=' flex items-center space-x-3 pt-8'>
                        <button className=' btn rounded-sm px-8 hover:bg-yellow-500 bg-yellow-300 border-none text-base'>ORDER NOW</button>
                        <h1 className=' text-5xl font-bold font-custom tracking-wider'>$399</h1>
                        <small className=' font-custom tracking-wider line-through text-yellow-300 text-2xl font-bold'>$500</small>
                    </div>
                </div>
                <div className=' relative'>
                    <img className='absolute -top-16 -left-20' src="https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-1307-1.png" />
                    <img className='absolute -bottom-10 right-10 max-w-44' src="https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-1206-1.png" />
                    <img className='absolute -top-0 right-10 w-[50px]' src="https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-1207-1.png" />
                    <img className='absolute -bottom-20 left-10 w-[100px]' src="https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-1205-1.png" />
                    <img className=' w-full' src="https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-1203-1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Bannar