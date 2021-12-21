import { Story, Meta } from '@storybook/react/types-6-0';
import { Teste } from '.';

export default {
  title: "Teste",
  component: Teste,
  args: {
    title: 'default',
    description: 'default'
  }
} as Meta;

export const Basic: Story = (args) => {
  return (
    <Teste {...args} />
  )
};