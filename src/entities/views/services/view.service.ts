import { Query } from "appwrite";
import { databases } from "../../../lib/appwrite";
import { DATABASE_ID, VIEWS_COLLECTION_ID } from "../../../shared/constants/database.constant";

export const fetchViewsStatistics = async (period: string) => {
    const queries = [];

    // Selected period filtering
    if (period === "last-7") {
        const endDate = new Date();
        const startDate = new Date(endDate.getDate() - 7);
        queries.push(
            Query.and([
                Query.greaterThanEqual("$createdAt", startDate.toISOString()),
                Query.lessThanEqual("$createdAt", endDate.toISOString())
            ])
        );
    }

    if (period === "last-30") {
        const endDate = new Date();
        const startDate = new Date(endDate.getDate() - 30);
        queries.push(
            Query.and([
                Query.greaterThanEqual("$createdAt", startDate.toISOString()),
                Query.lessThanEqual("$createdAt", endDate.toISOString())
            ])
        );
    }

    const response = await databases.listDocuments(
        DATABASE_ID,
        VIEWS_COLLECTION_ID,
        queries
    )

    return response;
}