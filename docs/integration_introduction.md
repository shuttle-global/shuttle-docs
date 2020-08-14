---
id: integration_introduction
title: Integration
---

Our recommended method of integration is directly via our REST API.

For convenience we also offer PHP and node.js SDKs. 

Please refer to our [API docs](https://api.shuttleglobal.com) for details on integration.

## Integration Planning

We recommend the following approach to an integration: 

Basics:

1. Create your organisation and application on our portal
2. Follow the guide for [Merchant Onboarding](https://api.shuttleglobal.com/?version=latest#7027a5f1-8ae3-46fe-80e6-8d206a62dad1). You can manually create Sandbox accounts in the Shuttle portal and skip this step for now.
3. Follow the guide for integrating our [Hosted Checkout](https://api.shuttleglobal.com/?version=latest#9dd09218-5f9c-4e04-a19f-105607a75c8a)
4. Many processors and payment methods cannot approve a payment immediately. To accomodate this, add support for PENDING payments including accepting webhooks, see the following events `PAYMENT.PENDING` / `PAYMENT.SUCCESS` / `PAYMENT.FAILED`
5. Occasionally payments are returned with an indeterminate status (neither approved or declined), add support for UNRESOLVED payments


Advanced:

1. If you need to support AUTH / CAPTURE (ie a hold on the funds), ensure you are issuing CAPTURE / VOID instructions [here](https://api.shuttleglobal.com/?version=latest#3dfa2a64-7825-434d-8d78-3ada6ce08104), you may also want to check the features of a gateway to ensure AUTH / CAPTURE is supported [here](https://api.shuttleglobal.com/?version=latest#736178ba-b75c-40d2-b2cb-4403c1ae3bcd).
2. If you support REFUNDS, you can instruct these via the API, but note some processors and payment methods cannot approve a refund immediately. To accomodate this, add support for PENDING refunds, see the following events `REFUND.PENDING` / `REFUND.SUCCESS` / `REFUND.FAILED`
2. If you are building your own checkout, discuss the best approach for your requirements with support. 
3. If you implementing RECURRING, discuss the best approach for your requirements with support. 

