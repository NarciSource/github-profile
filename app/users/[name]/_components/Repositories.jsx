"use client";

import styled from "styled-components";

export default function Repositories({ repos }) {
    const formattedDate = (dateString) => new Intl.DateTimeFormat("ko-KR").format(new Date(dateString));

    return (
        <RepositoriesDiv>
            {repos.map((repo, idx) => (
                <li key={idx}>
                    <h3>
                        <a href={repo.html_url}>{repo.name}</a> &nbsp;
                        <span className="label">{repo.private ? "Private" : "Public"}</span>
                    </h3>
                    <p>{repo.description}</p>
                    <div>
                        {repo.language && <span className="language">{repo.language}</span>}
                        <span>Updated on {formattedDate(repo.updated_at)}</span>
                    </div>
                </li>
            ))}
        </RepositoriesDiv>
    );
}

const RepositoriesDiv = styled.div`
    width: 100%;
    color: #636c76;
    font-size: 13px;

    li {
        width: 100%;
        list-style: none;
        padding: 1.5em 0;
        border-color: #d0d7deb3;
        border-bottom: 1px solid #d0d7de;

        h3 {
            a {
                font-size: 17px;
                text-decoration: none;
                color: #0969da;
            }
            .label {
                padding: 3px 7px;
                border: 1px solid #d0d7de;
                border-radius: 2em;
                line-height: 18px;
                font-size: 0.75em;
                font-weight: 200;
            }
        }

        .language {
            margin-right: 1rem;
        }
    }
`;
