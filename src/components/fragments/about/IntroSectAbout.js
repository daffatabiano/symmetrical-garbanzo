import SectionAbout from '@/components/about/SectionAbout';
import ParagraphSecAbout from '@/components/elements/ParagraphSecAbout';

export default function IntroSecAbout() {
    return (
        <>
            <SectionAbout>
                <SectionAbout.DetailScreen
                    title="Since 1998"
                    button={'Learn More →'}
                    color="text-[#269faa]"
                >
                    <ParagraphSecAbout colorRadius="bg-[rgba(38,159,170,0.6)] rounded-bl-none" />
                </SectionAbout.DetailScreen>
                <SectionAbout.ImageScreen
                    image={
                        'https://th.bing.com/th/id/OIG2.o3j.NwcVMka_QG9JbSug?w=1024&h=1024&rs=1&pid=ImgDetMain'
                    }
                    radius={'rounded-br-none'}
                />
            </SectionAbout>
            <SectionAbout>
                <SectionAbout.ImageScreen
                    image={
                        'https://th.bing.com/th/id/OIG2.WTwTedic7.qfoPw07Fla?pid=ImgGn'
                    }
                    radius={'rounded-bl-none'}
                />
                <SectionAbout.DetailScreen
                    title="Best Quality Ever"
                    color={'text-[#cc3c27]'}
                    button={'Order Now ↓'}
                >
                    <ParagraphSecAbout
                        colorRadius={'bg-[rgba(204,60,39,0.6)] rounded-br-none'}
                    />
                </SectionAbout.DetailScreen>
            </SectionAbout>
            <SectionAbout>
                <SectionAbout.DetailScreen
                    title="Comfortable Place's"
                    color={'text-[#eab308]'}
                    button={'Booking Now ↓'}
                >
                    <ParagraphSecAbout
                        colorRadius={'bg-[rgba(234,179,8,0.8)] rounded-br-none'}
                    />
                </SectionAbout.DetailScreen>
                <SectionAbout.ImageScreen
                    image={
                        'https://th.bing.com/th/id/OIG3.en8dAnRDeZ9mNWW1e3yj?w=1024&h=1024&rs=1&pid=ImgDetMain'
                    }
                    radius={'rounded-bl-none'}
                />
            </SectionAbout>
        </>
    );
}
