import { Models } from "appwrite";

export interface IMessage extends Models.Document {
    name: string,
    email: string,
    title: string,
    message: string,
    isRead: boolean,
    isFavourite: boolean
}