import Profile from "./_components/Profile";
import Repositories from "./_components/Repositories";

export default function User({ params }) {
    return (
        <div>
            <Profile username={params.name} />
            <Repositories />
        </div>
    );
}
