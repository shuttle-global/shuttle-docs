---
id: concepts_app
title: Shuttle Application
---

Don't feel like reading? Watch the video:

<iframe
  src="https://www.loom.com/embed/f5a9b412d35f4fa4831ab339431dd085"
  style={{width: "807px", height:"400px", border: "none"}}
></iframe>


When you are first provided access to the Shuttle portal, you will be prompted to create your **organisation** and an **application**. An application contains two environments:

* **Sandbox**: This environment processes test transactions and no money is moved. This environment is intended for development, test and demos, and not for heavy use.
* **Live**: This environment processes real transactions. 

Only your **Live** environment is billed and has a SLA on support. While there are currently no limits in place on your sandbox environment, this may change in future and is subject to a "fair use" policy.

We provide up to 90 days prior to commencement of billing for integration, during this period you can only access Sandbox. Once your integration is ready to go Live, or you wish to progress to Live testing, please contact support@shuttleglobal.com (or via Slack) to enable your live environment. If you already have billing enabled, you are able to configure additional applications and access their Live environment immediately.



## Accounts

Each application has a list of accounts, which correlate to your merchants. Each account recieves its own Shuttle **instance** that can be configured independantly for payment processing, with a correlating checkout and merchant view. Typically you would have one instance per merchant, however consider if you were an events organisation, you may prefer one instance per event, so different events can process money differently. Similiarly if you were an ecommerce platform, you may prefer one instance per store, so each store can process monery differently. While finer granularly of instances provides you more control, it increases the burden of configuring them, and you can't share saved payment methods between instances (eg if a customer saves their credit card information in instance A, they can only use those card details in instance A).

If you are acting as the "merchant of record" ie collecting money on behalf of merchants and then remitting the money to merchants, you may have one instance per region in the world you are collecting monery.

Each instance (aka Account) is defined by an `instance_key` which you pass to Shuttle, which is a unique alphanumeric string. 

## Processors

Each application can control which payment processors are available to merchants during merchant onboarding. By default all processors are available, however you can elect to only enable processors one by one, or by category. All processors that are available in Live are also available in Sandbox, however you can turn on additional processors that are available in Sandbox only.

We categorise payment processors as such:

* **Recommended**: These processors are the best, and will make your platform look good. They are reliable, and provide great support to quickly resolve any issues. Please note, they may not be the cheapest, and may not always be the best processor for a specific merchant. 
* **Standard**: These processors are used on Shuttle by many merchants and are generally very reliable.
* **Beta**: These processors are either relatively new to the Shuttle platform, or create a disproportionate number of issues. All processors start in Beta until we have a reasonable volume of traffic to that processor.
* **No Planned Launch**: It's possible you will see this category if we have enabled a payment processor on your account beyond our standard offering. Bespoke integrations, veritcal specific processors, and processors that do not meet our SLA requirements (or another commercial restriction) may belong in this category.

:::tip
Sandbox provides one notable processor called "Sandbox". Unless you are testing the integration with a specific payment processor, it is generally recommended you use this for development, testing and demos. It has a developer mode to facilitate emulating each scenarios different processors may produce.
:::

## Credentials

You will be supplied a **shared key** and a **secret key** for your application, in both Sandbox and Live. A shared key is not sensitive, however your secret key should be considered highly sensitive, and should never be exposed client side. 

:::danger
If you believe your secret key has been compromised (eg staff member leaving), or wish to rotate your secret key, please contact support.
:::

## Webhooks

Webhooks are sent for all activity on connected accounts. Each application allows you to configure Sandbox and Live https URLs for webhooks.

A webhook contains the application, account, type of webhook (eg `PAYMENT.SUCCESS`) and various keys to the relevent data. It does not contain any sensitive information. Your endpoint to accept this webhook should decide if you need to consume the webhook (for example you may not care about refunds) and then fetch the necessary information from the Shuttle API to process appropriately

Webhooks support retry and failover policies, further documentation can be found [here](https://api.shuttleglobal.com/?version=latest#f0ac8b59-e151-4b0c-928c-d1eb0358657b).



