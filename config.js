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
          image: 'images/fusion-medical-animation-rnr8D3FNUNY-unsplash.jpg',
      description:
        'In December 2019 the world was introduced to COVID-19 which rapidly grew into a Global Pandemic during 2020. Schools were left scrambling to reform their in person experience to remote learning. <p> Fall of 2020 school year forced educators into a massive pivot of the learning experience. Unfortunately there was not enough time or finances to make equitable accomodations for all students. (Photo by <a href="https://unsplash.com/@fusion_medical_animation?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fusion Medical Animation</a> on <a href="https://unsplash.com/s/photos/covid?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>)',
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
             layer: 'fayette-only-tlkycnty19digital',
             opacity: 1,
             duration: 500
            }
      ],
      onChapterExit: [
         {
             layer: 'fayette-only-tlkycnty19digital',
             opacity: 1
         }
      ],
    },



    {
      id: 'fayette',
      alignment: 'right',
      hidden: false,
      title: 'Fayette County',
        image: 'images/steinar-engeland-GwVmBgpP-PQ-unsplash.jpg',
      description: '<b><FONT COLOR="#9ecae1">5.2%</FONT></b> of student households did not have access to a computer at home. <p> This translates to approximately <b><FONT COLOR="#9ecae1">6,860</FONT COLOR></b> student households without a means to participate in live/remote instruction.',
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
        opacity: 0,
        duration: 500
       }],
    },


    // {
    //   id: 'jefferson',
    //   alignment: 'right',
    //   hidden: false,
    //   title: 'Jefferson County',
    //   //   image: './path/to/image/source.png',
    //   description: 'At Jefferson County, 7.2% of student households did not have access to a computer at home. Translating to approximately 22,765 student households.',
    //   location: {
    //     center: [-85.38136, 38.22234],
    //     zoom: 10,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: 'flyTo',
    //   rotateAnimation: false,
    //   callback: '',
    //   onChapterEnter: [
    //     {
    //       layer: 'tlkycnty19digital-json-nocomp',
    //       opacity: 1,
    //       duration: 500
    //      }
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: 'tlkycnty19digital-json-nocomp',
    //       opacity: 1,
    //       duration: 500
    //     }
    //   ],
    // },  


    // {
    //   id: 'kenton',
    //   alignment: 'right',
    //   hidden: false,
    //   title: 'Kenton County',
    //   //   image: './path/to/image/source.png',
    //   description: 'While in Kenton County 6% of student households did not have access to a computer at home. Translating to approximately 3,922 student households.',
    //   location: {
    //     center: [-84.50064, 38.96018],
    //     zoom: 10,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: 'flyTo',
    //   rotateAnimation: false,
    //   callback: '',
    //   onChapterEnter: [
    //     {
    //       layer: 'tlkycnty19digital-json-nocomp',
    //       opacity: 1,
    //       duration: 500
    //      }
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: 'tlkycnty19digital-json-nocomp',
    //       opacity: 0,
    //       duration: 500
    //     }
    //   ],
    // },  

    {
      id: 'fayettetracts',
      alignment: 'right',
      hidden: false,
      title: 'Without Home Computer Access',
         image: 'images/nocomphomeaccess.png',
      description: 'Percent of student households by Census Tract. <p>Highest <b><FONT COLOR="#c51b8a">29%</FONT COLOR></b>',
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
        opacity: 1,
        duration: 2000
       }
      ],
    },



    {
      id: 'fayetteLetter',
      alignment: 'right',
      hidden: false,
      title: 'Fayette County Superintendent Letter',
         image: 'images/fay_letter_april.png',
      description: '2 April 2020, Fayette County Public School Superintendent letter to its Public School Families.',
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
      title: 'No Internet Access',
         image: 'images/_20knoint.png',
      description: 'Households by Census Tract income <b><FONT COLOR="#807dba"><20k</FONT COLOR></b>. <p>Highest <b><FONT COLOR="#807dba">100%</FONT COLOR></b>',
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
          opacity: 0.75,
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
      title: 'No Internet Access',
         image: 'images/24_75knotint.png',
      description: 'Households by Census Tract income <FONT COLOR="#807dba">24k-74.9k</FONT COLOR>. <p>Highest <b><FONT COLOR="#807dba">36%</FONT COLOR></b>',
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
          opacity: 0.75,
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
      title: 'No Internet Access',
         image: 'images/75knoint.png',
      description: 'Households by Census Tract income <b><FONT COLOR="#807dba">>75K</FONT COLOR></b>. <p>Highest <b><FONT COLOR="#807dba">28.6%</FONT COLOR></b>',
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
          opacity: 0.75,
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

    // insert chapter here about handing out hotspots? 
    // or additional alternatives
    // still comment on what this means for the future
    
  ],
};
