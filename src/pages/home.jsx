import HeroContainer from "../features/hero/hero.component";
import SkillsContainer from "../features/skills/skillList";
import ProjectContainer from "../features/projects/projectsList";
import ContactsContainer from "../features/contact/contact";

export default function HomePage() {
  return (
    <>
      <HeroContainer />
      <ProjectContainer />
      <SkillsContainer />
      <ContactsContainer />
    </>
  );
}
