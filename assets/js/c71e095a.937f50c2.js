(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),o=(a(0),a(112)),r={title:"Client-Server"},c={unversionedId:"tasks/client-server",id:"tasks/client-server",isDocsHomePage:!1,title:"Client-Server",description:"|Lecture equivalent| Duration |",source:"@site/docs/tasks/client-server.md",slug:"/tasks/client-server",permalink:"/swdt/docs/tasks/client-server",editUrl:"https://github.com/nds-swe/swdt/edit/main/docs/tasks/client-server.md",version:"current",sidebar:"docs",previous:{title:"About",permalink:"/swdt/docs/tasks/about-tasks"},next:{title:"Spring Starter",permalink:"/swdt/docs/tasks/spring-starter"}},s=[{value:"Explore DevOps",id:"explore-devops",children:[]},{value:"Client-Server",id:"client-server",children:[{value:"Basic architectural thoughts",id:"basic-architectural-thoughts",children:[]},{value:"Communication",id:"communication",children:[]},{value:"Application Programming Interfaces (APIs)",id:"application-programming-interfaces-apis",children:[]},{value:"Tools",id:"tools",children:[]}]},{value:"Packer D\xe9j\xe0 vu",id:"packer-d\xe9j\xe0-vu",children:[{value:"Learning the basics",id:"learning-the-basics",children:[]},{value:"Results",id:"results",children:[]},{value:"API contract",id:"api-contract",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Get the description",id:"get-the-description",children:[]},{value:"List all expeditions",id:"list-all-expeditions",children:[]},{value:"Get expedition <code>Mars</code>",id:"get-expedition-mars",children:[]},{value:"Post your own expedition",id:"post-your-own-expedition",children:[]},{value:"Fetch your own expedition again",id:"fetch-your-own-expedition-again",children:[]},{value:"Get all packaging algorithms",id:"get-all-packaging-algorithms",children:[]},{value:"Pack <code>Mars</code>",id:"pack-mars",children:[]},{value:"Pack your own expedition",id:"pack-your-own-expedition",children:[]}]},{value:"Invite to Packer",id:"invite-to-packer",children:[]}],l={toc:s};function d(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Metadata")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("table",{parentName:"div"},Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Lecture equivalent"),Object(o.b)("th",{parentName:"tr",align:null},"Duration"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"3"),Object(o.b)("td",{parentName:"tr",align:null},"2h 15min")))),Object(o.b)("p",{parentName:"div"},"At the end of this task, students"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"can explain and present DevOps"),Object(o.b)("li",{parentName:"ul"},"can send ",Object(o.b)("inlineCode",{parentName:"li"},"GET")," and ",Object(o.b)("inlineCode",{parentName:"li"},"POST")," requests with cURL and/or Postman and analyze the results"),Object(o.b)("li",{parentName:"ul"},"have invited themselves to the private ExMan packer repository (see ",Object(o.b)("a",{parentName:"li",href:"/docs/help/repositories"},"repositories"),") using an issue (thus have learned to create issues)")))),Object(o.b)("h2",{id:"explore-devops"},"Explore DevOps"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Head over to our ",Object(o.b)("a",{parentName:"p",href:"docs/theory/devops"},"DevOps")," section and follow the Atlassian resource. Read the ",Object(o.b)("a",{parentName:"p",href:"https://www.atlassian.com/devops/what-is-devops"},"complete overview"),"."))),Object(o.b)("h2",{id:"client-server"},"Client-Server"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Client-server denotes a relationship between cooperating programs in an application, composed of clients initiating requests for services and servers providing that function or service. - ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",{parentName:"em",href:"https://www.omnisci.com/technical-glossary/client-server"},"omnisci.com")))),Object(o.b)("h3",{id:"basic-architectural-thoughts"},"Basic architectural thoughts"),Object(o.b)("p",null,Object(o.b)("img",{alt:"stackoverflow",src:a(164).default})),Object(o.b)("p",null,"We discussed in the lecture basic principles of client-server architectures. Here are some more resources you can consider:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.omnisci.com/technical-glossary/client-server"},"omnisci.com/technical-glossary/client-server")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Client%E2%80%93server_model"},"wiki/Client\u2013server_model"))),Object(o.b)("h3",{id:"communication"},"Communication"),Object(o.b)("p",null,"There is two main, rough ways you (as ",Object(o.b)("em",{parentName:"p"},"client"),") can communicate with a a server:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u26a1\ufe0f Synchronous: You expect an answer immediately and you will wait until you have it."),Object(o.b)("li",{parentName:"ul"},"\u23f1 Asynchronous: You trigger a procedure (or not even) and passively wait for the result (doing other stuff in between)")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Spoiler:")," Cloud architecture does and should rely mostly on asynchronous (async) communication. It is very expensive and also annoying to actively wait for every change. Let the server tell us when hes done!"),Object(o.b)("h3",{id:"application-programming-interfaces-apis"},"Application Programming Interfaces (APIs)"),Object(o.b)("p",null,"APIs and their design are one of the most challenging disciplines out there. It is extremely difficult to design a never-aging, never-changing API. To be honest I think it might be ",Object(o.b)("em",{parentName:"p"},"impossible")," in any scenario where you want to develop or stay agile. Anyhow there are various figures and shapes of APIs and their protocols:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SOAP"},"SOAP")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://grpc.io/"},"gRPC")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSocket")),Object(o.b)("li",{parentName:"ul"},"...")),Object(o.b)("p",null,"All of them have their dis- and advantages and must be chosen wisely from a future engineer."),Object(o.b)("h3",{id:"tools"},"Tools"),Object(o.b)("p",null,"For each API, its protocol and what so ever there are different tools available, the two most common we will inspect now."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Read ",Object(o.b)("a",{parentName:"p",href:"/docs/tools/curl"},"cURL")," and ",Object(o.b)("a",{parentName:"p",href:"docs/tools/postman"},"Postman"),' descriptions and install them to your machine. Experiment with them both until you feel comfortable and can say \ud83d\udde3"I understand how this works!"'))),Object(o.b)("p",null,"With both tools installed let us now come to leverage our knowledge."),Object(o.b)("h2",{id:"packer-d\xe9j\xe0-vu"},"Packer D\xe9j\xe0 vu"),Object(o.b)("p",null,"You remember the ",Object(o.b)("inlineCode",{parentName:"p"},"ExManRest.jar")," from the first semester (lecture ALG and OOP)? You should as this is an ",Object(o.b)("a",{parentName:"p",href:"/docs/expectations"},"foundational expectation")," of this lecture. The packer from the first semester has been deployed to ",Object(o.b)("a",{parentName:"p",href:"https://exman.azurewebsites.net/exman"},"https://exman.azurewebsites.net/exman"),"."),Object(o.b)("p",null,"\u2139\ufe0f It needs some time cold-starting up, ~2 minutes."),Object(o.b)("p",null,"Now, as coincidence wants, this Packer has a REST API!"),Object(o.b)("h3",{id:"learning-the-basics"},"Learning the basics"),Object(o.b)("p",null,"Clicking around in UIs is easy, you do not need to study or think for it. That is why I can not stress enough you need to understand the internals of a tool to a degree where you can say: ",Object(o.b)("em",{parentName:"p"},'"I understood how that works"'),". Sometimes ",Object(o.b)("em",{parentName:"p"},'"I think I understood how it works"')," is also enough."),Object(o.b)("h3",{id:"results"},"Results"),Object(o.b)("p",null,"The cURLs you compose shall be your results - set them aside as they are your solution. It does not matter if you created them via Postman or cURL itself, just make sure your result are in the cURL-",Object(o.b)("em",{parentName:"p"},"format"),". Also set aside the results, they prove very handy later this course."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Git")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It is strictly advised to check in the results into a git repository!"))),Object(o.b)("h3",{id:"api-contract"},"API contract"),Object(o.b)("p",null,"Every API has a contract, here is the packers:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'ExpeditionManager REST-Schnittstelle mit JSON. Version 1.0:\n\nGET  /exman                                ->  gibt diese Beschreibung zurueck\nGET  /exman/expeditions                    ->  holt alle Expeditionsnamen\nGET  /exman/expedition/:name               ->  holt eine Expedition mit Name (Bsp: /exman/expedition/Mars)\nPOST /exman/expedition                     ->  speichert eine Expedition (der Name ist in der Expedition)\nGET  /exman/algorithms                     ->  holt alle Algorithmennamen\nPOST /exman/pack?limit=20&algorithm=Simple ->  packt Expedition mit Limite und Algorithmus. Gibt selektierte Items zurueck.\n\nBeispiel JSON-Format einer Expedition:\n{\n    "name":"Mars",\n    "items":[\n        {"name":"Roboter","weight":184,"profit":12400},\n        {"name":"Messstation","weight":144,"profit":8900}\n     ]\n}\n\n(c) M. B.\n')),Object(o.b)("h3",{id:"authentication"},"Authentication"),Object(o.b)("p",null,"The packer is public \ud83d\udd13, everyone who knows the URL and has internet access can use our endpoints. We might invest in a later lesson some efforts into protecting our expeditions \ud83d\udd10."),Object(o.b)("h3",{id:"get-the-description"},"Get the description"),Object(o.b)("p",null,"The first REST Endpoint is ",Object(o.b)("inlineCode",{parentName:"p"},"/exman"),". "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Get the description from it!"))),Object(o.b)("p",null,"\u2139\ufe0f If you stumble a bit, note that this must be a GET request (as the docs say)."),Object(o.b)("h3",{id:"list-all-expeditions"},"List all expeditions"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Query the second endpoint, list all expeditions names. "))),Object(o.b)("p",null,"Three expeditions should always be there. Which ones is it?"),Object(o.b)("h3",{id:"get-expedition-mars"},"Get expedition ",Object(o.b)("inlineCode",{parentName:"h3"},"Mars")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Query the ",Object(o.b)("inlineCode",{parentName:"p"},"Mars")," expedition and note which equipment it has saved in it."))),Object(o.b)("h3",{id:"post-your-own-expedition"},"Post your own expedition"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Create your own expedition, post a fantasy expedition of yours to the Packer!"))),Object(o.b)("p",null,"\u2139\ufe0f The packer is the same for everyone, so if someone created expedition ",Object(o.b)("inlineCode",{parentName:"p"},"North Cape")," already, you will modify this expedition instead of creating your own. If you want really your own, maybe prefix it like ",Object(o.b)("inlineCode",{parentName:"p"},"my-own-name-North Cape"),"."),Object(o.b)("p",null,"\u2139\ufe0f As this is not very practical, we will check later in our course how we can separate tenants or reference expeditions by a more unique identifier."),Object(o.b)("h3",{id:"fetch-your-own-expedition-again"},"Fetch your own expedition again"),Object(o.b)("p",null,"Did the Packer save your expedition? "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Check it with the ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," commands."))),Object(o.b)("h3",{id:"get-all-packaging-algorithms"},"Get all packaging algorithms"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"/algorithms")," endpoint to get all available packing methods."))),Object(o.b)("h3",{id:"pack-mars"},"Pack ",Object(o.b)("inlineCode",{parentName:"h3"},"Mars")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Time to pack \ud83d\udce6 Box in the Mars expeditions using each algorithm once!"))),Object(o.b)("h3",{id:"pack-your-own-expedition"},"Pack your own expedition"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Apply the packaging to your own expedition, did you choose the profits and weights well? Could you go to your expedition goal with what you just packed?"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"invite-to-packer"},"Invite to Packer"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Create an issue in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/nds-swe/swdt/issues/new/choose"},"this repository")," stating your GitHub handle (username) and that you would like access."))),Object(o.b)("p",null,"If you do not know how to create an issue, read ",Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/github/managing-your-work-on-github/creating-an-issue"},"this"),"."))}d.isMDXComponent=!0},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,h=p["".concat(r,".").concat(m)]||p[m]||b[m]||o;return a?i.a.createElement(h,c(c({ref:t},l),{},{components:a})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},164:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/client-server-9920cc40ffc2c890024ab5e6524f9e14.png"}}]);