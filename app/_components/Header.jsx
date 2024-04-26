"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

export default function Header() {
    const [name, setName] = useState("");
    const router = useRouter();

    return (
        <HeaderDiv>
            <FaGithub className="go-home" color="white" size="36" onClick={() => router.push("/")} />
            <input
                value={name}
                placeholder="User Search"
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        router.push(`/users/${name}`);
                    }
                }}
            />
        </HeaderDiv>
    );
}

const HeaderDiv = styled.div`
    background-color: #24292e;
    padding: 15px;
    display: flex;

    .go-home {
        cursor: pointer;
    }
    input {
        align-self: center;
        background-color: hsla(0, 0%, 100%, 0.125);
        margin-left: 10px;
        padding: 0 12px;
        border: none;
        border-radius: 5px;
        outline: none;
        color: white;
        width: 300px;
        height: 30px;
    }
`;
