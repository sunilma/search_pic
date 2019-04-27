import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID b3f4d4ccd9463039b6126d6280ea27beef277f38b33a0f232389cec0e81a66e0'
    }
});