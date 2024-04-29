"use client";
import Link from "next/link";
import {
  YoutubeLogo,
  CaretRight,
  ChatCircle,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  Monitor,
  Phone,
  TwitterLogo,
} from "@phosphor-icons/react";
import brazilFlag from "../../../../public/assets/img/BrazilFlag.png";
export default function Footer() {
  const containers = "flex flex-col gap-2 py-2";
  const containersTitle =
    "text-sm font-bold uppercase text-base-title mb-1 dark:text-white";
  const containersLink = " text-base-text text-sm dark:text-gray-400";
  const contactLink =
    "flex items-center justify-center h-8 w-8 bg-purple-dark rounded-full dark:bg-purple-light";
  return (
    <div className="flex flex-col mt-10 w-dvw font-roboto bg-purple-light dark:bg-purple-dark ">
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
          <Link className="flex items-center gap-1 dark:text-gray-200" href="">
            <ChatCircle
              size={16}
              weight="duotone"
              className="text-purple dark:text-purple-light"
            />
            Chat Online
          </Link>
          <Link className="flex items-center gap-1 dark:text-gray-200" href="">
            <EnvelopeSimple
              size={16}
              weight="duotone"
              className="text-purple dark:text-purple-light"
            />
            E-mail
          </Link>
          <Link className="flex items-center gap-1 dark:text-gray-200" href="">
            <Phone
              size={16}
              weight="duotone"
              className="text-purple dark:text-purple-light"
            />
            Fale conosco
          </Link>
          <Link className="flex items-center gap-1 dark:text-gray-200" href="">
            <Monitor
              size={16}
              weight="duotone"
              className="text-purple dark:text-purple-light"
            />
            Assistência Online
          </Link>
          <Link className="flex items-center gap-1 dark:text-gray-200" href="">
            <Monitor
              size={16}
              weight="duotone"
              className="text-purple dark:text-purple-light"
            />
            Coffee Delivery Care
          </Link>
          <Link className="flex items-center gap-1 dark:text-gray-200" href="">
            <Monitor
              size={16}
              weight="duotone"
              className="text-purple dark:text-purple-light"
            />
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
              <FacebookLogo
                size={22}
                className="text-white dark:text-purple"
                weight="duotone"
              />
            </Link>
            <Link
              className={contactLink}
              target="_blank"
              href="https://twitter.com"
            >
              <TwitterLogo
                size={22}
                className="text-white dark:text-purple"
                weight="duotone"
              />
            </Link>
            <Link
              className={contactLink}
              target="_blank"
              href="https://www.youtube.com"
            >
              <YoutubeLogo
                size={22}
                className="text-white dark:text-purple"
                weight="duotone"
              />
            </Link>
            <Link
              className={contactLink}
              target="_blank"
              href="https://www.instagram.com/"
            >
              <InstagramLogo
                size={22}
                className="text-white dark:text-purple"
                weight="duotone"
              />
            </Link>
          </div>
        </div>
      </div>

      <span className="px-40 py-8 text-xs uppercase text-base-title dark:text-gray-200">
        Copyright© 1995-2024 Coffee Delivery. Todos os direitos reservados.{" "}
      </span>
      <div className="flex flex-col px-40 py-8 text-white bg-base-label dark:bg-gray-500">
        <header className="flex justify-between mb-4">
          <nav className="flex gap-5">
            <Link className="font-bold leading-snug uppercase" href="">
              Acessibilidade
            </Link>
            <Link className="font-bold leading-snug uppercase" href="">
              Termos & Condições Loja Online
            </Link>
            <Link className="font-bold leading-snug uppercase" href="">
              Privacidade
            </Link>
            <Link className="font-bold leading-snug uppercase" href="">
              Legal
            </Link>
          </nav>
        </header>
      </div>
      <footer>
        <div>
          <button className="flex items-center h-5 gap-2 font-bold uppercase cursor-pointer font-roboto">
            <img
              className="h-6"
              src={brazilFlag.src}
              alt="Bandeira do Brasil"
            />
            <span>Brasil/Português</span>
            <CaretRight size={16} weight="fill" color="#fff" />
          </button>

          <p className="text-sm leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-sm leading-snug">
            Distinctio ut sapiente dolores aspernatur laborum tempora asperiores
            soluta deserunt obcaecati aperiam quidem aliquam omnis, autem
            repellat accusamus, cum, laboriosam impedit ratione?
          </p>
          <p className="text-sm leading-snug">
            Tempore illum dolores ullam nihil neque consequatur culpa possimus
            natus omnis? Corrupti ut minima vitae!
          </p>
        </div>
      </footer>
    </div>
  );
}