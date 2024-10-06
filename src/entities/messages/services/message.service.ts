import { Query } from "appwrite";
import { databases } from "../../../lib/appwrite"
import { DATABASE_ID, INBOX_COLLECTION_ID } from "../../../shared/constants/database.constant"

export const getMessages = async (isFavouriteSelected: boolean, search: string | null) => {
    const queries = [];

    if (isFavouriteSelected === true) {
        queries.push(Query.equal("isFavourite", true));
    }

    if (search !== null && search !== "") {
        queries.push(Query.or([
            Query.contains("name", search as string),
            Query.contains("title", search as string),
            Query.contains("email", search as string),
            Query.contains("message", search as string),
        ]))
    }

    const response = await databases.listDocuments(
        DATABASE_ID,
        INBOX_COLLECTION_ID,
        [...queries]
    );

    return response;
}

export const getMessage = async (id: string) => {
    const response = await databases.getDocument(
        DATABASE_ID,
        INBOX_COLLECTION_ID,
        id
    );

    return response;
}

export const readMessage = async (id: string) => {
    const response = await databases.updateDocument(
        DATABASE_ID,
        INBOX_COLLECTION_ID,
        id,
        { isRead: true }
    );

    return response;
}

export const changeMessageStatus = async ({ id, isFavourite }: { id: string, isFavourite: boolean }) => {
    const response = await databases.updateDocument(
        DATABASE_ID,
        INBOX_COLLECTION_ID,
        id,
        { isFavourite: isFavourite }
    );

    return response;
}
