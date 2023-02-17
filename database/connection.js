const { MongoClient } = require("mongodb");
const url = "mongodb+srv://gauravMehra13:ZeCIF6MuWPRBdVgx@cluster0.oofked1.mongodb.net/Samsung?retryWrites=true&w=majority"
//const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url);

//find ops
const findAllfromDb = async (query, collectionName) => {
    try {
        await client.connect();
        console.log("connection to db is successful");
        const database = client.db("Samsung");
        const collection = database.collection(collectionName);
        const dbResponse = await collection.find(query).toArray()
        console.log("db ops res=>", dbResponse)
        await client.close()
        return dbResponse;
    }
    catch (error) {
        return error.message
    }
}



module.exports = { findAllfromDb };