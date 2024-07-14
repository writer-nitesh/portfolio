
export interface SocialLink {
    name: string
    url: string
}

export interface Project {
    name: string
    description: Array<string>
    links: {
        live?: string
        source?: string
    }
    start: string
    end: string | "Present"
    image?: string
    technology_used: Array<String>
}

export interface Experience {
    position: string
    location: string
    company_name: string
    company_link?: string
    start: string
    end: string | "Present"
    description: Array<string>
    skills: Array<string>
    certifcate?: string
}

export interface Studies {
    course: string
    institution: string
    start: string
    end: string | "Present"
    location: string
}

export interface Location {
    city: string
    state: string
    country: string
}
export interface Certificate {
    name: string
    link?: string
}


export interface Info {
    name: string
    description: string
    profile_image?: string
    gender: "Male" | "Female" | "Other"
    url: string
    about: string
    location: Location
    work_experience?: Array<Experience>
    education: Array<Studies>
    projects: Array<Project>
    social_links: Array<SocialLink>
    certifications: Array<string>
    skills: Array<string>
}
