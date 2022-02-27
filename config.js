var config = {
  style: 'mapbox://styles/rcramsey/ckwmi0qsw1xxi14lrlwfpvcpf',
  accessToken:
    'pk.eyJ1IjoicmNyYW1zZXkiLCJhIjoiY2wwNXM5endyMXBiMDNjcWc5bnppdG0yMiJ9.9MbIKC6TTOPvXZJoKwwKBw',
  showMarkers: false,
  markerColor: '#3FB1CE',
  theme: 'dark',
  use3dTerrain: false,
  title: 'Digital Divide During COVID-19',
  subtitle: 'Fayette, Jefferson & Kenton Kentucky',
  byline:
    'Exploring the three most populated counties of KY for impact of remote learning during 2019 ',
  footer: 'Authors: RC Ramsey',
  chapters: [
    {
      id: 'slug-style-id',
      alignment: 'left',
      hidden: false,
      title: 'Introduction',
         image: 'images/motocross.svg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      location: {
        center: [-84.2700, 38.8393],
        zoom: 7,
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
      id: 'fayette',
      alignment: 'right',
      hidden: false,
      title: 'Here is Fayette County',
      //   image: './path/to/image/source.png',
      description: 'Copy these sections to add to your story.',
      location: {
        center: [-84.49610, 38.03089],
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
    {
      id: 'jefferson',
      alignment: 'right',
      hidden: false,
      title: 'Here is Jefferson County',
      //   image: './path/to/image/source.png',
      description: 'Copy these sections to add to your story.',
      location: {
        center: [-85.74136, 38.22234],
        zoom: 11.31,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [],
      onChapterExit: [],
    },  
    {
      id: 'kenton',
      alignment: 'right',
      hidden: false,
      title: 'Here is Kenton County',
      //   image: './path/to/image/source.png',
      description: 'Copy these sections to add to your story.',
      location: {
        center: [-84.50064, 38.66018],
        zoom: 9.5,
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
