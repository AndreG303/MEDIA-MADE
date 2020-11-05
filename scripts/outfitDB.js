const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/proj3"
);

const outfit1 = new db.Outfit({
    outfitImage: "https://s1.thcdn.com/productimg/1600/1600/12081059-1064677155724591.jpg",
    items: [ {
        image: "https://s1.thcdn.com/productimg/1600/1600/12081059-1064677155724591.jpg",
        name: "KENZO Women's Allover Flower Rice Bag Cotton Poplin Dress - Deep Fuschia",
        url: "https://www.revolve.com/kenzo-all-over-rice-bag-dress-in-deep-fuchsia/dp/KZOR-WD19/?d=Womens&AID=11017645&PID=7900573&bneEl=false&cjevent=9c5119d11e1311eb804100a20a24060b&d=Womens&product=KZOR-WD19&source=cj&utm_campaign=glob_p_4609662&utm_medium=affiliate&utm_source=cj&product=KZOR-WD19&",
        avail: true
    },
    {
        image: "some/url/string",
        name: "",
        url: "product/url",
        avail: true
    }
    ]
});

db.Outfit.remove({})
.then( () => {
    return db.Outfit.collection.insertMany([outfit1])
})
.then( data => {
    mongoose.connection.close();
});

// const Outfit = new Outfits({ //single outfit document with properties (can add behaviors)
//     outfit1: {
//         outfitImage: "",
//         item1Image: "",
//         item1Name: "",
//         item1URL: "",
//         item1Avail: false,
//         item2Image: "",
//         item2Name: "",
//         item2URL: "",
//         item2Avail: false,
//         item3Image: "",
//         item3Name: "",
//         item3URL: "",
//         item3Avail: false,
//         item4Image: "",
//         item4Name: "",
//         item4URL: "",
//         item4Avail: false,
//     },
//     outfit2: {
//         outfitImage: "/assets/outfitImg/Outfit 1.1.JPG",
//         item1Image: "https://s1.thcdn.com/productimg/1600/1600/12081059-1064677155724591.jpg",
//         item1Name: "KENZO Women's Allover Flower Rice Bag Cotton Poplin Dress - Deep Fuschia",
//         item1URL: "https://www.revolve.com/kenzo-all-over-rice-bag-dress-in-deep-fuchsia/dp/KZOR-WD19/?d=Womens&AID=11017645&PID=7900573&bneEl=false&cjevent=9c5119d11e1311eb804100a20a24060b&d=Womens&product=KZOR-WD19&source=cj&utm_campaign=glob_p_4609662&utm_medium=affiliate&utm_source=cj&product=KZOR-WD19&",
//         item1Avail: false,
//         item2Image: "",
//         item2Name: "",
//         item2URL: "",
//         item3Image: "",
//         item3Name: "",
//         item3URL: ""
//     },
//     outfit3: {
//         outfitImage: "/assets/outfitImg/Outfit 1.2.JPG",
//         item1Image: "https://n.nordstrommedia.com/id/sr3/956c7594-0803-4f0c-8f72-abf40f7a6af3.webp?crop=pad&pad_color=FFF&format=jpeg&w=1318&h=2021",
//         item1Name: "ALICE + OLIVIA Willa Silk Blouse",
//         item1URL: "https://www.nordstrom.com/s/alice-olivia-willa-silk-blouse/5233876?siteid=.2nGiS3mv0Y-sqqB60zkvjNV7tD9tXXGHw&utm_source=rakuten&utm_medium=affiliate&utm_campaign=*2nGiS3mv0Y&utm_channel=low_nd_affiliates&utm_term=785346&utm_content=1_https://api.shopstyle.com/&sp_source=rakuten&sp_campaign=*2nGiS3mv0Y",
//         item1Avail: false,
//         item2Image: "https://is4.revolveassets.com/images/p4/n/z/RONR-WQ88_V1.jpg",
//         item2Name: "Ronny Kobo Rida Skirt",
//         item2URL: "https://www.revolve.com/ronny-kobo-rida-skirt-in-sage-multi/dp/RONR-WQ88/?d=Womens&bneEl=false&d=Womens&product=RONR-WQ88&product=RONR-WQ88&",
//         item2Avail: false,
//         item3Image: "https://pa.namshicdn.com/product/A7/13294W/1-zoom-desktop.jpg",
//         item3Name: "Aldo ‘Handful’ Bag",
//         item3URL: "https://en-global.namshi.com/buy-aldo-handful-dome-satchel-w492317a.html",
//         item3Avail: false,
//         item4Image: "https://img-static.tradesy.com/item/26682354/christian-louboutin-black-gorgona-100-red-logo-loubiballage-patent-stiletto-ankle-heel-bootsbooties-0-0-650-650.jpg",
//         item4Name: "Christian Louboutin Black Gorgona 100 Red Logo Loubiballage Patent Stiletto Ankle Heel Boots/Booties",
//         item4URL: "https://www.tradesy.com/t/christian-louboutin-black-gorgona-100-red-logo-loubiballage-patent-stiletto-ankle-heel-bootsbooties-/26682354/?utm_source=gpl&utm_medium=cpc&utm_campaign=Smart%20Shopping%20-%20Shoes%20-%20All&utm_content=&utm_term=&cmpgnid=9451554684&adgrpid=95613872803&gclid=CjwKCAiAnIT9BRAmEiwANaoE1bcWyMqgHQIbgEqMFeYqQf8rhy1Xstc9GMUqLC_EGMyWr_TZoaFiWhoCZxgQAvD_BwE",
//         item4Avail: true
//     },
//     outfit4: {
//         outfitImage: "/assets/outfitImg/Outfit 1.3.JPG",
//         item1Image: "https://www.yoox.com/images/items/12/12404009dp_14_f.jpg?width=387&height=490&impolicy=crop&gravity=Center",
//         item1Name: "GANNI Silk Mix Top",
//         item1URL: "https://www.yoox.com/US/12404009DP/item?gender=D&kpid=US-12404009DP-2-PE21&adtype=pla&tp=206533&gclid=CjwKCAiAnIT9BRAmEiwANaoE1V-hsVn_nKPzeYEztU9_rMY_ljYnemS56h08NWefh0FPclnekV6TaRoC26UQAvD_BwE&gclsrc=aw.ds#cod10=12404009DP&sizeId=&sizeName=",
//         item1Avail: true,
//         item2Image: "https://www.yoox.com/images/items/35/35432120ps_14_f.jpg?width=387&height=490&impolicy=crop&gravity=Center",
//         item2Name: "GANNI Silk Mix Skirt",
//         item2URL: "https://www.yoox.com/US/35432120PS/item?gender=D&kpid=US-35432120PS-2-PE21&adtype=pla&tp=206533&gclid=CjwKCAiAnIT9BRAmEiwANaoE1TLDV1abJRfrWa3-s7QaEjh26NUG4GrBZECTT4YBQQFbPRfmlSkleBoCP4EQAvD_BwE&gclsrc=aw.ds#cod10=35432120PS&sizeId=&sizeName=",
//         item2Avail: true,
//         item3Image: "https://i1.adis.ws/s/rb/W292180AP-001-MSET?$pdp_1024$",
//         item3Name: "rag & bone Field Waist Belt",
//         item3URL: "https://www.rag-bone.com/sale/womens/accessories/field-waist-belt-W292180AP.html?utm_source=pjn&utm_medium=affiliate&utm_campaign=73861&clickId=3336618007",
//         item3Avail: false,
//         item4Image: "https://wornontv.net/dottv/assets/products/Canary-Bag-by-Patricia-Field-195884-1093041601698348.jpg",
//         item4Name: "Canary Bag by Patricia Field",
//         item4URL: "https://patriciafield.com/",
//         item4Avail: false
//     },
//     outfit5: {
//         outfitImage: "/assets/outfitImg/Outfit 2.1.JPG",
//         item1Image: "https://cdn1.jolicloset.com/img4/fblink/2020/07/201967-1.jpg",
//         item1Name: "CHANEL Sky Blue Turquoise Jacket Cardigan Leather Chain 20C Cruise 2020",
//         item1URL: "https://www.ebay.com/itm/CHANEL-Sky-Blue-Turquoise-Jacket-Cardigan-Leather-Chain-20C-Cruise-2020-FR-36-/264808425414",
//         item1Avail: true,
//         item2Image: "https://cdn.shopify.com/s/files/1/0251/3519/products/dptdress_1000x1000.jpg?v=1560273751",
//         item2Name: "Dope Tavio Patchwork Dress by Patricia Field",
//         item2URL: "",
//         item2Avail: false,
//         item3Image: "https://i.frog.ink/UwykGgio/dsc6016_600.jpg?v=1561536312.32",
//         item3Name: "CHANEL Round As Earth Bag Malachite Green Patent Leather Chain Crossbody Handbag",
//         item3URL: "https://www.ebay.com/itm/CHANEL-Round-As-Earth-Bag-Malachite-Green-Patent-Leather-Chain-Crossbody-Handbag-/163753462397",
//         item3Avail: true
//     },
//     outfit6: {
//         outfitImage: "/assets/outfitImg/Outfit 2.2.JPG",
//         item1Image: "https://www.theoutnet.com/variants/images/210639989709/F/w1020_q80.jpg",
//         item1Name: "Alexandre Vauthier Strapless Draped Stretch-silk Satin Bustier Top",
//         item1URL: "https://www.theoutnet.com/en-us/shop/product/alexandre-vauthier/tops/strapless-top/strapless-draped-stretch-silk-satin-bustier-top/210639989709",
//         item1Avail: true,
//         item2Image: "https://ae01.alicdn.com/kf/HTB1Gs9vSXXXXXa.apXXq6xXFXXXw/Brand-Fashion-New-Women-Acrylic-Clutch-Novel-Evening-bag-Small-Cartoon-Messenger-Bag-Glass-Lady-Face.jpg_q50.jpg",
//         item2Name: "Yens ‘Face’ Acrylic Bag",
//         item2URL: "https://www.aliexpress.com/i/32822027726.html",
//         item2Avail: true,
//         item3Image: "https://cdn.modesens.com/product/13112961_33",
//         item3Name: "CHRISTIAN LOUBOUTIN Xili Crisscross Metallic Leather Sandals In Silver",
//         item3URL: "https://modesens.com/product/christian-louboutin-xili-crisscross-metallic-leather-sandals-silver-13112961/?refinfo=u2_pifsChrisLoubo13112961",
//         item3Avail: false
//     },
//     outfit7: {
//         outfitImage: "/assets/outfitImg/Outfit 2.3.JPG",
//         item1Image: "https://cdn.modesens.com/product/10019621_46",
//         item1Name: "Keith Haring X Alice + Olivia Lonnie Graphic Reversible Silk Bomber Jacket In Black",
//         item1URL: "https://modesens.com/product/alice-and-olivia-keith-haring-x-alice-olivia-lonnie-graphic-reversible-silk-bomber-jacket-black-10019621/",
//         item1Avail: false,
//         item2Image: "https://images.asos-media.com/products/asos-edition-extreme-fringe-bag-with-natural-handle/11481254-1-oatmeal?$XXL$&wid=513&fit=constrain",
//         item2Name: "ASOS EDITION extreme fringe bag with natural handle",
//         item2URL: "https://www.asos.com/us/asos-edition/asos-edition-extreme-fringe-bag-with-natural-handle/prd/11481254",
//         item2Avail: false,
//         item3Image: "https://assetsprx.matchesfashion.com/img/product/1253244_5_large.jpg?width=600&quality=90&",
//         item3Name: "MAISON MARGIELA Tabi split-toe leather ankle boots",
//         item3URL: "https://www.matchesfashion.com/us/products/1253244?country=USA&rffrid=sem.Google.n=g.cid=1775440313.aid=73041765990.k=.mty=.d=c.adp=.cr=343457940181.tid=aud-483449789487:pla-566487259645.pid=1253244000012.ppid=566487259645.lpm=9003650.adty=pla.prl=en&utm_content=1253244000012&utm_term=566487259645.[value].&gclid=CjwKCAiAnIT9BRAmEiwANaoE1WkSonJ6NwCWUI_9XSNgxtbZygeoJTgsRdnlUhBQ-1sFFF26rVbwCRoCgsQQAvD_BwE&gclsrc=aw.ds"
//     },
//     outfit8: {
//         outfitImage: "/assets/outfitImg/Outfit 2.4.JPG",
//         item1Image: "https://cdn.shopify.com/s/files/1/0040/5313/9523/products/Petal_Cami_Crop_Top-_Cream_1080x.jpg?v=1600198278",
//         item1Name: "the naked laundry Petal Cami Crop Top- Cream",
//         item1URL: "https://www.thenakedlaundry.com/products/petal-cami-crop-top-cream",
//         item1Avail: false,
//         item2Image: "https://cdn.theluxurycloset.com/uploads/optimize/products/full/luxury-women-chanel-used-handbags-p518-001.jpg",
//         item2Name: "Chanel Pearl Plexiglass Round Shape Minaudiere Evening Bag",
//         item2URL: "https://theluxurycloset.com/women/chanel-pearl-plexiglass-round-shape-minaudiere-evening-bag-p518",
//         item2Avail: false
//     },
//     outfit9: {
//         outfitImage: "/assets/outfitImg/Outfit 2.5.JPG",
//         item1Image: "https://images.lvrcdn.com/Big70I/B41/020_8bb728d9-d59b-4c14-ae0d-d7d7e9597df5.JPG",
//         item1Name: "DOLCE & GABBANA PRINTED OFF SHOULDER COTTON POPLIN DRESS",
//         item1URL: "https://www.luisaviaroma.com/en-us/p/dolce-gabbana/women/70I-B41020?AID=10617612&PID=7900573&SID=4803956334&utm_source=CommissionJunction&utm_medium=affiliation&utm_content=7900573&utm_campaign=4609662&CJEVENT=5e45f4bc1e1e11eb838d00b00a240614&click_id=5e45f4bc1e1e11eb838d00b00a240614",
//         item1Avail: false,
//         item2Image: "https://i1.adis.ws/s/rb/W292180AP-001-MSET?$pdp_1024$",
//         item2Name: "rag & bone Field Waist Belt",
//         item2URL: "https://www.rag-bone.com/sale/womens/accessories/field-waist-belt-W292180AP.html?utm_source=pjn&utm_medium=affiliate&utm_campaign=73861&clickId=3336618007"
//     },
//     outfit10: {
//         outfitImage: "/assets/outfitImg/Outfit 3.1.JPG",
//         item1Image: "https://www.hartlyfashions.com/wp-content/uploads/2018/10/miller-dickey-jacket-black-white.png",
//         item1Name: "VERONICA BEARD Miller Dickey Checker Jacket",
//         item1URL: "https://www.bergdorfgoodman.com/p/veronica-beard-miller-dickey-checker-jacket-prod144650138?ecid=BGCS__HighAUR&utm_source=google_shopping&adpos=&scid=scplpsku114400549&sc_intid=sku114400549&gclid=CjwKCAiAnIT9BRAmEiwANaoE1W-OS7JceNV7jTwu7r0PVoDxBkOa_lceUMr7Kc6Yc-K7H_yMb4pyzxoCNisQAvD_BwE&gclsrc=aw.ds",
//         item1Avail: true,
//         item2Image: "https://www.refinery29.com/images/10061189.jpg?format=webp&width=&height=&quality=85",
//         item2Name: "VERONICA BEARD Carito Gingham Rolled-Cuff Shorts",
//         item2URL: "https://www.bergdorfgoodman.com/p/veronica-beard-carito-gingham-rolled-cuff-shorts-prod144640078?ecid=BGCS__HighAUR&utm_source=google_shopping&adpos=&scid=scplpsku114390287&sc_intid=sku114390287&gclid=CjwKCAiAnIT9BRAmEiwANaoE1WLluAim2CFkJsrWsJP367w9taOXRi-wR4NVWsGpcQCDJh_hll0g_BoC5KQQAvD_BwE&gclsrc=aw.ds",
//         item2Avail: true,
//         item3Image: "https://www.bragmybag.com/wp-content/uploads/2019/03/Chanel-Short-Pearl-Handle-Bag.jpg",
//         item3Name: "Chanel Short Pearl Handle Bag",
//         item3URL: "https://www.tradesy.com/t/chanel-classic-flap-chic-pearl-black-leather-cross-body-bag/27465086/",
//         item3Avail: true,
//         item4Image: "https://n.nordstrommedia.com/id/sr3/83441267-abbf-46ae-97e5-3dc394f66cd8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
//         item4Name: "CHRISTIAN LOUBOUTIN Soval Ankle Strap Pump",
//         item4URL: "https://www.nordstrom.com/s/christian-louboutin-soval-ankle-strap-pump-women/5258933",
//         item4Avail: false,
//     },
//     outfit11: {
//         outfitImage: "/assets/outfitImg/Outfit 3.2.JPG",
//         item1Image: "https://us.maje.com/dw/image/v2/AAON_PRD/on/demandware.static/-/Sites-maje-catalog-master-H13/default/dw5ce069b3/images/h13/Maje_E19RAPY-0071_H_P.jpg?sw=500&sh=500&sm=fit",
//         item1Name: "MAJE Rapy floral-print off-the-shoulder woven mini dress",
//         item1URL: "https://www.bloomingdales.com/shop/product/maje-rapy-floral-off-the-shoulder-dress?ID=3292406&utm_source=rakuten&utm_medium=affiliate&utm_campaign=affiliates&ranMID=13867&ranEAID=*2nGiS3mv0Y&ranSiteID=.2nGiS3mv0Y-OEG6xd6HUiHMQTg0RGNy4A&LinkshareID=.2nGiS3mv0Y-OEG6xd6HUiHMQTg0RGNy4A&m_sc=aff&PartnerID=LINKSHARE&cm_mmc=LINKSHARE-_-n-_-n-_-n&ranPublisherID=*2nGiS3mv0Y&ranLinkID=1&ranLinkTypeID=10&pubNAME=ShopStyle++Collective",
//         item1Avail: false,
//         item2Image: "https://cdna.lystit.com/photos/nordstrom/9cdd71c7/christian-louboutin-Vosges-Green-Soval-Ankle-Strap-Pump.jpeg",
//         item2Name: "Soval Ankle Strap Pump by Christian Louboutin",
//         item2URL: "https://modesens.com/product/christian-louboutin-soval-ankle-strap-pump-vosges-13430535/"
//     },
//     outfit12: {
//         outfitImage: "/assets/outfitImg/Outfit 3.3.JPG",
//         item1Image: "https://cdn-images.farfetch-contents.com/13/93/35/54/13933554_17767917_1000.jpg",
//         item1Name: "Aje ‘Tilly” Dress",
//         item1URL: "https://www.davidjones.com/brand/aje/22267366/Tilly-Dress.html",
//         item1Avail: false,
//         item2Image: "https://image.s5a.com/is/image/saks/0478532806740_WHITE?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
//         item2Name: "IRO Ashville Leather Moto Jacket",
//         item2URL: "https://www.saksfifthavenue.com/product/iro-ashville-leather-moto-jacket-0478532806740.html?site_refer=CSE_GGLPLA:Womens_Clothing:IRO&CSE_CID=G_Saks_PLA_US_Women%27s+Apparel:Outerwear&gclid=CjwKCAiAnIT9BRAmEiwANaoE1VfsTB1nFAboDuq1NvJeak4e8Vb37htam_2wGR85NBJ5XHsjxEXr_hoC1xoQAvD_BwE&gclsrc=aw.ds",
//         item2Avail: true,
//         item3Image: "https://lh3.googleusercontent.com/proxy/E2URZNZl_Oc-ay810-AdDE4qdnSCC52DCtNeTwnzJkQF9RXZRv5w3K6w4ga4vm7rcM1A_R0sXPlCBDuZ3yOVoKtjGkhZxd5m3ZpfBzsI5BNG8KyZzHJgrPSOm6wsx9x8lsYRwcQr0l1Jyk1kQQzBrBS0OitadkZo5XK5qjkXbDzR9wkS",
//         item3Name: "Chanel ‘Evening by the Sea’ Clutch",
//         item3URL: "",
//         item3Avail: false,
//         item4Image: "https://cdn.modesens.com/media/59784219",
//         item4Name: "VIVIENNE WESTWOOD Freed Boot White",
//         item4URL: "https://modesens.com/product/vivienne-westwood-freed-boot-white-9754368/",
//         item4Avail: false,
//     },
// }
// )

