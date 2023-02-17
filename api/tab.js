const { findAllfromDb } = require("../database/connection")


const tab = async (req, res) => {
    try {
        const data = await findAllfromDb({}, "tab")
        return res.status(200).send(data)
    }
    catch (error) {
        console.log("error occured in fetching the data", error)
        return res.status(500).send({ message: "Something went wrong" })
    }

}

module.exports.apiController = tab;