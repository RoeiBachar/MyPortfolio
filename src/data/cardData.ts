import adamSandlerPc from "../img/12.png";
import adamSandlerIphone from "../img/iphone.png";
import yummitPc from "../img/13.png";
import yummitIphone from "../img/13a.png";
import quizPc from "../img/14.png";
import quizIphone from "../img/14a.png";
import PortfolioPc from "../img/15.png";
import PortfolioIphone from "../img/15a.jpg";
import { cardInterface } from "../interfaces/cardInterface";

export const cardData: cardInterface[] =
    [
        {
            name: "Adam Sandler",
            info: "This website is an online resource for fans of Adam Sandler. It provides information about his life, rise to fame, and work in the entertainment industry. It includes a comprehensive filmography with plot summaries, ratings, and reviews. The site has a sleek design and is user-friendly, making it the perfect destination for Adam Sandler fans looking to learn more about the actor and his movies.",
            imagePc: adamSandlerPc,
            imageIphone: adamSandlerIphone,
            skils: [
                "React",
                "TypeScript",
                "FireBase",
                "Web Storage",
                "Redux-TK",
                "Router + Hash",
                "CSS Flexbox",
                "CSS Media Queries",
                "uuidv4"
            ],
            gitHubLink: "https://github.com/RoeiBachar/adamSandler",
            websiteLink: "",
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
                "Canva",
                "CSS Flexbox",
                "CSS Media Queries"
            ],
            gitHubLink: "https://github.com/RoeiBachar/yummitProject",
            websiteLink: "",

        },
        {
            name: "Football Quiz",
            info: "From a young age, I have been addicted to football. I know all the teams and players, and I never miss an important game. Do you think you know everything about soccer too? Good luck!",
            imagePc: quizPc,
            imageIphone: quizIphone,
            skils: ["React", "TypeScript", "Router", "CSS Flexbox", "CSS Media Queries"],
            gitHubLink: "https://github.com/RoeiBachar/FootballQuiz",
            websiteLink: "",
        },
        {
            name: "My Portfolio",
            info: "Whether you're a potential employer or a fellow developer, this portfolio website provides a comprehensive overview of my React skills and my dedication to staying up-to-date with the latest industry trends.",
            imagePc: PortfolioPc,
            imageIphone: PortfolioIphone,
            skils: ["React", "TypeScript", "Router", "CSS Flexbox", "CSS Media Queries", "CSS @keyframes"],
            gitHubLink: "https://github.com/RoeiBachar/MyPortfolio",
            websiteLink: "",
        },

    ]