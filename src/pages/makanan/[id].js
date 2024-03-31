import axios from 'axios';
import { useRouter } from 'next/router';
import Loading from '../loading';
import Navbar from '@/components/fragments/navbar/Navbar';
import useDeleted from '@/hooks/useDeleted';
import ModalDelete from '@/components/modal/DeleteModal';
import { ShowDeleted } from '@/redux/reducers/DelModals';
import { show } from '@/redux/reducers/AddModals';
import { useDispatch } from 'react-redux';
import UpdateModal from '@/components/modal/UpdateModal';
import usePost from '@/hooks/usePost';

export async function getServerSideProps(context) {
    let loading = true;
    const resp = await axios.get(
        `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`,
        {
            headers: { apiKey: 'w05KkI9AWhKxzvPFtXotUva-' },
        }
    );
    loading = false;
    return { props: { food: resp?.data?.data } };
}

export default function FooDetailPage({ food }) {
    const router = useRouter();
    const { post } = usePost();
    const { deletedItems } = useDeleted();
    const dispatch = useDispatch();

    if (router.isFallback) {
        return <Loading />;
    }

    const handleDelete = () => {
        deletedItems(`${food.id}`);
    };

    const handleUpdate = (name, description, imageUrl, ingredients) => {
        post(`update-food/${food.id}`, {
            name,
            description,
            imageUrl,
            ingredients,
        });
    };

    return (
        <>
            <Navbar />
            <div className="flex bg-[rgb(255,75,49,0.7)] flex-col justify-center items-center h-full">
                <div className="mt-[100px]">
                    <h1 className="text-6xl text-center text-white font-bold">
                        <span className='text-[#269faa] font-["zcool_kuaile"]'>
                            Detail
                        </span>{' '}
                        Foods
                    </h1>
                </div>
                <div className="bg-[#269faa] text-start my-5 text-white p-5 w-[500px] rounded-full rounded-tl-[300px] rounded-bl-[300px]">
                    <h1 className="text-3xl text-center font-bold w-[300px] pb-5 ">
                        {food?.name}
                    </h1>
                    <img
                        src={food?.imageUrl}
                        className="w-[300px] mx-auto pb-5 h-[300px] rounded-full"
                    />
                    <p className="text-2xl font-semibold pb-5 ">
                        description: {food?.description}
                    </p>
                    <p className="text-2xl font-semibold pb-5">
                        Price : {food?.price}
                    </p>
                    <p className="text-2xl font-semibold w-[300px]">
                        Ingredients : {food?.ingredients}
                    </p>
                </div>
                <div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => router.push('/menu')}
                    >
                        {' '}
                        Back
                    </button>
                    <button
                        onClick={() => dispatch(ShowDeleted())}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => dispatch(show())}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Update
                    </button>
                </div>
                <UpdateModal
                    food={food}
                    title={'Update'}
                    onSubmitForm={handleUpdate}
                />
                <ModalDelete
                    onConfirm={handleDelete}
                    title={`${food?.name}?`}
                />
            </div>
        </>
    );
}
