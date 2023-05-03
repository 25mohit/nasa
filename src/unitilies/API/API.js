import axios from "axios";

export default function fetchAPI (sendingData) {
    // console.log("sendingData", sendingData);
    const API = 'https://images-api.nasa.gov/'

    let newData = {}
    const apiData = axios.get(`${API}/search?q=india`)
    .then((res) => {
        newData = res.data
        sendingData(newData)
    })
    .catch((err) => {
        return console.log("error",err);
    })
    console.log(apiData, newData);
    return apiData
}