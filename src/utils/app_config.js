// import getConfig from 'next/config';
// const {publicRuntimeConfig} = getConfig();
export const backendUri = process.env.NEXT_PUBLIC_SERVER_SIDE_URI;

export const clientSideUri = process.env.NEXT_PUBLIC_CLIENT_SIDE_URI;

export const stripeKey = process.env.NEXT_PUBLIC_STRIPE_KEY;
export const mailChimpClientId = process.env.NEXT_PUBLIC_MAILCHIMP_CLIENT_ID;
export const openseaMarketURL =
  process.env.NEXT_PUBLIC_NFT_MODE === 'mainnet'
    ? 'https://mainnet.opensea.io/assets'
    : 'https://rinkeby.opensea.io/assets';
export const nftMode = process.env.NEXT_PUBLIC_NFT_MODE;
export const openseaIframeURL =
  process.env.NEXT_PUBLIC_NFT_MODE === 'mainnet'
    ? `https://mainnet.opensea.io/collection/${process.env.NEXT_PUBLIC_NFT_OPENSEA_SLUG}`
    : `https://rinkeby.opensea.io/collection/${process.env.NEXT_PUBLIC_NFT_OPENSEA_SLUG}`;

export const etherscanRedirectBaseUrl =
  process.env.NEXT_PUBLIC_NFT_MODE === 'mainnet'
    ? 'https://etherscan.io/tx'
    : 'https://rinkeby.etherscan.io/tx';

export const contractAddressMap = {
  // contract chain ID mapping with contract address
  // mainnet
  1: '0x9D4AA451E2eC434EDD0D251393a3b5250458Dd3c',
  // reinskby testnet
  4: '0xff833eC9f56F2C73D2881819B2cA2B48f1f54A86',
  // binance smart chain
  56: '0xff833eC9f56F2C73D2881819B2cA2B48f1f54A86',
  // polygon matic
  137: '0xff833eC9f56F2C73D2881819B2cA2B48f1f54A86'
};
export const refreshInterval = process.env.NEXT_PUBLIC_REFRESH_INTERVAL_IN_MINS;
export const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
export const LETS_CONNECT_SHEET_ID =
  process.env.NEXT_PUBLIC_LETS_CONNECT_SHEET_ID;
export const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
export const UTM_SHEET_ID = process.env.NEXT_PUBLIC_UTM_SHEET_ID;
export const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;

export const isSkipFlag = process.env.NEXT_PUBLIC_USER_COUNTRY_UPDATE;
export const isMetaTags = process.env.NEXT_PUBLIC_LOAD_META_TAGS;
// export const isAudioFeature = process.env.NEXT_PUBLIC_LEGACY_AUDIO_FEATURE;
export const isNewAudioFeature = process.env.NEXT_PUBLIC_LEGACY_AUDIO_FEATURE;
export const isStandaloneMenuFeature =
  process.env.NEXT_PUBLIC_STANDALONE_MENU_FEATURE;

export const googleTagManagerId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;
export const NEXT_PUBLIC_MARKETING_PAGE_ID =
  process.env.NEXT_PUBLIC_MARKETING_PAGE_ID;
