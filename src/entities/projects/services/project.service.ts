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
    const images: string[] = await Promise.all(
        data.images.map(async (image: File | string) => {
            const res = await storage.createFile(
                BUCKET_ID,
                ID.unique(),
                image as File
            );
            const url = storage.getFileDownload(BUCKET_ID, res.$id);
            return url;
        })
    );

    // Handle Url's
    const githubUrl = data.githubUrl === "" ? null : data.githubUrl;
    const demoUrl = data.demoUrl === "" ? null : data.demoUrl;

    // Get latest index
    const documents = (await databases.listDocuments(DATABASE_ID, PROJECTS_COLLECTION_ID)).total;

    // Create document
    const response = await databases.createDocument(
        DATABASE_ID,
        PROJECTS_COLLECTION_ID,
        ID.unique(),
        {
            ...data,
            githubUrl: githubUrl,
            demoUrl: demoUrl,
            imageUrl: imageUrl,
            images: images,
            index: documents
        }
    )

    return response;
}