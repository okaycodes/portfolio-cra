import HeroContainer from "../features/hero/hero.component";
import SkillsContainer from "../features/skills/skillList";
import ProjectContainer from "../features/projects/projects.component";
import ContactsContainer from "../features/contact/contact.container";

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
