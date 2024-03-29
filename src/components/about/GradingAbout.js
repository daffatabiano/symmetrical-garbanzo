import ValueAbout from '../elements/valueAbout';

export default function GradingAbout() {
    return (
        <div className="flex flex-row justify-around">
            <ValueAbout
                title={'9+'}
                text={'Achievements'}
                border={'border-l-8'}
            />
            <ValueAbout
                title={'8/10'}
                text={'Rating'}
                style={'border-x-4 px-[150px]'}
                border={'border-x-8'}
            />
            <ValueAbout title={'A'} text={'Quality'} border={'border-r-8'} />
        </div>
    );
}
