import * as S from "./styles";
import Img from "@/assets/images/image-web-3-desktop.jpg";

function MainNew() {
    return (
        <S.MainNew>
            <S.Image src={Img} />
            <S.ContentWrapper>
                <S.Title>The Bright Future of Web 3.0?</S.Title>
                <S.ContentDetailWrapper>
                    <S.Content>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo esse reprehenderit eius libero magni alias
                        architecto nesciunt animi commodi. Architecto numquam
                        vero provident quia repellat dolore odit ad dolores
                        cumque!
                    </S.Content>
                    <S.MoreButton variant="primary">Read More</S.MoreButton>
                </S.ContentDetailWrapper>
            </S.ContentWrapper>
        </S.MainNew>
    );
}

export { MainNew };
