import {TitreH3} from './TitreH3'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Atoms/Titre/TitreH3',
    component: TitreH3,
    argTypes: {}
} as ComponentMeta<typeof TitreH3>;

const Template: ComponentStory<typeof TitreH3> = (args) => <TitreH3 {...args} />;

export const Default = Template.bind({});
Default.args = {};