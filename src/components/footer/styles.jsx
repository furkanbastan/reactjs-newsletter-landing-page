import styled from "styled-components";

export const Footer = styled.footer`
    height: 100%;
    display: flex;
    align-items: center;
    gap: calc(var(--space-10) * 2);

    @media (width < 1000px){
        display: block;
        width: auto;
        height: max-content;
        overflow: hidden;
        margin-block: var(--space-5);
    }
`;

export const NewItem = styled.div`
    display: flex;
    gap: var(--space-3);
    width: 560px;

    @media (width < 1000px){
        margin-bottom: var(--space-2);
    }
`;

export const Img = styled.img`
    display: block;
    width: calc(var(--height-footer-new-image) * 3 / 4);
    height: var(--height-footer-new-image);
`;

export const ContentWrapper = styled.div`
    padding-block: var(--space-3);
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
`;

export const Title = styled.h5`
    color: var(--very-dark-blue);
    font-weight: var(--fw-lg);
    transition: color 250ms ease;

    &:hover {
        color: var(--soft-red);
    }
`;

export const Content = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: var(--dark-grayish-blue);
`;
