import { Models } from "appwrite";

export interface IView extends Models.Document {
    viewer: string,
    viewedTime: number
}