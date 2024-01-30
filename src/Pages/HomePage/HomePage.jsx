import AreaCoverageSection from "../../Components/HomePageComponents/AreaCoverageSection"
import Bannar from "../../Components/HomePageComponents/Bannar"
import BestRestaurants from "../../Components/HomePageComponents/BestRestaurants"
import BestRestaurantsDealsSection from "../../Components/HomePageComponents/BestRestaurantsDealsSection"
import ClientSection from "../../Components/HomePageComponents/ClientSection"
import DeliciousDealSection from "../../Components/HomePageComponents/DeliciousDealSection"
import ThreeOfferSection from "../../Components/HomePageComponents/ThreeOfferSection"
import TodaysSpecialSection from "../../Components/HomePageComponents/TodaysSpecialSection"


const HomePage = () => {
  return (
    <div>
      <Bannar />
      <ThreeOfferSection />
      <DeliciousDealSection />
      <TodaysSpecialSection />
      <AreaCoverageSection/>
      <BestRestaurantsDealsSection />
      <ClientSection />
      <BestRestaurants />
    </div>
  )
}

export default HomePage