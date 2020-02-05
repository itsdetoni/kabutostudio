/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <img src="https://i.imgur.com/2IEDFV5.png" alt="drawing" width="250" />
        <BigTitle>Kabuto Studio</BigTitle>
        <Subtitle>
          Nós criamos experiências digitais centradas no consumidor moderno.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Portfólio</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Black Dragons"
            link="https://www.behance.net/gallery/89193073/Black-Dragons-E-Sports"
            bg="linear-gradient(to right, #F7971E 0%, #FFD200 100%)"
          >
            Projeto completo de social media para uma equipe de CS:GO
            profissional, a Black Dragons E-Sports.
          </ProjectCard>
          <ProjectCard
            title="Anime T-Shirt"
            link="https://www.behance.net/gallery/87032701/Anime-T-Shirt-Design"
            bg="linear-gradient(to right, #f953c6 0%, #b91d73 100%)"
          >
            Estampas de camisetas personalizadas para a Enjoystick, com a
            temática geek/anime.
          </ProjectCard>
          <ProjectCard
            title="Characters"
            link="https://www.behance.net/gallery/91105987/Personagens-Characters"
            bg="linear-gradient(to right, #00C9FF 0%, #92FE9D 100%)"
          >
            Projeto explorando técnicas de character design e personificação.
          </ProjectCard>
          <ProjectCard
            title="Wakanda Forever"
            link="https://www.behance.net/gallery/80449523/Wakanda-Forever"
            bg="linear-gradient(to right, #0F2027 0%, #203A43 50%, #2C5364 100%)"
          >
            Pela primeira vez na história, 3 jogadores africanos são os
            artilheiros da melhor liga de futebol do mundo!
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>Sobre nós</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Kabuto Studio" />
          <AboutSub>
            <i>"Kabuto? Mas que raios é Kabuto?"</i>
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          <i>Kabuto</i>, em japonês『カブト』- vocês verão muitas referências
          orientais por aqui - significa capacete. Sabe, aqueles que eram
          utilizados pelos samurais... Esses caps, além de proteger,
          significavam a personificação de seu poder, status, honra e
          determinação em batalha. É como nos sentimos com a criatividade, nosso
          Kabuto, nossa personificação de sentimentos e principal armamento para
          as incontáveis batalhas da vida. De quebra, esta palavra também
          significa besouro - espécie de inseto que mais possui subespécies,
          aproximadamente 3000 - Ou seja, somos muitos!! Portanto, vista seu
          Kabuto e bora encarar a sua batalha!
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Entre em contato</Title>
          <ContactText>
            Envie um <a href="mailto:contato@kabutostudio.com">e-mail</a> ou
            visite nossas páginas:{" "}
            <a href="https://www.behance.net/kabutostudio">Behance</a> &{" "}
            <a href="https://www.instagram.com/kabutostudio/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          Copyright &copy; 2020. Alguns direitos reservados. Feito com ❤ por{" "}
          <a href="https://growthmedia.com.br">GrowthMedia</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
