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
  footer: 'Author: RC Ramsey <p>References: <a href="https://www.fcps.net/cms/lib/KY01807169/Centricity/Domain/10653/April2_letter.pdf">Fayette County Superintendent Letter</a>',
  chapters: [


    {
      id: 'slug-style-id',
      alignment: 'left',
      hidden: false,
      title: 'Introduction',
          image: 'images/fusion-medical-animation-rnr8D3FNUNY-unsplash.jpg',
      description:
        'COVID-19 grew into a Global Pandemic during 2020. Schools were left scrambling to reform their in person experience to remote learning. <p> Fall of 2020 school year forced educators into a massive pivot of the learning experience. Unfortunately there was not enough time or finances to make equitable accomodations for all students. (Photo of COVID-19 Viral cell by <a href="https://unsplash.com/@fusion_medical_animation?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fusion Medical Animation</a> on <a href="https://unsplash.com/s/photos/covid?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>)',
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
          layer: 'fayette-only-tlkycnty19digital',
          opacity: 1,
          duration: 500
         }
      ],
      onChapterExit: [{
        layer: 'fayette-only-tlkycnty19digital',
        opacity: 0,
        duration: 500
       }],
    },

    {
      id: 'fayettetracts',
      alignment: 'right',
      hidden: false,
      title: 'Without Home Computer Access',
        image: 'images/noHomeCompGraph.png',
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
      id: 'fayettetracts',
      alignment: 'right',
      hidden: false,
      title: 'Without Home Computer Access',
          image: 'images/nocomphomeaccess.png',
      description: 'Percent of student households by Census Tract. <p> No data for a Census Tract indicates there were no sample observations or too few sample observations to compute an estimate. <p>Highest <b><FONT COLOR="#c51b8a">29%</FONT COLOR></b>',
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
      description: 'On April 2, 2020 Fayette County Public School Superintendent mailed home a letter to its Public School Families indicating the process by which needs were being met for remote learning. <p> This letter appears to address the digital divide by providing students with access to a digital device. What this does not cover however are students who lack internet access.',
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
      id: 'fayetteless20kGraph',
      alignment: 'right',
      hidden: false,
      title: 'No Internet Access',
         image: 'images/noInt_20kGraph.png',
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
        opacity: 0.75,
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
      id: 'fayette20kplusGraph',
      alignment: 'right',
      hidden: false,
      title: 'No Internet Access',
         image: 'images/noInt20_74kGraph.png',
      description: 'Households by Census Tract income <FONT COLOR="#807dba">20k-74.9k</FONT COLOR>. <p>Highest <b><FONT COLOR="#807dba">36%</FONT COLOR></b>',
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
        opacity: 0.75,
        duration: 2000
       }
      ],
    },

    {
      id: 'fayette20kplus',
      alignment: 'right',
      hidden: false,
      title: 'No Internet Access',
         image: 'images/_20knoint.png',
      description: 'Households by Census Tract income <FONT COLOR="#807dba">20k-74.9k</FONT COLOR>. <p>Highest <b><FONT COLOR="#807dba">36%</FONT COLOR></b>',
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
      id: 'fayette75kGraph',
      alignment: 'right',
      hidden: false,
      title: 'No Internet Access',
         image: 'images/noInt74kGraph.png',
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
        opacity: 0.75,
        duration: 2000
       }
      ],
    },

    {
      id: 'fayette75k',
      alignment: 'right',
      hidden: false,
      title: 'No Internet Access',
         image: 'images/_20knoint.png',
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
    },


    {
      id: 'wrapUp',
      alignment: 'center',
      hidden: false,
      title: 'Final Words',
        //  image: 'images/_20knoint.png',
      description: 'Wrapup Text',
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

  ],
};
