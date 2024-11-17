import { databases, ID, storage } from "../../../lib/appwrite";
import { DATABASE_ID, PROJECTS_COLLECTION_ID } from "../../../shared/constants/database.constant";
import { BUCKET_ID } from "../../../shared/constants/storage.constant";
import Project from "../interfaces/project.interface";

export const createProject = async (data: Project) => {
    // Upload thumbnail
    const uploadedThumbnail = await storage.createFile(
        BUCKET_ID,
        ID.unique(),
        data?.imageUrl as File
    )
    const imageUrl = storage.getFileDownload(BUCKET_ID, uploadedThumbnail.$id);

    // Upload images
    const images: string[] = [];
    data.images.forEach((image: File | string) => {
        storage.createFile(
            BUCKET_ID,
            ID.unique(),
            image as File
        ).then((res) => {
            const url = storage.getFileDownload(BUCKET_ID, res.$id);
            images.push(url);
        })
    });

    // Get latest index
    const documents = (await databases.listDocuments(DATABASE_ID, PROJECTS_COLLECTION_ID)).total;

    // Create document
    const response = await databases.createDocument(
        DATABASE_ID,
        PROJECTS_COLLECTION_ID,
        ID.unique(),
        {
            ...data,
            imageUrl: imageUrl,
            images: images,
            index: documents
        }
    )

    return response;
}