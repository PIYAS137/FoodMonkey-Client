import { NavLink } from "react-router-dom"
import SectionHeader from "../SharedComponents/SectionHeader/SectionHeader"
import { areaArr } from "../../Utils/Cities"


const AreaCoverageSection = () => {




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