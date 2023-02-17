const { findAllfromDb } = require("../database/connection")


const watches = async (req, res) => {
    try {
        const data = await findAllfromDb({}, "watches")
        return res.status(200).send(data)
    }
    catch (error) {
        console.log("error occured in fetching the data", error)
        return res.status(500).send({ message: "Something went wrong" })
    }

}

module.exports.apiController = watches;