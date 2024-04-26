"use client";

import styled from "styled-components";

export default function Layout({ children }) {
    return <LayoutDiv>{children}</LayoutDiv>;
}

const LayoutDiv = styled.div`
    display: flex;
`;
