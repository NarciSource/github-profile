import fetchCall from "./fetchCall";

export default async function getProfile(name) {
    const profile_url = `https://api.github.com/users/${name}`;
    const options = {
        method: "GET",
        headers: {
            Authorization: process.env.REACT_APP_GITHUB_AUTH,
        },
    };

    return await fetchCall(profile_url, options);
}
