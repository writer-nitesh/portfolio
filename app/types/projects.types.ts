export interface ProjectLinks {
  live: string;
  source?: string;
}

export interface Project {
  name: string;
  description: string[];
  links: ProjectLinks;
  start: string;
  end: string;
  technology_used: string[];
  image?: string;
}
