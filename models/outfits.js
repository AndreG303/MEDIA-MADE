const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const outfitSchema = new Schema({
    outfitImage: String,
    items: [ {
        image: String,
        name: String,
        url: String,
        avail: Boolean
    }
    ]
});

const Outfit = mongoose.model("Outfit", outfitSchema); //compiling schema into a model

module.exports = Outfit;
