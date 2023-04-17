import {Button} from './Button'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes : {}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "bonjour les gens",
    outline: false,
    color: "#2181FA",
};
export const Outline = Template.bind({});
Outline.args = {
    children: "bonjour les gens",
    outline: true,
    color: "#2181FA",
    icon: "mdi:home"
}
