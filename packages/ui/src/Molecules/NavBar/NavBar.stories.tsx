import {NavBar} from './NavBar'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Molecules/NavBar',
    component: NavBar,
    argTypes: {}
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    navItems: [
        {
            link: '/',
            name: 'Home',
            icon: 'mdi:home'
        },
        {
            link: '/about',
            name: 'About',
            icon: 'mdi:account'
        },
        {
            link: '/projects',
            name: 'Projects',
            icon: 'mdi:folder'
        }
    ],
    route: 'Portfolio'
};