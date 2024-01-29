import Bannar from "../../Components/HomePageComponents/Bannar"
import BestRestaurants from "../../Components/HomePageComponents/BestRestaurants"
import BestRestaurantsDealsSection from "../../Components/HomePageComponents/BestRestaurantsDealsSection"
import ClientSection from "../../Components/HomePageComponents/ClientSection"
import DeliciousDealSection from "../../Components/HomePageComponents/DeliciousDealSection"
import HomeFoodCategory from "../../Components/HomePageComponents/HomeFoodCategory"
import ThreeOfferSection from "../../Components/HomePageComponents/ThreeOfferSection"
import TodaysSpecialSection from "../../Components/HomePageComponents/TodaysSpecialSection"


const HomePage = () => {
  return (
    <div>
      <Bannar />
      <ThreeOfferSection />
      <DeliciousDealSection />
      <TodaysSpecialSection />
      <HomeFoodCategory />
      <BestRestaurantsDealsSection />
      <ClientSection />
      <BestRestaurants />
    </div>
  )
}

export default HomePage