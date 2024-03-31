import FoodLayout from '@/layout/FoodLayout';
import HomeLayout from '@/layout/HomeLayout';
import PromoDisc from '@/components/elements/PromoDisc';
import DescriptionHome from '@/components/elements/DescriptionHome';
import Footer from '@/components/fragments/footer/Footer';

export default function Home() {
    return (
        <FoodLayout>
            <HomeLayout />
            <div className="flex flex-wrap mt-[710px] justify-between">

                <PromoDisc />
                <DescriptionHome></DescriptionHome>
            </div>
            <Footer />
        </FoodLayout>
    );
}
