import {Container, Inner, Title, Project} from './styles/projects'


export default function Projects({children, ...restProps}){
    return <Container {...restProps}><Inner>{children}</Inner></Container>
}

Projects.Title = function ProjectsTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Projects.Project = function Project({children, ...restProps}){
    return <Project {...restProps}>{children}</Project>
}