import { faBars, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box_header, Box_logo, Container, Logo, Menu_isMobile } from "./styled";

const Header_Home = () => {
    return (
        <>
            <Container>
                <Box_header>
                    <Box_logo>
                        <Logo src="/static/img/block.png" />
                        <a>BlOCKCHAIN</a>
                    </Box_logo>
                    <Menu_isMobile>
                        <button><FontAwesomeIcon icon={faBell} /></button>
                        <button><FontAwesomeIcon icon={faUser} /></button>
                        <button><FontAwesomeIcon icon={faBars} /></button>
                    </Menu_isMobile>
                </Box_header>
            </Container>
        </>
    )
}

export default Header_Home;