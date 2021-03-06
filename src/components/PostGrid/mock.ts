const mock = {
  posts: {
    data: [
      {
        id: '1',
        attributes: {
          title: 'Primeiro Post',
          slug: 'primeiro-post',
          excerpt:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus maximus ex, id auctor lacus dignissim a. Nulla eu leo placerat, varius dui id, euismod ex. Integer tempus nulla dui, id',
          content:
            '<p style="margin-left:0px;text-align:justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus maximus ex, id auctor lacus dignissim a. Nulla eu leo placerat, varius dui id, euismod ex. Integer tempus nulla dui, id gravida sapien feugiat et. Mauris molestie elementum lacus sit amet aliquet. Nam mollis convallis massa, sit amet commodo nisi facilisis in. Sed rhoncus risus tellus, sollicitudin luctus mauris molestie id. Donec venenatis sodales orci, ut aliquet ex laoreet quis. Sed quis mauris a augue pulvinar imperdiet. Etiam feugiat libero purus, id lobortis libero lacinia vitae. Duis hendrerit augue magna, et pellentesque ipsum interdum sit amet.</p><p style="margin-left:0px;text-align:justify;">&nbsp;</p><p style="margin-left:0px;text-align:justify;">Praesent auctor nisi a laoreet placerat. Integer nibh turpis, egestas vel orci ac, sodales ultrices velit. Morbi justo urna, blandit vitae mattis at, sollicitudin ac dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Quisque ac nisl felis. Morbi aliquam erat et turpis maximus, non ultrices nulla aliquet. Donec porttitor tortor non nisl feugiat condimentum. Sed fringilla pharetra tellus vel semper. Aliquam ut arcu odio. Etiam porttitor purus vitae tellus scelerisque, sit amet pellentesque ligula molestie.</p><p style="margin-left:0px;text-align:justify;">Ut faucibus odio diam, nec egestas tortor tincidunt non. Nulla volutpat enim et dolor scelerisque, sed vehicula justo fermentum. Cras ut condimentum ex. Fusce ac enim convallis, ultrices nisl sit amet, porttitor urna. Etiam ultrices ipsum a pharetra gravida. Integer suscipit sem et interdum consequat. Aenean commodo pretium dui sit amet fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas cursus odio id nisi aliquam vehicula. Morbi et nunc tellus. Sed vel turpis tincidunt, finibus magna ac, venenatis ante. Nulla in nulla ipsum. Curabitur efficitur tellus vestibulum arcu feugiat, vel iaculis nisi venenatis.</p><p style="margin-left:0px;text-align:justify;">&nbsp;</p><p style="margin-left:0px;text-align:justify;">Aliquam vel diam purus. Nam auctor dolor id magna cursus, a ornare felis commodo. Integer in auctor nibh. Mauris pharetra bibendum aliquet. Phasellus at justo dui. Sed ligula orci, varius eget sem vitae, porttitor aliquam mi. Sed justo ipsum, interdum non tempor vitae, viverra ac eros. Ut malesuada, nisi in aliquam interdum, diam diam vulputate lorem, et lacinia turpis mauris id odio. Donec sem arcu, convallis at blandit vitae, faucibus vitae magna. Aliquam scelerisque elit urna, a cursus justo scelerisque a. Quisque lacinia mauris eget venenatis euismod. Donec ac est quis nulla commodo rhoncus at sit amet arcu. Nulla viverra, lacus eget sodales eleifend, justo augue tempus leo, id ornare turpis orci vel metus. Integer turpis quam, ultrices ut vulputate nec, viverra sit amet risus. Suspendisse rutrum est in tincidunt porttitor.</p>',
          allowComments: true,
          cover: {
            data: {
              id: '4',
              attributes: {
                url: '/assets/images/thumbnail.png',
                alternativeText: 'ScreenShot-2022-1-22_14-16-7.png',
              },
            },
          },
          category: {
            data: {
              id: '1',
              attributes: {
                displayName: 'JavaScript',
                slug: 'java-script',
              },
            },
          },
          tags: {
            data: [
              {
                id: '1',
                attributes: {
                  displayName: 'ReactJS',
                  slug: 'react-js',
                },
              },
              {
                id: '2',
                attributes: {
                  displayName: 'NextJS',
                  slug: 'next-js',
                },
              },
            ],
          },
          author: {
            data: {
              id: '1',
              attributes: {
                displayName: 'Fabio Celeste',
                slug: 'fabio-celeste',
              },
            },
          },
        },
      },
      {
        id: '2',
        attributes: {
          title: 'Segundo Post',
          slug: 'segundo-post',
          excerpt:
            'Pellentesque nisl ipsum, vehicula eu odio id, posuere luctus lectus. Fusce erat nisl, pellentesque sit amet congue et, interdum at nulla. Vestibulum risus diam, mattis vitae urLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus maximus ex, id auctor lacus dignissim a. Nulla eu leo placerat, varius dui id, euismod ex. Integer tempus nulla dui, idLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus maximus ex, id auctor lacus dignissim a. Nulla eu leo placerat, varius dui id, euismod ex. Integer tempus nulla dui, idLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus maximus ex, id auctor lacus dignissim a. Nulla eu leo placerat, varius dui id, euismod ex. Integer tempus nulla dui, idLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus maximus ex, id auctor lacus dignissim a. Nulla eu leo placerat, varius dui id, euismod ex. Integer tempus nulla dui, idna eget, faucibus iaculis turpis.',
          content:
            '<p style="margin-left:0px;text-align:justify;">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus rhoncus maximus felis, vel ullamcorper augue luctus sit amet. Sed imperdiet, massa vitae tempor efficitur, risus dui congue diam, sed tempus eros enim id nibh. Aliquam ornare tempor risus in pharetra. In sit amet purus faucibus, semper ante quis, dignissim tortor. Nulla bibendum vestibulum libero eget convallis. Aliquam in sodales arcu. Etiam lobortis in dui sed ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent at lacinia purus. Curabitur ac sem pharetra justo gravida sagittis.</p><p style="margin-left:0px;text-align:justify;">&nbsp;</p><p style="margin-left:0px;text-align:justify;">Vivamus malesuada suscipit tellus id ultrices. Aliquam nec tortor varius, pretium erat vehicula, scelerisque velit. Phasellus at aliquam ex, vel porttitor sapien. Donec elementum leo diam, id efficitur dui vehicula eu. Duis facilisis ex ut rhoncus auctor. Curabitur ultrices auctor nibh vitae porta. Nam finibus quis leo eu porttitor.</p><p style="margin-left:0px;text-align:justify;">Sed pretium tempus lorem nec congue. Duis tincidunt viverra blandit. Cras aliquam elit nec leo mollis, quis euismod augue rhoncus. Morbi placerat nunc urna, aliquet sodales turpis convallis id. Duis mollis feugiat finibus. Praesent eu ante id quam placerat ullamcorper eu quis nisi. Integer eget nibh ante. Ut tincidunt mi accumsan molestie maximus. Duis at sapien dui. Donec faucibus porttitor lacus a tempus. Cras sollicitudin vulputate magna vel lacinia. Donec dictum, massa id placerat semper, turpis dolor porttitor ante, nec mollis est neque ac turpis. Aenean eget commodo quam. Nunc cursus viverra ex ut rhoncus.</p><p style="margin-left:0px;text-align:justify;">&nbsp;</p><p style="margin-left:0px;text-align:justify;">Phasellus mollis facilisis augue. Maecenas et tortor ac libero consequat faucibus. Nullam ornare eu dui et auctor. Aliquam ut egestas eros. Maecenas consectetur, purus eu porttitor venenatis, est lacus interdum nunc, eu ultrices lectus lectus vitae tellus. Suspendisse potenti. Sed ut suscipit tellus, sed congue nulla. Proin maximus est eget pulvinar ultricies. Donec finibus eros eu ligula rutrum hendrerit.</p><p style="margin-left:0px;text-align:justify;">Proin vel feugiat risus, quis aliquam lorem. Praesent porttitor accumsan elit, ac laoreet erat blandit non. Sed feugiat arcu non condimentum malesuada. Suspendisse ac neque eget ex porta feugiat in eu ex. Donec a dolor a felis sollicitudin hendrerit. Integer quis elit ut nisi feugiat porttitor. Maecenas neque leo, rhoncus sit amet accumsan et, tincidunt in lorem. Nunc eu porta nulla. Nulla diam turpis, tempus at semper ac, porta non massa.</p><p style="margin-left:0px;text-align:justify;">Nulla posuere pharetra libero. Mauris dolor elit, iaculis sit amet eleifend et, fermentum vitae elit. Quisque aliquet ut sapien in lacinia. Suspendisse hendrerit maximus sem scelerisque euismod. Mauris gravida auctor nisl, non gravida felis auctor et. Sed et ligula tempor, pulvinar neque at, varius velit. Mauris dictum sollicitudin congue. Fusce vitae sagittis nulla. Morbi sagittis fringilla ultrices. Fusce posuere fermentum nisi. Praesent ut mollis nisi. Proin et risus a orci euismod finibus. Donec volutpat fringilla feugiat.</p><p style="margin-left:0px;text-align:justify;">&nbsp;</p><p style="margin-left:0px;text-align:justify;">Pellentesque nisl ipsum, vehicula eu odio id, posuere luctus lectus. Fusce erat nisl, pellentesque sit amet congue et, interdum at nulla. Vestibulum risus diam, mattis vitae urna eget, faucibus iaculis turpis. Quisque dui purus, tincidunt congue aliquam a, interdum in nibh. Pellentesque augue eros, interdum eget justo ac, tempus volutpat magna. Morbi nec leo nibh. Morbi gravida justo dolor, id luctus nisi auctor at. Aliquam risus metus, sagittis dapibus sem ut, suscipit fermentum eros. Sed vestibulum augue a odio viverra interdum ut quis justo.</p>',
          allowComments: true,
          cover: {
            data: {
              id: '3',
              attributes: {
                url: '/assets/images/thumbnail2.png',
                alternativeText: 'ScreenShot-2022-1-22_14-3-8.png',
              },
            },
          },
          category: {
            data: {
              id: '1',
              attributes: {
                displayName: 'JavaScript',
                slug: 'java-script',
              },
            },
          },
          tags: {
            data: [
              {
                id: '1',
                attributes: {
                  displayName: 'ReactJS',
                  slug: 'react-js',
                },
              },
            ],
          },
          author: {
            data: {
              id: '1',
              attributes: {
                displayName: 'Fabio Celeste',
                slug: 'fabio-celeste',
              },
            },
          },
        },
      },

      {
        id: '3',
        attributes: {
          title: 'Primeiro Post',
          slug: 'primeiro-post',
          excerpt:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus maximus ex, id auctor lacus dignissim a. Nulla eu leo placerat, varius dui id, euismod ex. Integer tempus nulla dui, id',
          content:
            '<p style="margin-left:0px;text-align:justify;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus maximus ex, id auctor lacus dignissim a. Nulla eu leo placerat, varius dui id, euismod ex. Integer tempus nulla dui, id gravida sapien feugiat et. Mauris molestie elementum lacus sit amet aliquet. Nam mollis convallis massa, sit amet commodo nisi facilisis in. Sed rhoncus risus tellus, sollicitudin luctus mauris molestie id. Donec venenatis sodales orci, ut aliquet ex laoreet quis. Sed quis mauris a augue pulvinar imperdiet. Etiam feugiat libero purus, id lobortis libero lacinia vitae. Duis hendrerit augue magna, et pellentesque ipsum interdum sit amet.</p><p style="margin-left:0px;text-align:justify;">&nbsp;</p><p style="margin-left:0px;text-align:justify;">Praesent auctor nisi a laoreet placerat. Integer nibh turpis, egestas vel orci ac, sodales ultrices velit. Morbi justo urna, blandit vitae mattis at, sollicitudin ac dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Quisque ac nisl felis. Morbi aliquam erat et turpis maximus, non ultrices nulla aliquet. Donec porttitor tortor non nisl feugiat condimentum. Sed fringilla pharetra tellus vel semper. Aliquam ut arcu odio. Etiam porttitor purus vitae tellus scelerisque, sit amet pellentesque ligula molestie.</p><p style="margin-left:0px;text-align:justify;">Ut faucibus odio diam, nec egestas tortor tincidunt non. Nulla volutpat enim et dolor scelerisque, sed vehicula justo fermentum. Cras ut condimentum ex. Fusce ac enim convallis, ultrices nisl sit amet, porttitor urna. Etiam ultrices ipsum a pharetra gravida. Integer suscipit sem et interdum consequat. Aenean commodo pretium dui sit amet fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas cursus odio id nisi aliquam vehicula. Morbi et nunc tellus. Sed vel turpis tincidunt, finibus magna ac, venenatis ante. Nulla in nulla ipsum. Curabitur efficitur tellus vestibulum arcu feugiat, vel iaculis nisi venenatis.</p><p style="margin-left:0px;text-align:justify;">&nbsp;</p><p style="margin-left:0px;text-align:justify;">Aliquam vel diam purus. Nam auctor dolor id magna cursus, a ornare felis commodo. Integer in auctor nibh. Mauris pharetra bibendum aliquet. Phasellus at justo dui. Sed ligula orci, varius eget sem vitae, porttitor aliquam mi. Sed justo ipsum, interdum non tempor vitae, viverra ac eros. Ut malesuada, nisi in aliquam interdum, diam diam vulputate lorem, et lacinia turpis mauris id odio. Donec sem arcu, convallis at blandit vitae, faucibus vitae magna. Aliquam scelerisque elit urna, a cursus justo scelerisque a. Quisque lacinia mauris eget venenatis euismod. Donec ac est quis nulla commodo rhoncus at sit amet arcu. Nulla viverra, lacus eget sodales eleifend, justo augue tempus leo, id ornare turpis orci vel metus. Integer turpis quam, ultrices ut vulputate nec, viverra sit amet risus. Suspendisse rutrum est in tincidunt porttitor.</p>',
          allowComments: true,
          cover: {
            data: {
              id: '4',
              attributes: {
                url: '/assets/images/thumbnail.png',
                alternativeText: 'ScreenShot-2022-1-22_14-16-7.png',
              },
            },
          },
          category: {
            data: {
              id: '1',
              attributes: {
                displayName: 'JavaScript',
                slug: 'java-script',
              },
            },
          },
          tags: {
            data: [
              {
                id: '1',
                attributes: {
                  displayName: 'ReactJS',
                  slug: 'react-js',
                },
              },
              {
                id: '2',
                attributes: {
                  displayName: 'NextJS',
                  slug: 'next-js',
                },
              },
            ],
          },
          author: {
            data: {
              id: '1',
              attributes: {
                displayName: 'Fabio Celeste',
                slug: 'fabio-celeste',
              },
            },
          },
        },
      },
    ],
  },
};

export default mock;
