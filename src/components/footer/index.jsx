import { Link } from "react-router-dom";
import { NEWS } from "./constants";
import * as S from "./styles";
import Img from "@/assets/images/image-retro-pcs.jpg";

function Footer() {
    return (
        <S.Footer>
            {NEWS.map((item) => (
                <S.NewItem key={item.id}>
                    <Link>
                        <S.Img src={`./assets/images/${item.image}`} />
                    </Link>
                    <S.ContentWrapper>
                        <Link>
                            <S.Title>{item.title}</S.Title>
                        </Link>
                        <S.Content>{item.content}</S.Content>
                    </S.ContentWrapper>
                </S.NewItem>
            ))}
        </S.Footer>
    );
}

export { Footer };
