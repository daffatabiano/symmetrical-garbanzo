import LogoNavbar from '@/components/fragments/logo';
import Navbar from '@/components/fragments/navbar/Navbar';
import Sidebar from '@/components/fragments/sidebar';

export default function FoodLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className="bg-slate-200 text-black min-h-screen py-20">
                {children}
            </div>
        </>
    );
}
