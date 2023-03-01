import {FooterContainer} from "@/styles/components/Footer";
import Link from "next/link";

export function Footer() {
    return (
        <FooterContainer>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <img src="../images/githubLogo.svg" alt="Github"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <img src="../images/linkedinLogo.svg" alt="Linkedin"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </FooterContainer>
    )
}