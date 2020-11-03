const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const outfitSchema = new Schema({
  oufitImage:  { 
    data: Buffer, 
    contentType: String 
} ,
  topImage: { 
    data: Buffer, 
    contentType: String 
},
  topName: String,
  topURL: String,
  bottomImage: { 
    data: Buffer, 
    contentType: String 
},
bottomName: String,
bottomURL: String,
accessoryImage: { 
    data: Buffer, 
    contentType: String 
},
accessoryName: String,
accessoryURL: String
});

const Outfits = mongoose.model("Outfit", outfitSchema); //compiling schema into a model

const Outfit = new Outfits({ //single outfit document with properties (can add behaviors)
    outfitImage: "",
    topImage: "",
    topName: "",
    topURL: "",
    bottomImageImage: "",
    bottomName: "",
    bottomURL: "",
    accessoryImage: "",
    accessoryName: "",
    accessoryURL: ""

})














module.exports = Outfits;
