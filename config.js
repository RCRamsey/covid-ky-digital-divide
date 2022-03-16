var config = {
  style: 'mapbox://styles/rcramsey/cl0fo22zx000514ms9ohin6tx', 
  accessToken:
    'pk.eyJ1IjoicmNyYW1zZXkiLCJhIjoiY2wwNXM5endyMXBiMDNjcWc5bnppdG0yMiJ9.9MbIKC6TTOPvXZJoKwwKBw',
  showMarkers: false,
  markerColor: '#3FB1CE',
  theme: 'dark',
  use3dTerrain: false,
  title: 'Digital Divide Grows during COVID-19',
  subtitle: 'Classism of remote learning',
  byline:
    'Exploring the inherent privileges of wealthy student households of Fayette County KY',
  footer: 'Authors: RC Ramsey',
  chapters: [


    {
      id: 'slug-style-id',
      alignment: 'left',
      hidden: false,
      title: 'Introduction',
          //image: 'images/steinar-engeland-GwVmBgpP-PQ-unsplash.jpg',
      description:
        'In December 2019 the world was introduced to COVID-19 which rapidly grew into a Global Pandemic during 2020. Schools were left scrambling to reform their in person experience to remote learning. Fall of 2020 school year forced educators into a massive pivot of the learning experience. Unfortunately there was not enough time or finances to make equitable accomodations for all students. This storymap begins on the three most populated counties in KY. ',
      location: {
        center: [-86.2700, 38.4393],
        zoom: 7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
         {
             layer: 'tlkycnty19digital-json-ttol_housholds copy',
             opacity: 1,
             duration: 500
            }
      ],
      onChapterExit: [
         {
             layer: 'tlkycnty19digital-json-ttol_housholds copy',
             opacity: 0
         }
      ],
    },



    {
      id: 'fayette',
      alignment: 'right',
      hidden: false,
      title: 'Fayette County',
        image: 'images/steinar-engeland-GwVmBgpP-PQ-unsplash.jpg',
      description: 'Within Fayette County, 5.2% of student households did not have access to a computer at home. This translates to approximately 6,860 student households without a means to participate in live/remote instruction.',
      location: {
        center: [-84.29610, 38.03089],
        zoom: 10,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'tlkycnty19digital-json-nocomp',
          opacity: 1,
          duration: 500
         }
      ],
      onChapterExit: [{
        layer: 'tlkycnty19digital-json-nocomp',
        opacity: 1,
        duration: 500
       }],
    },


    {
      id: 'jefferson',
      alignment: 'right',
      hidden: false,
      title: 'Jefferson County',
      //   image: './path/to/image/source.png',
      description: 'At Jefferson County, 7.2% of student households did not have access to a computer at home. Translating to approximately 22,765 student households.',
      location: {
        center: [-85.38136, 38.22234],
        zoom: 10,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'tlkycnty19digital-json-nocomp',
          opacity: 1,
          duration: 500
         }
      ],
      onChapterExit: [
        {
          layer: 'tlkycnty19digital-json-nocomp',
          opacity: 1,
          duration: 500
        }
      ],
    },  


    {
      id: 'kenton',
      alignment: 'right',
      hidden: false,
      title: 'Kenton County',
      //   image: './path/to/image/source.png',
      description: 'While in Kenton County 6% of student households did not have access to a computer at home. Translating to approximately 3,922 student households.',
      location: {
        center: [-84.50064, 38.96018],
        zoom: 10,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'tlkycnty19digital-json-nocomp',
          opacity: 1,
          duration: 500
         }
      ],
      onChapterExit: [
        {
          layer: 'tlkycnty19digital-json-nocomp',
          opacity: 0,
          duration: 500
        }
      ],
    },  

    {
      id: 'fayettetracts',
      alignment: 'right',
      hidden: false,
      title: 'Fayette County ',
      //   image: './path/to/image/source.png',
      description: 'Percent of student households without access to a computer by Census Tract. Highest 29%',
      location: {
        center: [-84.29610, 38.03089],
        zoom: 10,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'nocomputer',
          opacity: 1,
          duration: 2000
         }
      ],
      onChapterExit: [
        {
        layer: 'nocomputer',
        opacity: 0,
        duration: 2000
       }
      ],
    },


    {
      id: 'fayetteless20k',
      alignment: 'right',
      hidden: false,
      title: 'Fayette County ',
      //   image: './path/to/image/source.png',
      description: 'Percent of households with income <20k without internet access. Highest 100%',
      location: {
        center: [-84.29610, 38.03089],
        zoom: 10,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'noIntless20k',
          opacity: 1,
          duration: 2000
         }
      ],
      onChapterExit: [
        {
        layer: 'noIntless20k',
        opacity: 0,
        duration: 2000
       }
      ],
    },

    {
      id: 'fayette24kplus',
      alignment: 'right',
      hidden: false,
      title: 'Fayette County ',
      //   image: './path/to/image/source.png',
      description: 'Percent of households with income 24k-74.9k without internet access. Highest 36%',
      location: {
        center: [-84.29610, 38.03089],
        zoom: 10,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'noInt24kto75k',
          opacity: 1,
          duration: 2000
         }
      ],
      onChapterExit: [
        {
        layer: 'noInt24kto75k',
        opacity: 0,
        duration: 2000
       }
      ],
    },

    {
      id: 'fayette75k',
      alignment: 'right',
      hidden: false,
      title: 'Fayette County ',
      //   image: './path/to/image/source.png',
      description: 'Percent of households with income > 75K without internet access. Highest 28.6%',
      location: {
        center: [-84.29610, 38.03089],
        zoom: 10,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'noInt75kup',
          opacity: 1,
          duration: 2000
         }
      ],
      onChapterExit: [
        {
        layer: 'noInt75kup',
        opacity: 0,
        duration: 2000
       }
      ],
    }
    
  ],
};
