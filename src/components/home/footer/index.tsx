import Link from "next/link";
import brazilFlag from "@/../public/assets/img/BrazilFlag.png";
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
} from "@phosphor-icons/react/dist/ssr";
import { ContactLink } from "./contactLink.tsx";
import { FooterLink } from "./footerLink";
import { FooterColumn } from "./footerColumn";
export function Footer() {
  return (
    <footer className="flex flex-col w-full mt-10 font-roboto bg-purple-light ">
      <div className="px-20 pb-8">
        <div className="flex justify-between py-8">
          <FooterColumn title="Mapa do site">
            <Link href="home">Início</Link>
            <Link href="checkout">Carrinho</Link>
            <Link href="">Quem somos</Link>
            <Link href="">Investidores</Link>
            <Link href="">Notícias</Link>
            <Link href="">Promoções</Link>
            <Link href="">FAQ Loja Online</Link>
            <Link href="">Celular Legal</Link>
          </FooterColumn>
          <FooterColumn title="Coffee Delivery">
            <Link href="">Do what you can't</Link>
            <Link href="">Junte-se a nós</Link>
            <Link href="">Coffee Delivery Club</Link>
            <Link href="">Coffee Delivery Social</Link>
          </FooterColumn>
          <FooterColumn title="Precisa de suporte?">
            <FooterLink
              href=""
              logo={<ChatCircle size={16} weight="duotone" color="#8047f8" />}
              title="Chat Online"
            />
            <FooterLink
              href=""
              logo={
                <EnvelopeSimple size={16} weight="duotone" color="#8047f8" />
              }
              title="E-mail"
            />
            <FooterLink
              href=""
              logo={<Phone size={16} weight="duotone" color="#8047f8" />}
              title="Assistência Online"
            />
            <FooterLink
              href=""
              logo={<Monitor size={16} weight="duotone" color="#8047f8" />}
              title="Coffee Delivery Care"
            />
            <FooterLink
              href=""
              logo={<Monitor size={16} weight="duotone" color="#8047f8" />}
              title="Coffee Delivery Concierge"
            />
          </FooterColumn>
          <FooterColumn title="Siga-nos">
            <div className="flex gap-2">
              <ContactLink
                href="https://www.facebook.com"
                logo={
                  <FacebookLogo size={22} color="#ebe5f9" weight="duotone" />
                }
              />
              <ContactLink
                href="https://twitter.com"
                logo={
                  <TwitterLogo size={22} color="#ebe5f9" weight="duotone" />
                }
              />
              <ContactLink
                href="https://www.youtube.com"
                logo={
                  <YoutubeLogo size={22} color="#ebe5f9" weight="duotone" />
                }
              />
              <ContactLink
                href="https://www.instagram.com/"
                logo={
                  <InstagramLogo size={22} color="#ebe5f9" weight="duotone" />
                }
              />
            </div>
          </FooterColumn>
        </div>
        <span className="text-xs uppercase text-base-title">
          Copyright© 1995-2024 Coffee Delivery. Todos os direitos reservados.
        </span>
      </div>

      <div className="flex flex-col px-20 py-8 text-white bg-base-label">
        <div className="flex justify-between mb-4">
          <ul className="flex gap-5 font-bold leading-snug uppercase">
            <li>
              <Link href="">Acessibilidade</Link>
            </li>
            <li>
              <Link href="">Termos & Condições Loja Online</Link>
            </li>
            <li>
              <Link href="">Privacidade</Link>
            </li>
            <li>
              <Link href="">Legal</Link>
            </li>
          </ul>

          <button className="flex items-center h-5 gap-2 font-bold uppercase cursor-pointer font-roboto">
            <img
              className="h-6"
              src={brazilFlag.src}
              alt="Bandeira do Brasil"
            />
            <span>Brasil/Português</span>
            <CaretRight size={16} weight="fill" color="#fff" />
          </button>
        </div>
        <p className="text-sm leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
    </footer>
  );
}
