import ValueAbout from "../elements/valueAbout";

export default function GradingAbout (){
    return (
        <div className="flex flex-row justify-around">
            <ValueAbout title={'9+'} text={'Achiements'} />
            <ValueAbout
                title={'8/10'}
                text={'Rating'}
                style={'border-x-4 px-[150px]'}
            />
            <ValueAbout title={'A'} text={'Quality'} />
        </div>
    );
}