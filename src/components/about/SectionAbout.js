import Link from 'next/link';

export default function SectionAbout({ children, title, image, button }) {
    return (
        <>
            <div className="flex flex-col text-end w-1/4 justify-center">
                <h1 className="text-4xl font-bold text-[#269faa] inline">
                    {title}
                </h1>
                {children}
                <Link className="mt-10 text-xl font-semibold" href="/about">
                    {button}
                </Link>
            </div>
            <div className=" w-1/2">
                <img
                    className="rounded-full rounded-br-none bg-center relative"
                    src={image}
                    alt=""
                />
            </div>
        </>
    );
}
