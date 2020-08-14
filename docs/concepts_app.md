---
id: concepts_app
title: Shuttle Application
---

When you are first provided access to the Shuttle portal, you will be prompted to create your **organisation** and an **application**. An application contains two environments:

* **Sandbox**: This environment processes test transactions and no money is moved. This environment is intended for development, test and demos, and not for heavy use.
* **Live**: This environment processes real transactions. 

Only your **Live** environment is billed and has a SLA on support. While there are currently no limits in place on your sandbox environment, this may change in future and is subject to a "fair use" policy.

We provide up to 90 days prior to commencement of billing for integration, during this period you can only access Sandbox. Once your integration is ready to go Live, or you wish to progress to Live testing, please contact support@shuttleglobal.com (or via Slack) to enable your live environment. If you already have billing enabled, you are able to configure additional applications and access their Live environment immediately.

## Accounts

Each application has a list of accounts that sit under that application, this will be typically one per merchant, 

## Processors

## Credentials

You will be supplied a **shared key** and a **secret key** for your application, in both Sandbox and Live. A shared key is not sensitive, however your secret key should be considered highly sensitive, and should never be exposed client side. If you need to rotate your secret key (eg staff member leaving) please contact support.

## Webhooks

Webhooks are sent for all activity on connected accounts. Each application allows you to configure Sandbox and Live https URLs for webhooks.

A webhook contains the application, account, type of webhook (eg `PAYMENT.SUCCESS`) and various keys to the relevent data. It does not contain any sensitive information. Your endpoint to accept this webhook should decide if you need to consume the webhook (for example you may not care about refunds) and then fetch the necessary information from the Shuttle API to process appropriately

Webhooks support retry and failover policies, further documentation can be found [here](https://api.shuttleglobal.com/?version=latest#f0ac8b59-e151-4b0c-928c-d1eb0358657b).

## Configuration


