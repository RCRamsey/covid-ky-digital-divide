var config = {
  style: 'mapbox://styles/newmapsplus/ckzio4p9d000d14qdcevi4cql',
  accessToken:
    'pk.eyJ1IjoibmV3bWFwc3BsdXMiLCJhIjoiY2t6aW8wMjVkNGQyZDJwbmZjaHV6MThvbSJ9.k2rUXIm0CJayTRCpF0vDGg',
  showMarkers: false,
  markerColor: '#3FB1CE',
  theme: 'dark',
  use3dTerrain: false,
  title: 'MAP719 Experimental Collaborative Story Map',
  subtitle: 'Using Mapbox Scrollytelling Template',
  byline:
    'Exploring Themes related to Social Justice, Health Geographies, and Climate Change',
  footer: 'Authors:',
  chapters: [
    {
      id: 'slug-style-id',
      alignment: 'left',
      hidden: false,
      title: 'Our introductory slide',
      //   image: './path/to/image/source.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      location: {
        center: [-110, 37],
        zoom: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: 'other-identifier',
      alignment: 'right',
      hidden: false,
      title: 'Second Title',
      //   image: './path/to/image/source.png',
      description: 'Copy these sections to add to your story.',
      location: {
        center: [-84.49, 38.04],
        zoom: 12,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
