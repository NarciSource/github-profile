"use client";

import styled from "styled-components";

export default function NotFound() {
    return (
        <NotFoundDiv>
            <img className="background" src="/404.jpg" />
            <div className="foreground">
                <img src="/404-1.png" />
                <img src="/404-2.png" />
                <img src="/404-3.png" />
            </div>
        </NotFoundDiv>
    );
}

const NotFoundDiv = styled.div`
    img {
        position: absolute;
    }

    .background {
        z-index: 1;
        width: 110%;
        height: 370px;
    }
    .foreground {
        position: relative;
        width: 940px;
        height: 370px;
        clear: both;
        margin-right: auto;
        margin-left: auto;

        img:nth-child(1) {
            top: 72px;
            left: 72px;
            z-index: 10;
        }
        img:nth-child(2) {
            top: 94px;
            left: 356px;
            z-index: 9;
        }
        img:nth-child(3) {
            top: 150px;
            left: 432px;
            z-index: 8;
        }
    }
`;
