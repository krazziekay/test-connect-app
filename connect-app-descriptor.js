// The tunneled URL where your app is running
const baseUrl = 'https://kmaharjan4.public.atlastunnel.com/';


export const connectAppDescriptor = {
    name: 'Test Connect App',
    description: 'Atlassian Connect app for Test',
    key: 'com.test.myapp',
    baseUrl,
    vendor: {
        name: 'My vendor',
        url: 'https://example.com'
    },
    authentication: {
        type: 'none'
    },
    apiVersion: 1,
    modules: {
        postInstallPage: {
            url: '/v1',
            key: 'connect-app-index',
            name: {
                value: 'Index'
            },
        },
        adminPages: [{
            url: '/v1',
            key: 'connect-app-admin',
            name: {
                value: 'Index'
            },
            location: 'admin_plugins_menu/gh-addon-admin-section'
        }],
        generalPages: [
            {
                url: '/v1/contact',
                key: 'connect-app-contact',
                location: 'none',
                name: {
                    'value': 'Contact'
                }
            },
            {
                url: '/v1/info',
                key: 'connect-app-info',
                location: 'none',
                name: {
                    'value': 'Info'
                }
            }
        ]
    }
};