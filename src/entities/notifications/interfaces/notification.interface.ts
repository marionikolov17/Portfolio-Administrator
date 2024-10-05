import { Models } from "appwrite";

export interface INotification extends Models.Document {
    type: string,
    actorIP: string | null,
    actorCountry: string | null,
    message: string,
    totalTime: number,
    isRead: boolean
}