import type { Info } from "../utils/types"
import projects from "./projects"

const info: Info = {
    name: "Nitesh Singh",
    gender: "Male",
    description: "Developing real life super power",
    url: "https://ni30.vercel.app/",
    profile_image: "/assets/images/profile.jpg",
    location: {
        city: "Haldwani",
        state: "Uttarakhand",
        country: "India",
    },
    work_experience: [
        {
            company_name: "Raasta Research and Development",
            description: [
                    "Developing website",
                    "Working on Data Extraction"
            ],
            start: "September 2024",
            end: "Present",
            location: "Haldwani",
            position: "Software Developer",
            skills: ["NextJS", "Python", "CSS", "JS"]
        },
        {
            company_name: "RFM360",
            description: [
                "Managed daily tasks and project targets, ensuring timely delivery and effective collaboration.",
                "Developed and integrated a workspace section using Django, HTML, CSS, and JavaScript, enabling user collaboration with role-based permissions.",
                " Created a finance module for invoice generation and viewing, streamlining financial operations.",
                "Deployed the project on AWS EC2, configured Nginx, and linked the domain for seamless access, enhancing overall user experience.",

            ],
            start: "May 2022",
            end: "December 2022",
            location: "remote",
            position: "Python Developer",
            skills: ["Django", "HTML", "CSS", "JS"]
        }
    ],
    about: "Highly motivated Computer Applications student with a strong foundation in web technology and a passion for leveraging the web to drive impactful changes. Skilled in Python, JavaScript, and various web development frameworks. Seeking opportunities to contribute and grow in a dynamic tech environment.",
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
    skills: ["HTML", "CSS", "JavaScript", "Python", "PHP", "ReactJS", "NextJS", "NodeJS", "Django", "Git/Github", "Redux Toolkit", "MySQL", "MongoDB","Docker","SQL"]
}

export default info
