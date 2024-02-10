

const ThreeOfferSection = () => {

    const imgArr=[
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-212-1.png',
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-213-1.png',
        'https://dev.foodotawp.com/wp-content/uploads/2021/08/layer-214-1.png'
    ]

  return (
    <div className="container mx-auto grid md:grid-cols-3 items-center justify-center my-16 gap-16">
        {
            imgArr.map((one,i)=><img className=" md:w-full object-cover rounded-lg" key={i} src={one}/>)
        }
    </div>
  )
}

export default ThreeOfferSection