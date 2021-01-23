import { faBars, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/link";
import { Box_header, Box_logo, Container, Logo, Menu_isMobile, Menu_isDesktop } from "./styled";

const Header = () => {
    const router = useRouter();
    console.log(router.pathname)
    return (
        <>
            <Container>
                <Box_header>
                    <Box_logo>
                        <Logo src="/static/img/block.png" />
                        <a>BLOCKCHAIN</a>
                    </Box_logo>
                    <Menu_isDesktop>
                        <ul>
                            <Link href="/wallet"><a><li className={`${router.pathname === "/wallet" ? "pathname" : " "}`}>Wallet</li></a></Link>
                            <Link href="/news"><a><li className={`${router.pathname === "/news" ? "pathname" : " "}`}>News</li></a></Link>
                            <Link href="/about"><a><li className={`${router.pathname === "/about" ? "pathname" : " "}`}>About</li></a></Link>
                            <Link href="/terms"><a><li className={`${router.pathname === "/terms" ? "pathname" : " "}`}>Terms</li></a></Link>
                        </ul>
                    </Menu_isDesktop>
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

export default Header;