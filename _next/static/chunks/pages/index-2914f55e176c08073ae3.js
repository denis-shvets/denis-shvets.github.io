(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3398:function(e,n,r){"use strict";var t;n.__esModule=!0,n.AmpStateContext=void 0;var i=((t=r(7294))&&t.__esModule?t:{default:t}).default.createContext({});n.AmpStateContext=i},6393:function(e,n,r){"use strict";n.__esModule=!0,n.isInAmpMode=o,n.useAmp=function(){return o(i.default.useContext(s.AmpStateContext))};var t,i=(t=r(7294))&&t.__esModule?t:{default:t},s=r(3398);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,r=void 0!==n&&n,t=e.hybrid,i=void 0!==t&&t,s=e.hasQuery,o=void 0!==s&&s;return r||i&&o}},2775:function(e,n,r){"use strict";var t=r(1682);function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}n.__esModule=!0,n.defaultHead=p,n.default=void 0;var s,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=h();if(n&&n.has(e))return n.get(e);var r={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=t?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(r(7294)),l=(s=r(3244))&&s.__esModule?s:{default:s},a=r(3398),d=r(1165),c=r(6393);function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[o.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function u(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===o.default.Fragment?e.concat(o.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)}),[])):e.concat(n)}var j=["name","httpEquiv","charSet","itemProp"];function x(e,n){return e.reduce((function(e,n){var r=o.default.Children.toArray(n.props.children);return e.concat(r)}),[]).reduce(u,[]).reverse().concat(p(n.inAmpMode)).filter(function(){var e=new Set,n=new Set,r=new Set,t={};return function(i){var s=!0,o=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){o=!0;var l=i.key.slice(i.key.indexOf("$")+1);e.has(l)?s=!1:e.add(l)}switch(i.type){case"title":case"base":n.has(i.type)?s=!1:n.add(i.type);break;case"meta":for(var a=0,d=j.length;a<d;a++){var c=j[a];if(i.props.hasOwnProperty(c))if("charSet"===c)r.has(c)?s=!1:r.add(c);else{var h=i.props[c],p=t[c]||new Set;"name"===c&&o||!p.has(h)?(p.add(h),t[c]=p):s=!1}}}return s}}()).reverse().map((function(e,r){var s=e.key||r;if(!n.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(n){return e.props.href.startsWith(n)}))){var l=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},e.props||{});return l["data-href"]=l.href,l.href=void 0,l["data-optimized-fonts"]=!0,o.default.cloneElement(e,l)}return o.default.cloneElement(e,{key:s})}))}var m=function(e){var n=e.children,r=(0,o.useContext)(a.AmpStateContext),t=(0,o.useContext)(d.HeadManagerContext);return o.default.createElement(l.default,{reduceComponentsToState:x,headManager:t,inAmpMode:(0,c.isInAmpMode)(r)},n)};n.default=m},3244:function(e,n,r){"use strict";var t=r(3115),i=r(2553),s=r(2012),o=(r(450),r(9807)),l=r(7690),a=r(9828);function d(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=a(e);if(n){var i=a(this).constructor;r=Reflect.construct(t,arguments,i)}else r=t.apply(this,arguments);return l(this,r)}}n.__esModule=!0,n.default=void 0;var c=r(7294),h=function(e){o(r,e);var n=d(r);function r(e){var s;return i(this,r),(s=n.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(t(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(c.Component);n.default=h},3403:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var t=r(5893),i=r(9008),s="Denis Shvets",o=r(1809),l=r.n(o);var a=function(){return(0,t.jsxs)("main",{className:l().root,children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:s}),(0,t.jsx)("meta",{name:"google-site-verification",content:"qJrjbErgOsTHaoSdBWT0td6HQwtDcjPwMldWWZ99cFQ"})]}),(0,t.jsxs)("article",{children:[(0,t.jsx)("h1",{children:s}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Contacts"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["Email:"," ",(0,t.jsx)("a",{href:"mailto:denis.shvets.a+gh.pages@gmail.com",children:"denis.shvets.a+gh.pages@gmail.com"})]}),(0,t.jsxs)("li",{children:["Linkedin:"," ",(0,t.jsx)("a",{href:"https://www.linkedin.com/in/denisshvets/",target:"_blank",rel:"noopener noreferrer",children:"denisshvets"})]})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Career Summary"}),(0,t.jsx)("p",{children:"Front-end developer with production experience in software development. Experienced in building responsive web and mobile applications which are used by customers throughout the world. Immersed in the latest and coolest technologies."})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Summary of Qualifications"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"HTML"}),", ",(0,t.jsx)("strong",{children:"CSS"})," and JavaScript"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"SASS"}),", LESS and PostCSS"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Rea\u0441t"}),", ",(0,t.jsx)("strong",{children:"Next.js"}),", React Native, Redux, ",(0,t.jsx)("strong",{children:"Lodash"}),", jQuery, Apollo, Angular, Vue, Electron, GSAP, ",(0,t.jsx)("strong",{children:"D3"}),", three.js, Knockout, Kinetic, Autobahn, Socket.io, Backbone, Underscore, Ember and RequireJS"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"BEM"}),", SMACSS, ACSS, OOCSS, SPA, Parallax,"," ",(0,t.jsx)("strong",{children:"Responsive Web Design"})," and Compatibility with modern and legacy browsers"]}),(0,t.jsx)("li",{children:"Semantics, Connectivity(Web Sockets), Offline & Storage(Storage and FileReader), 2D/3D Graphics & Effects(SVG and Canvas), Performance & Integration(History API, Drag and Drop, Animation, Fullscreen API) and Styling"}),(0,t.jsx)("li",{children:"Node.js, PHP, Python and Java"}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Webpack"}),", Docker, ",(0,t.jsx)("strong",{children:"npm"}),","," ",(0,t.jsx)("strong",{children:"yarn"}),", GraphQL, Gulp, Grunt, PuTTY, Virtual Box, Bower, Bootstrap, Foundation and Yeoman"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"JIRA"}),", ",(0,t.jsx)("strong",{children:"Confluence"}),","," ",(0,t.jsx)("strong",{children:"GitHub"}),", CircleCI, Stash and Crucible"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Git"}),", SVN and Perforce"]}),(0,t.jsx)("li",{children:"WordPress, Orchard, Drupal and different custom builds"}),(0,t.jsx)("li",{children:"Mongo, PostgreSQL, Oracle and MySQL"}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Photoshop"}),", ",(0,t.jsx)("strong",{children:"Illustrator"}),","," ",(0,t.jsx)("strong",{children:"Sketch"})," and AfterEffects"]}),(0,t.jsxs)("li",{children:["Cypress, Sentry, various linters, ",(0,t.jsx)("strong",{children:"Jest"})," and"," ",(0,t.jsx)("strong",{children:"react-testing-library"})]}),(0,t.jsx)("li",{children:"Nunjucks, Mustache, Thymeleaf, HAML, Jade/Pug, Twig, Smarty and Jekyll"})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Career History"}),(0,t.jsx)("h3",{children:"Globant LLC, Minsk, Belarus"}),(0,t.jsxs)("p",{children:["Front-end developer ",(0,t.jsx)("br",{}),"August 2018"]}),(0,t.jsxs)("p",{children:["Worked on ",(0,t.jsx)("strong",{children:"StartWire"})," job search web application. (React, TypeScript)"]}),(0,t.jsx)("p",{children:"Following tasks were performed:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Migration from Angular v1 to React with TypeScript;"}),(0,t.jsx)("li",{children:"New features development;"}),(0,t.jsx)("li",{children:"Code quality tools integration."})]}),(0,t.jsx)("p",{children:"Responsibilities:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Front-end development;"}),(0,t.jsx)("li",{children:"Code review;"}),(0,t.jsx)("li",{children:"Work planning;"}),(0,t.jsx)("li",{children:"Customer communications."})]}),(0,t.jsxs)("p",{children:["Worked on ",(0,t.jsx)("strong",{children:"Stargate"})," support web application. (React, TypeScript)"]}),(0,t.jsx)("p",{children:"Following tasks were performed:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"New features development;"}),(0,t.jsx)("li",{children:"Code quality tools integration;"}),(0,t.jsx)("li",{children:"Refactoring."})]}),(0,t.jsx)("p",{children:"Responsibilities:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Team lead;"}),(0,t.jsx)("li",{children:"Front-end development;"}),(0,t.jsx)("li",{children:"Work planning;"}),(0,t.jsx)("li",{children:"Customer communications."})]}),(0,t.jsxs)("p",{children:["Worked on ",(0,t.jsx)("strong",{children:"Mediatonic Player Portal"}),". (React, Next.js, TypeScript)"]}),(0,t.jsx)("p",{children:"Following tasks were performed:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Architecture development;"}),(0,t.jsx)("li",{children:"New features development."})]}),(0,t.jsx)("p",{children:"Responsibilities:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Front-end lead;"}),(0,t.jsx)("li",{children:"Front-end development;"}),(0,t.jsx)("li",{children:"Work planning;"}),(0,t.jsx)("li",{children:"Customer communications."})]}),(0,t.jsx)("h3",{children:"Sivintech, Minsk, Belarus"}),(0,t.jsxs)("p",{children:["Front-end developer, Team lead ",(0,t.jsx)("br",{}),"April 2018 \u2014 August 2018"]}),(0,t.jsx)("p",{children:"Worked on education CRM for State University of New York."}),(0,t.jsx)("p",{children:"Responsibilities:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Team management;"}),(0,t.jsx)("li",{children:"Front-end development;"}),(0,t.jsx)("li",{children:"Back - end development;"}),(0,t.jsx)("li",{children:"Code review;"}),(0,t.jsx)("li",{children:"Work planning;"}),(0,t.jsx)("li",{children:"Mentoring;"}),(0,t.jsx)("li",{children:"Customer communications."})]}),(0,t.jsx)("h3",{children:"Besk, Minsk, Belarus"}),(0,t.jsxs)("p",{children:["Front-end developer, Team lead ",(0,t.jsx)("br",{}),"April 2018 - August 2018"]}),(0,t.jsx)("p",{children:"Worked on Bankera, CoinSupply and Socium Trade crypto currency exchange web applications."}),(0,t.jsx)("p",{children:"Responsibilities:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Team management;"}),(0,t.jsx)("li",{children:"Front-end development;"}),(0,t.jsx)("li",{children:"Code review;"}),(0,t.jsx)("li",{children:"Work planning;"}),(0,t.jsx)("li",{children:"Mentoring;"}),(0,t.jsx)("li",{children:"Customer communication."})]}),(0,t.jsx)("h3",{children:"Watty AB, Stockholm, Sweden"}),(0,t.jsxs)("p",{children:["Front-end developer",(0,t.jsx)("br",{}),"September 2015 \u2014 December 2017"]}),(0,t.jsx)("p",{children:"Following tasks were performed:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Developed from scratch corporate website;"}),(0,t.jsx)("li",{children:"Developed from scratch iOS and Android applications for main product;"}),(0,t.jsx)("li",{children:"Developed about 10 internal projects to help other teams improve productivity;"}),(0,t.jsx)("li",{children:"Integrated billing and support systems after product release;"}),(0,t.jsx)("li",{children:"Worked on Front-end related tasks."})]}),(0,t.jsx)("h3",{children:"HiEnd Systems, Minsk, Belarus"}),(0,t.jsxs)("p",{children:["Front-end developer, Team lead",(0,t.jsx)("br",{}),"January 2015 \u2014 August 2015"]}),(0,t.jsx)("p",{children:"Worked on Front-end related tasks."}),(0,t.jsx)("p",{children:"Projects:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"MoneyMan \u2014 First and largest online Microfinance organization in Russia, Kazakhstan, Spain and Georgia (http://moneyman.ru/);"}),(0,t.jsx)("li",{children:"5 more familiar to MoneyMan projects."})]}),(0,t.jsx)("h3",{children:"Onestop Internet, Los Angeles, USA"}),(0,t.jsxs)("p",{children:["Front-end developer",(0,t.jsx)("br",{}),"March 2014 \u2014 August 2014"]}),(0,t.jsx)("p",{children:"Worked on Front-end related tasks."}),(0,t.jsx)("h3",{children:"Startup Labs, Minsk, Belarus"}),(0,t.jsxs)("p",{children:["Front-end developer, Team lead",(0,t.jsx)("br",{}),"August 2012 \u2014 September 2013"]}),(0,t.jsx)("p",{children:"Following tasks were performed:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Processes automation;"}),(0,t.jsx)("li",{children:"Added SASS support to all projects in the company;"}),(0,t.jsx)("li",{children:"Developed reusable complex responsive web components like RWD forms, carousels, etc;"}),(0,t.jsx)("li",{children:"Participated in all phases of the software development cycle: from product definition and design through implementation, debugging, and testing;"}),(0,t.jsx)("li",{children:"Created universal template which increased feature implementation speed and speed up release cycle;"}),(0,t.jsx)("li",{children:"Created core admin template for all projects that reduced support effort;"}),(0,t.jsx)("li",{children:"Made decisions on technologies to use;"}),(0,t.jsx)("li",{children:"Setup processes in front-end department;"}),(0,t.jsx)("li",{children:"Added Code Review into process;"}),(0,t.jsx)("li",{children:"Task distribution in the department;"}),(0,t.jsx)("li",{children:"Presentations about technologies for department;"}),(0,t.jsx)("li",{children:"Interviewed candidates;"}),(0,t.jsx)("li",{children:"Worked on Front-end related tasks."})]}),(0,t.jsx)("p",{children:"Projects:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Yosto Control Panel and Landing Page \u2014 Private lead generation affiliate network;"}),(0,t.jsx)("li",{children:"Clicketta Control Panel, Landing Page and Clicketta Module \u2014 Next Generation Ad Marketplace;"}),(0,t.jsx)("li",{children:"Agentera Control Panel, Landing Page and Agentera Module \u2014 Automated intellectual support system;"}),(0,t.jsx)("li",{children:"Weberra Control Panel and Landing Page \u2014 Lead Generation Sites Builder."}),(0,t.jsx)("li",{children:"Short term loan lenders who can provide you with access to the emergency funds you need, regardless of the reason:"}),(0,t.jsx)("li",{children:"Loan Up (https://loanup.com/);"}),(0,t.jsx)("li",{children:"21 more similar projects."})]}),(0,t.jsx)("h3",{children:"EPAM Systems, Minsk, Belarus"}),(0,t.jsxs)("p",{children:["Front-end developer, Team lead",(0,t.jsx)("br",{}),"March 2011 \u2014 August 2012"]}),(0,t.jsx)("p",{children:"Following tasks were performed:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Participated in replatforming phase;"}),(0,t.jsx)("li",{children:"Integrated with FLUX, Facebook, Twitter;"}),(0,t.jsx)("li",{children:"Developed reusable web components;"}),(0,t.jsx)("li",{children:"Added Responsive Web Design to projects;"}),(0,t.jsx)("li",{children:"Optimized static content;"}),(0,t.jsx)("li",{children:"Added Code Review into process;"}),(0,t.jsx)("li",{children:"Presented technical demos to the customer;"}),(0,t.jsx)("li",{children:"Worked on Front-end related tasks."})]}),(0,t.jsx)("p",{children:"Projects:"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("p",{children:"MTV / Viacom:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"GameTrailers \u2014 Game Portal;"}),(0,t.jsx)("li",{children:"Comedy Central \u2014 News Portal (http://www.comedycentral.com/);"}),(0,t.jsx)("li",{children:"The Daily Show \u2014 News Portal (http://www.thedailyshow.com/);"}),(0,t.jsx)("li",{children:"SPIKE \u2014 News Portal (http://www.spike.com/)."})]})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("p",{children:"IMAX:"}),(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:"IMAX - SITE(https://www.imax.com/)."})})]})]}),(0,t.jsx)("h3",{children:"Dmitri Borovoy design studio, Minsk, Belarus"}),(0,t.jsxs)("p",{children:["Front-end developer",(0,t.jsx)("br",{}),"April 2010 \u2014 October 2010"]}),(0,t.jsx)("p",{children:"Following tasks were performed:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Worked on projects that took grand prizes on Golden Web 2010 (Russian Web Contest);"}),(0,t.jsx)("li",{children:"Worked on Front-end related tasks."})]}),(0,t.jsx)("h3",{children:"Freelance"}),(0,t.jsxs)("p",{children:["Front-end developer",(0,t.jsx)("br",{}),"September 2014 \u2014 January 2015",(0,t.jsx)("br",{}),"September 2013 \u2014 March 2014",(0,t.jsx)("br",{}),"June 2005 \u2014 February 2011"]}),(0,t.jsx)("p",{children:"Worked on Front-end related tasks."}),(0,t.jsx)("p",{children:"Projects:"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Atlant Telecom Corporate Site \u2014 Largest ISP in Belarus (https://internet.velcom.by/);"}),(0,t.jsx)("li",{children:"Red Graphic Corporate Site \u2014 Interactive Agency (http://redgraphic.com/);"}),(0,t.jsx)("li",{children:"Public Group Promo Site \u2014 Branding Company (http://pgr.by/);"}),(0,t.jsx)("li",{children:"World of Tanks Game Portal modules \u2014 Team-based massively multiplayer online action game (http://worldoftanks.ru/)."})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Education"}),(0,t.jsx)("h3",{children:"BELARUSIAN NATIONAL TECHNICAL UNIVERSITY, MINSK, BELARUS"}),(0,t.jsxs)("p",{children:["Information Technologies and Robotics ",(0,t.jsx)("br",{}),"Master of Science in Information Technologies Software, Software Engineer"]})]})]})]})}},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3403)}])},1809:function(e){e.exports={root:"home_root__xWKns"}},9008:function(e,n,r){e.exports=r(2775)},8164:function(e,n,r){var t=r(4360);e.exports=function(e){if(Array.isArray(e))return t(e)}},1682:function(e){e.exports=function(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,n,r){var t=r(8164),i=r(7381),s=r(3585),o=r(5725);e.exports=function(e){return t(e)||i(e)||s(e)||o()}}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);