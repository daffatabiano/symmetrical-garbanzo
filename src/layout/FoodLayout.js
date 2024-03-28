import LogoNavbar from '@/components/fragments/logo';
import Navbar from '@/components/fragments/navbar/Navbar';
import Sidebar from '@/components/fragments/sidebar';

export default function FoodLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className="bg-slate-200 text-black min-h-screen py-20">
                <header className="">
                    <div className="z-10 text-center text-white relative">
                        <LogoNavbar.LogoName style={'text-5xl mx-auto'} />
                        <p>Jangan Mau Makan Boongan Mending makan beneran aje!</p>
                    </div>
                    <img
                        className="w-full h-auto top-0 absolute"
                        src="/images/bg-home.jpg"
                        alt=""
                    />
                </header>
                {children}
            </div>
        </>
    );
}
