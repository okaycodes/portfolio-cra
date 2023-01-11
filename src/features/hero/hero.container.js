import Hero from "./hero";

export default function HeroContainer() {
  return (
    <Hero>
      <Hero.Avatar></Hero.Avatar>
      <Hero.Text>Hi, there My name is</Hero.Text>
      <Hero.Title>Okenana Favour</Hero.Title>
      <Hero.Text>I am a</Hero.Text>
      <Hero.TextAccent>Software Developer</Hero.TextAccent>
      <Hero.Text>
        I am a fullstack software developer specializing in frontend software
        development.
      </Hero.Text>
    </Hero>
  );
}
