import { Query } from "appwrite";
import { databases, ID, storage } from "../../../lib/appwrite"
import { CERTIFICATES_COLLECTION_ID, DATABASE_ID } from "../../../shared/constants/database.constant";
import { BUCKET_ID } from "../../../shared/constants/storage.constant";
import { CreateCertificateData } from "../interfaces/certificate.interface";

export const createCertificate = async (data: CreateCertificateData) => {
    // Upload file
    const createdFileResponse = await storage.createFile(
        BUCKET_ID,
        ID.unique(),
        data?.imageUrl as File
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
            credentialUrl: data.credentialUrl,
            imageUrl: url,
            index: documents
        }
    );

    return response;
}

export const getCertificates = async () => {
    const response = await databases.listDocuments(
        DATABASE_ID,
        CERTIFICATES_COLLECTION_ID,
        [
            Query.orderAsc("index")
        ]
    )

    return response;
}

export const moveCertificate = async (id: string, index: number) => {
    await databases.updateDocument(
        DATABASE_ID,
        CERTIFICATES_COLLECTION_ID,
        id,
        { index: index }
    )
}