// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const BASE_URL = 'http://localhost:8003';
const INSTRUMENTS = 'instruments';


const SEARCH = 'search';
const BRANDS = 'brands';

const FILTER_SEARCH = 'filter';
const DATA = 'data';
const SCRAPE = 'scrape';
const ONE = 'one';
const KEYWORDS = 'keywords';
const ALL = 'all';

// Categories //
const GUITARS = 'guitars';
const DRUMS = 'drums';
const KEYS = 'keys';
const USER = 'user';
const DJ_GEAR = 'dj-gear';
const ACCESSORIES = 'accessories';
const JWT_NAME = 'instrumusical-token';
const ORDER = 'order';

// Brands //
const GIBSON = 'gibson';
const TAYLOR = 'taylor';
const ROLAND = 'roland';
const YAMAHA = 'yamaha';
const DW = 'dw';
const PEARL = 'pearl';
const CASIO = 'casio';
const FENDER = 'fender';

const COUNT_REVIEWS= "totalValue";


const STORE ='store';


const BAR = "bar";
const SCATTER = "scatter";
const PIE = "pie"
export const environment = {

  production: false,
  allInstrumentsUrl: BASE_URL + '/' + INSTRUMENTS + '/' + ALL,
  barDataUrl: BASE_URL + '/' + DATA + '/' + BAR + '/' + KEYWORDS,
  scatterDataUrl: BASE_URL + '/' + DATA + '/' + SCATTER,
  pieDataUrl: BASE_URL + '/' + DATA + '/' + PIE,
  JWT_NAME: JWT_NAME,
  scrapeUrl: BASE_URL + '/' + SEARCH + '/' + SCRAPE,
  scrapeOne: BASE_URL + '/' + SEARCH + '/' + SCRAPE + '/' + ONE,

  countReviews:BASE_URL + '/' +COUNT_REVIEWS,

  userUrl: BASE_URL + '/' + USER,
  instrumentsUrl: `${BASE_URL}/${INSTRUMENTS}`,
  bestSellersUrl: BASE_URL + '/' + INSTRUMENTS,
  searchUrl: BASE_URL + '/' + SEARCH,
  filterSearchUrl: BASE_URL + '/' + SEARCH + '/' + FILTER_SEARCH,
  brandsUrl: BASE_URL + '/' + INSTRUMENTS + '/' + BRANDS,

  storeUrl: BASE_URL + '/' + STORE,
  
  orderUrl: BASE_URL + '/' + ORDER,


  //   category   //
  guitarsUrl: BASE_URL + '/' + INSTRUMENTS + '/' + GUITARS,
  drumsUrl: BASE_URL + '/' + INSTRUMENTS + '/' + DRUMS,
  keysUrl: BASE_URL + '/' + INSTRUMENTS + '/' + KEYS,
  djGearUrl: BASE_URL + '/' + INSTRUMENTS + '/' + DJ_GEAR,
  accessoriesUrl: BASE_URL + '/' + INSTRUMENTS + '/' + ACCESSORIES,
  //   brand   //
  gibsonUrl: BASE_URL + '/' + BRANDS + '/' + GIBSON,
  taylorUrl: BASE_URL + '/' + BRANDS + '/' + TAYLOR,
  rolandUrl: BASE_URL + '/' + BRANDS + '/' + ROLAND,
  yamahaUrl: BASE_URL + '/' + BRANDS + '/' + YAMAHA,
  dwUrl: BASE_URL + '/' + BRANDS + '/' + DW,
  pearlUrl: BASE_URL + '/' + BRANDS + '/' + PEARL,
  casioUrl: BASE_URL + '/' + BRANDS + '/' + CASIO,
  fenderUrl: BASE_URL + '/' + BRANDS + '/' + FENDER,

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
