import uuid from 'uuid/v1';

const content = [
  { 
    title: 'artisan wants generator', 
    summary: 'generate a static HTML page hosted on GitHub for trading artisan keycaps',
    text: `
      <p>In the mechanical keyboard community, there are custom-made keycaps made in small quantities by artists known as artisans. These 'artisan keycaps' are coveted for many different reasons - the way the sculpt looks, the color of resin in which they were cast, or simply due to their rarity.</p>
      <p>The primary means of trading caps with community members is via a 'classifieds-style' subreddit called 'mechmarket'. Users put up timestamped pictures of the keycaps they would like to trade, requesting either PayPal as a means of payment, or suggest other caps that they are interested in. For simplicity, many users make a Google Docs document to list the particular caps, sculpts, and colorways they are looking for. Unfortunately, many are plain looking and aren't mobile-friendly.</p>
      <p>The artisan wants generator looks to solve that by providing a way to build a 'wants list' via a WYSIWYG editor, then generating static HTML and CSS files which are uploaded to GitHub to be hosted on GitHub Pages. Users select content, colors, and finally upload the content, pushing the generated files to the default GitHub pages public reposity for their account.</p>
    `,
    tech: {
      'react': 'React',
      'html': 'HTML',
      'css': 'CSS',
      'node': 'NodeJS',
      'docker': 'Docker'
    },
    imageUrl: `${process.env.PUBLIC_URL}/artisan-wants.jpg`,
    imageCredit: 'image credit: Keyforge @ <a href="https://www.keyforge.com" target="_blank" rel="noopener noreferrer">keyforge.com</a>',
    projectUrl: 'https://artisan-wants-client.herokuapp.com',
    githubUrl: 'https://github.com/ampossardt/artisan-trade-list-generator',
    key: uuid() 
  }
];

export const aboutSvg = [
  { points: '0.5 101 0.5 1 100.5 1 0.5 101', ratio: 0.088, animateFrom: 'top', delay: 50 },

  { points: '50.5 51 100.5 1 120.5 1 70.5 51 50.5 51', ratio: 0.053645833, animateFrom: 'top', delay: 100  },
  { points: '0.5 101 50.5 51 70.5 51 0.5 121 0.5 101', ratio: 0.061869792, animateFrom: 'bottom', delay: 100  },

  { points: '88.4 33.1 120.5 1 145.5 1 113.5 33 88.4 33.1', ratio: 0.040572917, animateFrom: 'top', delay: 200  },
  { points: '50.5 71 88.4 33.1 113.5 33.1 75.5 71 50.5 71', ratio: 0.081145834, animateFrom: 'top', delay: 150  },
  { points: '0.5 121 50.5 71 75.5 71 0.5 146 0.5 121', ratio: 0.066291667, animateFrom: 'bottom', delay: 175  },

  { points: '43.5 103 145.5 1 205.5 1 103 103 43.5 103', ratio: 0.119359375, animateFrom: 'top', delay: 200  },
  { points: '0.5 206 103 103 43.5 103 0.5 146 0.5 206', ratio: 0.090598958, animateFrom: 'bottom', delay: 200  },

  { points: '137.4 68.5 205.5 1 220.5 1 153 68 137.4 68.5', ratio: 0.067026042, animateFrom: 'top', delay: 250  },
  { points: '0.5 206 137.8 68 153 68 0.5 221 0.5 206', ratio: 0.134791667, animateFrom: 'bottom', delay: 250  },

  { points: '90.6 130.3 220.5 1 290.5 1 160.5 130.3 90.6 130.3', ratio: 0.148802083, animateFrom: 'top', delay: 300  },
  { points: '0.5 221 90.6 130.3 160.5 130.3 0.5 291 0.5 221', ratio: 0.141421875, animateFrom: 'bottom', delay: 300  },

  { points: '190.5 99 290.5 1 320.5 1 222.5 99 190.5 99', ratio: 0.1015625, animateFrom: 'top', delay: 400  },
  { points: '96.1 195 190.6 99 222.5 99 126.5 195 96.1 195', ratio: 0.200421875, animateFrom: 'top', delay: 350  },
  { points: '0.5 291 95.9 195 126.5 195 0.5 321 0.5 291', ratio: 0.111223958, animateFrom: 'bottom', delay: 375  },
  
  { points: '0.5 321 320.5 1 330.5 1 0.5 331', ratio: 0.291682292, animateFrom: 'bottom', delay: 400  },

  { points: '187 144.5 330.5 1 378.5 1 235 144.5', ratio: 0.149166667, animateFrom: 'top', delay: 450  },
  { points: '235 144.5 213.5 166 1 378.5 0.5 331 165.5 166 187 144.5', ratio: 0.206609375, animateFrom: 'bottom', delay: 450  },

  { points: '157.7 221 378 1 458.5 1 238.3 221', ratio: 0.232822917, animateFrom: 'top', delay: 500  },
  { points: '157.5 221 238.5 221 0.8 458.3 0.5 378', ratio: 0.209552083, animateFrom: 'bottom', delay: 500  },

  { points: '372.5 86 458 0.5 573.5 0.5 488.4 86 372.5 86', ratio: 0.136302083, animateFrom: 'top', delay:  600 },
  { points: '266.3 192.8 373 86 488.4 86 381.8 192.5', ratio: 0.290046875, animateFrom: 'top', delay: 550  },
  { points: '381.8 192.3 253.5 321 137.5 321 266.5 192 381.8 192.3', ratio: 0.395583334, animateFrom: 'bottom', delay: 575  },
  { points: '0.5 458 137.5 321 253.5 321 0.5 574 0.5 458', ratio: 0.223182292, animateFrom: 'bottom', delay: 625  },

  { points: '413.5 160 573.5 0 597 0 437 160 413.5 160', ratio: 0.152083333, animateFrom: 'top', delay: 650  },
  { points: '230 344.5 413.5 160 437 160 253.5 344.5 230 344.5', ratio: 0.32509375, animateFrom: 'top', delay: 600  },
  { points: '0.5 574 230 344.5 253.5 344.5 0.8 597.3 0.5 574', ratio: 0.223182292, animateFrom: 'bottom', delay: 625  },
  
  { points: '436.5 160 596 0.5 619.5 0.5 437 183.5 436.5 160', ratio: 0.152083333, animateFrom: 'top', delay: 750  },
  { points: '253.5 344 437 160 437 183.5 253.5 366.8 253.5 344', ratio: 0.396192709, animateFrom: 'bottom', delay: 700  },
  { points: '0.5 597.2 253.5 343.8 253.5 366.8 0.5 620.3 0.5 597.2', ratio: 0.223182292, animateFrom: 'bottom', delay: 725   },

  { points: '0 620 620 0 695 0 0.5 694.5 0 620', ratio: 0.614296875, animateFrom: 'bottom', delay: 750  }
];

export default content;