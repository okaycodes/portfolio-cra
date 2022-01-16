import {Container, Inner, Title, Project} from './styles/projects'


export default function Projects({children, ...restProps}){
    return <Container {...restProps}><Inner>{children}</Inner></Container>
}

Projects.Title = function ProjectTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}
