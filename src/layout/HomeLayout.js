import LogoNavbar from '@/components/fragments/logo';

export default function HomeLayout() {
    return (
        <header className="z-1 float-left">
            <img
                className="w-full h-auto top-0 left-0 absolute z-1"
                src="/images/bg-home.jpg"
                alt=""
            />
            <div className="text-center py-20 text-white z-4 relative">
                <h1 className="text-6xl py-3 ">Welcome To !</h1>
                <LogoNavbar.LogoName
                    style={'text-8xl leading-[60px] text-center mx-auto py-6'}
                    span="mx-20"
                />
                <p className="text-xl px-5 leading-10 mix-blend-difference">
                    Jangan Mau Makan Boongan Mending makan beneran aje!
                </p>
            </div>
        </header>
    );
}
