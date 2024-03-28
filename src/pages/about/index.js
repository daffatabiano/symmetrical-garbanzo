import ValueAbout from '@/components/elements/valueAbout';
import BreadCrumbs from '@/components/breadcrumbs';
import GradingAbout from '@/components/about/GradingAbout';

export default function AboutPage() {
    return (
        <div>
            <BreadCrumbs />
            <header className="text-center w-full my-10">
                {/* <video
                    className="w-full  "
                    src="/images/about.mp4"
                    autoPlay
                    loop
                    muted
                /> */}
                <h1 className="text-6xl font-bold inline">
                    <span className="text-[#269faa] font-['ZCOOL_KuaiLe']">
                        About
                    </span>{' '}
                    Us!
                </h1>
            </header>
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
                    <p className="ps-7 indent-8 w-2/4 py-3 text-start leading-10">
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
            <section className="mt-10">
                <GradingAbout />
            </section>
        </div>
    );
}
