import { Meta, Story } from '@storybook/react/types-6-0';
import { HtmlComponent, HtmlContentProps } from '.';

export default {
  title: 'HtmlComponent',
  component: HtmlComponent,
  args: {
    html: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ullam placeat unde harum. Facilis, quasi delectus
    obcaecati perferendis nobis alias ad aspernatur quod neque,
    corporis, aperiam numquam. Sint consequatur omnis voluptate.`,
  },
} as Meta;

export const Template: Story<HtmlContentProps> = (args) => {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <HtmlComponent {...args} />
    </div>
  );
};
