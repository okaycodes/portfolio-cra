import { Container, Inner, Title, List, ListTitle, ListItems, Item, Icon, Name } from "./styles/skills";


export default function SkillSet({children, ...restProps}){
    return <Container {...restProps}><Inner>{children}</Inner></Container>
}

SkillSet.Title = function SkillSetTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

SkillSet.List = function SkillSetList({children, ...restProps}){
    return <List {...restProps}>{children}</List>
}

SkillSet.ListTitle = function SkillSetListTitle({children, ...restProps}){
    return <ListTitle {...restProps}>{children}</ListTitle>
}

SkillSet.ListItems = function SkillSetListItems({children, ...restProps}){
    return <ListItems {...restProps}>{children}</ListItems>
}

SkillSet.Item = function SkillSetItem({children, ...restProps}){
    return <Item {...restProps}>{children}</Item>
}

SkillSet.Icon = function SkillSetIcon({children, ...restProps}){
    return <Icon {...restProps} />
}

SkillSet.Name = function SkillSetName({children, ...restProps}){
    return <Name {...restProps}>{children}</Name>
}