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
        width: 100%;
        height: 370px;
    }
    .foreground {
        position: relative;
        width: 100%;
        height: 370px;
        clear: both;
        margin-right: auto;
        margin-left: auto;

        img:nth-child(1) {
            top: 20%;
            left: 22%;
            z-index: 10;
        }
        img:nth-child(2) {
            top: 94px;
            left: 45%;
            z-index: 9;
        }
        img:nth-child(3) {
            top: 150px;
            left: 50%;
            z-index: 8;
        }
        @media screen and (max-width: 500px) {
            img:nth-child(1) {
                top: 30%;
                left: 15%;
                width: 40%;
            }
            img:nth-child(2) {
                top: 30%;
                left: 60%;
                width: 35%;
            }
            img:nth-child(3) {
                top: 40%;
                left: 0px;
            }
        }
    }
`;
