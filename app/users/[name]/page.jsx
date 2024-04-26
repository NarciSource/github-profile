import { notFound } from "next/navigation";
import Profile from "./_components/Profile";
import Repositories from "./_components/Repositories";
import getProfile from "@/network/getProfile";
import getRepos from "@/network/getRepos";

export default async function User({ params }) {
    const { name } = params;

    try {
        const user = await getProfile(name);
        const repos = await getRepos(name);

        return (
            <>
                <Profile user={user} />
                <Repositories repos={repos} />
            </>
        );
    } catch (error) {
        notFound();
    }
}
