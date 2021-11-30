import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-challenge-31b13.cloudfunctions.net/api"
    //"http://localhost:5001/challenge-31b13/us-central1/api"
});

export default instance;