import { NavLink } from "react-router-dom"
import SectionHeader from "../SharedComponents/SectionHeader/SectionHeader"


const AreaCoverageSection = () => {

    const areaArr = [
        {
            id: 1,
            image: 'https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Dhaka.jpg?width=720',
            name: "dhaka"
        },
        {
            id: 2,
            image: 'https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Chittagong.jpg?width=720',
            name: 'chittagong'
        },
        {
            id: 3,
            image: 'https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Barisal.jpg?width=720',
            name: 'barisal'
        },
        {
            id: 4,
            image: 'https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-cumilla.jpg?width=720',
            name: 'comilla'
        },
        {
            id: 5,
            image: "https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Rangpur.jpg?width=720",
            name: 'rangpur'
        },
        {
            id: 6,
            image: "https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Jessore.jpg?width=720",
            name: 'jessore'
        },
        {
            id: 7,
            image: "https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Khulna.jpg?width=720",
            name: 'khulna'
        },
        {
            id: 8,
            image: "https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Pabna.jpg?width=720",
            name: 'pabna'
        }
    ]




    return (
        <div>
            {/* area coverage section header */}
            <div className=" my-20">
                <SectionHeader small={'AREA COVERAGE'} large={'Find Our Food Terminals'} />
            </div>
            {/* area coverage section content */}
            <div className=" grid grid-cols-4 gap-10 container mx-auto">
                {
                    areaArr.map(one => {
                        return (
                            <NavLink to={'/divres'} key={one.id} >
                                <div style={{ backgroundImage: `url(${one.image})` }} className="flex justify-start items-end min-w-16 aspect-square bg-cover rounded-lg">
                                    <p className="bg-yellow-300 inline-block p-2 px-5 rounded-sm m-3 font-semibold uppercase">{one.name}</p>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AreaCoverageSection