import axios from "axios";

export default async function getProfile(name) {
    const profile_url = `https://api.github.com/users/${name}`;

    const profile_response = await axios(profile_url, {
        method: "GET",
        headers: {
            Authorization: process.env.REACT_APP_GITHUB_AUTH,
        },
    });

    return profile_response.data;
}
