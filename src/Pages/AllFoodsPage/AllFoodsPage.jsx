import { useEffect, useState } from "react";
import FoodCard from "../../Components/SharedComponents/FoodCard/FoodCard";
import useGetAllFoods from "../../Hooks/useGetAllFoods";

const AllFoodsPage = () => {
    const [allFoods] = useGetAllFoods();
    const [fixDatas, setFixDatas] = useState(allFoods);
    const [name, setName] = useState('');

    useEffect(() => {
        setFixDatas(allFoods);
    }, [allFoods]);

    const handleSubmitForm = (event) => {
        event.preventDefault();
        let temp = allFoods;
        if (name !== "") {
            temp = allFoods.filter(one => one?.name.toLowerCase().includes(name.toLowerCase()));
        }
        setFixDatas(temp);
    };

    return (
        <div>
            <div className="h-20 w-full bg-black"></div>
            <form onSubmit={handleSubmitForm} className="p-3 flex justify-end items-center container mx-auto">
                <h1 className="mr-auto text-2xl font-bold text-yellow-500 rounded-lg">Find all available foods here! <span className=" text-sm text-orange-300">{allFoods?.length} Items Found</span></h1>
                <div>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="search" className="bg-yellow-400 p-3 px-5 rounded-lg shadow-md" placeholder="search by food name" />
                    <button type="submit" className="btn ml-3 bg-yellow-400 outline-none border-none uppercase shadow-md">Search</button>
                </div>
            </form>
            <div className="grid grid-cols-4 gap-10 container mx-auto my-20">
                {fixDatas?.map(one => <FoodCard key={one?._id} data={one} />)}
            </div>
        </div>
    );
};

export default AllFoodsPage;
