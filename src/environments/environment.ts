// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://api-qa.titoapp.org',
  // FLORIDA COORDINATES
  // initLat: 26.1727567,
  // initLng: -80.270095,
  // NY COORDINATES
  // initLat: 40.7579787,
  // initLng: -73.9877313,
  // SPAIN COORDINATES
  initLat: 40.4031866,
  initLng: -3.678185,
  defaultRadius: 50,
  priceOptions: ['ALL', '0,50', '50,100', '100,200', '200,500', '500'],
  radiusOptions: [5, 10, 20, 50, 100, 150, 300, 500],
  durationOptions: [60, 43200],
  timeUnits: ['hour(s)', 'day(s)', 'week(s)', 'month(s)'],
  minUserPrice: 50,
  maxUserPrice: 12000,
  pageSize: 50,
  minMediaDisplayScore: 4,
  s3PictureExpirationTime:
    30 /*minutes*/ * 60 /*seconds*/ * 1000 /*milliseconds*/,
  titleMaxLength: 48,
  descriptionMaxLength: 200,
  instructionMaxLength: 200,
  announcementTitleMaxLength: 48,
  announcementMaxLength: 160,
  acceptedLibraryFileTypes: [
    'image/jpeg',
    'image/png',
    'video/quicktime',
    'video/mp4',
    'video/webm',
  ],
  acceptedCoverPhotosFileTypes: ['image/jpeg', 'image/png'],
  STRIPE_PUBLISHABLE_KEY: 'pk_test_5PkuBVP0j4EBxLuLe3vYYPvJ',
  customEmojis: [
    {
      name: 'Large Green Circle',
      shortNames: ['large_green_circle'],
      text: '',
      emoticons: [],
      keywords: ['circle', 'green'],
      imageUrl: '../assets/emojis/large_green_circle.png',
      native: '🟢',
    },
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
