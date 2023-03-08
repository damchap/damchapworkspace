import {ProjectPromote} from './ProjectPromote'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Molecules/ProjectPromote',
    component: ProjectPromote,
    argTypes: {}
} as ComponentMeta<typeof ProjectPromote>;

const Template: ComponentStory<typeof ProjectPromote> = (args) => <ProjectPromote {...args} />;

export const Default = Template.bind({});
Default.args = {};