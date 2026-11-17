export interface TeapotMarketData {
  slug: string;
  priceRange: string;
  lowPrice: number;
  highPrice: number;
  buyerRating: number;
  buyerReviewCount: number;
  whereToBuy: string;
  buyerConsensus: string;
  buyerPraise: string;
  buyerCaveat: string;
}

export const TEAPOT_MARKET_DATA: Readonly<Record<string, TeapotMarketData>> = {
  'hario-chacha-kyusu-maru-700': {
    slug: 'hario-chacha-kyusu-maru-700',
    priceRange: '$20–$30 USD',
    lowPrice: 20,
    highPrice: 30,
    buyerRating: 4.7,
    buyerReviewCount: 4850,
    whereToBuy: 'Hario USA, Specialty Tea Shops & Major Retailers',
    buyerConsensus:
      'Praised across 4,800+ online buyer reviews for its spacious stainless steel mesh basket, zero-drip glass spout, and dishwasher-safe clarity; owners caution that thin borosilicate walls require careful handling against granite sinks.',
    buyerPraise: 'Deep basket lets whole rolled leaves unfurl; crystal-clear clarity & easy rinsing.',
    buyerCaveat: 'Thin single-wall glass sheds heat faster than stoneware and chips if knocked.',
  },
  'bredemeijer-duet-bella-ronde-insulated': {
    slug: 'bredemeijer-duet-bella-ronde-insulated',
    priceRange: '$95–$145 USD',
    lowPrice: 95,
    highPrice: 145,
    buyerRating: 4.5,
    buyerReviewCount: 1420,
    whereToBuy: 'Bredemeijer Official, European Kitchenware Stockists & Specialty Shops',
    buyerConsensus:
      'Reviewers across kitchenware stockists praise its double-walled stainless jacket that holds hot tea for up to 60 minutes with a cool-touch handle and drip-free spout; buyers note its solid 630g empty heft and advise verifying infuser inclusion.',
    buyerPraise: 'Genuine 1-hour table heat retention with a sharp zero-dribble spout and cool handle.',
    buyerCaveat: 'Not dishwasher safe by brand spec, and some retail listings sell the filter separately.',
  },
  'iwachu-arare-cast-iron-tetsubin': {
    slug: 'iwachu-arare-cast-iron-tetsubin',
    priceRange: '$115–$145 USD',
    lowPrice: 115,
    highPrice: 145,
    buyerRating: 4.6,
    buyerReviewCount: 1180,
    whereToBuy: 'Global Kitchen Japan, Miya Company, Oryoki & Specialty Retailers',
    buyerConsensus:
      'Celebrated by long-term owners as a buy-it-for-life Morioka Nanbu Tekki heirloom with 45+ minute heat retention; almost all critical buyer complaints stem from placing the enamel-lined teapot directly over a high stove flame.',
    buyerPraise: 'Heirloom Japanese sand-cast finish, clean balanced pour, and long-lasting warmth.',
    buyerCaveat: 'Heavy ~1.5kg empty weight and strictly kettle-fill only (enamel cracks on burners).',
  },
  'teabloom-celebration-stovetop-glass': {
    slug: 'teabloom-celebration-stovetop-glass',
    priceRange: '$28–$40 USD',
    lowPrice: 28,
    highPrice: 40,
    buyerRating: 4.8,
    buyerReviewCount: 3600,
    whereToBuy: 'Teabloom Official Store, Walmart, Target & Online Tea Boutiques',
    buyerConsensus:
      'Rated 4.8/5 across thousands of verified orders for 360-degree blooming tea presentation, zero metallic taste from the all-glass infuser, and low-flame stovetop safety; reviewers advise holding the lid knob gently during full tilts.',
    buyerPraise: 'All-glass basket eliminates metallic flavor and handles low gas/electric simmer safely.',
    buyerCaveat: 'Loose drop-in glass lid requires a steady finger when tipping the last 20% of tea.',
  },
  'zero-japan-universal-artisan-teapot': {
    slug: 'zero-japan-universal-artisan-teapot',
    priceRange: '$45–$65 USD',
    lowPrice: 45,
    highPrice: 65,
    buyerRating: 4.8,
    buyerReviewCount: 2900,
    whereToBuy: 'Zero Japan USA, PekoeTea & Independent Ceramic Stockists',
    buyerConsensus:
      'Tea drinkers rave about designer Koji Inoue’s hinged clip-on brushed steel lid that never drops mid-pour and vibrant Mino glazes; buyers note the 450ml model fills roughly two mugs cleanly rather than a large family pot.',
    buyerPraise: 'Latching stainless lid, colorful durable glazes, and crisp clean spout cut-off.',
    buyerCaveat: '450ml suits 1–2 drinkers (choose 580ml/680ml for groups); not microwave-safe with steel lid.',
  },
  'sweese-porcelain-fluted-infuser-teapot': {
    slug: 'sweese-porcelain-fluted-infuser-teapot',
    priceRange: '$25–$35 USD',
    lowPrice: 25,
    highPrice: 35,
    buyerRating: 4.6,
    buyerReviewCount: 6200,
    whereToBuy: 'Sweese Official Store & Major Home Kitchen Marketplaces',
    buyerConsensus:
      'Over 6,200 online buyers highlight the silicone-gasket locking lid, generous laser-etched mesh infuser, and dishwasher-safe fluted porcelain value; buyers remind newcomers not to heat porcelain directly on a stove burner.',
    buyerPraise: 'Unbeatable everyday value—silicone lid ring locks tight and cleans cleanly in seconds.',
    buyerCaveat: 'Steeping vessel only (cannot go on stove burners); holds heat best under a tea cozy.',
  },
  'tokoname-gyokko-yokode-kyusu': {
    slug: 'tokoname-gyokko-yokode-kyusu',
    priceRange: '$110–$175 USD',
    lowPrice: 110,
    highPrice: 175,
    buyerRating: 4.9,
    buyerReviewCount: 640,
    whereToBuy: 'Sazen Tea, Tezumi, Camellia Sinensis & Oryoki',
    buyerConsensus:
      'Earns near-perfect 4.9/5 marks among Japanese green tea collectors for authentic iron-rich Tokoname shudei clay that mellows sencha bitterness, tight handmade lid seal, and fine built-in ceramic sasame filtration.',
    buyerPraise: 'Whisper-smooth 10/10 spout shear, sweetens sencha umami, and cool hollow side handle.',
    buyerCaveat: 'Must be hand-rinsed with hot water only (never dish soap); right-hand pour by default.',
  },
  'old-dutch-sagaform-cast-iron-hobnail': {
    slug: 'old-dutch-sagaform-cast-iron-hobnail',
    priceRange: '$35–$58 USD',
    lowPrice: 35,
    highPrice: 58,
    buyerRating: 4.5,
    buyerReviewCount: 2150,
    whereToBuy: 'Walmart, Home Depot, Wayfair & Specialty Tea Shops',
    buyerConsensus:
      'Popular as an accessible enamel-lined cast iron teapot keeping 3 to 4 cups hot for 45 minutes; experienced buyers emphasize drying the unglazed lid collar promptly after rinsing to prevent minor rim rust.',
    buyerPraise: 'Classic Japanese hobnail look and strong 45-minute heat retention at half boutique cost.',
    buyerCaveat: 'Heavy when full and prone to surface rim rust if stored damp with the lid closed.',
  },
  'kamjove-magnetic-automatic-glass-gongfu': {
    slug: 'kamjove-magnetic-automatic-glass-gongfu',
    priceRange: '$22–$45 USD',
    lowPrice: 22,
    highPrice: 45,
    buyerRating: 4.6,
    buyerReviewCount: 1750,
    whereToBuy: 'Yunnan Sourcing & Specialty Gongfu Tea Ware Stores',
    buyerConsensus:
      'Praised by office tea drinkers and Gongfu beginners for clean instant bottom-valve separation that stops over-steeping without burned fingers; owners suggest periodic baking-soda soaks to lift oolong residue from the mesh.',
    buyerPraise: 'One-hand flash Gongfu separation with zero scalded fingertips on busy desks.',
    buyerCaveat: 'Valve filters stain over months without soaking; classic TP models use BPA-free plastic inner cups.',
  },
  'yixing-zhuni-shui-ping-clay-teapot': {
    slug: 'yixing-zhuni-shui-ping-clay-teapot',
    priceRange: '$120–$220 USD',
    lowPrice: 120,
    highPrice: 220,
    buyerRating: 4.8,
    buyerReviewCount: 520,
    whereToBuy: 'Mud & Leaves, Teavivre, Seven Cups & Yunnan Sourcing',
    buyerConsensus:
      'Enthusiast buyers praise authentic Zhuni Shui Ping clay for concentrated high-mountain oolong aroma, lightning 6-second pours, and glossy patina aging; collectors strongly warn against sub-$50 dyed knockoffs.',
    buyerPraise: 'Concentrates oolong & pu-erh fragrance while pouring with balanced water-level poise.',
    buyerCaveat: 'Dedicate each pot to one tea type (porous clay absorbs oils); verify trusted kiln sourcing.',
  },
};

export function getTeapotMarketData(slug: string | undefined): TeapotMarketData | undefined {
  if (!slug) return undefined;
  return Object.prototype.hasOwnProperty.call(TEAPOT_MARKET_DATA, slug)
    ? TEAPOT_MARKET_DATA[slug]
    : undefined;
}
