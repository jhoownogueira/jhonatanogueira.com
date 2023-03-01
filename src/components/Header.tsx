import {HeaderContainer} from "@/styles/components/Header";
import {useRouter} from "next/router";
import Link from "next/link";

export function Header() {
    const router = useRouter();
    return (
        <HeaderContainer>
            <nav>
                <ul>
                    <li>
                        <Link href="/" className={router.pathname == "/" ? "activeLink" : ""}>Início</Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className={router.pathname == "/" ? "activeLink" : ""}>Portifólio</Link>
                    </li>
                    <li>
                        <img src="../images/logoSmall.svg" alt="Logo Pequena"/>
                    </li>
                    <li>
                        <Link href="/sobre" className={router.pathname == "/" ? "activeLink" : ""}>Sobre</Link>
                    </li>
                    <li>
                        <Link href="/blog" className={router.pathname == "/" ? "activeLink" : ""}>Blog</Link>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}