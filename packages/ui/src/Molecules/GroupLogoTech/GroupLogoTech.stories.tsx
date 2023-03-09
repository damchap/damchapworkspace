import {GroupLogoTech} from './GroupLogoTech'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Molecules/GroupLogoTech',
    component: GroupLogoTech,
    argTypes: {}
} as ComponentMeta<typeof GroupLogoTech>;

const Template: ComponentStory<typeof GroupLogoTech> = (args) => <GroupLogoTech {...args} />;

export const Default = Template.bind({});
Default.args = {
    Technologies: [
        "logos:c-plusplus",
        "logos:javascript",
        "logos:typescript-icon"
    ]
};