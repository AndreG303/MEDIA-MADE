const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  ( process.env.MONGODB_URI ||
    "mongodb://localhost/proj3"),
    {
  useNewUrlParser: true,
  useFindAndModify: false
    }
);

const outfit = [{
//Emily in Paris Outfits
    outfitImage: "/assets/EmInParisOutfits/Outfit1.1.jpg",
    category: "emily",
    items: [{
        image: "https://s1.thcdn.com/productimg/1600/1600/12081059-1064677155724591.jpg",
        name: "KENZO Women's Allover Flower Rice Bag Cotton Poplin Dress - Deep Fuschia",
        url: "https://www.revolve.com/kenzo-all-over-rice-bag-dress-in-deep-fuchsia/dp/KZOR-WD19/?d=Womens&AID=11017645&PID=7900573&bneEl=false&cjevent=9c5119d11e1311eb804100a20a24060b&d=Womens&product=KZOR-WD19&source=cj&utm_campaign=glob_p_4609662&utm_medium=affiliate&utm_source=cj&product=KZOR-WD19&",
        avail: false,
    }
    ]
},
    {
        outfitImage: "/assets/EmInParisOutfits/Outfit1.2.jpg",
        category: "emily",
        items: [{
            image: "https://n.nordstrommedia.com/id/sr3/956c7594-0803-4f0c-8f72-abf40f7a6af3.webp?crop=pad&pad_color=FFF&format=jpeg&w=1318&h=2021",
            name: "ALICE + OLIVIA Willa Silk Blouse",
            url: "https://www.revolve.com/kenzo-all-over-rice-bag-dress-in-deep-fuchsia/dp/KZOR-WD19/?d=Womens&AID=11017645&PID=7900573&bneEl=false&cjevent=9c5119d11e1311eb804100a20a24060b&d=Womens&product=KZOR-WD19&source=cj&utm_campaign=glob_p_4609662&utm_medium=affiliate&utm_source=cj&product=KZOR-WD19&",
            avail: false
        }
        ]
    },
    {
        outfitImage: "/assets/EmInParisOutfits/Outfit1.3.jpg",
        category: "emily",
        items: [{
            image: "https://www.yoox.com/images/items/12/12404009dp_14_f.jpg?width=387&height=490&impolicy=crop&gravity=Center",
            name: "GANNI Silk Mix Top",
            url: "https://www.yoox.com/US/12404009DP/item?gender=D&kpid=US-12404009DP-2-PE21&adtype=pla&tp=206533&gclid=CjwKCAiAnIT9BRAmEiwANaoE1V-hsVn_nKPzeYEztU9_rMY_ljYnemS56h08NWefh0FPclnekV6TaRoC26UQAvD_BwE&gclsrc=aw.ds#cod10=12404009DP&sizeId=&sizeName=",
            avail: true
        },
        {
            image: "https://www.yoox.com/images/items/35/35432120ps_14_f.jpg?width=387&height=490&impolicy=crop&gravity=Center",
            name: "GANNI Silk Mix Skirt",
            url: "https://www.yoox.com/US/35432120PS/item?gender=D&kpid=US-35432120PS-2-PE21&adtype=pla&tp=206533&gclid=CjwKCAiAnIT9BRAmEiwANaoE1TLDV1abJRfrWa3-s7QaEjh26NUG4GrBZECTT4YBQQFbPRfmlSkleBoCP4EQAvD_BwE&gclsrc=aw.ds#cod10=35432120PS&sizeId=&sizeName=",
            avail: true
        },
        {
            image: "https://i1.adis.ws/s/rb/W292180AP-001-MSET?$pdp_1024$",
            name: "rag & bone Field Waist Belt",
            url: "https://www.rag-bone.com/sale/womens/accessories/field-waist-belt-W292180AP.html?utm_source=pjn&utm_medium=affiliate&utm_campaign=73861&clickId=3336618007",
            avail: false
        },
        {
            image: "https://wornontv.net/dottv/assets/products/Canary-Bag-by-Patricia-Field-195884-1093041601698348.jpg",
            name: "Canary Bag by Patricia Field",
            url: "https://patriciafield.com/",
            avail: false
        }
        ]
    },
    {
        outfitImage: "/assets/EmInParisOutfits/Outfit2.1.jpg",
        category: "emily",
        items: [{
            image: "https://cdn1.jolicloset.com/img4/fblink/2020/07/201967-1.jpg",
            name: "CHANEL Sky Blue Turquoise Jacket Cardigan Leather Chain 20C Cruise 2020",
            url: "https://www.ebay.com/itm/CHANEL-Sky-Blue-Turquoise-Jacket-Cardigan-Leather-Chain-20C-Cruise-2020-FR-36-/264808425414",
            avail: true
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0251/3519/products/dptdress_1000x1000.jpg?v=1560273751",
            name: "Dope Tavio Patchwork Dress by Patricia Field",
            url: "",
            avail: false
        },
        {
            image: "https://i.frog.ink/UwykGgio/dsc6016_600.jpg?v=1561536312.32",
            name: "CHANEL Round As Earth Bag Malachite Green Patent Leather Chain Crossbody Handbag",
            url: "https://www.ebay.com/itm/CHANEL-Round-As-Earth-Bag-Malachite-Green-Patent-Leather-Chain-Crossbody-Handbag-/163753462397",
            avail: true
        },
    ]   
    },
    {
        outfitImage: "/assets/EmInParisOutfits/Outfit2.2.jpg",
        category: "emily",
        items: [{
            image: "https://www.theoutnet.com/variants/images/210639989709/F/w1020_q80.jpg",
            name: "Alexandre Vauthier Strapless Draped Stretch-silk Satin Bustier Top",
            url: "https://www.theoutnet.com/en-us/shop/product/alexandre-vauthier/tops/strapless-top/strapless-draped-stretch-silk-satin-bustier-top/210639989709",
            avail: true
        },
        {
            image: "https://ae01.alicdn.com/kf/HTB1Gs9vSXXXXXa.apXXq6xXFXXXw/Brand-Fashion-New-Women-Acrylic-Clutch-Novel-Evening-bag-Small-Cartoon-Messenger-Bag-Glass-Lady-Face.jpg_q50.jpg",
            name: "Yens ‘Face’ Acrylic Bag",
            url: "https://www.aliexpress.com/i/32822027726.html",
            avail: true
        },
        {
            image: "https://cdn.modesens.com/product/13112961_33",
            name: "CHRISTIAN LOUBOUTIN Xili Crisscross Metallic Leather Sandals In Silver",
            url: "https://modesens.com/product/christian-louboutin-xili-crisscross-metallic-leather-sandals-silver-13112961/?refinfo=u2_pifsChrisLoubo13112961",
            avail: false
        },
        
        ]
    },
    {
        outfitImage: "/assets/EmInParisOutfits/Outfit2.3.jpg",
        category: "emily",
        items: [{
            image: "https://cdn.modesens.com/product/10019621_46",
            name: "Keith Haring X Alice + Olivia Lonnie Graphic Reversible Silk Bomber Jacket In Black",
            url: "https://modesens.com/product/alice-and-olivia-keith-haring-x-alice-olivia-lonnie-graphic-reversible-silk-bomber-jacket-black-10019621/",
            avail: false
        },
        {
            image: "https://images.asos-media.com/products/asos-edition-extreme-fringe-bag-with-natural-handle/11481254-1-oatmeal?$XXL$&wid=513&fit=constrain",
            name: "ASOS EDITION extreme fringe bag with natural handle",
            url: "https://www.asos.com/us/asos-edition/asos-edition-extreme-fringe-bag-with-natural-handle/prd/11481254",
            avail: false
        },
        {
            image: "https://assetsprx.matchesfashion.com/img/product/1253244_5_large.jpg?width=600&quality=90&",
            name: "MAISON MARGIELA Tabi split-toe leather ankle boots",
            url: "https://www.matchesfashion.com/us/products/1253244?country=USA&rffrid=sem.Google.n=g.cid=1775440313.aid=73041765990.k=.mty=.d=c.adp=.cr=343457940181.tid=aud-483449789487:pla-566487259645.pid=1253244000012.ppid=566487259645.lpm=9003650.adty=pla.prl=en&utm_content=1253244000012&utm_term=566487259645.[value].&gclid=CjwKCAiAnIT9BRAmEiwANaoE1WkSonJ6NwCWUI_9XSNgxtbZygeoJTgsRdnlUhBQ-1sFFF26rVbwCRoCgsQQAvD_BwE&gclsrc=aw.ds",
            avail: true
        },
        
        ]
    },
    {
        outfitImage: "/assets/EmInParisOutfits/Outfit2.4.jpg",
        category: "emily",
        items: [{
            image: "https://cdn.shopify.com/s/files/1/0040/5313/9523/products/Petal_Cami_Crop_Top-_Cream_1080x.jpg?v=1600198278",
            name: "the naked laundry Petal Cami Crop Top- Cream",
            url: "https://www.thenakedlaundry.com/products/petal-cami-crop-top-cream",
            avail: false
        },
        {
            image: "https://cdn.theluxurycloset.com/uploads/optimize/products/full/luxury-women-chanel-used-handbags-p518-001.jpg",
            name: "Chanel Pearl Plexiglass Round Shape Minaudiere Evening Bag",
            url: "https://theluxurycloset.com/women/chanel-pearl-plexiglass-round-shape-minaudiere-evening-bag-p518",
            avail: false
        }
        ]
    },
    {
        outfitImage: "/assets/EmInParisOutfits/Outfit2.5.jpg",
        category: "emily",
        items: [ {
            image: "https://images.lvrcdn.com/Big70I/B41/020_8bb728d9-d59b-4c14-ae0d-d7d7e9597df5.JPG",
            name: "DOLCE & GABBANA PRINTED OFF SHOULDER COTTON POPLIN DRESS",
            url: "https://www.luisaviaroma.com/en-us/p/dolce-gabbana/women/70I-B41020?AID=10617612&PID=7900573&SID=4803956334&utm_source=CommissionJunction&utm_medium=affiliation&utm_content=7900573&utm_campaign=4609662&CJEVENT=5e45f4bc1e1e11eb838d00b00a240614&click_id=5e45f4bc1e1e11eb838d00b00a240614",
            avail: false
        },
        {
            image: "https://i1.adis.ws/s/rb/W292180AP-001-MSET?$pdp_1024$",
            name: "rag & bone Field Waist Belt",
            url: "https://www.rag-bone.com/sale/womens/accessories/field-waist-belt-W292180AP.html?utm_source=pjn&utm_medium=affiliate&utm_campaign=73861&clickId=3336618007",
            avail: false
        }
        ]
    },
    {
        outfitImage: "/assets/EmInParisOutfits/Outfit3.1.jpg",
        category: "emily",
        items: [ {
            image: "https://www.hartlyfashions.com/wp-content/uploads/2018/10/miller-dickey-jacket-black-white.png",
            name: "VERONICA BEARD Miller Dickey Checker Jacket",
            url: "https://www.bergdorfgoodman.com/p/veronica-beard-miller-dickey-checker-jacket-prod144650138?ecid=BGCS__HighAUR&utm_source=google_shopping&adpos=&scid=scplpsku114400549&sc_intid=sku114400549&gclid=CjwKCAiAnIT9BRAmEiwANaoE1W-OS7JceNV7jTwu7r0PVoDxBkOa_lceUMr7Kc6Yc-K7H_yMb4pyzxoCNisQAvD_BwE&gclsrc=aw.ds",
            avail: false
        },
        {
            image: "https://www.refinery29.com/images/10061189.jpg?format=webp&width=&height=&quality=85",
            name: "VERONICA BEARD Carito Gingham Rolled-Cuff Shorts",
            url: "https://www.bergdorfgoodman.com/p/veronica-beard-carito-gingham-rolled-cuff-shorts-prod144640078?ecid=BGCS__HighAUR&utm_source=google_shopping&adpos=&scid=scplpsku114390287&sc_intid=sku114390287&gclid=CjwKCAiAnIT9BRAmEiwANaoE1WLluAim2CFkJsrWsJP367w9taOXRi-wR4NVWsGpcQCDJh_hll0g_BoC5KQQAvD_BwE&gclsrc=aw.ds",
            avail: true
        },
        {
            image: "https://www.bragmybag.com/wp-content/uploads/2019/03/Chanel-Short-Pearl-Handle-Bag.jpg",
            name: "Chanel Short Pearl Handle Bag",
            url: "https://www.tradesy.com/t/chanel-classic-flap-chic-pearl-black-leather-cross-body-bag/27465086/",
            avail: true
        },
        {
            image: "https://n.nordstrommedia.com/id/sr3/83441267-abbf-46ae-97e5-3dc394f66cd8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838",
            name: "CHRISTIAN LOUBOUTIN Soval Ankle Strap Pump",
            url: "https://www.nordstrom.com/s/christian-louboutin-soval-ankle-strap-pump-women/5258933",
            avail: false
        }
        ]
    },
    {
        outfitImage: "/assets/EmInParisOutfits/Outfit3.2.jpg",
        category: "emily",
        items: [ {
            image: "https://us.maje.com/dw/image/v2/AAON_PRD/on/demandware.static/-/Sites-maje-catalog-master-H13/default/dw5ce069b3/images/h13/Maje_E19RAPY-0071_H_P.jpg?sw=500&sh=500&sm=fit",
            name: "MAJE Rapy floral-print off-the-shoulder woven mini dress",
            url: "https://www.bloomingdales.com/shop/product/maje-rapy-floral-off-the-shoulder-dress?ID=3292406&utm_source=rakuten&utm_medium=affiliate&utm_campaign=affiliates&ranMID=13867&ranEAID=*2nGiS3mv0Y&ranSiteID=.2nGiS3mv0Y-OEG6xd6HUiHMQTg0RGNy4A&LinkshareID=.2nGiS3mv0Y-OEG6xd6HUiHMQTg0RGNy4A&m_sc=aff&PartnerID=LINKSHARE&cm_mmc=LINKSHARE-_-n-_-n-_-n&ranPublisherID=*2nGiS3mv0Y&ranLinkID=1&ranLinkTypeID=10&pubNAME=ShopStyle++Collective",
            avail: false
        },
        {
            image: "https://cdna.lystit.com/photos/nordstrom/9cdd71c7/christian-louboutin-Vosges-Green-Soval-Ankle-Strap-Pump.jpeg",
            name: "Soval Ankle Strap Pump by Christian Louboutin",
            url: "https://modesens.com/product/christian-louboutin-soval-ankle-strap-pump-vosges-13430535/",
            avail: false
        }
        ]
    },
    {
        outfitImage: "/assets/EmInParisOutfits/Outfit3.3.jpg",
        category: "emily",
        items: [ {
            image: "https://cdn-images.farfetch-contents.com/13/93/35/54/13933554_17767917_1000.jpg",
            name: "Aje ‘Tilly” Dress",
            url: "https://www.davidjones.com/brand/aje/22267366/Tilly-Dress.html",
            avail: false
        },
        {
            image: "https://image.s5a.com/is/image/saks/0478532806740_WHITE?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0",
            name: "IRO Ashville Leather Moto Jacket",
            url: "https://www.saksfifthavenue.com/product/iro-ashville-leather-moto-jacket-0478532806740.html?site_refer=CSE_GGLPLA:Womens_Clothing:IRO&CSE_CID=G_Saks_PLA_US_Women%27s+Apparel:Outerwear&gclid=CjwKCAiAnIT9BRAmEiwANaoE1VfsTB1nFAboDuq1NvJeak4e8Vb37htam_2wGR85NBJ5XHsjxEXr_hoC1xoQAvD_BwE&gclsrc=aw.ds",
            avail: false
        },
        {
            image: "https://lh3.googleusercontent.com/proxy/E2URZNZl_Oc-ay810-AdDE4qdnSCC52DCtNeTwnzJkQF9RXZRv5w3K6w4ga4vm7rcM1A_R0sXPlCBDuZ3yOVoKtjGkhZxd5m3ZpfBzsI5BNG8KyZzHJgrPSOm6wsx9x8lsYRwcQr0l1Jyk1kQQzBrBS0OitadkZo5XK5qjkXbDzR9wkS",
            name: "Chanel ‘Evening by the Sea’ Clutch",
            url: "",
            avail: false
        },
        {
            image: "https://cdn.modesens.com/media/59784219",
            name: "VIVIENNE WESTWOOD Freed Boot White",
            url: "https://modesens.com/product/vivienne-westwood-freed-boot-white-9754368/",
            avail: false
        },
     
        ]
    },

  
 {
    outfitImage: "/assets/QueensGambitOutfits/4.4.jpg",
    category: "queens",
    items: [ {
        image: "https://images.asos-media.com/products/accessorize-button-up-beach-midi-dress-in-white/13655190-1-white?$XXL$&wid=513&fit=constrain",
        name: "Accessorize button up beach midi dress in white",
        url: "https://www.asos.com/us/accessorize/accessorize-button-up-beach-midi-dress-in-white/prd/13655190?affid=25714&_cclid=Google_Cj0KCQiAk53-BRD0ARIsAJuNhptdWyCzyh-HD5TRWxiDo9AXmXbajJDKJRRLO4JuaoWWoMrKV9elWvoaAlQ9EALw_wcB&channelref=product+search&mk=abc&ppcadref=10104919891%7c106779534892%7caud-909745351665:pla-294682000766&cpn=10104919891&gclid=Cj0KCQiAk53-BRD0ARIsAJuNhptdWyCzyh-HD5TRWxiDo9AXmXbajJDKJRRLO4JuaoWWoMrKV9elWvoaAlQ9EALw_wcB&gclsrc=aw.ds",
        avail: true
    }
    ]
 },
 {
    outfitImage: "/assets/QueensGambitOutfits/4.5.jpg",
    category: "queens",
    items: [ {
        image: "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1725e9ff/1_front_750/00387705-08.jpg?sw=500&sh=750",
        name: "Crepe Pussycat Bow Top",
        url: "https://www.forever21.com/us/2000387705082.html?gclsrc=aw.ds&%243p=a_google_adwords&%24always_deeplink=false&lpurl=https%3A%2F%2Fwww.forever21.com%2Fus%2F2000387705082.html%3Fgclsrc%3Daw.ds%26&~ad_set_id=110143059781&~campaign_id=11647983085&~channel=u&~keyword=&~placement=&%24fallback_url=https%3A%2F%2Fwww.forever21.com%2Fus%2F2000387705082.html%3Fgclsrc%3Daw.ds%26&~campaign=&gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpuZ5jXlmX1hMypwYR9DA3jb0CewML2JCdRcENpxaao6F6tN7aQZBdwaAqqbEALw_wcB&gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpuZ5jXlmX1hMypwYR9DA3jb0CewML2JCdRcENpxaao6F6tN7aQZBdwaAqqbEALw_wcB&_branch_match_id=853808111856861985&utm_source=u",
        avail: true
    },
    {
        image: "https://media.kohlsimg.com/is/image/kohls/3358845_Gray?wid=1200&hei=1200&op_sharpen=1",
        name: "Women's White Mark Midi Skirt",
        url: "https://www.kohls.com/product/prd-3358845/womens-white-mark-solid-midi-skirt.jsp?skuid=20748147&CID=shopping15&utm_campaign=WEB%20EXCLUSIVE%20SEPARA&utm_medium=CSE&utm_source=google&utm_product=20748147&utm_campaignid=9733267375&gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpuuLpSfZ__F9p_hXS0Sjjbwtz4gHwjQm2VY157BYryPCV_XQ1s5yhkaAjcNEALw_wcB&gclsrc=aw.ds",
        avail: true
    }
    ]
 },
 {
    outfitImage: "/assets/QueensGambitOutfits/4.6.jpg",
    category: "queens",
    items: [ {
        image: "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/42/360/L_g0104336042.jpg",
        name: "petitkura - Peter Pan Collar Sleeveless Chiffon Top",
        url: "https://www.yesstyle.com/en/tcuc.USD/coc.US/info.html/pid.1073122167?cpid=1073122679&googtrans=en&bac=EXUXNBGL&%243p=a_google_adwords&%24always_deeplink=false&gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpuQXEPXCv2vdwb9kywc1ANIA6J2W0yjiv80m5xaRkwuqfycubQOtGMaAl9PEALw_wcB&gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpuQXEPXCv2vdwb9kywc1ANIA6J2W0yjiv80m5xaRkwuqfycubQOtGMaAl9PEALw_wcB&~ad_set_id=62829238544&~campaign_id=1425184459&~channel=Google%20Ads&~keyword=&~placement=&~feature=Shopping&%24fallback_url=https%3A%2F%2Fwww.yesstyle.com%2Fen%2Ftcuc.USD%2Fcoc.US%2Finfo.html%2Fpid.1073122167%3Fcpid%3D1073122679%26googtrans%3Den%26bac%3DEXUXNBGL&_branch_match_id=853808111856861985&utm_source=Google%20Ads&utm_medium=Shopping",
        avail: true
    },
    {
        image: "https://lp.cosstores.com/app001prod?set=source[/05/4d/054d8b251a0859fb2466eef01c4cc8c5661c5faf.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/zoom]",
        name: "A-LINE COVERED SLIT MIDI SKIRT",
        url: "https://www.cosstores.com/en_usd/women/womenswear/skirts/product.a-line-covered-slit-midi-skirt-yellow.0930727001.html?gclid=Cj0KCQiAk53-BRD0ARIsAJuNhptE50j1Q7CJaN7VokO4TTg3EWNIbgy3qJ4bJpAr2i5RlFJKpWgAdC4aAhQCEALw_wcB",
        avail: true
    }
    ]
 },
 {
    outfitImage: "/assets/QueensGambitOutfits/5.1.jpg",
    category: "queens",
    items: [ {
        image: "https://cdn.shopify.com/s/files/1/0274/7331/3863/products/pearly-dot-triple-pleat-cinnamon-black_10771184-P68_flat_1_2000x.jpg?v=1597253291",
        name: "Pearly Dot Triple Pleat",
        url: "https://anneklein.com/products/pearly-dot-triple-pleat?variant=32524684361799&gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpsJigI8qcdogYh5X4f3BDBXEuL_4gna4WyxJJt-hNyNScw71SfIabcaAr6GEALw_wcB",
        avail: true
    }
    ]
 },
 {
    outfitImage: "/assets/QueensGambitOutfits/5.2.jpg",
    category: "queens",
    items: [ {
        image: "https://i.etsystatic.com/25429554/r/il/a9d116/2708392629/il_794xN.2708392629_snr1.jpg",
        name: "Red and Black Chess Board Women's T-shirt",
        url: "https://www.etsy.com/listing/890629966/red-and-black-chess-board-womens-t-shirt?awc=7432_1606966134_5dfa9a40f63114ae239eb7c416450344&utm_medium=affiliate&utm_source=affiliate_window&utm_campaign=fr_buyer&utm_content=433093&utm_term=146067",
        avail: true
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/71v9xnE9JdL._AC_UY1000_.jpg",
        name: "Sash Belt/Hair tie/Scarf Black",
        url: "https://www.amazon.com/Sash-Belt-Scarf-Black-Georgette/dp/B001OOCFOU",
        avail: true
    }

    ]
 },
 {
    outfitImage: "/assets/QueensGambitOutfits/5.3.jpg",
    category: "queens",
    items: [ {
        image: "https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwb3eb72a9/1_front_750/00402423-04.jpg?sw=500&sh=750",
        name: "Paisley Print Shirt",
        url: "https://www.forever21.com/us/2000402423042.html?gclsrc=aw.ds&%243p=a_google_adwords&%24always_deeplink=false&lpurl=https%3A%2F%2Fwww.forever21.com%2Fus%2F2000402423042.html%3Fgclsrc%3Daw.ds%26&~ad_set_id=113703930935&~campaign_id=11644344459&~channel=u&~keyword=&~placement=&%24fallback_url=https%3A%2F%2Fwww.forever21.com%2Fus%2F2000402423042.html%3Fgclsrc%3Daw.ds%26&~campaign=&gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpvqbB_hZcUD_Vx4buW2faUvd7hqCnSXKbB0BcDvA0_wV_dtfZ57lzoaAtd1EALw_wcB&gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpvqbB_hZcUD_Vx4buW2faUvd7hqCnSXKbB0BcDvA0_wV_dtfZ57lzoaAtd1EALw_wcB&_branch_match_id=853808111856861985&utm_source=u",
        avail: true
    }
    ]
 },
 {
    outfitImage: "/assets/QueensGambitOutfits/5.4.jpg",
    category: "queens",
    items: [ {
        image: "https://cdn.shopify.com/s/files/1/0150/1528/products/A-12-0015-000-SEDONA-SUNGLASSES-BLACK-1390_985x.jpg?v=1578423971",
        name: "SEDONA SUNGLASSES",
        url: "https://www.aninebing.com/products/sedona-sunglasses-black?utm_source=Google&utm_medium=PLA&utm_campaign=NB&gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpsi6Z7ZzilyvZxnr-pIrml53bnK1bt14ZDQ9zWnNqYNjENNjtpmr-caAml6EALw_wcB",
        avail: true
    },
    {
        image: "https://i.s-madewell.com/is/image/madewell/AN441_KF0976_ld?wid=1400&hei=1779&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0",
        name: "V-Neck Button-Front Boxy-Crop Tee",
        url: "https://www.madewell.com/v-neck-button-front-boxy-crop-tee-99105860112.html?source=googlePLA&noPopUp=true",
        avail: true
    },
    {
        image: "https://img.ltwebstatic.com/images2_pi/2019/06/10/15601599763859238687_thumbnail_600x799.webp",
        name: "SHEIN Button Side Zipper Wrap Skirt",
        url: "https://us.shein.com/Button-Side-Zipper-Wrap-Skirt-p-727575-cat-1732.html?url_from=adplaswskirt07190425035XS_ssc&gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpv-zTrk62qUlwC2G9Sqhjeh1jgWdfcVCtcWXUJX9UmqUVYQFIRmKxgaAjeyEALw_wcB",
        avail: true
    },
    {
        image: "https://s7d5.scene7.com/is/image/UrbanOutfitters/48258339_011_d?$xlarge$&fit=constrain&qlt=80&wid=683",
        name: "Lana Silk Scarf Scrunchie",
        url: "https://www.urbanoutfitters.com/shop/lana-silk-scarf-scrunchie?inventoryCountry=US&color=011&size=ONE%20SIZE&gclid=Cj0KCQiAk53-BRD0ARIsAJuNhptc8uODahrvUKaaz2PhbuXs67VeKAKfJOMxB478s8NZTCqqz1LY6X0aAs2WEALw_wcB&gclsrc=aw.ds&type=REGULAR&quantity=1",
        avail: true
    }
    ]
 },
 {
    outfitImage: "/assets/QueensGambitOutfits/6.2.jpg",
    category: "queens",
    items: [ {
        image: "https://images-na.ssl-images-amazon.com/images/I/71v9xnE9JdL._AC_UY1000_.jpg",
        name: "Sash Belt/Hair tie/Scarf Black",
        url: "https://www.amazon.com/Sash-Belt-Scarf-Black-Georgette/dp/B001OOCFOU",
        avail: true
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScvXDhUJrMNsJs2_inGQF89TlpJ8ASuI6uMwJZI2y7ez1ML-im79Zr_CbceGjjZoryyeOoVfX1uxTiZCJsXQ8EdGsdLMSptuY0lCaJH2E&usqp=CAY",
        name: "Contrast Detail Button-Up Blouse",
        url: "https://www.nordstrom.com/S/5496003?country=US&currency=USD&utm_channel=low_nd_seo_shopping&utm_source=google&sp_source=google",
        avail: true
    }

    ]
 },
 {
    outfitImage: "/assets/QueensGambitOutfits/6.3.jpg",
    category: "queens",
    items: [ {
        image: "https://i.ebayimg.com/images/g/cfUAAOSwcpJe3WkD/s-l640.jpg",
        name: "Anthropologie Wool Blend Linda Plaid Pea Coat",
        url: "https://www.ebay.com/i/283906077588?chn=ps&mkevt=1&mkcid=28",
        avail: true
    },
    
 {
    image: "https://www.jcrew.com/s7-img-facade/K4227_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=850&hei=850",
    name: "Tissue turtleneck",
    url: "https://www.jcrew.com/us/p/womens_category/maternity/tshirts_tanktops/tissue-turtleneck/K4227?color_name=black&noPopUp=true",
    avail: true
},
{
    image: "https://aritzia.scene7.com/is/image/Aritzia/zoom/f19_01_a07_68692_17573_on_c.jpg",
    name: "Babaton Modern Mini Skirt",
    url: "https://www.aritzia.com/us/en/product/modern-mini-skirt/68692089.html?gclid=CjwKCAiAwrf-BRA9EiwAUWwKXsew0kFpQ4Tpvyqb2o_OTr_Uct0pOrvoBmpzrBwibqYTLetmUV_7uxoCVfkQAvD_BwE",
    avail: true
},
    ]
},
{
    outfitImage: "/assets/QueensGambitOutfits/6.4.jpg",
    category: "queens",
    items: [ {
        image: "https://bananarepublicfactory.gapfactory.com/webcontent/0019/453/304/cn19453304.jpg",
        name: "Textured Fit-and-Flare Sweater Dress",
        url: "https://bananarepublicfactory.gapfactory.com/browse/product.do?vid=1&pid=594267#pdp-page-content",
        avail: true
    }
    ]
 },
//  {
//     outfitImage: "/assets/QueensGambitOutfits/6.6.jpg",
//     category: "queens",
//     items: [ {
//         image: "https://static.zara.net/photos///2020/I/0/1/p/5646/123/501/2/w/1143/5646123501_6_1_1.jpg?ts=1602660817960",
//         name: "HIGH COLLAR KNIT SWEATER",
//         url: "https://www.zara.com/us/en/high-collar-knit-sweater-p05646123.html?v1=79333638",
//         avail: true
//     }
//     ]
//  },
//  {
//     outfitImage: "/assets/QueensGambitOutfits/6.7.jpg",
//     category: "queens",
//     items: [ {
//         image: "https://images.asos-media.com/products/other-stories-satin-short-sleeve-midaxi-dress-in-dusty-green/20109760-4?$XXL$&wid=513&fit=constrain",
//         name: "& Other Stories satin short sleeve midaxi dress in dusty green",
//         url: "https://www.asos.com/us/other-stories/other-stories-satin-short-sleeve-midaxi-dress-in-dusty-green/prd/20109760?affid=25714&_cclid=Google_CjwKCAiAwrf-BRA9EiwAUWwKXpgk9gWFCo0kQ7S4GjoTBQlnkkDmNclfqN87L1B_tDDVZhiO9RmcCxoCfo0QAvD_BwE&channelref=product+search&mk=abc&ppcadref=10104919891%7c106779534892%7cpla-294682000766&cpn=10104919891&gclid=CjwKCAiAwrf-BRA9EiwAUWwKXpgk9gWFCo0kQ7S4GjoTBQlnkkDmNclfqN87L1B_tDDVZhiO9RmcCxoCfo0QAvD_BwE&gclsrc=aw.ds",
//         avail: true
//     }
//     ]
//  },
//  {
//     outfitImage: "/assets/QueensGambitOutfits/6.8.jpg",
//     category: "queens",
//     items: [ {
//         image: "https://images.express.com/is/image/expressfashion/0006_01165867_2557_a001?cache=on&wid=480&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
//         name: "Supersoft Lace Trim Pajama Tank",
//         url: "https://www.express.com/clothing/women/supersoft-lace-trim-pajama-tank/pro/01165867/color/Beige/?CID=SEO_GOO-SAG-F-Organic-Retail-00-000-Tees-US-Product-NA",
//         avail: true
//     },
//     {
//         image: "https://images.express.com/is/image/expressfashion/0006_01165748_2557_a001?cache=on&wid=480&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
//         name: "Supersoft Lace Trim Pajama Short",
//         url: "https://www.express.com/clothing/women/supersoft-lace-trim-pajama-short/pro/01165748/color/Beige/",
//         avail: true
//     },
//     {
//         image: "https://www.lulus.com/images/product/xlarge/6199601_1291296.jpg?w=560",
//         name: "Delighted by You Brown Cable Knit Oversized Cardigan Sweater",
//         url: "https://www.lulus.com/products/delighted-by-you-brown-cable-knit-oversized-cardigan-sweater/1291296.html",
//         avail: true
//     }


//     ]
//  },
//  {
//     outfitImage: "/assets/QueensGambitOutfits/6.9.jpg",
//     category: "queens",
//     items: [ {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOdqTalwdrt6LXro9Ammv2bxn7cGqeOC51BQ&usqp=CAU",
//         name: "Funky Junque Trendy Warm Oversized Chunky Soft Oversized Cable Knit Slouchy Beanie",
//         url: "https://www.amazon.com/Funky-Junque-H-6100-54-Oversized-Slouchy/dp/B017HVDRCC/ref=asc_df_B017HVDRCC/?tag=hyprod-20&linkCode=df0&hvadid=309788712891&hvpos=&hvnetw=g&hvrand=11112121497440520319&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9060351&hvtargid=pla-568864974125&psc=1&tag=&ref=&adgrpid=61292185883&hvpone=&hvptwo=&hvadid=309788712891&hvpos=&hvnetw=g&hvrand=11112121497440520319&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9060351&hvtargid=pla-568864974125",
//         avail: true
//     },
//     {
//        image: "https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun_storefront_catalog/default/dw0ec85f06/product_images/0716484260064NEW_00_020.jpg?sw=690&sh=1070&sm=fit",
//        name: "Pacsun Raglan Cozy Mock Neck Top",
//        url: "https://www.pacsun.com/ps-basics-by-pacsun/raglan-cozy-mock-neck-top-1548478.html?&country=US&currency=USD&OriginId=GOG&XCIDP=P:G_PacSun_Shopping_SSC_W_Tees&&OriginId=GOG&XCIDP=P:G_PacSun_Shopping_SSC_W_Tees&k_clickid=0fc8d3e7-dfcc-4c39-92a4-509ae12f3187&gclid=CjwKCAiAwrf-BRA9EiwAUWwKXvKmnHclKEITj5s6h4mh6nE4pIlPOv4OePLcF_sYslIjx1l1xn5_JxoCIjcQAvD_BwE",
//        avail: true
//    },
//    {
//     image: "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/17678628_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
//     name: "Double-Collar Double-Breasted Trench Coat",
//     url: "https://www.macys.com/shop/product/lauren-ralph-lauren-double-collar-double-breasted-trench-coat?ID=11056434&pla_country=US&CAGPSPN=pla&cm_mmc=Google_Womens_PLA-_-RTW_Womens_Lauren_Ralph_Lauren_-_GS_Coats-_-72117738541-_-pg1050936501_c_kclickid_0fc8d3e7-dfcc-4c39-92a4-509ae12f3187_KID_EMPTY_255686941_19061550661_72117738541_aud-325772344535:pla-297482086746_726113104342USA__c_KID_&trackingid=424x1050936501&m_sc=sem&m_sb=Google&m_tp=PLA&m_ac=Google_Womens_PLA&m_ag=Coats&m_cn=RTW_Womens_Lauren_Ralph_Lauren_-_GS&m_pi=go_cmp-255686941_adg-19061550661_ad-72117738541_aud-325772344535:pla-297482086746_dev-c_ext-_prd-726113104342USA&catargetid=120156340030196029&cadevice=c&gclid=CjwKCAiAwrf-BRA9EiwAUWwKXjsWhzCAernl_1HtxHu5NLV6Uzm9WbO9YSFTBTPpUiGO3wA_LF9_kRoCotEQAvD_BwE",
//     avail: true
// }

//     ]
//  },
//  {
//     outfitImage: "/assets/QueensGambitOutfits/7.1.jpg",
//     category: "queens",
//     items: [ {
//         image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSv8_rQ7uqlczdpOSt9nq-iSFCTg2g5O3bpD08R28cYTFPQ89Iz8RIAOPcOjHKY0vuqaZXd0vIlnBX_LVOqB9qG8k6YntvYcg&usqp=CAY",
//         name: "ASOS DESIGN wide jersey headband in white",
//         url: "https://www.asos.com/us/asos-design/asos-design-wide-jersey-headband-in-white/prd/20649170",
//         avail: true
//     },
//     {
//         image: "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto:100:1200/v1/i/60a363e4_0f7f.jpg",
//         name: "The Organic Cotton Pique Polo",
//         url: "https://www.everlane.com/products/womens-knit-polo-canvas?locale=US&utm_medium=cpc&utm_source=pla-google&utm_campaign=838503720&utm_content=435182470680&utm_term=aud-343731920531:pla-904739202459&adgroup=104880355847&pid=7687-54987&device=c&gclid=CjwKCAiAwrf-BRA9EiwAUWwKXtaLsjEtpQYMlBz5Y75AuqoK77zcHlKXCxQZAmzl_nTGyJm_eRBvFBoC2bMQAvD_BwE",
//         avail: true
//     },
//     {
//         image: "https://images.lululemon.com/is/image/lululemon/LW7AQES_0001_5?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=90,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
//         name: "Track That Short 5'",
//         url: "https://shop.lululemon.com/p/women-shorts/Track-That-Short-5/_/prod9270813?color=0001&sz=4&locale=en_US&sl=US&CID=Google_Women_Shopping_US&gclid=CjwKCAiAwrf-BRA9EiwAUWwKXmy9YIzTkMpB-PTKULvEX1qBXd_wKyXRI7yB3YSnJ7uEcYe_Km8flhoC6CAQAvD_BwE&gclsrc=aw.ds",
//         avail: true
//     },
//     {
//         image: "https://s7d4.scene7.com/is/image/WolverineWorldWide/WF34000_D?wid=826&hei=685&resMode=bilin&op_usm=0.5,1.0,8,0&iccEmbed=0&printRes=72",
//         name: "Women's Champion Originals",
//         url: "https://www.keds.com/en/champion-originals/044209485480.html?utm_source=google&utm_medium=cpc&adpos=&scid=scplp14492W-044209485480&sc_intid=14492W-044209485480&gclid=CjwKCAiAwrf-BRA9EiwAUWwKXmAvD2PjWrwv_MNZCM_g1OjbOvY-gwjvBTf0fJby_8wOcN1oFwiyUhoCpJMQAvD_BwE&gclsrc=aw.ds",
//         avail: true
//     }
//     ]
//  },
//  {
//     outfitImage: "/assets/QueensGambitOutfits/7.2.jpg",
//     category: "queens",
//     items: [ {
//         image: "https://static.zara.net/photos///2020/I/0/1/p/5070/926/800/2/w/1143/5070926800_6_1_1.jpg?ts=1597313914410",
//         name: "COAT WITH LAPEL COLLAR",
//         url: "https://www.zara.com/us/en/coat-with-lapel-collar-p05070626.html?v1=78532073",
//         avail: true
//     },
//     {
//         image: "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto:100:1200/v1/i/66786020_ad82.jpg",
//         name: "The Organic Cotton Turtleneck",
//         url: "https://www.everlane.com/products/womens-organic-cotton-turtleneck-canvas?locale=US&utm_medium=cpc&utm_source=pla-google&utm_campaign=838131515&utm_content=456926566752&utm_term=aud-337553806454:pla-940403820878&adgroup=109741878231&pid=8002-59155&device=c&gclid=CjwKCAiAwrf-BRA9EiwAUWwKXmIqzlHBCFMkWBa1FThexXAibQG6-TtIfmtoOZmhoIkjZ_ELZxEXBxoCEf8QAvD_BwE",
//         avail: true
//     },
//     {
//         image: "https://images.asos-media.com/products/johnny-loves-rosie-tortoise-circle-buckle-belt-in-black/20452736-1-black?$XXL$&wid=513&fit=constrain",
//         name: "Johnny Loves Rosie Tortoise Circle Buckle belt in black",
//         url: "https://www.asos.com/us/johnny-loves-rosie/johnny-loves-rosie-tortoise-circle-buckle-belt-in-black/prd/20452736",
//         avail: true
//     },
//     {
//         outfitImage: "/assets/QueensGambitOutfits/7.3.jpg",
//         category: "queens",
//         items: [ {
//             image: "https://cdn-images.farfetch-contents.com/15/51/86/89/15518689_28393559_1000.jpg",
//             name: "JW Anderson angled hem coat",
//             url: "https://www.farfetch.com/shopping/women/jw-anderson-angled-hem-coat-item-15518689.aspx?fsb=1&size=18&storeid=9158&utm_source=google&utm_medium=cpc&utm_keywordid=119356620&utm_shoppingproductid=15518689-54&pid=google_search&af_channel=Search&c=2069920048&af_c_id=2069920048&af_siteid=&af_keywords=aud-369354889647:pla-387245418436&af_adset_id=75217631654&af_ad_id=273101830441&af_sub1=119356620&af_sub5=15518689-54&is_retargeting=true&shopping=yes&gclid=CjwKCAiAwrf-BRA9EiwAUWwKXpLvNyHl6ZSSlWfSE-l7cQf-81TZoeKdao9SF-CQqDApZXpdIvIZzhoCeh0QAvD_BwE",
//             avail: true
//         },
//         {
//             image: "https://www.talbots.com/dw/image/v2/BCMM_PRD/on/demandware.static/-/Sites-master-catalog-talbots/default/dw9f68f6fb/images/203031020/203031020_5002.jpg?sfrm=jpg",
//             name: "POLISHED PLAID TRENCH COAT",
//             url: "https://www.talbots.com/polished-plaid-trench-coat/P203031020.html?dwvar_P203031020_color=SPICE%20MULTI&dwvar_P203031020_sizeType=MS&dwvar_P203031020_size=096",
//             avail: true
//         }
//         ]
//      },
//      {
//         outfitImage: "/assets/QueensGambitOutfits/7.4.jpg",
//         category: "queens",
//         items: [ {
//             image: "https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto:100:1200/v1/i/76f2adf8_5092.jpg",
//             name: "The Belgian-Waffle Wool Beanie",
//             url: "https://www.everlane.com/products/womens-belgian-waffle-beanie-bone?locale=US",
//             avail: true
//         },
//         {
//             image: "https://dimg.dillards.com/is/image/DillardsZoom/mainProduct/guess-single-breasted-button-front-skirted-coat/05836938_zi_white.jpg",
//             name: "Guess Single Breasted Button Front Skirted Coat",
//             url: "https://www.dillards.com/p/guess-single-breasted-button-front-skirted-coat/509698719?googleShop=Y",
//             avail: true
//         },
//         {
//             image: "https://anninc.scene7.com/is/image/AN/554503_9192?$fullBpdp$",
//             name: "The Easy Straight Pant",
//             url: "https://www.anntaylor.com/the-easy-straight-pant/554503?skuId=30603684&defaultColor=9192&prodId=554503&currency=usd&cid=PLA_AT_GGL_NB_Bottoms|Full%20Length&gclid=CjwKCAiAwrf-BRA9EiwAUWwKXt06VYkiEbXP-TMDxJ8MKfapnV_j8_VtoAHAq6T3HWUl1nS2n9wScRoCp8wQAvD_BwE&selectedColor=9192",
//             avail: true
//         },
//         {
//             image: "https://slimages.macys.com/is/image/MCY/products/5/optimized/17790195_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
//             name: "Franco Sarto Marquee Booties",
//             url: "https://www.macys.com/shop/product/franco-sarto-marquee-booties?ID=9452813&pla_country=US&CAGPSPN=pla&cm_mmc=Google_Womens_Shoes_PLA-_-Google_PLA_Womens_Shoes_Franco_Sarto_Google_PLA_Womens_Shoes_Franco_Sarto_Boots-_-473325281719-_-pg1051993707_c_kclickid_0fc8d3e7-dfcc-4c39-92a4-509ae12f3187_KID_EMPTY_11384848754_116777589772_473325281719_aud-325772344535:pla-980142578106_17122149630USA__c_KID_&trackingid=456x1051993707&m_sc=sem&m_sb=Google&m_tp=PLA&m_ac=Google_Womens_Shoes_PLA&m_ag=Google_PLA_WomensShoes_FrancoSarto_Boots&m_cn=Google_PLA_Womens_Shoes_Franco_Sarto&m_pi=go_cmp-11384848754_adg-116777589772_ad-473325281719_aud-325772344535:pla-980142578106_dev-c_ext-_prd-17122149630USA&gclid=CjwKCAiAwrf-BRA9EiwAUWwKXnK5QXH0nJSaOQBgHrc1AwGw7Aw0oSr0XjBeKYjymmoJ3RvMCj8wmBoC8nYQAvD_BwE",
//             avail: true
//         }
    
    
    
    
//         ]
//      }


//     ]
//  }



];

db.Outfit.deleteMany({})
    .then(() => {
        return db.Outfit.collection.insertMany(outfit)
    })
    .then(data => {
        mongoose.connection.close();
    });

