"use client";
import Link from "next/link";
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
  const containers = "flex flex-col gap-2 py-2";
  const containersTitle = "text-sm font-bold uppercase text-base-title mb-1";
  const containersLink = " text-base-text text-sm";
  const contactLink =
    "flex items-center justify-center h-8 w-8 bg-purple-dark rounded-full";
  return (
    <div className="mt-10 flex flex-col w-dvw font-roboto bg-purple-light ">
      <div className="flex justify-between px-40 py-8">
        <div className={containers}>
          <h3 className={containersTitle}>Mapa do site</h3>
          <Link className={containersLink} href="home">
            Início
          </Link>
          <Link className={containersLink} href="checkout">
            Carrinho
          </Link>
          <Link className={containersLink} href="">
            Quem somos
          </Link>
          <Link className={containersLink} href="">
            Investidores
          </Link>
          <Link className={containersLink} href="">
            Notícias
          </Link>
          <Link className={containersLink} href="">
            Promoções
          </Link>
          <Link className={containersLink} href="">
            FAQ Loja Online
          </Link>
          <Link className={containersLink} href="">
            Celular Legal
          </Link>
        </div>
        <div className={containers}>
          <h3 className={containersTitle}>Coffee Delivery</h3>
          <Link className={containersLink} href="">
            Do what you can't
          </Link>
          <Link className={containersLink} href="">
            Junte-se a nós
          </Link>
          <Link className={containersLink} href="">
            Coffee Delivery Club
          </Link>
          <Link className={containersLink} href="">
            Coffee Delivery Social
          </Link>
        </div>

        <div className={containers}>
          <h3 className={containersTitle}>Precisa de suporte?</h3>
          <Link className="flex items-center gap-1" href="">
            <ChatCircle size={16} weight="duotone" color="#8047f8" />
            Chat Online
          </Link>
          <Link className="flex items-center gap-1" href="">
            <EnvelopeSimple size={16} weight="duotone" color="#8047f8" />
            E-mail
          </Link>
          <Link className="flex items-center gap-1" href="">
            <Phone size={16} weight="duotone" color="#8047f8" />
            Fale conosco
          </Link>
          <Link className="flex items-center gap-1" href="">
            <Monitor size={16} weight="duotone" color="#8047f8" />
            Assistência Online
          </Link>
          <Link className="flex items-center gap-1" href="">
            <Monitor size={16} weight="duotone" color="#8047f8" />
            Coffee Delivery Care
          </Link>
          <Link className="flex items-center gap-1" href="">
            <Monitor size={16} weight="duotone" color="#8047f8" />
            Coffee Delivery Concierge
          </Link>
        </div>
        <div className={containers}>
          <h3 className={containersTitle}>Siga-nos</h3>
          <div className="flex gap-2">
            <Link
              className={contactLink}
              target="_blank"
              href="https://www.facebook.com"
            >
              <FacebookLogo size={22} color="#ebe5f9" weight="duotone" />
            </Link>
            <Link
              className={contactLink}
              target="_blank"
              href="https://twitter.com"
            >
              <TwitterLogo size={22} color="#ebe5f9" weight="duotone" />
            </Link>
            <Link
              className={contactLink}
              target="_blank"
              href="https://www.youtube.com"
            >
              <YoutubeLogo size={22} color="#ebe5f9" weight="duotone" />
            </Link>
            <Link
              className={contactLink}
              target="_blank"
              href="https://www.instagram.com/"
            >
              <InstagramLogo size={22} color="#ebe5f9" weight="duotone" />
            </Link>
          </div>
        </div>
      </div>
      <span className="text-xs uppercase text-base-title py-8 px-40">
        Copyright© 1995-2024 Coffee Delivery. Todos os direitos reservados.{" "}
      </span>
      <div className="flex flex-col bg-base-label text-white py-8 px-40">
        <header className="flex justify-between mb-4">
          <nav className="flex gap-5">
            <Link className="font-bold uppercase leading-snug" href="">
              Acessibilidade
            </Link>
            <Link className="font-bold uppercase leading-snug" href="">
              Termos & Condições Loja Online
            </Link>
            <Link className="font-bold uppercase leading-snug" href="">
              Privacidade
            </Link>
            <Link className="font-bold uppercase leading-snug" href="">
              Legal
            </Link>
          </nav>
          <button className="flex items-center gap-2 h-5 font-bold uppercase cursor-pointer font-roboto">
            <img
              className="h-6"
              src={brazilFlag.src}
              alt="Bandeira do Brasil"
            />
            <span>Brasil/Português</span>
            <CaretRight size={16} weight="fill" color="#fff" />
          </button>
        </header>
        <p className="text-sm leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </p>
        <p className="text-sm leading-snug">
          Distinctio ut sapiente dolores aspernatur laborum tempora asperiores
          soluta deserunt obcaecati aperiam quidem aliquam omnis, autem repellat
          accusamus, cum, laboriosam impedit ratione?
        </p>
        <p className="text-sm leading-snug">
          Tempore illum dolores ullam nihil neque consequatur culpa possimus
          natus omnis? Corrupti ut minima vitae!
        </p>
      </div>
    </div>
  );
}
