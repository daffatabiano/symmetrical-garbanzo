import Link from 'next/link';

export default function SectionAbout({ children }) {
    return (
        <section className="flex p-2 my-16 justify-around">{children}</section>
    );
}

const DetailScreen = ({ title, children, button, pot, color }) => {
    return (
        <>
            <div className={`flex flex-col ${pot} w-1/4 justify-center`}>
                <h1 className={`text-4xl ${color} font-bold  inline`}>
                    {title}
                </h1>
                {children}
                <Link className="mt-10 text-xl font-semibold" href="/about">
                    {button}
                </Link>
            </div>
        </>
    );
};

const ImageScreen = ({ image, radius }) => {
    return (
        <div className=" w-1/2">
            <img
                className={`rounded-full ${radius} bg-center relative`}
                src={image}
                alt=""
            />
        </div>
    );
};

SectionAbout.DetailScreen = DetailScreen;
SectionAbout.ImageScreen = ImageScreen;
