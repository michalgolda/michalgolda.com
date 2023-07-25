import Project from "@/components/Project/Project";
import SectionTitle from "../SectionTitle";
import type { Project as ProjectType } from "@/types";
import { StyledContainer, StyledProjectList } from "./Projects.styled";

export type ProjectsProps = {
  projects: ProjectType[];
};

export default function ProjectsProps({ projects }: ProjectsProps) {
  return (
    <StyledContainer id="projects" as="section">
      <SectionTitle>Projekty</SectionTitle>
      <StyledProjectList>
        {projects.map((project, index) => (
          <li key={index}>
            <Project
              name={project.name}
              description={project.description}
              coverImageSrc={project.coverImageSrc}
              githubLink={project.githubLink}
              technologyStack={project.technologyStack}
            />
          </li>
        ))}
      </StyledProjectList>
    </StyledContainer>
  );
}
