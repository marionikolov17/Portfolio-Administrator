import { Query } from "appwrite";
import { databases } from "../../../lib/appwrite"
import { DATABASE_ID, NOTIFICATIONS_COLLECTION_ID } from "../../../shared/constants/database.constant"

export const getNotifications = async (selectedTime: string, selectedType: string, limit: number | null = null) => {
    const filterArr: string[] = [];

    // selected time filtering
    if (selectedTime == "last-7") {
        const endDate = new Date();
        const startDate = new Date(endDate.getDate() - 7);
        filterArr.push(
            Query.and([
                Query.greaterThanEqual("$createdAt", startDate.toISOString()),
                Query.lessThanEqual("$createdAt", endDate.toISOString())
            ])
        );
    } else if (selectedTime == "last-30") {
        const endDate = new Date();
        const startDate = new Date(endDate.getDate() - 30);
        filterArr.push(
            Query.and([
                Query.greaterThanEqual("$createdAt", startDate.toISOString()),
                Query.lessThanEqual("$createdAt", endDate.toISOString())
            ])
        );
    }

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