"use client";

import styled from "styled-components";

export default function Profile({ user }) {
    return (
        <ProfileDiv>
            <div className="avatar">
                <img src={user.avatar_url} />
                <h1>
                    <span>
                        <strong>{user.name}</strong>
                    </span>
                    <span>{user.login}</span>
                </h1>
            </div>
            <div className="relation">
                <a href={user.followers_url}>
                    <b>{user.followers}</b> followers
                </a>
                &nbsp;·&nbsp;
                <a href={user.following_url}>
                    <b>{user.following}</b> following
                </a>
            </div>
        </ProfileDiv>
    );
}

const ProfileDiv = styled.div`
    width: 300px;
    margin: 50px;
    color: #636c76;

    strong {
        font-size: 24px;
        color: black;
    }
    .avatar {
        img {
            width: 100%;
            border-radius: 50%;
            box-shadow: 0 0 0 1px #1f232826;
        }
        h1 {
            font-weight: 300;
            line-height: 1.5;
            span {
                font-size: 20px;
                display: block;
            }
        }
    }
    .relation {
        font-size: 14px;
        a {
            text-decoration-line: none;
            color: inherit;
        }
    }
`;
