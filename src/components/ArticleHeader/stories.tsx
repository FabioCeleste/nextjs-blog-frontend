import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleHeader, ArticleHeaderProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,

  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta<ArticleHeaderProps>;

export const Template: Story<ArticleHeaderProps> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        temporibus tempore dolorem voluptates ipsum placeat similique dolores
        suscipit earum quaerat voluptatem eius facere, doloremque praesentium
        consectetur odio quam corporis sit?
      </p>
    </div>
  );
};
