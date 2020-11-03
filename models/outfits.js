const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const outfitSchema = new Schema({
  oufitImage:  { 
    data: Buffer, 
    contentType: String 
} ,
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

const Outfit = new Outfits({ //single outfit document with properties (can add behaviors)
    outfit1 : {
        outfitImage: "",
        item1Image: "",
        item1Name: "",
        item1URL: "",
        item1Avail: false,
        item2Image: "",
        item2Name: "",
        item2URL: "",
        item2Avail: false,
        item3Image: "",
        item3Name: "",
        item3URL: "",
        item3Avail: false,
        item4Image: "",
        item4Name: "",
        item4URL: "",
        item4Avail: false,
    },
    outfit2 : {
        outfitImage: "/assets/outfitImg/Outfit 1.1.JPG",
        item1Image: "https://s1.thcdn.com/productimg/1600/1600/12081059-1064677155724591.jpg",
        item1Name: "KENZO Women's Allover Flower Rice Bag Cotton Poplin Dress - Deep Fuschia",
        item1URL: "https://www.revolve.com/kenzo-all-over-rice-bag-dress-in-deep-fuchsia/dp/KZOR-WD19/?d=Womens&AID=11017645&PID=7900573&bneEl=false&cjevent=9c5119d11e1311eb804100a20a24060b&d=Womens&product=KZOR-WD19&source=cj&utm_campaign=glob_p_4609662&utm_medium=affiliate&utm_source=cj&product=KZOR-WD19&",
        item1Avail: false,
        item2Image: "",
        item2Name: "",
        item2URL: "",
        item3Image: "",
        item3Name: "",
        item3URL: ""
    },
    outfit3 : {
        outfitImage: "/assets/outfitImg/Outfit 1.2.JPG",
        item1Image: "https://n.nordstrommedia.com/id/sr3/956c7594-0803-4f0c-8f72-abf40f7a6af3.webp?crop=pad&pad_color=FFF&format=jpeg&w=1318&h=2021",
        item1Name: "ALICE + OLIVIA Willa Silk Blouse",
        item1URL: "https://www.nordstrom.com/s/alice-olivia-willa-silk-blouse/5233876?siteid=.2nGiS3mv0Y-sqqB60zkvjNV7tD9tXXGHw&utm_source=rakuten&utm_medium=affiliate&utm_campaign=*2nGiS3mv0Y&utm_channel=low_nd_affiliates&utm_term=785346&utm_content=1_https://api.shopstyle.com/&sp_source=rakuten&sp_campaign=*2nGiS3mv0Y",
        item1Avail: false,
        item2Image: "https://is4.revolveassets.com/images/p4/n/z/RONR-WQ88_V1.jpg",
        item2Name: "Ronny Kobo Rida Skirt",
        item2URL: "https://www.revolve.com/ronny-kobo-rida-skirt-in-sage-multi/dp/RONR-WQ88/?d=Womens&bneEl=false&d=Womens&product=RONR-WQ88&product=RONR-WQ88&",
        item2Avail: false,
        item3Image: "https://pa.namshicdn.com/product/A7/13294W/1-zoom-desktop.jpg",
        item3Name: "Aldo ‘Handful’ Bag",
        item3URL: "https://en-global.namshi.com/buy-aldo-handful-dome-satchel-w492317a.html",
        item3Avail: false,
        item4Image: "https://img-static.tradesy.com/item/26682354/christian-louboutin-black-gorgona-100-red-logo-loubiballage-patent-stiletto-ankle-heel-bootsbooties-0-0-650-650.jpg",
        item4Name: "Christian Louboutin Black Gorgona 100 Red Logo Loubiballage Patent Stiletto Ankle Heel Boots/Booties",
        item4URL: "https://www.tradesy.com/t/christian-louboutin-black-gorgona-100-red-logo-loubiballage-patent-stiletto-ankle-heel-bootsbooties-/26682354/?utm_source=gpl&utm_medium=cpc&utm_campaign=Smart%20Shopping%20-%20Shoes%20-%20All&utm_content=&utm_term=&cmpgnid=9451554684&adgrpid=95613872803&gclid=CjwKCAiAnIT9BRAmEiwANaoE1bcWyMqgHQIbgEqMFeYqQf8rhy1Xstc9GMUqLC_EGMyWr_TZoaFiWhoCZxgQAvD_BwE",
        item4Avail: true,
    },
    outfit4 : {
        outfitImage: "",
        item1Image: "",
        item1Name: "",
        item1URL: "",
        item1Avail: false,
        item2Image: "",
        item2Name: "",
        item2URL: "",
        item2Avail: false,
        item3Image: "",
        item3Name: "",
        item3URL: "",
        item3Avail: false,
        item4Image: "",
        item4Name: "",
        item4URL: "",
        item4Avail: false,

})














module.exports = Outfits;
