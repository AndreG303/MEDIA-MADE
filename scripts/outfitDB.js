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
        image: "",
        name: "",
        url: "",
        avail: true
    }
    ]
 },
 {
    outfitImage: "/assets/QueensGambitOutfits/6.6.jpg",
    items: [ {
        image: "https://static.zara.net/photos///2020/I/0/1/p/5646/123/501/2/w/1143/5646123501_6_1_1.jpg?ts=1602660817960",
        name: "HIGH COLLAR KNIT SWEATER",
        url: "https://www.zara.com/us/en/high-collar-knit-sweater-p05646123.html?v1=79333638",
        avail: true
    }
    ]
 },
 {
    outfitImage: "/assets/QueensGambitOutfits/6.7.jpg",
    items: [ {
        image: "https://images.asos-media.com/products/other-stories-satin-short-sleeve-midaxi-dress-in-dusty-green/20109760-4?$XXL$&wid=513&fit=constrain",
        name: "& Other Stories satin short sleeve midaxi dress in dusty green",
        url: "https://www.asos.com/us/other-stories/other-stories-satin-short-sleeve-midaxi-dress-in-dusty-green/prd/20109760?affid=25714&_cclid=Google_CjwKCAiAwrf-BRA9EiwAUWwKXpgk9gWFCo0kQ7S4GjoTBQlnkkDmNclfqN87L1B_tDDVZhiO9RmcCxoCfo0QAvD_BwE&channelref=product+search&mk=abc&ppcadref=10104919891%7c106779534892%7cpla-294682000766&cpn=10104919891&gclid=CjwKCAiAwrf-BRA9EiwAUWwKXpgk9gWFCo0kQ7S4GjoTBQlnkkDmNclfqN87L1B_tDDVZhiO9RmcCxoCfo0QAvD_BwE&gclsrc=aw.ds",
        avail: true
    }
    ]
 }


];

db.Outfit.deleteMany({})
    .then(() => {
        return db.Outfit.collection.insertMany(outfit)
    })
    .then(data => {
        mongoose.connection.close();
    });

