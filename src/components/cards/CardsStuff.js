import Link from 'next/link';
import SocialMedia from '../elements/SocialMedia';

export default function CardStaff({
    image,
    name,
    profession,
    description,
    children,
}) {
    return (
        <>
            <div className="w-1/4 m-5 bg-[rgba(0,0,0,0.1)] justify-center items-center text-center p-8">
                <div>
                    <img className="w-full h-[150px]" src={image} alt="" />
                </div>
                <div className="my-5 space-y-3 ">
                    <h1 className="font-bold text-2xl">{name}</h1>
                    <p className="text-xl font-semibold">{profession}</p>
                    <p className="text-xl font-thin ">{description}</p>
                </div>
                <div>{children}</div>
            </div>
        </>
    );
}
