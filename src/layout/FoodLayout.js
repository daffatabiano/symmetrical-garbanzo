import Navbar from '@/components/Navbar';

export default function FoodLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className="bg-slate-200 text-black min-h-screen">
                <header className="text-6xl font-bold">FOOD WENAK</header>
                {children}
            </div>
        </>
    );
}
