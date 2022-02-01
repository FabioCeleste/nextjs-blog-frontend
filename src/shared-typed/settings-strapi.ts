type LogoProps = {
  attributes: {
    name: string;
    url: string;
  };
};

type MenuLinkProps = {
  id: string;
  link: string;
  text: string;
  newTab: boolean;
};

export type SettingsStrapi = {
  setting: {
    data: {
      id: string;
      attributes: {
        blogName: string;
        blogDescription: string;
        text: string;
        logo: {
          data: LogoProps[];
        };
        menuLink: MenuLinkProps[];
      };
    };
  };
};
