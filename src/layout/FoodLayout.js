import Navbar from '@/components/fragments/navbar/Navbar';

export default function FoodLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className="bg-slate-200 h-screen text-black py-20">
                {children}
            </div>
        </>
    );
}
