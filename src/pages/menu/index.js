import { useEffect, useState } from 'react';
import Loading from '../loading';
import axios from 'axios';
import CardStaff from '@/components/cards/CardsStuff';
import Button from '@/components/button';
import LogoNavbar from '@/components/elements/logo';
import Link from 'next/link';
import BreadCrumbs from '@/components/breadcrumbs';
import Navbar from '@/components/fragments/navbar/Navbar';
import Footer from '@/components/fragments/footer/Footer';
import { show } from '@/redux/reducers/AddModals';
import { useDispatch } from 'react-redux';
import UpdateModal from '@/components/modal/UpdateModal';
import usePost from '@/hooks/usePost';

export async function getServerSideProps() {
    const loading = true;
    const resp = await axios.get(
        'https://api-bootcamp.do.dibimbing.id/api/v1/foods',
        {
            headers: { apiKey: 'w05KkI9AWhKxzvPFtXotUva-' },
        }
    );
    return { props: { data: resp.data.data, loading } };
}

export default function Menu({ data, loading }) {
    const { post } = usePost();
    const dispatch = useDispatch();

    const handleCreate = (name, imageUrl, description, ingredients) => {
        post('create-food/', {
            name,
            imageUrl,
            description,
            ingredients,
        });
    };
    return (
        <>
            <Navbar />
            {!data.length && !loading ? (
                <Loading />
            ) : (
                <div className="space-y-8 p-10 flex bg-[rgb(38,159,170,0.5)] pt-[150px] flex-row flex-wrap justify-center">
                    <div className="flex w-full flex-col justify-center items-center">
                        <h1 className="text-3xl font-bold inline text-center mb-10 pb-20 text-[#ffd308]">
                            Menu
                            <span>
                                <LogoNavbar.LogoName span={'mx-10'} />
                            </span>
                        </h1>
                        <BreadCrumbs path={'/menu'} direction={'Menu'} />
                        <button
                            onClick={() => dispatch(show())}
                            className="text-3xl font-bold inline text-center text-[#ffd308]"
                        >
                            ADD FOOD
                        </button>
                    </div>
                    {data.map((food) => (
                        <CardStaff
                            key={food.id}
                            name={food.name}
                            image={food.imageUrl}
                            description={food.description}
                            ingredients={food.ingredients}
                        >
                            <Link href={`/makanan/${food.id}`}>
                                <Button>GetDetails</Button>
                            </Link>
                        </CardStaff>
                    ))}
                </div>
            )}
            <UpdateModal title={'Add Food'} onSubmitForm={handleCreate} />
            <Footer />
        </>
    );
}
