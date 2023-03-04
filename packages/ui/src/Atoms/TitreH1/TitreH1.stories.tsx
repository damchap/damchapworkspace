import {TitreH1} from './TitreH1'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Atoms/TitreH1',
    component: TitreH1,
    argTypes: {}
} as ComponentMeta<typeof TitreH1>;

const Template: ComponentStory<typeof TitreH1> = (args) => <TitreH1 {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "bonjour les gens",
};