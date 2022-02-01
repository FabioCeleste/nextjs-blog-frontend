import { SettingsStrapi } from '../../shared-typed/settings-strapi';

export default {
  setting: {
    data: {
      id: '1',
      attributes: {
        blogName: "Fabio's Blog",
        blogDescription: 'O blog pessoal do Fabin',
        text: '<p>Seja muito bem vindo ao blog pessoal do Fabio</p>',
        logo: {
          data: [
            {
              attributes: {
                name: 'ScreenShot-2022-1-22_14-40-50.png',
                url: '/assets/images/logo.png',
              },
            },
          ],
        },
        menuLink: [
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
      },
    },
  },
} as SettingsStrapi;
