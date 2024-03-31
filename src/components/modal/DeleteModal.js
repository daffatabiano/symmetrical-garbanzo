import { useDispatch, useSelector } from 'react-redux';
import { hideDelete } from '@/redux/reducers/DelModals';

export default function ModalDelete({ onConfirm, title }) {
    const isModalShow = useSelector(
        (store) => store.modalDelete.modalDeleteShow
    );
    const dispatch = useDispatch();

    const handleConfirm = () => {
        onConfirm();
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
                className={` translate-y-1/2 flex flex-col gap-3 p-5 lg:w-1/4 md:w-1/3 sm:w-2/4 mx-auto h-1/4 items-center justify-center rounded-xl bg-white`}
            >
                <h1 className="text-center text-xl font-bold ">
                    Are you sure you want to delete{' '}
                    <span className="text-red-700 font-['ZCOOL_KuaiLe']">
                        {title} ?
                    </span>
                </h1>
                <div className="flex justify-between px-5 mt-5 gap-5">
                    <button
                        className="bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-red-500"
                        onClick={() => dispatch(handleConfirm())}
                    >
                        Confirm
                    </button>
                    <button
                        className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-500"
                        onClick={() => dispatch(hideDelete())}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
