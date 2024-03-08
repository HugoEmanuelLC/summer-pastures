import { Client, Account, Databases } from "appwrite";
const client = new Client();

const endpoint = "http://appwrite-react-native.hugoweb.be/v1";
const project = "65e71728cf7586d10f49";

client.setEndpoint(endpoint).setProject(project)

export const account = new Account(client)
export const database = new Databases(client)
export { ID, Query } from 'appwrite';