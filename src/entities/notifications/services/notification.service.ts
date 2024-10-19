import { Query } from "appwrite";
import { databases } from "../../../lib/appwrite"
import { DATABASE_ID, NOTIFICATIONS_COLLECTION_ID } from "../../../shared/constants/database.constant"
import { filterNotificationsDocuments } from "../helpers/notifications.helper";

export const getNotifications = async (selectedTime: string, selectedType: string, limit: number | null = null) => {
    const filterArr: string[] = [];
    const lastSevenMiliseconds = 604800000;
    const lastThirtyMiliseconds = 2592000000;

    // selected type filtering
    if (selectedType == "visits") {
        filterArr.push(
            Query.equal("type", "visit")
        );
    } else if (selectedType == "clicks") {
        filterArr.push(
            Query.equal("type", "click")
        );
    }

    // Limiting
    if (limit !== null) {
        filterArr.push(Query.limit(limit));
    }

    filterArr.push(Query.orderDesc("$createdAt"));

    const response = await databases.listDocuments(
        DATABASE_ID,
        NOTIFICATIONS_COLLECTION_ID,
        [...filterArr]
    )
    const documents = response.documents;

    if (selectedTime === "last-7") {
        return filterNotificationsDocuments(lastSevenMiliseconds, documents);
    } else if (selectedTime === "last-30") {
        return filterNotificationsDocuments(lastThirtyMiliseconds, documents);
    }

    return response;
}

export const readNotifications = async () => {
    const response = await databases.listDocuments(DATABASE_ID, NOTIFICATIONS_COLLECTION_ID);
    const documents = response.documents;

    for (const document of documents) {
        const documentId = document.$id;

        await databases.updateDocument(DATABASE_ID, NOTIFICATIONS_COLLECTION_ID, documentId, { "isRead": true })
    }

    return response;
}

