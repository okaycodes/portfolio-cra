import { SkillSet } from "../components";
import * as SKILLS from "../constants/skills"

export default function SkillSetContainer(){
    
    return (
        <SkillSet>
            <SkillSet.Title>Skill Set</SkillSet.Title>
            <SkillSet.List>
                <SkillSet.ListTitle>CURRENTLY WORKING WITH</SkillSet.ListTitle>
                <SkillSet.ListItems>
                    {SKILLS.proficient.map(i=>{
                        return (
                            <SkillSet.Item key={i.id}>
                                <SkillSet.Icon src={i.image}/>
                                <SkillSet.Name>{i.name}</SkillSet.Name>        
                            </SkillSet.Item>
                        )
                    })}
                </SkillSet.ListItems>
            </SkillSet.List>
            <SkillSet.List>
                <SkillSet.ListTitle>CURRENTLY WORKING ON</SkillSet.ListTitle>
                <SkillSet.ListItems>
                    {SKILLS.learning.map(i=>{
                        return (
                            <SkillSet.Item key={i.id}>
                                <SkillSet.Icon src={i.image}/>
                                <SkillSet.Name>{i.name}</SkillSet.Name>        
                            </SkillSet.Item>
                        )
                    })}
                </SkillSet.ListItems>
            </SkillSet.List>
            <SkillSet.List>
                <SkillSet.ListTitle>FUTURE TECHNOLOGIES</SkillSet.ListTitle>
                <SkillSet.ListItems>
                    {SKILLS.future.map(i=>{
                        return (
                            <SkillSet.Item key={i.id}>
                                <SkillSet.Icon src={i.image}/>
                                <SkillSet.Name>{i.name}</SkillSet.Name>        
                            </SkillSet.Item>
                        )
                    })}
                </SkillSet.ListItems>
            </SkillSet.List>
        </SkillSet>
    )
}