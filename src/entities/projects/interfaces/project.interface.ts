export default interface Project {
    name: string;
    summary: string;
    imageUrl: string | File;
    githubUrl: string;
    demoUrl: string;
    images: string[] | File[];
    features: string[];
    skills: string[];
    tech: string[];
    index?: number;
}