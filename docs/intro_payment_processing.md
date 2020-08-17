---
id: intro_payment_processing
title: Payment Processing
sidebar_label: Payment Processing
---

This article is a short walk through of the fundamentals of payment processing, its not meant to be thorough but rather cover the content you need to know as you develop your solution for your SaaS platform.

## Payment Method Types 

There are many ways to perform an electronic payment, some common ones are:

* **Cards**: Credit / debit cards from brands like Visa, Mastercard, Amex. A payment gateway will issue an instruction to the **card issuer** (the Customer's bank) to transfer funds to a **merchant account** (a special kind bank account) issued to the merchant by a **merchant acquirer**. 
* **Bank Transfer**: An instruction to deduct money from a customer bank account, and credit it into a recipient bank account. This will run over a set of **payment rails** like ACH (USA), SEPA (Europe) or BACS (UK).
* **Wallet**: A customer maintains a digital wallet (like Paypal) with a balance, which can be instructed to transfer money into a merchant's digital wallet.

:::tip
Each payment method operates a little differently, while the same payment method through different processors can also operate differently. Shuttle has been built to present their behaviour to your platform in a uniform manner.
:::

## Payment Processors

Payments is a regulated activity, meaning payment processing is extremely territorial. Each payment processor will only be able to acquire merchants in specific countries, and typically only settle funds in those countries. In addition each payment processor will have a list of approved and prohibitied activities their service can be used for. While some may be obvious, for example the adult industry, gaming or CBD, some are less so, like travel or events. 

Every merchant that wishes to take payment online, will require a payment processor licensed to acquire merchants in the countries the merchant wishes to settle funds into, for the types of products being transacted. In many cases a merchant that operates in multiple territories will have multiple payment processors, or multiple accounts with the same payment processor, one for each territory.

Payment processor will typically support an array of payment method types, eg cards + ACH + Paypal etc.  A merchant may use a single processor, or may have different processors for different payment method types. 

:::note
Shuttle's integration with a payment processor supports the major types of payment that processor supports, however it may not support all methods of payment. 
:::

## Instructing a Payment

### Payment Action

When instructing a payment, you can instruct:

* **Authorization**: Also known as "Auth", this will put a hold on the client funds for a period of time (typically 7 - 31 days), you can then "capture" those funds at a later date (in part or full) or "void" (ie release) the authorisation. Typically only debit / credit cards support "Authorization". Examples of why you would use an authorisation include: checking into a hotel and blocking funds to cover incidentals, or an online order where you are not allowed to take payment until you know you have the goods in stock.
* **Capture**: This will instruct the immediate deduction of funds from the client account. It is the same as issuing an "Auth" followed immediately by a capture.

### Pending Payments

Some payments will be approved / declined immediately, while others may take seconds, minutes or even days to process (eg BACS). These will be returned as a **pending** payment, and your user journey's should cater for this scenario - eg not dispatching goods until payment success received.

A final rare scenario exists, similiar to **pending**, called **unresolved**. In this scenario, user intervention is required to determine the status of the payment. Some error statuses from payment processors are mapped to an **unresolved** status, as is irrecoverable loss of connection with some processors after we've instructed the payment. From a user journey perspective they should follow the same path as that of a pending payment.

### Payment Source

There are four ways a payment can be instructed:

* **Ecommerce**: Online by the customer
* **MOTO**: By a staff member where the customer is not present (eg phone payment)
* **POS**: Through a PED device, where the customer is present 
* **Merchant Initiated**: (or "recurring") instructed via an automated process by the merchant (this maybe scheduled eg weekly, or in response to an event, eg a service was used such as number plate recognition parking)

Most payment method types contractually require each payment instruction to accurately reflect the source of the transaction. This will determine the fraud checks used by the payment processor (eg for ecommerce 3D secure may be required), cost to process the transaction, and indeed some payment methods prohibit certain sources.   

### Tokenisation

You can generally "save" payment method details with Shuttle, which is called **tokenisation**. Typically Shuttle will hand these details to the gateway and ask the gateway to return a "token", which is simply a primary key that points at a record on the payment processor. Subsequent payments can be instructed using the token. 

For some payment methods there is additional information sitting behind this token, such as a direct debit mandate. 

Depending on the payment processor, instructing a payment on a saved token may require a CVC to be provided (this will be reflected on our our API `requires_cvc`), and may still require a 3d secure authorisation challenge if the payment source is "ecommerce".

Tokens may only be used to instruct future payments between the customer and merchant and generally cannot be transferred to new merchants. Some payment processors will however allow you to transfer your saved payment details to a new payment processor, should you switch.


