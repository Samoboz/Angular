export interface Article {
title: string;
date: Date;
author: string;
intro: string;
content: string;
tags: string[];
}

export class ArticleModel implements Article {
    constructor(
        public title: string,
        public date: Date,
        public author: string,
        public intro: string,
        public content: string,
        public tags: string[]
    ) {}
}