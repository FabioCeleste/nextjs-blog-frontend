import { MenuProps } from './index';

export default {
  menuLinks: [
    {
      id: '2',
      link: 'GitHub',
      text: 'muegit',
      newTab: true,
    },
    {
      id: '1',
      link: 'linkedin',
      text: 'meu link',
      newTab: false,
    },
  ],
  attributes: {
    blogName: "Fabio's Blog",
    logo: {
      data: [
        {
          attributes: {
            url: '/assets/images/logo.png',
          },
        },
      ],
    },
  },
} as MenuProps;
