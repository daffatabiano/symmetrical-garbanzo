export default function MainAbout() {
    return (
        <>
            <main className="p-10">
                <div className="flex w-full mx-auto border-b-4 justify-around pb-[250px]">
                    <img
                        className="relative mx-5 shadow-2xl shadow-slate-500 z-2 w-1/4 h-auto"
                        src="/images/about1.jpg"
                        alt=""
                    />
                    <img
                        className="absolute shadow-sm shadow-current w-[330px] my-[150px] ms-[-900px] z-4 w-1/6 h-auto"
                        src="/images/about2.jpg"
                        alt=""
                    />
                    <p className="ps-7 w-2/4 py-3 text-start leading-10">
                        <span className="text-[#269faa] font-bold text-xl">
                            Great Food, Great People, Great Atmosphere, Best
                            Tasty!
                        </span>
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae velit blanditiis dolor maiores ab itaque sint
                        delectus dolorem, fugit accusamus neque animi ex
                        laudantium aliquam ad natus est soluta commodi? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus facilis enim odit fugit autem iure excepturi
                        illum sint magnam, perspiciatis sunt aliquid deserunt
                        aliquam omnis vero ex temporibus officia totam! Lorem
                        ipsum dolor, sit amet consectetur adipisicing elit. Quas
                        laboriosam distinctio repellendus
                    </p>
                </div>
            </main>
        </>
    );
}
