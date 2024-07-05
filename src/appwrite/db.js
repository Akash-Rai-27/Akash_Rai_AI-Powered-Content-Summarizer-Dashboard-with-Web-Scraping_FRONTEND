import conf from "../conf/conf.js";
import {Client, ID, Databases, Query} from 'appwrite'

export class database{

    client = new Client();
    databases;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.databases = new Databases(this.client);
    }

    async createUserData({userId,userName,searchedUrl}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    userId,
                    userName,
                    searchedUrl,
                    
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createUserData :: error ::",error)
        }
    }

    async getUserData(userId){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal('userId',userId) 
                ]
            );
        } catch (error) {
            console.log("Appwrite service :: getUserData :: error ::",error)
        }
    }
}

const dbService = new database()

export default dbService