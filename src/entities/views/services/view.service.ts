import { databases } from "../../../lib/appwrite";
import { DATABASE_ID, VIEWS_COLLECTION_ID } from "../../../shared/constants/database.constant";
import { filterViewsDocuments } from "../helpers/views.helper";

export const fetchViewsStatistics = async (period: string) => {
    const lastSevenMiliseconds = 604800000;
    const lastThirtyMiliseconds = 2592000000;

    const res = await databases.listDocuments(
        DATABASE_ID,
        VIEWS_COLLECTION_ID,
    )
    const documents = res.documents;

    // Selected period filtering
    if (period === "last-7") {
        return filterViewsDocuments(lastSevenMiliseconds, documents)
    }

    if (period === "last-30") {
        return filterViewsDocuments(lastThirtyMiliseconds, documents)
    }

    const response = await databases.listDocuments(
        DATABASE_ID,
        VIEWS_COLLECTION_ID,
    )

    return response;
}