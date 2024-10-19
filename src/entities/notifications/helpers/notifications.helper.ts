import { Models } from "appwrite";

export const filterNotificationsDocuments = async (
  miliseconds: number,
  documents: Models.Document[]
) => {
  const endDate = Date.now();
  const startDate = new Date(endDate - miliseconds).getTime();

  documents = documents.filter((doc) => {
    const createdAt = new Date(doc.$createdAt);
    if (createdAt.getTime() > startDate) return true;
    return false;
  });

  return { total: documents.length, documents: documents };
};
