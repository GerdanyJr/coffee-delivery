"use client";
import Link from "next/link";
import styles from "./footer.module.css";
import {
  CaretRight,
  ChatCircle,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  Monitor,
  Phone,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import brazilFlag from "../../../../public/assets/svg/BrazilFlag.png";
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.navLinks}>
          <h3>Mapa do site</h3>
          <Link href="home">Início</Link>
          <Link href="checkout">Carrinho</Link>
          <Link href="">Quem somos</Link>
          <Link href="">Investidores</Link>
          <Link href="">Notícias</Link>
          <Link href="">Promoções</Link>
          <Link href="">FAQ Loja Online</Link>
          <Link href="">Celular Legal</Link>
        </div>
        <div className={styles.partnershipp}>
          <h3>Coffee Delivery</h3>
          <Link href="">Do what you can't</Link>
          <Link href="">Junte-se a nós</Link>
          <Link href="">Coffee Delivery Club</Link>
          <Link href="">Coffee Delivery Social</Link>
        </div>

        <div className={styles.contactUs}>
          <h3>Precisa de suporte?</h3>
          <Link href="">
            <ChatCircle size={16} weight="duotone" color="#8047f8" />
            Chat Online
          </Link>
          <Link href="">
            <EnvelopeSimple size={16} weight="duotone" color="#8047f8" />
            E-mail
          </Link>
          <Link href="">
            <Phone size={16} weight="duotone" color="#8047f8" />
            Fale conosco
          </Link>
          <Link href="">
            <Monitor size={16} weight="duotone" color="#8047f8" />
            Assistência Online
          </Link>
          <Link href="">
            <Monitor size={16} weight="duotone" color="#8047f8" />
            Coffee Delivery Care
          </Link>
          <Link href="">
            <Monitor size={16} weight="duotone" color="#8047f8" />
            Coffee Delivery Concierge
          </Link>
        </div>
        <div className={styles.socialLinks}>
          <h3>Siga-nos</h3>
          <div>
            <Link target="_blank" href="https://www.facebook.com">
              <FacebookLogo size={22} color="#ebe5f9" weight="duotone" />
            </Link>
            <Link target="_blank" href="https://twitter.com">
              <TwitterLogo size={22} color="#ebe5f9" weight="duotone" />
            </Link>
            <Link target="_blank" href="https://www.youtube.com">
              <YoutubeLogo size={22} color="#ebe5f9" weight="duotone" />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/">
              <InstagramLogo size={22} color="#ebe5f9" weight="duotone" />
            </Link>
          </div>
        </div>
      </div>
      <span className={styles.copyrigth}>
        Copyright© 1995-2024 Coffee Delivery. Todos os direitos reservados.{" "}
      </span>
      <div className={styles.languageAndRights}>
        <header>
          <nav>
            <Link href="">Acessibilidade</Link>
            <Link href="">Termos & Condições Loja Online</Link>
            <Link href="">Privacidade</Link>
            <Link href="">Legal</Link>
          </nav>
          <button>
            <img src={brazilFlag.src} alt="Bandeira do Brasil" />
            <span>Brasil/Português</span>
            <CaretRight size={16} weight="fill" color="#fff" />
          </button>
        </header>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>
          Distinctio ut sapiente dolores aspernatur laborum tempora asperiores
          soluta deserunt obcaecati aperiam quidem aliquam omnis, autem repellat
          accusamus, cum, laboriosam impedit ratione?
        </p>
        <p>
          Tempore illum dolores ullam nihil neque consequatur culpa possimus
          natus omnis? Corrupti ut minima vitae!
        </p>
      </div>
    </div>
  );
}
