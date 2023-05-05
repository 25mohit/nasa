import axios from "axios";

export default function fetchAPI (sendingData) {
    // console.log("sendingData", sendingData);
    const API = 'https://images-api.nasa.gov/'

    let newData = {}
    const apiData =  axios.get(`${API}/search?q=india`)
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

export const fetchTechport =  ( returnData, id ) => {
    const techPortFetch =  axios.get(`https://api.nasa.gov/techport/api/projects/${id}?api_key=DEMO_KEY`)
                .then((res) => {
                    returnData(res.data?.project)
                })
                .catch((err) => console.log(err))
                return techPortFetch
}