import type { Info } from "../utils/types"
import projects from "./projects"

const info: Info = {
    name: "Nitesh Singh",
    gender: "Male",
    description: "Developing real life super power",
    url: "ni30.vercel.app",
    profile_image: "/assets/images/profile.jpg",
    location: {
        city: "Haldwani",
        state: "Uttarakhand",
        country: "India",
    },
    work_experience: [
        {
            company_name: "RFM360",
            description: ["Worked on the Workspace app using Django, HTML, CSS, and JavaScript. Users will be able to create their own workspaces and use only those apps that are assigned to them in that particular space.", "I also worked on the finance app of the project and built a feature that lets users view and create s invoices.", "Worked with Git and GitHub for collaboration with other developers."],
            start: "May 2022",
            end: "December 2022",
            location: "remote",
            position: "Python Developer",
            skills: ["Django", "HTML", "CSS", "JS"]
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
    social_links: {
        github: "https://github.com/writer-nitesh",
        linkedin: "https://www.linkedin.com/in/nitesh-singh-641769209/",
        email: "singhnitesh.2001@outlook.com",
    },
    certifications: [
        {
            link: "https://drive.google.com/file/d/11mY6EPsHumObNIF5BvoU-1eayUTOR8PN/view?usp=sharing",
            name: "Machine Learning and its applications in Information Security, Computer Vision and Natural Language"
        },
        {
            link: "https://drive.google.com/file/d/1GQH94kVG1IjwVdk1SMGkWoWKwhjgZS7Z/view?usp=sharing",
            name: "Cloud Practitioner Essential"
        },
        {
            link: "https://www.udemy.com/certificate/UC-9c01ddc5-1abb-4f1a-af9a-0a48d4e123ce/",
            name: "Complete React Developer (w/ Redux, Hooks, GraphQL)"
        }
    ],
    projects: projects,
    skills: ["HTML", "CSS", "JavaScript", "Python", "PHP", "ReactJS", "NextJS", "NodeJS", "Django", "Git/Github", "Redux Toolkit", "MySQL", "MongoDB"]
}

export default info
