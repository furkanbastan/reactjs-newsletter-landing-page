import styled from "styled-components";
import { Link } from "react-router-dom";

export const BreakingNews = styled.aside`
    background-color: var(--very-dark-blue);
    width: calc(var(--tablet) / 3);
    padding: var(--space-5);
    display: flex;
    flex-direction: column;
    gap: var(--space-6);

    @media (width < 1000px){
        width: auto;
    }
`;

export const Title = styled.h2`
    color: var(--soft-orange);
    font-size: var(--fs-5xl);
    font-weight: var(--fw-xl);
`;

export const NewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-10);
    height: var(--height-breaking-news);
    overflow-y: auto;
`;

export const NewItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: var(--space-5);
`;

export const NewTitle = styled(Link)`
    color: var(--off-white);
    font-size: var(--fs-lg);
    font-weight: var(--fw-lg);
    transition: color 250ms ease;

    &:hover{
        color: var(--soft-orange);
    }
`;

export const NewContent = styled.p`
    color: var(--dark-grayish-blue);

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;
