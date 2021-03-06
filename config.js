var config = {
  style: 'mapbox://styles/rcramsey/cl0fo22zx000514ms9ohin6tx', 
  accessToken:
    'pk.eyJ1IjoicmNyYW1zZXkiLCJhIjoiY2wwNXM5endyMXBiMDNjcWc5bnppdG0yMiJ9.9MbIKC6TTOPvXZJoKwwKBw',
  showMarkers: false,
  markerColor: '#3FB1CE',
  theme: 'dark',
  use3dTerrain: false,
  title: 'Classism of remote learning',
  subtitle: '',
  byline:
    'Exploring the inherent privileges of wealthy student households of Fayette County KY',
  footer: 'Author: RC Ramsey <p>References: <a href="https://www.fcps.net/cms/lib/KY01807169/Centricity/Domain/10653/April2_letter.pdf">Fayette County Superintendent Letter</a> <p> <a href="https://www.fcps.net/site/Default.aspx?PageType=3&DomainID=4&PageID=1&ViewID=6446ee88-d30c-497e-9316-3f8874b3e108&FlexDataID=42714">Fayette County Public Schools HotSpots</a>',
  chapters: [

    {
      id: 'starter',
      alignment: 'center',
      hidden: false,
      title: 'Digital Divide Grows during COVID-19',
         image: 'images/title_maps.png',
      description: ' During 2020 remote learning, students with access to digital devices and internet (typically those with > 75k household income) had a headstart in the remote education race. <p>Fayette County School district did their best to accomodate for the temporary learning situation. <p>If more remote learning is to be the default alternative in the future, the temporary accomodations need to become a permanent line item in the educational budget. ',
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
          opacity: 0,
          duration: 200
         }
      ],
      onChapterExit: [
        {
        layer: 'noInt75kup',
        opacity: 0,
        duration: 200
       }
      ],
    },

    {
      id: 'intro',
      alignment: 'left',
      hidden: false,
      title: 'Introduction',
          image: 'images/fusion-medical-animation-rnr8D3FNUNY-unsplash.jpg',
      description:
        'COVID-19 grew into a Global Pandemic during 2020. US Schools were left scrambling to reform their in person experience to remote learning. <p> Fall of 2020 school year forced educators into a massive pivot of the learning experience. Unfortunately there was not enough time or finances to make equitable accomodations for all students. (Photo of COVID-19 Viral cell by <a href="https://unsplash.com/@fusion_medical_animation?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fusion Medical Animation</a> on <a href="https://unsplash.com/s/photos/covid?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>)',
      location: {
        center: [-84.59610, 38.08089],
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
             duration: 200
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
      description: 'Within Fayette County Kentucky <FONT COLOR="#9ecae1">5.2%</FONT></b> of student households did not have access to a computer at home. <p> This translates to approximately <b><FONT COLOR="#9ecae1">6,860</FONT COLOR></b> student households without a means to participate in live/remote instruction.',
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
          duration: 200
         }
      ],
      onChapterExit: [{
        layer: 'fayette-only-tlkycnty19digital',
        opacity: 0,
        duration: 200
       }],
    },

    // {
    //   id: 'fayettetracts',
    //   alignment: 'right',
    //   hidden: false,
    //   title: 'Without Home Computer Access',
    //     image: 'images/noHomeCompGraph.png',
    //   description: 'Percent of student households by Census Tract. <p>Highest <b><FONT COLOR="#c51b8a">29%</FONT COLOR></b>',
    //   location: {
    //     center: [-84.29610, 38.03089],
    //     zoom: 10,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: 'flyTo',
    //   rotateAnimation: false,
    //   callback: '',
    //   onChapterEnter: [
    //     {
    //       layer: 'nocomputer',
    //       opacity: 1,
    //       duration: 200
    //      }
    //   ],
    //   onChapterExit: [
    //     {
    //     layer: 'nocomputer',
    //     opacity: 1,
    //     duration: 200
    //    }
    //   ],
    // },





    {
      id: 'fayettetractsNoComp',
      alignment: 'right',
      hidden: false,
      title: 'Without Home Computer Access',
          image: 'images/nocomphomeaccess.png',
      description: 'Percent of student households by Census Tract. <p> No data for a Census Tract indicates there were no sample observations or too few sample observations to compute an estimate. <p>Highest Tract Percentage: <b><FONT COLOR="#c51b8a">29% = 292 student households</FONT COLOR></b>',
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
          duration: 200
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
        duration: 200
       }
      ],
    },

    // {
    //   id: 'fayetteless20kGraph',
    //   alignment: 'right',
    //   hidden: false,
    //   title: 'No Internet Access',
    //      image: 'images/noInt_20kGraph.png',
    //   description: 'Households by Census Tract income <b><FONT COLOR="#807dba"><20k</FONT COLOR></b>. <p>Highest <b><FONT COLOR="#807dba">200%</FONT COLOR></b> <p> Even with computer devices provided, those lacking internet access are still unable to participate in live remote activities. This is felt the most among those populations with lower household income. </b>',
    //   location: {
    //     center: [-84.29610, 38.03089],
    //     zoom: 10,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: 'flyTo',
    //   rotateAnimation: false,
    //   callback: '',
    //   onChapterEnter: [
    //     {
    //       layer: 'noIntless20k',
    //       opacity: 0.75,
    //       duration: 200
    //      }
    //   ],
    //   onChapterExit: [
    //     {
    //     layer: 'noIntless20k',
    //     opacity: 0.75,
    //     duration: 200
    //    }
    //   ],
    // },

    {
      id: 'fayetteless20k',
      alignment: 'right',
      hidden: false,
      title: 'No Internet Access',
         image: 'images/_20knoint.png',
      description: 'Households by Census Tract income <b><FONT COLOR="#807dba"><20k</FONT COLOR></b>. <p>Highest Tract Percentage<b><FONT COLOR="#807dba"> 100% = 2,208 student households</FONT COLOR></b>',
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
          duration: 200
         }
      ],
      onChapterExit: [
        {
        layer: 'noIntless20k',
        opacity: 0,
        duration: 200
       }
      ],
    },

    // {
    //   id: 'fayette20kplusGraph',
    //   alignment: 'right',
    //   hidden: false,
    //   title: 'No Internet Access',
    //      image: 'images/noInt20_74kGraph.png',
    //   description: 'Households by Census Tract income <FONT COLOR="#807dba">20k-74.9k</FONT COLOR>. <p>Highest <b><FONT COLOR="#807dba">36%</FONT COLOR></b>',
    //   location: {
    //     center: [-84.29610, 38.03089],
    //     zoom: 10,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: 'flyTo',
    //   rotateAnimation: false,
    //   callback: '',
    //   onChapterEnter: [
    //     {
    //       layer: 'noInt24kto75k',
    //       opacity: 0.75,
    //       duration: 200
    //      }
    //   ],
    //   onChapterExit: [
    //     {
    //     layer: 'noInt24kto75k',
    //     opacity: 0.75,
    //     duration: 200
    //    }
    //   ],
    // },

    {
      id: 'fayette20kplus',
      alignment: 'right',
      hidden: false,
      title: 'No Internet Access',
         image: 'images/_20knoint.png',
      description: 'Households by Census Tract income <FONT COLOR="#807dba">20k-74.9k</FONT COLOR>. <p>Highest Tract Percentage <b><FONT COLOR="#807dba">36% = 354 student households</FONT COLOR></b>',
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
          duration: 200
         }
      ],
      onChapterExit: [
        {
        layer: 'noInt24kto75k',
        opacity: 0,
        duration: 200
       }
      ],
    },

    // {
    //   id: 'fayette75kGraph',
    //   alignment: 'right',
    //   hidden: false,
    //   title: 'No Internet Access',
    //      image: 'images/noInt74kGraph.png',
    //   description: 'Households by Census Tract income <b><FONT COLOR="#807dba">>75K</FONT COLOR></b>. <p>Highest <b><FONT COLOR="#807dba">28.6%</FONT COLOR></b>',
    //   location: {
    //     center: [-84.29610, 38.03089],
    //     zoom: 10,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: 'flyTo',
    //   rotateAnimation: false,
    //   callback: '',
    //   onChapterEnter: [
    //     {
    //       layer: 'noInt75kup',
    //       opacity: 0.75,
    //       duration: 200
    //      }
    //   ],
    //   onChapterExit: [
    //     {
    //     layer: 'noInt75kup',
    //     opacity: 0.75,
    //     duration: 200
    //    }
    //   ],
    // },

    {
      id: 'fayette75k',
      alignment: 'right',
      hidden: false,
      title: 'No Internet Access',
         image: 'images/_20knoint.png',
      description: 'Households by Census Tract income <b><FONT COLOR="#807dba">>75K</FONT COLOR></b>. <p>Highest Tract Percentage <b><FONT COLOR="#807dba">28.6% = 222 student households</FONT COLOR></b>',
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
          duration: 200
         }
      ],
      onChapterExit: [
        {
        layer: 'noInt75kup',
        opacity: 0,
        duration: 200
       }
      ],
    },


    {
      id: 'wrapUp',
      alignment: 'center',
      hidden: false,
      title: 'Bridging the Divide For the Future',
         image: 'images/bridgeDivide.png',
      description: 'Come May 2020 the Fayette County District began ordering internet hotspots with a 6 month contract for service to provide to qualifying students. <p>Going forward though, if remote/NTI learning is leaned upon increasingly in the future, education systems will need to consider how to budget for and provide continuted support to students as opposed to temporary fixes. ',
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
          opacity: 0,
          duration: 200
         }
      ],
      onChapterExit: [
        {
        layer: 'noInt75kup',
        opacity: 0,
        duration: 200
       }
      ],
    }

  ],
};
