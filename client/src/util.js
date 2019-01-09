import request from "request";
import axios from 'axios'

export default function checkInsurance(form) {
    return axios.get("/api/availity")
    
}


// return axios.post("https://api.availity.com/availity/v1/token", client)
//         .then(res => {
//             const config = {
//                 headers: {
//                     authorization: `Bearer ${res.access_token}`
//                 }
//             }
//             //axios.get(`https://api.availity.com/availity/v1/coverages/payerId=${formState.}`)
//             axios.get("https://api.availity.com/availity/v1/coverages", config)
//                 .then(res => {
//                     console.log(res)
//                     return res
//                 })
//         })