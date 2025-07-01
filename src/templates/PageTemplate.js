import {publicHeaderMenuData } from "../data/headerData.js";

export class PageTemplate {
    constructor(req) {
        this.req = req;
        this.pageJS = '';
    }

    head() {
        return `
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Express example</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Coming soon" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="stylesheet" href="/css/bootstrap.min.css">
            </head>`;
    }

    header() {

        return `
            <header class="container main-header">
                <div class="row">
                    <div class="col-12 header-content">
                        <a href="/">
                            <img class="logo" src="/img/logo.webp" alt="Logo">
                        </a>
                        ${this.headerMenu(headerMenuData)}
                        <i class="fa fa-bars hamburger"></i>
                    </div>
                </div>
            </header>`;
    }


    headerMenu(data) {
        let HTML = '';

        for (const link of data) {
            if (link.subMenu) {
                let subMenuHTML = '';

                for (const subLink of link.subMenu) {
                    subMenuHTML += `<a class="link" href="${subLink.href}">${subLink.text}</a>`;
                }

                HTML += `
                <div class="dropdown">
                    <a class="link" href="${link.href}">${link.text}<i class="fa fa-angle-down"></i></a>
                    <div class="dropdown-content">${subMenuHTML}</div>
                </div>`;
            } else {
                HTML += `<a class="link" href="${link.href}">${link.text}</a>`;
            }
        }

        return `<nav class="main-nav">${HTML}</nav>`;
    }


    footer() {
       
    }


    script() {
        if (!this.pageJS) {
            return '';
        }

        return `<script src="/js/${this.pageJS}.js" type="module"></script>`;
    }


    main() {
        return 'CONTENT...';
    }

    render() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            ${this.head()}
            <body>
                ${this.header()}
                ${this.main()}
                ${this.footer()}
                ${this.script()}
            </body>
            </html>`;
    }
}