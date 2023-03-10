import {Projet} from './Projet'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Organisms/Projet',
    component: Projet,
    argTypes: {}
} as ComponentMeta<typeof Projet>;

const Template: ComponentStory<typeof Projet> = (args) => <Projet {...args} />;

export const Default = Template.bind({});
Default.args = {
    UrlImage:"/public/logo_clevguard.png",
};