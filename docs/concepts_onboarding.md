---
id: concepts_onboarding
title: Merchant Onboarding

---

For a merchant to take payments via Shuttle you need to configure the payment processor they wish to use, along with any payment processing options. We provide an off the shelf tool to do this, or you can do this via API. We recommend you start with the off the shelf tool.


## A Shuttle Instance

You are able to setup as many "instances" (ie environments) of Shuttle you wish, in either "Sandbox" or "Live". The important thing is you have an ID you can use to refer to an instance, called an `instance_key`. This could be:

* One instance per merchant, where a merchant will have the same configuration for all their payments. In this case your `instance_key` would be your merchant ID.
* Multiple instances per merchant, where a merchant may have multiple different configurations, for example per event or online store. In this scenario, your `instance_key` would be your event ID, or store ID.
* One instance shared between many merchants, where you are acting as the "merchant of record" and collecting funds on behalf of the merchant. In this sceanrio, your `instance_key` would map to how you segment your merchants, eg the territory the merchant is in. 

:::tip
Take the time now, to identify what the `instance_key` should map to in your platform. If you can identify a field already in your data model eg your `organisation_id`, it will make integration much easier!
:::

## Creating an Instance

There are 3 ways to create an instance:

1. You can create a sandbox instance via the developer portal by selecting the "Add test instance" at the top of the account list
2. You can embed our setup widget into your platform (recommended), via our `payments.js` Javascript library [here](https://api.shuttleglobal.com/?version=latest#7027a5f1-8ae3-46fe-80e6-8d206a62dad1), or create a URL to redirect to or iFrame via the REST API
3. You can create an instance directly via the REST API [here](https://api.shuttleglobal.com/?version=latest#28be67c6-fbf7-4459-b41c-0fdd58947589).

## Updating an Instance

You can update the instance details via the configuration widget, and REST API.

## Terminating an Instance

You can terminate an instance details via the configuration widget, and REST API [here](https://api.shuttleglobal.com/?version=latest#cbba376d-d752-419c-8720-dd4bb6b05e5a). 

:::danger
Terminating an instance is irreversable. Recurring payments via Shuttle will be stopped and historical data will be lost. All data on your payment processor however will be untouched, meaning any payments in a PENDING status may still be processed via the processor, tokenised cards will still be available on the payment processor, and any authorisations not yet captured / voided will remain on the processor until they expire (typically 7 days).
:::


## Configuring Payments 

Its recommended you use our setup tool when configuring payments. This tool will allow the user to select their preferred payment processor and help them through the connection process via API keys or OAUTH and then setting up any payment options available. Some payment processors allow for fraud rules to be configured on the payment processor which the user must then reflect in our setup tool to ensure we request enough information from the customer at checkout without creating unnecessary friction.

The tool is designed to be a "black box" ie you do not need to know the detail of whats configured, rather, on close of the tool you check if the instance is "ready for payments" via the configuration status endpoint below.


## Configuration Status

To provide an intuitive experience for your users, its recommended to check the "Payments Ready" API [here](https://api.shuttleglobal.com/?version=latest#58a5574f-47c9-4231-9726-d35d01d855e1). This will return:

* `payments_ready`: true / false, indicating the customer is ready to process a payment  
* `currencies`: the currencies the customer is able to process 

Its recommend you disable checkout until the merchant is ready to process payments, with a call to action to complete setup.

You can see further details on the capabilities of the merchant's configured payment processor [here](https://api.shuttleglobal.com/?version=latest#f2cac25c-faec-42f0-a54e-5eb8d01c6817). You should filter the list for the ACTIVE gateways. Each payment method returns an array of **features**, for example AUTH / CAPTURE / REFUNDS. If you instruct a payment that requires a feature the payment method does not support, it will be removed from checkout. For example, if you instruct an authorisation, payment methods that do not support auth / capture will be hidden.

:::tip
If you instruct a payment that is not supported by any of the configured payment methods (for example in an unsupported currency), the user will see a message "No payment methods available" at checkout.
:::

<!--
## TODO

Add create instance URL to the api docs 
-->