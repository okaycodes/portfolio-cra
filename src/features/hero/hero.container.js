import Hero from "./hero";

export default function HeroContainer() {
  return (
    <Hero>
      <Hero.Avatar></Hero.Avatar>
      <Hero.Intro>
        <Hero.Text>Hi there, My name is </Hero.Text>
        <Hero.Title>Favour O. Okenana.</Hero.Title>
        <Hero.Text> I am a</Hero.Text>
        <Hero.TextAccent> Software Developer. </Hero.TextAccent>
      </Hero.Intro>
      <Hero.Intro>
        <Hero.Text>
          I am a fullstack software developer specializing in frontend software
          development targeting both web and mobile platfroms. I take great
          pleasure in learning new technologies and architecting scalable, clean
          and performant applications.
        </Hero.Text>
      </Hero.Intro>
    </Hero>
  );
}
