import BrandSection from "../../components/Brand/BrandSection"
import CategorySection from "../../components/Category/CategorySection"
import HeroSection from "../../components/Hero/HeroSection"
import Carousel from "../../components/functional_Components/carousel/Carousel"


function HomePage() {
  return (
    <>
    <Carousel />
    <HeroSection />
    <BrandSection />
    <CategorySection />
    </>
  )
}

export default HomePage