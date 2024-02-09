import { useState } from "react";
import SectionHeader from "../SharedComponents/SectionHeader/SectionHeader"
import { accordionData } from "../../Utils/UsingSteps";



const HowToUseWebsite = () => {

    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };


    return (
        <div>
            <div className=" mt-20">
                <SectionHeader small={'Our Journey'} large={'Our Best Regular Clients'} />
            </div>
            <div className="max-w-[800px] max-h-[200px] md:min-h-[300px] flex bg-orange-400 mx-auto rounded-xl mt-10">
                {accordionData.map((_, idx) => (
                    <div key={idx} className="flex">
                        <button
                            onClick={() => handleToggle(idx)}
                            className={`h-full flex justify-center items-center w-6 lg:w-14 bg-orange-500 ${isActive === idx && 'bg-orange-600'} text-white shadow-[2px_2px_5px_#00000083] z-20 relative`}>
                            <p>{idx + 1}</p>
                        </button>
                        <div className={`${isActive === idx ? 'md:w-56 px-2 md:px-5 opacity-1' : 'w-0 opacity-0'} grid place-content-center bg-white shadow-md z-10 text-black duration-300 ease-in-out`}>
                            <h2 className="lg:text-2xl font-black">{_.title}</h2>
                            <p className="text-black/60">{_.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HowToUseWebsite