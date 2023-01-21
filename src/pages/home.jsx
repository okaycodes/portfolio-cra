import HeroContainer from "../features/hero/hero.container";
import SkillsContainer from "../features/skills/skillList";
import ProjectContainer from "../features/projects/projectsList";
import ContactsContainer from "../features/contact/contact";

export default function HomePage({ switchTheme, themeMode }) {
  return (
    <>
      <HeroContainer />
      <ProjectContainer />
      <SkillsContainer />
      <ContactsContainer />
    </>
  );
}
