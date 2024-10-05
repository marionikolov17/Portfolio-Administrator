import { databases } from "../../../lib/appwrite"
import { DATABASE_ID, NOTIFICATIONS_COLLECTION_ID } from "../../../shared/constants/database.constant"

export const getNotifications = async () => {
    const response = await databases.listDocuments(
        DATABASE_ID,
        NOTIFICATIONS_COLLECTION_ID
    )

    return response;
}