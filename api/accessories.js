const { findAllfromDb } = require("../database/connection")


const accessories = async (req, res) => {
    try {
        const Accessories = await findAllfromDb({}, "accessories")
        return res.status(200).send(Accessories)
    }
    catch (error) {
        console.log("error occured in fetching the data", error)
        return res.status(500).send({ message: "Something went wrong" })
    }

}

module.exports.apiController = accessories;