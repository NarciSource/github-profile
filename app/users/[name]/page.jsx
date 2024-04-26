import axios from "axios";
import Profile from "./_components/Profile";
import Repositories from "./_components/Repositories";

export default async function User({ params }) {
    const { name } = params;
    const profile_url = `https://api.github.com/users/${name}`;
    const repos_url = `https://api.github.com/users/${name}/repos?sort=updated`;

    const profile_response = await axios(profile_url);
    const user = profile_response.data;

    const repos_response = await axios(repos_url);
    const repos = repos_response.data;

    return (
        <div>
            <Profile user={user} />
            <Repositories repos={repos} />
        </div>
    );
}
