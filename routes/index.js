import {Router} from "express";

export const AppRouter = Router();

AppRouter.get('/', (req, res) => {
    res.render('index.hbs', {
        title: 'index',
        body: 'This is the index page',
        buttons: [
            {
                text: 'Info',
                link: '/v1/info'
            },
            {
                text: 'Contact',
                link: '/v1/contact'
            },
        ]
    });
});

AppRouter.get('/info', (req, res) => {
    res.render('index.hbs', {
        title: 'info',
        body: 'This is the info page',
        buttons: [
            {
                text: 'Index',
                link: '/v1'
            },
            {
                text: 'Contact',
                link: '/v1/contact'
            },
        ]
    });
});

AppRouter.get('/contact', (req, res) => {
    res.render('index.hbs', {
        title: 'contact',
        body: 'This is the contact page',
        buttons: [
            {
                text: 'Index',
                link: '/v1'
            },
            {
                text: 'Info',
                link: '/v1/info'
            },
        ]
    });
});
