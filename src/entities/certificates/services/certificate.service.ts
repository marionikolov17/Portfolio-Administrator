import { Query } from "appwrite";
import { databases, ID, storage } from "../../../lib/appwrite"
import { CERTIFICATES_COLLECTION_ID, DATABASE_ID } from "../../../shared/constants/database.constant";
import { BUCKET_ID } from "../../../shared/constants/storage.constant";
import { CreateCertificateData, ICertificate } from "../interfaces/certificate.interface";

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

export const updateCertificate = async (data: { id: string, newData: any }) => {
    await databases.updateDocument(
        DATABASE_ID,
        CERTIFICATES_COLLECTION_ID,
        data.id,
        data.newData
    )
}

export const deleteCertificate = async (id: string) => {
    // Change all indexes
    const response = await databases.listDocuments(
        DATABASE_ID,
        CERTIFICATES_COLLECTION_ID,
        [
            Query.orderAsc("index")
        ]
    );
    const documents = response.documents;
    let removableIndex = 0;

    for (let i = 0; i < documents.length; i++) {
        if (documents[i].$id === id) {
            removableIndex = i;
        };
    }

    for (let i = removableIndex + 1; i < documents.length; i++) {
        await databases.updateDocument(
            DATABASE_ID,
            CERTIFICATES_COLLECTION_ID,
            documents[i].$id,
            { index: i - 1 }
        )
    }

    // Delete actual element
    await databases.deleteDocument(DATABASE_ID, CERTIFICATES_COLLECTION_ID, id);
}

export const moveCertificate = async (data: { id: string, isUp: boolean }) => {
    const response = await databases.listDocuments(
        DATABASE_ID,
        CERTIFICATES_COLLECTION_ID,
        [
            Query.orderAsc("index")
        ]
    );
    const documents = response.documents;

    for (let i = 0; i < documents.length; i++) {
        const document = documents[i];

        if (document.$id === data.id) {
            if (data.isUp) {
                await databases.updateDocument(
                    DATABASE_ID,
                    CERTIFICATES_COLLECTION_ID,
                    document.$id,
                    { index: i - 1 }
                )
                await databases.updateDocument(
                    DATABASE_ID,
                    CERTIFICATES_COLLECTION_ID,
                    documents[i - 1].$id,
                    { index: i }
                )
            } else {
                await databases.updateDocument(
                    DATABASE_ID,
                    CERTIFICATES_COLLECTION_ID,
                    document.$id,
                    { index: i + 1 }
                )
                await databases.updateDocument(
                    DATABASE_ID,
                    CERTIFICATES_COLLECTION_ID,
                    documents[i + 1].$id,
                    { index: i }
                )
            }
        }
    }
}