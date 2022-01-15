import {Container, Title} from './styles/home'


export default function Home({children, restProps}){
    return <Container {...restProps}>{children}</Container>
}

Home.Title = function HomeTitle({children, restProps}){
    return <Title {...restProps}>{children}</Title>
}
