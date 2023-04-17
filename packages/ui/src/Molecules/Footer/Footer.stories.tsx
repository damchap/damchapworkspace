import {Footer} from './Footer'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Molecules/Footer',
    component: Footer,
    argTypes: {}
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};