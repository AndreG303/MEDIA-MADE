const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const outfitSchema = new Schema({
    oufitImage: {
        data: Buffer,
        contentType: String
    },
    item1Image: {
        data: Buffer,
        contentType: String
    },
    item1Name: String,
    item1URL: String,
    item1Avail: Boolean,
    item2Image: {
        data: Buffer,
        contentType: String
    },
    item2Name: String,
    item2URL: String,
    item2Avail: Boolean,
    item3Image: {
        data: Buffer,
        contentType: String
    },
    item3Name: String,
    item3URL: String,
    item3Avail: Boolean,
    item4Image: {
        data: Buffer,
        contentType: String
    },
    item4Name: String,
    item4URL: String,
    item4Avail: Boolean
});

const Outfits = mongoose.model("Outfit", outfitSchema); //compiling schema into a model

module.exports = Outfits;
