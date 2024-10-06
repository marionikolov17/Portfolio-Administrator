import { Models } from "appwrite"
import { IView } from "../interfaces/view.interface"

export const getUniqueViews = (documents: Models.Document[] | IView[]) => {
    const uniqueViewers: string[] = [];

    for (const document of documents) {
        if (uniqueViewers.includes(document.viewer)) continue
        uniqueViewers.push(document.viewer)
    }
    return uniqueViewers.length;
}

export const getAverageTime = (documents: Models.Document[] | IView[]) => {
    let totalTime = 0;
    let length = 0;

    for (const document of documents) {
        totalTime += document.viewedTime;
        length++;
    }

    return Math.floor(totalTime / length);
}

export const getTotalTime = (documents: Models.Document[] | IView[]) => {
    let totalTime = 0;

    for (const document of documents) {
        totalTime += document.viewedTime;
    }

    return totalTime;
}