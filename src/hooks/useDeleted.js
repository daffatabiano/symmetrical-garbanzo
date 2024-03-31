import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

export default function useDeleted() {
    const dispatch = useDispatch();
    const router = useRouter();

    const deletedItems = async (url) => {
        try {
            axios.delete(
                `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${url}`,
                {
                    headers: {
                        apiKey: 'w05KkI9AWhKxzvPFtXotUva-',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q',
                    },
                }
            );
            dispatch({ type: 'delete/HIDE' });
            await new Promise(async (resolve) => {
                await router.push('/');
                router.reload();
                resolve();
                alert('data deleted');
                window.location.reload();
            });
        } catch (error) {
            console.log(error);
        }
    };
    return { deletedItems };
}
