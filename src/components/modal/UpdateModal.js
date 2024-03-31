import { hide } from '@/redux/reducers/AddModals';
import { useDispatch, useSelector } from 'react-redux';
import InputForm from '../form';

export default function UpdateModal({ food, title, onSubmitForm }) {
    const dispatch = useDispatch();
    const isModalShow = useSelector((store) => store.modalShow.showModal);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e?.target?.name?.value;
        console.log(name, 'name');
        const description = e?.target?.description?.value;
        const imageUrl = e?.target?.imageUrl?.value;
        const ingredients = e?.target?.ingredients?.value?.split(',');

        onSubmitForm(name, description, imageUrl, ingredients);
    };
    return (
        <div
            className={`${
                isModalShow
                    ? `opacity-100 pointer-events-auto z-10 top-0 left-0 absolute w-full h-full flex bg-[rgba(0,0,0,0.5)]`
                    : `opacity-0 pointer-events-none`
            }`}
        >
            <div
                className={`translate-y-1/4 flex flex-col max-w-sm gap-2 p-5 w-3/4 mx-auto rounded-xl `}
            >
                <form onSubmit={handleSubmit} onChange={handleSubmit}>
                    <h1 className=" text-2xl text-white font-bold text-center mt-3">
                        Do you want to
                        <span className='text-green-400 text-3xl font-["ZCOOL_KuaiLe"]'>
                            {' '}
                            {title} ?
                        </span>
                    </h1>

                    <InputForm
                        label="Name"
                        type="text"
                        name="name"
                        placeholder="Input Food Name"
                        defaultValue={food?.name}
                    />
                    <InputForm
                        label="Description"
                        type="text"
                        name="description"
                        placeholder="Describe The Food"
                        defaultValue={food?.description}
                    />
                    <InputForm
                        label="Image Url"
                        type="text"
                        name="imageUrl"
                        placeholder=" Example : https://example.com/image.jpg"
                        defaultValue={food?.imageUrl}
                    />
                    <InputForm
                        label="Ingredients"
                        type="text"
                        name="ingredients"
                        placeholder="Input Ingredients"
                        defaultValue={food?.ingredients}
                    />
                    <button
                        type="submit"
                        className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mx-3"
                    >
                        {title}
                    </button>
                    <a
                        className="text-white bg-yellow-700 hover:bg-yellow-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer "
                        onClick={() => dispatch(hide())}
                    >
                        Cancel
                    </a>
                </form>
            </div>
        </div>
    );
}
