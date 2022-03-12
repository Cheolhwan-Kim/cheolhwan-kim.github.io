module.exports = {
  title: `Iron Blog`,
  description: `끄적끄적`,
  language: `ko`,
  siteUrl: `https://cheolhwan-kim.github.io`,
  ogImage: `/og-image.png`, // 공유할 때 보이는 미리보기 이미지로 '/static' 하위에 넣고 싶은 이미지를 추가하시면 됩니다.
  comments: {
    utterances: {
      repo: `Cheolhwan-Kim/cheolhwan-kim.github.io`,
    },
  },
  ga: 'UA-222772530-1',
  author: {
    name: `김철환`,
    footer: `Iron`,
    bio: {
      role: `개발자`,
      description: ['능동적으로 일하는', '고객을 우선하는'],
      thumbnail: 'about.png',
    },
    social: {
      github: `https://github.com/Cheolhwan-Kim`,
      linkedIn: `https://www.linkedin.com/in/cheolhwan`,
      email: `nexsaver@gmail.com`,
    },
  },
  about: {
    timestamps: [
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
      {
        date: '2020.04 ~ ',
        activity: 'LG CNS 책임, Professional',
      },
      {
        date: '2015.01 ~ 2020.03',
        activity: 'LG CNS 선임, Specialist',
      },
      {
        date: '2012.01 ~ 2014.12',
        activity: 'LG CNS 사원, Associate',
      },
    ],
    projects: [
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
      {
        title: 'GS25 편의점 택배 구축 및 클라우드 전환 (2021.05 ~ )',
        description: '',
        techStack: ['Java', 'C#', 'Python', 'Oracle', 'PostgreSQL', 'JPA', 'Kubernetes', 'CI/CD'],
      },
      {
        title: 'PosMalaysia NewCore Track&Trace System (2019.01 ~ 2021.04)',
        description: '',
        techStack: ['Java', 'C#', 'Oracle', 'MS SQL', 'Elastic Search'],
      },
      {
        title: '우정사업본부 우편물류시스템 (2012.01 ~ 2018.12)',
        description: '',
        techStack: ['Java', 'C#', 'Delphi', 'MFC', 'Oracle', 'MariaDB'],
      },
    ],
  },
};
