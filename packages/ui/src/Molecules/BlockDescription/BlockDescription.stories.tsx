import {BlockDescription} from './BlockDescription'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Molecules/BlockDescription',
    component: BlockDescription,
    argTypes: {}
} as ComponentMeta<typeof BlockDescription>;

const Template: ComponentStory<typeof BlockDescription> = (args) => <BlockDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
    Title: "Développeur / intégrateur ",
    Link: "https://performance-webmarketing.fr",
    TitleLink: "performance-webmarketing",
    Date: "septembre 2022 - Aujourd’hui",
    Description: [
        "Conception de site web avec des framework javascript / typescript",
        "Conception de maquette / UI kits",
        "Intégration sur different CMS  (Worpress, prestashop)",
        "Optimisation de site pour le SEO (référencement naturel) et pour l’impact carbone"
    ]
};