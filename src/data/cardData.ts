import { cardInterface } from "../interfaces/cardInterface";
import adamSandlerPc from "../img/12.png";
import adamSandlerIphone from "../img/iphone.png";
import yummitPc from "../img/13.png";
import yummitIphone from "../img/13a.png";
import quizPc from "../img/14.png";
import quizIphone from "../img/14a.png";

export const cardData: cardInterface[] =
    [
        {
            name: "Adam Sandler",
            info: "This Adam Sandler website is a comprehensive online resource for fans of the actor and comedian. The site features detailed information about Adam Sandler's life, including his early years, his rise to fame in Hollywood, and his current work in the entertainment industry. It also includes a thorough listing of his filmography, complete with plot summaries, ratings, and reviews from fans and critics alike. With its sleek and user-friendly design, this website is the perfect destination for fans of Adam Sandler who want to learn more about the actor and his movies.",
            imagePc: adamSandlerPc,
            imageIphone: adamSandlerIphone,
            skils: [
                "React",
                "TypeScript",
                "FireBase",
                "Redux-TK",
                "Router + Hash",
                "CSS - Flex",
            ]
        },
        {
            name: "Yummit",
            info: "This website is about a dedicated and adorable student who has started a cake-making business. With a great deal of love and investment, she puts all her passion into baking delicious cakes for her customers. Her hard work and commitment to her craft are evident in the mouth-watering cakes she creates. Her customers are sure to enjoy every bite of her scrumptious treats.",
            imagePc: yummitPc,
            imageIphone: yummitIphone,
            skils: [
                "React",
                "TypeScript",
                "Web Storage",
                "Router",
                "Material UI",
                "Canva"
              ]
        },
        {
            name: "Football Quiz",
            info: "Do you think you know everything about football? Try to solve the quiz without making any mistakes and you'll be crowned the kings offootball!",
            imagePc: quizPc,
            imageIphone: quizIphone,
            skils: ["React", "TypeScript", "CSS - Flex"]
        },

    ]