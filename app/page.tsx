
import HeroSection from "./ComponentsApp/heroSection/HeroSection";
import Service from "./ComponentsApp/service/service";
import PopularCar from "./ComponentsApp/popularcar/PopularCar";
import RecommendationCar from "./ComponentsApp/RecommendationCar/RecommendationCar";

export default  function Home() {

  

  return (
    <main>
        <div>
          <HeroSection />
          <Service />
          <PopularCar />
          <RecommendationCar />

            
        </div>
    </main>
  );
}
