(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{62:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),r=(a(0),a(73)),i={id:"concepts_app",title:"Shuttle Application"},s={unversionedId:"concepts_app",id:"concepts_app",isDocsHomePage:!1,title:"Shuttle Application",description:"When you are first provided access to the Shuttle portal, you will be prompted to create your organisation and an application. An application contains two environments:",source:"@site/docs/concepts_app.md",permalink:"/docs/concepts_app",sidebar:"someSidebar",previous:{title:"Welcome to Shuttle",permalink:"/docs/"},next:{title:"Integration",permalink:"/docs/integration_introduction"}},c=[{value:"Accounts",id:"accounts",children:[]},{value:"Processors",id:"processors",children:[]},{value:"Credentials",id:"credentials",children:[]},{value:"Webhooks",id:"webhooks",children:[]}],l={rightToc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When you are first provided access to the Shuttle portal, you will be prompted to create your ",Object(r.b)("strong",{parentName:"p"},"organisation")," and an ",Object(r.b)("strong",{parentName:"p"},"application"),". An application contains two environments:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Sandbox"),": This environment processes test transactions and no money is moved. This environment is intended for development, test and demos, and not for heavy use."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Live"),": This environment processes real transactions. ")),Object(r.b)("p",null,"Only your ",Object(r.b)("strong",{parentName:"p"},"Live"),' environment is billed and has a SLA on support. While there are currently no limits in place on your sandbox environment, this may change in future and is subject to a "fair use" policy.'),Object(r.b)("p",null,"We provide up to 90 days prior to commencement of billing for integration, during this period you can only access Sandbox. Once your integration is ready to go Live, or you wish to progress to Live testing, please contact ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:support@shuttleglobal.com"}),"support@shuttleglobal.com")," (or via Slack) to enable your live environment. If you already have billing enabled, you are able to configure additional applications and access their Live environment immediately."),Object(r.b)("h2",{id:"accounts"},"Accounts"),Object(r.b)("p",null,"Each application has a list of accounts, which correlate to your merchants. Each account recieves its own Shuttle ",Object(r.b)("strong",{parentName:"p"},"instance")," that can be configured independantly for payment processing, with a correlating checkout and merchant view. Typically you would have one instance per merchant, however consider if you were an events organisation, you may prefer one instance per event, so different events can process money differently. Similiarly if you were an ecommerce platform, you may prefer one instance per store, so each store can process monery differently. While finer granularly of instances provides you more control, it increases the burden of configuring them, and you can't share saved payment methods between instances (eg if a customer saves their credit card information in instance A, they can only use those card details in instance A)."),Object(r.b)("p",null,'If you are acting as the "merchant of record" ie collecting money on behalf of merchants and then remitting the money to merchants, you may have one instance per region in the world you are collecting monery.'),Object(r.b)("p",null,"Each instance (aka Account) is defined by an ",Object(r.b)("inlineCode",{parentName:"p"},"instance_key")," which you pass to Shuttle, which is a unique alphanumeric string. "),Object(r.b)("h2",{id:"processors"},"Processors"),Object(r.b)("p",null,"Each application can control which payment processors are available to merchants during merchant onboarding. By default all processors are available, however you can elect to only enable processors one by one, or by category. All processors that are available in Live are also available in Sandbox, however you can turn on additional processors that are available in Sandbox only."),Object(r.b)("p",null,"We categorise payment processors as such:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Recommended"),": These processors are the best, and will make your platform look good. They are reliable, and provide great support to quickly resolve any issues. Please note, they may not be the cheapest, and may not always be the best processor for a specific merchant. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Standard"),": These processors are used on Shuttle by many merchants and are generally very reliable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Beta"),": These processors are either relatively new to the Shuttle platform, or create a disproportionate number of issues. All processors start in Beta until we have a reasonable volume of traffic to that processor."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"No Planned Launch"),": It's possible you will see this category if we have enabled a payment processor on your account beyond our standard offering. Bespoke integrations, veritcal specific processors, and processors that do not meet our SLA requirements (or another commercial restriction) may belong in this category.")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'Sandbox provides one notable processor called "Sandbox". Unless you are testing the integration with a specific payment processor, it is generally recommended you use this for development, testing and demos. It has a developer mode to facilitate emulating each scenarios different processors may produce.'))),Object(r.b)("h2",{id:"credentials"},"Credentials"),Object(r.b)("p",null,"You will be supplied a ",Object(r.b)("strong",{parentName:"p"},"shared key")," and a ",Object(r.b)("strong",{parentName:"p"},"secret key")," for your application, in both Sandbox and Live. A shared key is not sensitive, however your secret key should be considered highly sensitive, and should never be exposed client side. "),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you believe your secret key has been compromised (eg staff member leaving), or wish to rotate your secret key, please contact support."))),Object(r.b)("h2",{id:"webhooks"},"Webhooks"),Object(r.b)("p",null,"Webhooks are sent for all activity on connected accounts. Each application allows you to configure Sandbox and Live https URLs for webhooks."),Object(r.b)("p",null,"A webhook contains the application, account, type of webhook (eg ",Object(r.b)("inlineCode",{parentName:"p"},"PAYMENT.SUCCESS"),") and various keys to the relevent data. It does not contain any sensitive information. Your endpoint to accept this webhook should decide if you need to consume the webhook (for example you may not care about refunds) and then fetch the necessary information from the Shuttle API to process appropriately"),Object(r.b)("p",null,"Webhooks support retry and failover policies, further documentation can be found ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.shuttleglobal.com/?version=latest#f0ac8b59-e151-4b0c-928c-d1eb0358657b"}),"here"),"."))}p.isMDXComponent=!0}}]);