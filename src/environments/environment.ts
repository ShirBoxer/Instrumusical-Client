// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const BASE_URL = 'http://localhost:8003';
const INSTRUMENTS = 'instruments';
const SEARCH = 'search';
const BRANDS = 'brands';


const GUITARS = 'guitars';
const DRUMS = 'drums';
const KEYS = 'keys';
const USER = 'user';
const DJ_GEAR = 'dj-gear';
const ACCESSORIES = 'accessories';


const GIBSON = 'gibson';
const TAYLOR = 'taylor';
const ROLAND = 'roland';
const YAMAHA = 'yamaha';
const DW = 'dw';
const PEARL = 'pearl';
const CASIO = 'casio';
const FENDER = 'fender';



export const environment = {

  production: false,
  userUrl: BASE_URL + '/' + USER,
  bestSellersUrl: BASE_URL + '/' + INSTRUMENTS,
  searchUrl: BASE_URL + '/' + SEARCH,
  
  brandsUrl: BASE_URL + '/' + INSTRUMENTS + '/' + BRANDS,
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
