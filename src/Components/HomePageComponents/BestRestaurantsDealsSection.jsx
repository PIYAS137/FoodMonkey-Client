import SectionHeader from "../SharedComponents/SectionHeader/SectionHeader"


const BestRestaurantsDealsSection = () => {


    const posterArr = [
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-302.png',
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-303.png',
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-304.png',
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-305.png',
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-306.png',
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-307.png'
    ]





    return (
        <div className=" container mx-auto mb-20">
            {/* best restaurants deals section header */}
            <div className=" my-20">
                <SectionHeader small={'BEST DEALS'} large={'Popular Restaurants Deals'} />
            </div>

            {/* best restaurants deals section content */}
            <div className=" container mx-auto grid md:grid-cols-3 items-center justify-center my-16 gap-16">
                {
                    posterArr.map((one,i)=><img className=" w-full" key={i} src={one}/>)
                }
            </div>
        </div>
    )
}

export default BestRestaurantsDealsSection