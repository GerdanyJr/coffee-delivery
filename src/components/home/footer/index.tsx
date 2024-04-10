"use client";
import Link from "next/link";
import styles from "./footer.module.css";
import {
  ChatCircle,
  EnvelopeSimple,
  Monitor,
  Phone,
} from "@phosphor-icons/react";
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
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
        <Link href="">Do what you cant</Link>
        <Link href="">Junte-se a nós</Link>
        <Link href="">Coffee Delivery Club</Link>
        <Link href="">Coffee Delivery Social</Link>
      </div>
      <div>
        <h3>Precisa de suporte?</h3>
        <div className={styles.contactUs}>
          <Link href="">
            <ChatCircle size={16} />
            Chat Online
          </Link>
          <Link href="">
            <EnvelopeSimple size={16} />
            E-mail
          </Link>
          <Link href="">
            <Phone size={16} />
            Fale conosco
          </Link>
          <Link href="">
            <Monitor size={16} />
            Assistência Online
          </Link>
          <Link href="">
            <Monitor size={16} />
            Coffee Delivery Care
          </Link>
          <Link href="">
            <Monitor size={16} />
            Coffee Delivery Concierge
          </Link>
        </div>
      </div>
    </div>
  );
}
