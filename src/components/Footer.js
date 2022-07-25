import Twitter from "../images/Twitter.png"
import Facebook from "../images/Facebook.png"
import Instagram from "../images/Instagram.png"
import Github from "../images/Github.png"
import contactLink from "./ContactLinks"

export default function footer(){
   return(
    <footer>
        <a href={contactLink.twitter} target="_blank"> <img className="social--icons" src= {Twitter}/></a>
        <a href={contactLink.facebook} target="_blank"> <img className="social--icons" src= {Facebook}/></a>
        <a href={contactLink.instagram} target="_blank"> <img className="social--icons" src= {Instagram}/></a>
        <a href={contactLink.github} target="_blank"> <img className="social--icons" src= {Github}/></a>
    </footer>
   )
}