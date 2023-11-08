import styled from "styled-components";

export const HeroSection = styled.section`
    display: flex;
    justify-content: space-between;
    min-height: calc(100vh - 2 * var(--little-row));
    gap: var(--space-6);

    @media(width < 1000px){
        display: block;
    }
`;
