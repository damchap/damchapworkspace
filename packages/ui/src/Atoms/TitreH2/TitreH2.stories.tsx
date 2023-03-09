import {TitreH2} from './TitreH2'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Atoms/Titre/TitreH2',
    component: TitreH2,
    argTypes: {}
} as ComponentMeta<typeof TitreH2>;

const Template: ComponentStory<typeof TitreH2> = (args) => <TitreH2 {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: '🤖Titre H2'
};