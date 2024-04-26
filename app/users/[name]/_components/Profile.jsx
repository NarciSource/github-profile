export default function Profile({ user }) {
    return (
        <div>
            <div>
                <img src={user.avatar_url} />
                <h1>
                    <span>
                        <strong>{user.name}</strong>
                    </span>
                    <span>{user.login}</span>
                </h1>
            </div>
            <div>
                <a href={user.followers_url}>
                    <b>{user.followers}</b> followers
                </a>
                ·
                <a href={user.following_url}>
                    <b>{user.following}</b> following
                </a>
            </div>
        </div>
    );
}
