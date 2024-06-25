interface SocialLink {
    name: string
    url: string
}

interface Project {
    name: string
    description: Array<string>
    link: string
    start: Date
    end: Date | "Present"
    technology_used: Array<String>
}

interface Experience {
    position: string
    location: string
    company_name: string
    company_link?: string
    start: Date
    end: Date | "Present"
    description: Array<string>
    skills: Array<string>
}

interface Studies {
    course: string
    institution: string
    start: Date
    end: Date | "Present"
}

interface Info {
    name: string
    description: string
    about: string
    url: string
    profile_image?: string
    // work_experience: Array<Experience>
    // studies: Array<Studies>
    // projects: Array<Project>
    // social_links: Array<SocialLink>
    // certifications: Array<string>
}


const info: Info = {
    name: "Nitesh Singh",
    about: "Test",
    description: "dsa",
    url: "https://nitesh-singh.vercel.app/",
    profile_image: "https://nitesh-singh.vercel.app/assets/images/profile.png",
}

export default info