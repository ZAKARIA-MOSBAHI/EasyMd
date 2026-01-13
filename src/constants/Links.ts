import type { ComponentType, SVGProps } from "react"
import LinkedinIcon from "../components/ui/icons/LinkedinIcon"
import GithubIcon from "../components/ui/icons/GithubIcon"
import WebsiteIcon from "../components/ui/icons/WebsiteIcon"
import CrossIcon from "../components/ui/icons/CrossIcon"

type LinkItem = {
  name: string
  path: string
  icon: ComponentType<SVGProps<SVGSVGElement>>, iconWidth : number ,
    iconHeight : number ,
}

export const Links: LinkItem[] = [
  {
    name: "Linkedin",
    path: "/path-to-linkedin-profile",
    icon: LinkedinIcon,
    iconWidth : 28 ,
    iconHeight : 32 ,
    
  },
   {
    name: "Github Repo",
    path: "/path-to-github-repo",
    icon: GithubIcon,
    iconWidth : 28 ,
    iconHeight : 32 ,
    
  }, 
   {
    name: "Report an issue",
    path: "/path-to-issues",
    icon: CrossIcon,
    iconWidth : 32 ,
    iconHeight : 32 ,
  },
   {
    name: "Portfolio",
    path: "/path-to-portfolio-website",
    icon: WebsiteIcon,
    iconWidth : 28 ,
    iconHeight : 32 ,   
  }

]
