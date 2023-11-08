import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Button = styled(Link)`
    padding-block: var(--space-3);
    padding-inline: var(--space-6);
    font-weight: var(--fw-lg);
    font-family: 'Inter', sans-serif;
    font-size: var(--fs-sm);
    transition: background-color 250ms ease;

    ${(props) => {
        switch (props.$variant) {
            case "primary":
                return css`
                    background-color: var(--soft-red);
                    color: var(--off-white);

                    &:hover {
                        background-color: var(--very-dark-blue);
                    }
                `;
        }
    }}
`;
