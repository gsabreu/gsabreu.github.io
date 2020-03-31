module.exports = {
  siteTitle: 'Hi! I\'m Guilherme!',
  siteDescription: `Guilherme Abreu`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Guilherme Abreu',
  twitterUsername: '__guikk',
  githubUsername: 'gsabreu',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Software developer with more than 7 years experience.<br />
    Degree in IT Management and a MBA in Software Engineering. <br />
    I've been creating high-quality software with the best possible user experiences. <br/ >
    I am constantly learning new technologies. I love to learn and to teach especially technology.`,
  skills: [
    {
      name: 'Java',
      level: 80
    },
    {
      name: 'Springboot',
      level: 60
    },
    {
      name: 'Angular',
      level: 50
    },
    {
      name: 'Swift',
      level: 30
    },
    {
      name: 'Typescript',
      level: 50
    },
    {
      name: 'Git',
      level: 70
    }
  ],
  jobs: [
    {
      company: "GFT Group",
      begin: {
        month: 'jun',
        year: '2018'
      },
      duration: null,
      occupation: "Software Engineer",
      description: `Participated in the development of cash management platform. Developed microservices architecture for maintenance high-availability and scalability based on spring cloud, Jenkins for CI/CD and deployed in Openshift Containers.`
  
    }, {
      company: "4ward",
      begin: {
        month: 'aug',
        year: '2016'
      },
      duration: '1 yr e 10 mos',
      occupation: "Software Engineer",
      description: `Participated in the development of the payment accreditation platform, payment cashback solution and mobile plataform. Developed microservices architecture for maintenance high-availability, fault tolerance, and scalability based on spring cloud in Microsoft Azure.`
    }, {
      company: "Banco do Brasil e Mapfre",
      begin: {
        month: 'Aug',
        year: '2013'
      },
      duration: '2 yrs e 6 mos',
      occupation: "Developer",
      description: `Support for an assurance legacy system. High-level language (Power House) and PL/SQL`
  
    },
    /* ... */
  ],
  social: {
    twitter: "https://twitter.com/__guikk",
    linkedin: "https://www.linkedin.com/in/guilherme-s-abreu/",
    github: "https://github.com/gsabreu",
    email: "sabreuguilherme@gmail.com"
  },
  siteUrl: 'https://github.com/gsabreu',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Guilherme Abreu',
      url: '/',
    }
  ]
}