

const SectionHeader = ({small,large}) => {
  return (
    <div className=" text-center space-y-2">
        <p className=" text-xl text-yellow-500">{small}</p>
        <h1 className=" text-5xl font-custom font-bold border-b inline-block pb-4 border-black">{large}</h1>
    </div>
  )
}

export default SectionHeader