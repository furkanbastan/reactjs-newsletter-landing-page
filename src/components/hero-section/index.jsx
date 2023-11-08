import { BreakingNews } from "@/components/breaking-news";
import { MainNew } from "@/components/main-new";
import * as S from "./styles";

function HeroSection(){
    return (
        <S.HeroSection>
            <MainNew/>
            <BreakingNews/>
        </S.HeroSection>
    );
}

export{HeroSection};