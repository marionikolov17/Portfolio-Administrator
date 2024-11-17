/* eslint-disable @typescript-eslint/no-explicit-any */
import { Feature, Image, Skill, Tech } from "../interfaces/project-inputs.interface";

export default function editProjectInputData(data: any) {
    let result = { ...data };
    result = editTech(result);
    result = editImages(result);
    result = editFeatures(result);
    result = editSkills(result);

    return result;
}

function editTech(data: any) {
    const newData = { ...data };
    const techObj = newData.tech;
    const newTechArr: string[] = [];

    techObj.forEach((el: Tech) => {
        let resultString = `${el.name} : `;

        for (let i = 0; i < el.technologies.length; i++) {
            if (i + 1 === el.technologies.length) {
                resultString += el.technologies[i];
            } else {
                resultString += `${el.technologies[i]},`
            }
        }

        newTechArr.push(resultString);
    });

    newData.tech = newTechArr;
    return newData;
}

function editImages(data: any) {
    const newData = { ...data };
    const imagesObj = data.images;
    const newImages: File[] = [];

    imagesObj.forEach((imageObj: Image) => {
        newImages.push(imageObj.file);
    });

    newData.images = newImages;
    return newData;
}

function editFeatures(data: any) {
    const newData = { ...data };
    const featuresArr = newData.features;
    const newFeaturesArr = featuresArr.map((el: Feature) => el.text);
    newData.features = newFeaturesArr;
    return newData;
}

function editSkills(data: any) {
    const newData = { ...data };
    const skillsArr = newData.skills;
    const newSkillsArr = skillsArr.map((el: Skill) => el.text);
    newData.skills = newSkillsArr;
    return newData;
}