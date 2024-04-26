import fetchCall from "./fetchCall";

export default async function getProfile(name) {
    const repos_url = `https://api.github.com/users/${name}/repos?sort=updated`;
    const options = {
        method: "GET",
        headers: {
            Authorization: process.env.REACT_APP_GITHUB_AUTH,
        },
    };

    return await fetchCall(repos_url, options);
}
