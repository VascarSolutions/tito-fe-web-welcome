export const environment = {
  production: false,
  qa: true,
  apiUrl: 'https://api-qa.titoapp.org',
  initLat: 40.7579787,
  initLng: -73.9877313,
  defaultRadius: 50,
  priceOptions: ['ALL', '0,50', '50,100', '100,200', '200,500', '500'],
  radiusOptions: [5, 10, 20, 50, 100, 150, 300, 500],
  durationOptions: [60, 43200],
  timeUnits: ['hour(s)', 'day(s)', 'week(s)', 'month(s)'],
  minPrice: 50,
  pageSize: 50,
  minUserPrice: 50,
  maxUserPrice: 12000,
  minMediaDisplayScore: 4,
  s3PictureExpirationTime: 30 /*minutes*/ * 60 /*seconds*/ * 1000 /*milliseconds*/,
  titleMaxLength: 48,
  descriptionMaxLength: 200,
  instructionMaxLength: 200,
  announcementTitleMaxLength: 48,
  announcementMaxLength: 160,
  acceptedLibraryFileTypes: ['image/jpeg', 'image/png', 'video/quicktime', 'video/mp4', 'video/webm'],
  acceptedCoverPhotosFileTypes: ['image/jpeg', 'image/png'],
  // STRIPE_PUBLISHABLE_KEY: 'pk_test_5PkuBVP0j4EBxLuLe3vYYPvJ',
  STRIPE_PUBLISHABLE_KEY: 'pk_live_mbX2q7zEIwEj9vSAP76axhvo',
  customEmojis: [
    {
      name: 'Large Green Circle',
      shortNames: ['large_green_circle'],
      text: '',
      emoticons: [],
      keywords: ['circle', 'green'],
      imageUrl: '../assets/emojis/large_green_circle.png',
      native: '🟢'
    }
  ]
};
