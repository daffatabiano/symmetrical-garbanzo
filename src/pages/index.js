import { useEffect, useState } from 'react';
import axios from 'axios';
import FoodLayout from '@/layout/FoodLayout';

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

    if (loading) return <div>Loading . . .</div>;

    return (
        <FoodLayout>
            <div className="space-y-8 flex flex-wrap space-x-5 justify-center text-center ">
                {data.map((food) => (
                    <div>
                        <h1 className="text-xl text-bold my-3">{food.name}</h1>
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
