import axios from 'axios';

const axiosInstance = axios.create({
    baseUrl: "http://localhost:3001"
});

export async function getAllFurnitures () {
    try {
        const response = await axiosInstance.get('/api/furnitures');
        console.log('furnitures request', response);
        return response
    }catch(err) {
        console.error(err)
    }
}


