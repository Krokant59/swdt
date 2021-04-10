(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=i,m=b["".concat(r,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(3),o=n(7),a=(n(0),n(112)),r={title:"GitHub Actions"},c={unversionedId:"tools/github-actions",id:"tools/github-actions",isDocsHomePage:!1,title:"GitHub Actions",description:"Automate, customize, and execute your software development workflows right in your repository with GitHub Actions. You can discover, create, and share actions to perform any job you'd like, including CI/CD, and combine actions in a completely customized workflow. - github.com/en/actions",source:"@site/docs/tools/github-actions.md",slug:"/tools/github-actions",permalink:"/swdt/docs/tools/github-actions",editUrl:"https://github.com/nds-swe/swdt/edit/main/docs/tools/github-actions.md",version:"current",sidebar:"docs",previous:{title:"Docker",permalink:"/swdt/docs/tools/docker"},next:{title:"About",permalink:"/swdt/docs/tasks/about-tasks"}},s=[{value:"Use",id:"use",children:[]},{value:"Install / Get started",id:"install--get-started",children:[]},{value:"Alternative",id:"alternative",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Automate, customize, and execute your software development workflows right in your repository with GitHub Actions. You can discover, create, and share actions to perform any job you'd like, including CI/CD, and combine actions in a completely customized workflow. - ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",{parentName:"em",href:"https://docs.github.com/en/actions"},"github.com/en/actions")))),Object(a.b)("p",null,"\ud83d\udd17 ",Object(a.b)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"github.com/en/actions")),Object(a.b)("p",null,"This repo features the most simple action to start with, ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nds-swe/swdt/blob/main/.github/workflows/example-action_push.yml"},"check it out"),"."),Object(a.b)("h2",{id:"use"},"Use"),Object(a.b)("p",null,"GitHub Actions have uncountable use cases. In our lecture we will use them for some basic cases:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Check a Pull Request for vulnerabilities"),Object(a.b)("li",{parentName:"ul"},"Execute Unit Tests on Pull Requests"),Object(a.b)("li",{parentName:"ul"},"Build and push a docker image"),Object(a.b)("li",{parentName:"ul"},"Execute one or the other integration test"),Object(a.b)("li",{parentName:"ul"},"Build diagrams or these docs")),Object(a.b)("p",null,"These bullets all belong to the technique ",Object(a.b)("a",{parentName:"p",href:"/docs/techniques/continuous-integration"},"Continuos Integration"),"."),Object(a.b)("p",null,"Obviously, since one can develop his own actions, this list is endless. You also find GitHub Actions in our ",Object(a.b)("a",{parentName:"p",href:"/docs/guiding-thread"},"guiding thread")," in the ",Object(a.b)("inlineCode",{parentName:"p"},"Test")," area."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"GitHub Actions is only added to the ",Object(a.b)("inlineCode",{parentName:"p"},"Test")," phase for simplicity and because in this lecture we mostly use it there. GitHub Actions (or rather CI) in fact and in practice is central and all-present in DevOps."))),Object(a.b)("h2",{id:"install--get-started"},"Install / Get started"),Object(a.b)("p",null,"Check out their ",Object(a.b)("a",{parentName:"p",href:"https://docs.github.com/en/actions/quickstart"},"Quick Start")," or our ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nds-swe/swdt/blob/main/.github/workflows/example-action_push.yml"},"super basic action")," from the lecture."),Object(a.b)("h2",{id:"alternative"},"Alternative"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://circleci.com/"},"Circle CI")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://travis-ci.org/"},"Travis")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/pipelines/"},"GitLab CI/CD Pipelines"))),Object(a.b)("p",null,"There is even more like Atlassian Bamboo, Jenkins, TeamCity etc."))}u.isMDXComponent=!0}}]);