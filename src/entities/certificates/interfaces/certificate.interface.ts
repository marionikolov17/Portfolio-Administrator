import { FieldValues } from "react-hook-form";

export interface CreateCertificateData extends FieldValues {
    title?: string,
    credentialUrl?: string,
    imageUrl?: File
}