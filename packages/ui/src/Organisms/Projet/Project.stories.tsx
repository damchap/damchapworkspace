import {Project} from './Project'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Organisms/Project',
    component: Project,
    argTypes: {}
} as ComponentMeta<typeof Project>;

const Template: ComponentStory<typeof Project> = (args) => <Project {...args} />;

export const Default = Template.bind({});
Default.args = {
    UrlImage:"/public/logo_clevguard.png",
};