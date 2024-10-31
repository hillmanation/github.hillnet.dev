// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'hillmanation', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['hillmanation/bnu-discord-bot', 'hillmanation/Manga-Batch-Downloader'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Kavita Server Discord Bot',
          description:
            'A Community Driven Discord Bot for use with the Kavita Manga Reader server project.',
          imageUrl:
            'https://avatars.githubusercontent.com/u/75760308?s=200&v=4',
          link: 'https://github.com/hillmanation/bnu-discord-bot',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jake Hillman',
    description: 'Veteran IT Professional of 10 years and Open Source Project Hobbyist',
    imageURL: '',
  },
  social: {
    linkedin: 'jake-hillman-it',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: 'hillmanation',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://github.hillnet.dev',
    phone: '',
    email: 'jake.hillman.it@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Powershell',
    'Python',
    'JavaScript',
    'React.js',
    'ReactNative',
    'MySQL',
    'PostgreSQL',
    'MariaDB',
    'Git',
    'Docker',
    'Bash',
    'VMware',
    'Windows Server',
    'Active Directory',
    'RHEL',
    'NetApp Storage',
    'Cisco Networking',
  ],
  experiences: [
    {
      company: 'Belcan Engineering Group',
      position: 'Senior Systems Engineer - Virtualization Junior Architect',
      from: 'October 2024',
      to: 'Present',
      companyLink: 'https://www.belcan.com',
    },
    {
      company: 'Belcan Engineering Group',
      position: 'Senior Technical Lead',
      from: 'December 2021',
      to: 'Present',
      companyLink: 'https://www.belcan.com',
    },
  ],
  certifications: [
    {
      name: 'Comptia Security+',
      body: '',
      year: 'February 2023',
      link: 'https://www.comptia.org/certifications/security',
    },
  ],
  educations: [
    {
      institution: '',
      degree: '',
      from: '',
      to: '',
    },
    {
      institution: '',
      degree: '',
      from: '',
      to: '',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
