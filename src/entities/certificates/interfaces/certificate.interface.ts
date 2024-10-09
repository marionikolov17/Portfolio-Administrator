import { Models } from "appwrite";
import { FieldValues } from "react-hook-form";

export interface CreateCertificateData extends FieldValues {
    title?: string,
    credentialUrl?: string,
    imageUrl?: File
}

export interface ICertificate extends Models.Document {
    title: string,
    credentialUrl: string,
    imageUrl: string,
    index: number
}