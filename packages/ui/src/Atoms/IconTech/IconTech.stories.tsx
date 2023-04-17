import {IconTech} from './IconTech'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Atoms/IconTech',
    component: IconTech,
    argTypes: {}
} as ComponentMeta<typeof IconTech>;

const Template: ComponentStory<typeof IconTech> = (args) => <IconTech {...args} />;

export const Default = Template.bind({});
Default.args = {
    icon: "logos:c-plusplus"
};