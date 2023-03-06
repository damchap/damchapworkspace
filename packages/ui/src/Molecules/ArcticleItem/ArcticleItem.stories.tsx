import {ArcticleItem} from './ArcticleItem'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Molecules/ArcticleItem',
    component: ArcticleItem,
    argTypes: {}
} as ComponentMeta<typeof ArcticleItem>;

const Template: ComponentStory<typeof ArcticleItem> = (args) => <ArcticleItem {...args} />;

export const Default = Template.bind({});

class img {
    constructor(public src: string, public alt: string) {
    }
}

Default.args = {
    Image: "test",
    Title: "Allez ç’est (re)parti pour de nouvelle aventure ! 💥",
    Description: "pnpm, next.js, react, versel ou bien vue, nuxt3, netlify. Quelle de ce technologie j’utilise aujourd’hui pour développer des projects cumulent une partie front et back avec une api Rest ou",
    Date: new Date(),
    Views: 10,
    Technologies: [
        {
            name: "Github",
            icon: "mdi:github"
        },
        {
            name: "PNPM",
            icon: "file-icons:pnpm"
        }
    ]
};