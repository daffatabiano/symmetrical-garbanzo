export default function ValueAbout({ title, text, style,border }) {
    return (
        <div className={`flex flex-col text-center ${style}`}>
            <div className={` flex bg-[#269faa] text-white  m-auto w-[160px] h-[160px] justify-center rounded-full items-center font-['tourney'] ${border} border-[#269f]`}>
                <h1 className="font-thin text-6xl ">{title}</h1>
            </div>
            <p className="text-2xl mt-2 font-semibold text-[#269faa]">{text}</p>
        </div>
    );
}
