import {Router} from "express";

export const WebhookRouter = Router();

WebhookRouter.post('/jira-issue_created', (req, res) => {
   console.log("Webhook triggered------------------> Issue Created");
   res.sendStatus(200);
});

WebhookRouter.post('/jira-issue_updated', (req, res) => {
    console.log("Webhook triggered------------------> Issue Updated");
    res.sendStatus(200);
});

WebhookRouter.post('/jira-issue_deleted', (req, res) => {
    console.log("Webhook triggered------------------> Issue Deleted");
    res.sendStatus(200);
});
