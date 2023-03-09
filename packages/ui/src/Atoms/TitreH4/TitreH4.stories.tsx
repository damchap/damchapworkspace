import {TitreH4} from './TitreH4'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Atoms/Titre/TitreH4',
    component: TitreH4,
    argTypes: {}
} as ComponentMeta<typeof TitreH4>;

const Template: ComponentStory<typeof TitreH4> = (args) => <TitreH4 {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: '🤖Titre H4'
};