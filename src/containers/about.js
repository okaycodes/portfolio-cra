import {AboutMe} from "./../components";

export default function AboutMeContainer(){
    return (
        <AboutMe>
            <AboutMe.Title>About Me</AboutMe.Title>
            <AboutMe.Image src="../../images/misc/placeholder-profile.jpg"/>
            <AboutMe.Text>
                I am a Frontend developer based in Lagos Nigeria. I am 25 years old and 
                passionate about life cycle of a web app from conception to UI/UX design
                frontend and backend development as well as deployment and security. I 
                speak English fluently und ich kann auch gut genug Deutsch sprechen.
                (I also speak German well enough).
            </AboutMe.Text>
        </AboutMe>
    )
}