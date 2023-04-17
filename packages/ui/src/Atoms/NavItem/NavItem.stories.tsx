import {NavItem} from './NavItem'
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'Atoms/NavItem',
    component: NavItem,
    argTypes: {}
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem {...args} />;

const styles = {
    '--color-text': '#000',
    '--color-primary': '#ff0000',
}as React.CSSProperties

export const Default = Template.bind({});
Default.args = {
    children: 'Home',
    link: '/',
    style: styles
};