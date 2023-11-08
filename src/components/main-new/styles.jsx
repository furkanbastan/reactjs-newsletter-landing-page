import styled from "styled-components";
import { Button } from "@/components/button";

export const MainNew = styled.div`
    display: grid;
    grid-template-columns: calc(var(--tablet) * 2 / 3);
    grid-template-rows: 2fr 1fr;

    @media (width < 1000px){
        display: block;
    }
`;

export const Image = styled.img`
    height: 100%;
`;

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-5);
    padding-top: var(--space-5);

    @media (width < 1000px){
        display: block;
        padding: 0;
        margin-block: var(--space-5);
    }
`;

export const Title = styled.h1`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    font-size: var(--fs-5xl);
    font-weight: var(--fw-xl);

    @media (width < 1000px){
        margin-bottom: var(--space-5);
    }
`;

export const ContentDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: self-start; /* grid ile hizalama */
`;

export const Content = styled.p`
    color: var(--dark-grayish-blue);

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const MoreButton = styled(Button)`
    letter-spacing: calc(var(--space-1) / 2);

    @media (width < 1000px){
        margin-top: var(--space-5);
    }
`;
