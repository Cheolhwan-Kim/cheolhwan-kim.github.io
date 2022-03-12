module.exports = {
  title: `Iron Blog`,
  description: `끄적끄적`,
  language: `ko`,
  siteUrl: `https://cheolhwan-kim.github.io`,
  ogImage: `/og-image.png`, // 공유할 때 보이는 미리보기 이미지로 '/static' 하위에 넣고 싶은 이미지를 추가하시면 됩니다.
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'UA-222772530-1', // Google Analytics Tracking ID
  author: {
    name: `김철환`,
    footer: `Iron`,
    bio: {
      role: `개발자`,
      description: ['능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'about.png',
    },
    social: {
      github: `https://github.com/Cheolhwan-Kim`,
      linkedIn: `https://www.linkedin.com/in/cheolhwan`,
      email: `nexsaver@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2012.01 ~',
        activity: 'LG CNS'
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '우정사업본부 우편물류시스템 (2012.01 ~ 2018.12)',
        description:
          '',
        techStack: ['Java', 'C#', 'Delphi', 'MFC', 'Oracle', 'MariaDB'],
      },
      {
        title: 'PosMalaysia NewCore Track&Trace System (2019.01 ~ 2021.04)',
        description:
            '',
        techStack: ['Java', 'C#', 'Oracle', 'MS SQL', 'Elastic Search'],
      },
      {
        title: 'GS25 편의점 택배 구축 및 클라우드 전환 (2021.05 ~ )',
        description:
            '',
        techStack: ['Java', 'C#', 'Python', 'Oracle', 'PostgreSQL', 'JPA', 'Kubernetes', 'CI/CD'],
      },
    ],
  },
};
