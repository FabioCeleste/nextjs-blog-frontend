import { Meta, Story } from '@storybook/react/types-6-0';
import { PostTag, PostTagProps } from '.';

import mock from './mock';

export default {
  title: 'PostTag',
  component: PostTag,
  args: mock,
} as Meta<PostTagProps>;

export const Template: Story<PostTagProps> = (args) => {
  return (
    <div>
      <PostTag {...args} />
    </div>
  );
};
