import * as S from "./styles";

function Button({ variant, children, ...props }) {
    return (
        <S.Button $variant={variant} {...props}>
            {children}
        </S.Button>
    );
}

export { Button };
