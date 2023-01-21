import ResumeItem from "../features/resume/resume";

export default function Resume() {
  return (
    <>
      <ResumeItem pdf="/pdf/resume-fullstack1.pdf" pageNumber={1} />
      <ResumeItem pdf="/pdf/resume-fullstack2.pdf" pageNumber={2} />
    </>
  );
}
