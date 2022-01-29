import axios from 'axios';

const baseURL = 'http://localhost:9999';
const api = axios.create({baseURL});

api.sendRoomData = (data) => {
    return api.post('/rooms', data)
}

export default api;
