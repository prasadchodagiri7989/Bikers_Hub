import Header from '../components/navbar';
import HeroSection from '../components/herosection';
import Categories from '../components/categories';
import BestSeller from '../components/bestseller';
import ArrivalContainer from '../components/newarrivalcon';
import ShopByBrands from '../components/shopbybrands';
import Footer from '../components/footer';

export default function Home(){
    return(
        <>
            <HeroSection />
            <Categories />
            <BestSeller />
            <ArrivalContainer />
            <ShopByBrands />
            <Footer />
        </>
    )
}