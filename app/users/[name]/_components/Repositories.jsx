export default function Repositories({ repos }) {
    return (
        <ul>
            {repos.map((repo, idx) => (
                <li key={idx}>
                    <div>
                        <h3>
                            <a href={repo.html_url}>{repo.name}</a>
                        </h3>
                        <span>{repo.private ? "private" : "public"}</span>
                    </div>
                    <div>{repo.description}</div>
                    <div>
                        <span>{repo.language}</span>
                        <span>Updated on {repo.updated_at}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}
