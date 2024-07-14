import type { Info } from "../utils/types"
import projects from "./projects"

const info: Info = {
    name: "Nitesh Singh",
    gender: "Male",
    description: "Developing real life super power",
    url: "https://nitesh-singh.vercel.app/",
    profile_image: "/assets/images/profile.jpg",
    location: {
        city: "Haldwani",
        state: "Uttarakhand",
        country: "India",
    },
    work_experience: [
        {
            company_name: "RFM360",
            description: ["sada", "wa"],
            start: "May 2022",
            end: "December 2022",
            location: "remote",
            position: "Python Developer",
            skills: ["Django"]
        }
    ],
    about: "Hi there! I'm Nitesh Singh, a full-stack developer who specializes in transforming bugs into features. With a robust expertise in front-end and back-end development, my goal is to craft seamless digital experiences that go beyond just functioning on my own computer.",
    education: [
        {
            course: "Bachelor of Computer Applications",
            institution: "Graphic Era Hill University",
            start: "September 2022",
            end: "Present",
            location: "Bhimtal, Uttarakhand"
        },
        {
            course: "Intermediate",
            institution: "Rainbow Academy Sr. Sec. School",
            start: "April 2019",
            end: "March 2020",
            location: "Haldwani, Uttarakhand"
        },
        {
            course: "High School",
            institution: "Rainbow Academy Sr. Sec. School",
            start: "April 2017",
            end: "March 2018",
            location: "Haldwani, Uttarakhand"
        }
    ],
    social_links: [
        {
            name: "Github",
            url: "https://github.com/niteshsingh2001"
        },
        {
            name: "E-mail",
            url: "singhnitesh.2001@outlook.com"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/nitesh-singh-641769209/"
        }
    ],
    certifications: [
        "Python for beginners"
    ],
    projects: projects,
    skills: ["HTML", "CSS", "JavaScript", "Python", "PHP", "ReactJS", "NextJS", "NodeJS", "Django", "Git/Github", "Redux Toolkit", "MySQL", "MongoDB"]
}

export default info