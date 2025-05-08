import { ArticleModel } from "./article";

export const articles: ArticleModel[] = [
    new ArticleModel(
        "CSS Grundlagen",
        new Date("2025-05-08T18:00:00"),
        "Lisa Meier",
        "Ein Einstieg in CSS für Webseiten",
        "CSS (Cascading Style Sheets) ist...",
        ["CSS", "Design", "Fronted"]
    ),
    new ArticleModel(
        "JavaScript Basics",
        new Date("2025-05-08T18:00:00"),
        "Jonas Bauer",
        "Was ist JavaScript und wozu nutzt man es?",
        "JavaScript ist eine Skriptsprache...",
        ["JavaScript", "Programmierung", "Web"]
    )
];