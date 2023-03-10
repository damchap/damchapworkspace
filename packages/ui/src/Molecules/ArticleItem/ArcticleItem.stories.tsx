import {ArticleItem} from './ArticleItem'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Molecules/ArticleItem',
    component: ArticleItem,
    argTypes: {}
} as ComponentMeta<typeof ArticleItem>;

const Template: ComponentStory<typeof ArticleItem> = (args) => <ArticleItem {...args} />;

export const Default = Template.bind({});

class img {
    constructor(public src: string, public alt: string) {
    }
}

Default.args = {
    Image: new img("../../../public/iconArticle/Congratulations.svg", "test"),
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