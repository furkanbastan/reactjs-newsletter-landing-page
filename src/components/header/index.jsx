import { NAVITEMS } from "./constants";
import * as S from "./styles";
import Logo from "@/assets/images/logo.svg";
import IconMenu from "@/assets/images/icon-menu.svg";

function Header() {
    return (
        <S.Header>
            <S.Logo to="/">
                <img src={Logo} />
            </S.Logo>
            <S.Navbar>
                {NAVITEMS.map((item) => (
                    <S.NavItem key={item.id} to={item.href}>
                        {item.title}
                    </S.NavItem>
                ))}
            </S.Navbar>
        </S.Header>
    );
}

export { Header };
