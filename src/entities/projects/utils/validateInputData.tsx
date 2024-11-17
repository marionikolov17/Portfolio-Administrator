import Project from "../interfaces/project.interface";

export default function validateProjectInputData(data: Project) {
    let totalErrors = 0;

    if (data.imageUrl === null || data.imageUrl === undefined) totalErrors++;

    if (data.images.length === 0) totalErrors++;

    if (!validateTech(data.tech)) totalErrors++;

    if (!validateFeatures(data.features)) totalErrors++;

    if (!validateSkills(data.skills)) totalErrors++;

    return totalErrors === 0;
}

function validateTech(tech: string[]) {
    let errors = 0;

    tech.forEach((techString: string) => {
        // Not fullfilled technology
        if (techString === "") errors++;

        // Technology added but not icons
        if (techString.split(" : ")[1] === "") errors++;

        // Added icons but not technology
        if (techString.startsWith(" : ")) errors++;
    })

    return errors === 0;
}

function validateFeatures(features: string[]) {
    let result = true;
    if (features.length === 0) result = false;

    features.forEach((feature: string) => {
        if (feature === "" || feature === " ") result = false;
    });

    return result;
}

function validateSkills(skills: string[]) {
    let result = true;
    if (skills.length === 0) result = false;

    skills.forEach((skill: string) => {
        if (skill === "" || skill === " ") result = false;
    });

    return result;
}