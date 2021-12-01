import HTML5 from "../../Assets/Icons/html5.png";
import MongoDB from "../../Assets/Icons/MongoDB.svg";
import Mysql from "../../Assets/Icons/mysql.png";
import Nginx from "../../Assets/Icons/nginx.png";
import Nodejs from "../../Assets/Icons/nodejs-icon.svg";
import React from "../../Assets/Icons/react.png";
import Sass from "../../Assets/Icons/sass.png";
import Tux from "../../Assets/Icons/Tux.svg.png";
import Django from "../../Assets/Icons/django.png";
import Docker from "../../Assets/Icons/docker.png";
import Github from "../../Assets/Icons/github.png";
import Sqllite from "../../Assets/Icons/sqllite.png";

// Programming
import JS from "../../Assets/Icons/js.png";
import Ts from "../../Assets/Icons/typescript-design-assets/ts-logo-512.svg";
import Python from "../../Assets/Icons/1200px-Python-logo-notext.svg.png";
import Cpp from "../../Assets/Icons/1822px-ISO_C++_Logo.svg.png";

export const ProgrammingDev = [
    {
        title: "JavaScript",
        progress: 30,
        img: JS,
    },
    {
        title: "TypeScript",
        progress: 15,
        img: Ts,
    },
    {
        title: "Python",
        progress: 15,
        img: Python,
    },
    {
        title: "C++",
        progress: 15,
        img: Cpp,
    },
];

export const DatabaseDev = [
    {
        title: "MongoDB",
        progress: 40,
        img: MongoDB,
    },
    {
        title: "MYSQL",
        progress: 40,
        img: Mysql,
    },
    {
        title: "SQLLite",
        progress: 40,
        img: Sqllite,
    },
];

export const WebDev = [
    {
        title: "HTML 5",
        progress: 60,
        img: HTML5,
    },
    {
        title: "CSS / SCSS / SASS",
        progress: 60,
        img: Sass,
    },
    {
        title: "React",
        progress: 20,
        img: React,
    },
    {
        title: "NodeJS",
        progress: 20,
        img: Nodejs,
    },
    {
        title: "Django",
        progress: 20,
        img: Django,
    },
    {
        title: "Git",
        progress: 40,
        img: Github,
    },
];

export const AdminDev = [
    {
        title: "Linux",
        progress: 60,
        img: Tux,
    },
    {
        title: "Nginx",
        progress: 30,
        img: Nginx,
    },
    {
        title: "Docker",
        progress: 30,
        img: Docker,
    }
];

export const SkillItems = [
    {
        title: "Programming Skills",
        content: ProgrammingDev
    },
    {
        title: "Web Stack",
        content: WebDev
    },
    {
        title: "Database",
        content: DatabaseDev
    },
    {
        title: "Admin Stack",
        content: AdminDev
    },
];