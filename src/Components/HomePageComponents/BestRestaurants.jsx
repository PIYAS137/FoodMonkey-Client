

const BestRestaurants = () => {

    
    const restaurantsArr=[
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/06.png',
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/05.png',
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/04.png',
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/03.png',
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/02.png'
    ]



    return (
        <div className=" py-20 container mx-auto">
            <div className=" flex flex-wrap justify-center items-center">
                {
                    restaurantsArr.map((one,i)=><img className=" max-w-32 lg:max-w-full mt-4 md:mt-0" key={i} src={one}/>)
                }
            </div>
        </div>
    )
}

export default BestRestaurants