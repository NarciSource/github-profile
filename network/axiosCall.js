import axios from "axios";

export default async function axiosCall(url, options) {
    return (await axios(url, options)).data;
}
