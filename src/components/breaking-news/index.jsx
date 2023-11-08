import { BREAKINGNEWS } from "./constants";
import * as S from "./styles";

function BreakingNews() {
    return (
        <S.BreakingNews>
            <S.Title>New</S.Title>
            <S.NewsWrapper>
                {BREAKINGNEWS.map(item => (
                    <S.NewItem key={item.id}>
                        <S.NewTitle>{item.title}</S.NewTitle>
                        <S.NewContent>{item.content}</S.NewContent>
                    </S.NewItem>
                ))}
            </S.NewsWrapper>
        </S.BreakingNews>
    );
}

export { BreakingNews };
