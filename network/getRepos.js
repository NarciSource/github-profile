import axios from "axios";

export default async function getRepos(name) {
    const repos_url = `https://api.github.com/users/${name}/repos?sort=updated`;

    const repos_response = await axios(repos_url, {
        method: "GET",
        headers: {
            Authorization: process.env.REACT_APP_GITHUB_AUTH,
        },
    });

    return repos_response.data;
}
