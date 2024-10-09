import { databases, ID, storage } from "../../../lib/appwrite"
import { CERTIFICATES_COLLECTION_ID, DATABASE_ID } from "../../../shared/constants/database.constant";
import { BUCKET_ID } from "../../../shared/constants/storage.constant";

export const createCertificate = async (data: Record<string, any>) => {
    // Upload file
    const createdFileResponse = await storage.createFile(
        BUCKET_ID,
        ID.unique(),
        data.imageUrl
    )

    // Get file url
    const url = storage.getFileDownload(BUCKET_ID, createdFileResponse.$id);

    // Get latest index
    const documents = (await databases.listDocuments(DATABASE_ID, CERTIFICATES_COLLECTION_ID)).total;

    // Create document
    const response = await databases.createDocument(
        DATABASE_ID,
        CERTIFICATES_COLLECTION_ID,
        ID.unique(),
        {
            title: data.title,
            credentialUrl: data.creadentialUrl,
            imageUrl: url,
            index: documents - 1
        }
    );

    return response;
}