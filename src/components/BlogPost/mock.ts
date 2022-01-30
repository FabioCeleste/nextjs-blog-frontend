import { Author } from '../../shared-typed/author';
import { Category } from '../../shared-typed/category';

export default {
  id: '1',
  blogName: "Fabio's Blog",
  blogDescription: 'O Blog do Fabinho.',
  logo: '/assets/images/logo.png',
  showText: true,
  content:
    '<p style="margin-left:0px;text-align:justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus maximus ex, id auctor lacus dignissim a. Nulla eu leo placerat, varius dui id, euismod ex. Integer tempus nulla dui, id gravida sapien feugiat et. Mauris molestie elementum lacus sit amet aliquet. Nam mollis convallis massa, sit amet commodo nisi facilisis in. Sed rhoncus risus tellus, sollicitudin luctus mauris molestie id. Donec venenatis sodales orci, ut aliquet ex laoreet quis. Sed quis mauris a augue pulvinar imperdiet. Etiam feugiat libero purus, id lobortis libero lacinia vitae. Duis hendrerit augue magna, et pellentesque ipsum interdum sit amet.</p><p style="margin-left:0px;text-align:justify;">&nbsp;</p><p style="margin-left:0px;text-align:justify;">Praesent auctor nisi a laoreet placerat. Integer nibh turpis, egestas vel orci ac, sodales ultrices velit. Morbi justo urna, blandit vitae mattis at, sollicitudin ac dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Quisque ac nisl felis. Morbi aliquam erat et turpis maximus, non ultrices nulla aliquet. Donec porttitor tortor non nisl feugiat condimentum. Sed fringilla pharetra tellus vel semper. Aliquam ut arcu odio. Etiam porttitor purus vitae tellus scelerisque, sit amet pellentesque ligula molestie.</p><p style="margin-left:0px;text-align:justify;">Ut faucibus odio diam, nec egestas tortor tincidunt non. Nulla volutpat enim et dolor scelerisque, sed vehicula justo fermentum. Cras ut condimentum ex. Fusce ac enim convallis, ultrices nisl sit amet, porttitor urna. Etiam ultrices ipsum a pharetra gravida. Integer suscipit sem et interdum consequat. Aenean commodo pretium dui sit amet fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas cursus odio id nisi aliquam vehicula. Morbi et nunc tellus. Sed vel turpis tincidunt, finibus magna ac, venenatis ante. Nulla in nulla ipsum. Curabitur efficitur tellus vestibulum arcu feugiat, vel iaculis nisi venenatis.</p><p style="margin-left:0px;text-align:justify;">&nbsp;</p><p style="margin-left:0px;text-align:justify;">Aliquam vel diam purus. Nam auctor dolor id magna cursus, a ornare felis commodo. Integer in auctor nibh. Mauris pharetra bibendum aliquet. Phasellus at justo dui. Sed ligula orci, varius eget sem vitae, porttitor aliquam mi. Sed justo ipsum, interdum non tempor vitae, viverra ac eros. Ut malesuada, nisi in aliquam interdum, diam diam vulputate lorem, et lacinia turpis mauris id odio. Donec sem arcu, convallis at blandit vitae, faucibus vitae magna. Aliquam scelerisque elit urna, a cursus justo scelerisque a. Quisque lacinia mauris eget venenatis euismod. Donec ac est quis nulla commodo rhoncus at sit amet arcu. Nulla viverra, lacus eget sodales eleifend, justo augue tempus leo, id ornare turpis orci vel metus. Integer turpis quam, ultrices ut vulputate nec, viverra sit amet risus. Suspendisse rutrum est in tincidunt porttitor.</p>',

  title: 'Primeiro Post',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus maximus ex, id auctor lacus dignissim a. Nulla eu',

  cover: {
    data: {
      id: '4',
      attributes: {
        url: '/assets/images/logo.png',
        alternativeText: 'logo.png',
      },
    },
  },

  createdAt: '2022-01-28T02:53:53.880Z',
  author: {
    data: {
      id: '1',
      attributes: {
        displayName: 'Fabio Celeste',
        slug: 'fabio-celeste',
      },
    },
  } as Author,
  category: {
    data: {
      id: '1',
      attributes: {
        displayName: 'JavaScript',
        slug: 'java-script',
      },
    },
  } as Category,
};
