import {ProjectPromote} from './ProjectPromote'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Organisms/ProjectPromote',
    component: ProjectPromote,
    argTypes: {}
} as ComponentMeta<typeof ProjectPromote>;

const Template: ComponentStory<typeof ProjectPromote> = (args) => <ProjectPromote {...args} />;

export const Default = Template.bind({});
Default.args = {
    UrlImage:"/public/logo_clevguard.png",
    Title: "Assistant Clevguard",
    Date: {
        dateStart:"2019",
        dateEnd: "2020"
    },
    Technologies: [
        "logos:c-plusplus",
        "logos:javascript",
        "logos:typescript-icon"
    ],
    Description: "Clevguard est un projet de fin d’année de terminale STI2D (Sciences et Technologies de l’Industrie et du Développement Durable) option SIN (Système d’information et numérique). Le projet Clevguard est divisé en plusieurs composantes, des boîtiers de capteurs divers ainsi qu’une progressive Web App permettant une visualisation des données des capteurs."
};