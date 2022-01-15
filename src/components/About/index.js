import { Container, Title, Image, Text } from "./styles/about";


export default function AboutMe({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
} 

AboutMe.Title = function AboutMeTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

AboutMe.Image = function AboutMeImage({...restProps}){
    return <Image {...restProps} />
}

AboutMe.Text = function AboutMeText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}