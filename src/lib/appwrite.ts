import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66fe98e400350a2afae6'); 

export const account = new Account(client);
export { ID } from 'appwrite';
