import Button from '@/components/button';
import ArrowButton from '@/components/elements/Arrow';
import LogoNavbar from '@/components/fragments/logo';

export default function HomeLayout() {
    return (
        <header className="">
            <img
                className="w-full h-auto top-0 left-0 absolute z-1"
                src="/images/bg-home.jpg"
                alt=""
            />
            <div className=" flex flex-col float-left text-center items-center py-16 text-white z-4 relative">
                <h1 className="text-6xl py-3 ">Welcome To !</h1>
                <LogoNavbar.LogoName
                    style={'text-8xl leading-[60px] text-center mx-auto py-5'}
                    span="mx-20"
                />
                <p className="flex justify-center mx-[200px] text-xl p-2 justify-center mt-4 bg-[rgba(38,159,170,0.5)] rounded-2xl">
                    Jangan mau makan Boongan mending kite makan beneran aje
                    Nyok!
                </p>
                <Button
                    style={
                        'flex text-[#ffd308] relative z-4 text-xl font-bold mt-5 p-2 rounded-2xl transition-all linear duration-1000 hover:bg-[#ffd308] hover:text-white'
                    }
                >
                    Pesan Beneran
                    <ArrowButton style="my-auto pl-2" />
                </Button>
            </div>
        </header>
    );
}
