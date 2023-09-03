"use strict";(self.webpackChunkknowledge_base=self.webpackChunkknowledge_base||[]).push([[685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Introduction",s={unversionedId:"ZK/intro",id:"ZK/intro",title:"Introduction",description:"Zero knowledge proof is the ability to explain honest computation without revealing inputs. They can be used for",source:"@site/docs/ZK/intro.md",sourceDirName:"ZK",slug:"/ZK/intro",permalink:"/knowledge-base/docs/ZK/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Sequencer",permalink:"/knowledge-base/docs/Scaling/Sequencers"}},l={},u=[{value:"SNARKS",id:"snarks",level:2},{value:"STARKS",id:"starks",level:2},{value:"References",id:"references",level:4}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Zero knowledge proof is the ability to explain honest computation without revealing inputs. They can be used for\nscalability (Starknet, zkSync) and privacy (Tornado cash). ZKPs must satisfy three properties."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Completeness")," : If a statement is true , an honest prover can always convince a honest verifier."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Soundness")," : If a statement is false, a dishonest prover can't convince a honest verifier. Being probablistic, this\nvery low."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Zero Knowledge"),": The verifier learns nothing apart from the fact the statement is true.")),(0,a.kt)("h1",{id:"snark-construction"},"SNARK Construction"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Transform the statement into polynomials"),(0,a.kt)("li",{parentName:"ol"},"You have provers, verifiers and challeange."),(0,a.kt)("li",{parentName:"ol"},"To make the challenge non-interactive , you need a CRS (Common reference string) - created as a trusted setup."),(0,a.kt)("li",{parentName:"ol"},"CRS is encrypted as it needs to be reused. This is done by multiplying encrypted values with elliptic curves\nresulting in elliptic curve pairings.")),(0,a.kt)("h1",{id:"snark-evaluation"},"SNARK Evaluation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Prover time."),(0,a.kt)("li",{parentName:"ol"},"Proof size. (192 bytes groth16)"),(0,a.kt)("li",{parentName:"ol"},"Verification time.")),(0,a.kt)("p",null,"Systems like groth16 need a trusted setup to generate CRS. A variant of this could be a universal trusted setup where\nthis ceremony needs to be done only once , instead per interaction. "),(0,a.kt)("p",null,"Proof systems like PLONK,Halo,STARKS do not require\na trusted setup. They achive this by using interactive oracle proofs (IOP) or Holographic proving systems(AHP)."),(0,a.kt)("h1",{id:"terminology"},"Terminology"),(0,a.kt)("p",null,'"I know a secret such that H(secret) = hashvalue"'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Statement(x) : public data what we are proving - hashvalue"),(0,a.kt)("li",{parentName:"ul"},"Witness(w): private data - secret"),(0,a.kt)("li",{parentName:"ul"},"Relation(R): What is the relationship between x & w? Ex: if R(x,w) is true if x == H(x)")),(0,a.kt)("h1",{id:"snarks-vs-starks"},"SNARKs vs STARKS"),(0,a.kt)("h2",{id:"snarks"},"SNARKS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Zk-SNARKs at their base depend upon elliptic curves for their security. Elliptic curves in cryptography operate under\nthe base assumption that finding the discrete logarithm of a random elliptic curve element with respect to a publicly\nknown base point is infeasible."),(0,a.kt)("li",{parentName:"ul"},"zk-SNARKs require a trusted setup."),(0,a.kt)("li",{parentName:"ul"},"ZK-SNARKS are not quantum resistant")),(0,a.kt)("h2",{id:"starks"},"STARKS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"STARKs relies on hash functions."),(0,a.kt)("li",{parentName:"ul"},"STARKS do not require a trusted setup"),(0,a.kt)("li",{parentName:"ul"},"STARKS are quantum resistant.")),(0,a.kt)("h4",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=BT88s7_VtC8&t=37s"},"Introduction to Zero Knowledge Proofs")," - Elena Nadolinski"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://consensys.net/blog/blockchain-explained/zero-knowledge-proofs-starks-vs-snarks/"},"Zero-Knowledge Proofs: STARKs vs SNARKs"))))}d.isMDXComponent=!0}}]);