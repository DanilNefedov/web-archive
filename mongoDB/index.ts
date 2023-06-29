import { MongoClient } from "mongodb"

const URI = process.env.MONGO_DB_URI as string
const option = {}

if(!URI) throw new Error('Please add your URI')


let client 
let clientPromise:Promise<MongoClient>

if(process.env.NODE_ENV === 'development'){
    let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>
    }

    if(!globalWithMongo._mongoClientPromise){
        client = new MongoClient(URI, option)
        globalWithMongo._mongoClientPromise = client.connect()
    }

    clientPromise = globalWithMongo._mongoClientPromise
}else{
    client = new MongoClient(URI, option)
    clientPromise = client.connect()
}

// ы