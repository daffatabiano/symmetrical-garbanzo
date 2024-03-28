import { useEffect, useState } from 'react';
import axios from 'axios';
import FoodLayout from '@/layout/FoodLayout';
import HomeLayout from '@/layout/HomeLayout';
import Loading from './loading';

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getFoods = async () => {
            setLoading(true);
            const resp = await axios.get(
                'https://api-bootcamp.do.dibimbing.id/api/v1/foods',
                {
                    headers: { apiKey: 'w05KkI9AWhKxzvPFtXotUva-' },
                }
            );

            setData(resp.data.data);
            setLoading(false);
        };

        getFoods();
    }, []);

    if (loading)
        return (
            <div>
                <Loading />
            </div>
        );

    return (
        <FoodLayout>
            <HomeLayout />
            <div className="flex flex-wrap bg-yellow-300 my-[710px] justify-between">
                {data.map((food) => (
                    <div className="w-64 h-64 text-center py-[100px] px-5">
                        <h1 className="text-xl font-bold my-3">{food.name}</h1>
                        <img
                            src={food.imageUrl}
                            className="w-64 aspect-video"
                        />
                    </div>
                ))}
            </div>
        </FoodLayout>
    );
}
