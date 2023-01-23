// The tunneled URL where your app is running
const baseUrl = 'https://nodeapp.public.atlastunnel.com/';


export const connectAppDescriptor = {
    name: 'Test Connect App Node',
    description: 'Atlassian Connect app for Test',
    key: 'com.sample.connect-node',
    baseUrl,
    vendor: {
        name: 'Node connect app sample',
        url: 'https://github.com/krazziekay/test-connect-app-node'
    },
    authentication: {
        type: 'none'
    },
    scopes: [ "READ" ],
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
            location: 'admin_plugins_menu/test-connect-app'
        }],
        webSections: [
            {
                key: "test-connect-app",
                location: "admin_plugins_menu",
                name: {
                    value: "Test Connect App"
                }
            }
        ],
        webhooks: [
            {
                event: "jira:issue_created",
                url: "webhooks/jira-issue_created"
            },
            {
                event: "jira:issue_deleted",
                url: "webhooks/jira-issue_deleted"
            },
            {
                event: "jira:issue_updated",
                url: "webhooks/jira-issue_updated"
            }
        ],
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