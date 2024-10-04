import { databases } from "../../../lib/appwrite"
import { DATABASE_ID, INBOX_COLLECTION_ID } from "../../../shared/constants/database.constant"

export const getMessages = async () => {
    const response = await databases.listDocuments(
        DATABASE_ID,
        INBOX_COLLECTION_ID
    );

    return response;
}