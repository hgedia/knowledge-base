"use strict";(self.webpackChunkknowledge_base=self.webpackChunkknowledge_base||[]).push([[396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},r="Basics",s={unversionedId:"Concepts/basics",id:"Concepts/basics",title:"Basics",description:"Consensus",source:"@site/docs/Concepts/basics.md",sourceDirName:"Concepts",slug:"/Concepts/basics",permalink:"/knowledge-base/docs/Concepts/basics",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Writing",permalink:"/knowledge-base/docs/Writing"},next:{title:"Sequencer",permalink:"/knowledge-base/docs/Scaling/Sequencers"}},l={},c=[{value:"Consensus",id:"consensus",level:3},{value:"Smart Contract",id:"smart-contract",level:3},{value:"Accounts",id:"accounts",level:3},{value:"Transactions (ETH)",id:"transactions-eth",level:3},{value:"Primitives",id:"primitives",level:3},{value:"Hash",id:"hash",level:4},{value:"Public Key Cryptography",id:"public-key-cryptography",level:3},{value:"ETH Block Header",id:"eth-block-header",level:3},{value:"Light Client/SPV",id:"light-clientspv",level:3},{value:"UTXO vs Account based Model",id:"utxo-vs-account-based-model",level:3},{value:"Hard Fork vs Soft Fork",id:"hard-fork-vs-soft-fork",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basics"},"Basics"),(0,o.kt)("h3",{id:"consensus"},"Consensus"),(0,o.kt)("p",null,"A set of computers want to reach agreement that about a single decision (or data item)"),(0,o.kt)("p",null,"Properties of consensus protocol:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Safety : Everyone should agree, and never forget."),(0,o.kt)("li",{parentName:"ul"},"Liveness How many peers must be online before a decision is final?\n")),(0,o.kt)("p",null,"Blockchains enable trust engineeering. Define, minimize, and if possible remove trust from intermediaries.\nReplace it with public, verifiable and programmable programs (smart contracts)."),(0,o.kt)("h3",{id:"smart-contract"},"Smart Contract"),(0,o.kt)("p",null,"A smart contract is a computerized transaction protocol that executes the terms of a contract.\nThe general objectives are to satisfy common contractual conditions (such as payment terms, liens, confidentiality,\nand even enforcement), minimize exceptions both malicious and accidental, and minimize the need\nfor trusted intermediaries. (Nick Szabo)"),(0,o.kt)("p",null,'They are computer programs stored on the blockchain that follow "if this then that" logic, and are guaranteed to\nexecute according to the rules defined by its code, which cannot be changed once created.'),(0,o.kt)("p",null,"A smart contract will : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"I will never modify or change your code."),(0,o.kt)("li",{parentName:"ul"},"I will always run the code you tell me too (assuming the code itself allows me!)."),(0,o.kt)("li",{parentName:"ul"},"I will never let code execution \u201cstop half way\u201d it is ALL or NOTHING with me."),(0,o.kt)("li",{parentName:"ul"},"I like to gossip and I can\u2019t keep secrets - Everything you tell me will be public knowledge.")),(0,o.kt)("h3",{id:"accounts"},"Accounts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Externally owned accounts: controlled by people/keys"),(0,o.kt)("li",{parentName:"ul"},"Contract accounts: controlled by smart contract code + storage")),(0,o.kt)("h3",{id:"transactions-eth"},"Transactions (ETH)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Value Transaction: Transfer coins from an externally owned account to another account"),(0,o.kt)("li",{parentName:"ul"},"Creation Transaction: The code of a smart contract is stored in a transaction\u2019s payload and sent to the Blockchain."),(0,o.kt)("li",{parentName:"ul"},"Invocation Transaction: The commands to invoke code in the contract is stored in a transaction\u2019s payload and sent to the Blockchain.")),(0,o.kt)("p",null,"Gas is paid as a unit of comutation for transactions."),(0,o.kt)("h3",{id:"primitives"},"Primitives"),(0,o.kt)("h4",{id:"hash"},"Hash"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pre-image : Input data (Variable)"),(0,o.kt)("li",{parentName:"ul"},"Hash : Computed hash of pre-image. (Fixed length)")),(0,o.kt)("p",null,"One-way pseudorandom (and collision-resistant) function h = hash(x)"),(0,o.kt)("p",null,"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Preimage Resistance : Given a hash value h it should be difficult to find any message m such that h = hash(m).\nIn other words,the hash h provides \u201cno clues or hints\u201d about the input."),(0,o.kt)("li",{parentName:"ul"},"Second Preimage Resistance : Given an input m1, it should be difficult to find a different input m2 such\nthat hash(m1) = hash(m2)."),(0,o.kt)("li",{parentName:"ul"},"Collision-Resistance : Basically, there cannot be ANY collisions for ANY pair of messages.")),(0,o.kt)("p",null,"Collision resistance is about the infeasibility of finding two distinct inputs m and m' such that h(m) = h(m').\nThe attacker gets to choose m and m' arbitrarily, as long as he ends up with two distinct messages that hash to the same value.\nSecond-preimage resistance is very similar except that the attacker does not get to choose m.\nInstead, we give him m, and challenge him with finding m' (distinct from m) such that h(m) = h(m')."),(0,o.kt)("p",null,"A second-preimage is also a collision, but we keep the concept distinct because second-preimages are supposed to be\nsubstantially harder."),(0,o.kt)("h3",{id:"public-key-cryptography"},"Public Key Cryptography"),(0,o.kt)("p",null,"Domain parameters (g, q, CURVE, n)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u201cg\u201d = Well-known generator"),(0,o.kt)("li",{parentName:"ul"},"\u201cn\u201d = Modulus for private key space"),(0,o.kt)("li",{parentName:"ul"},"\u201cq\u201d = Modulus for public key space")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"d = RanNum() mod n \u2190 Private Key\ng^d = P mod q \u2190 Public Key\n")),(0,o.kt)("p",null,"Sign a message\n",(0,o.kt)("inlineCode",{parentName:"p"},"\u03c3 = Sign(message, sk)"),"\nVerify signed message\n",(0,o.kt)("inlineCode",{parentName:"p"},"0/1 = Verify(\u03c3, pk, msg)")),(0,o.kt)("p",null,"Secure random number generators are required!  An ECDSA Signature is denoted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(r,s) => Randomness, Signature\n")),(0,o.kt)("p",null,"Re-using randomness can be detected and is an attack vector."),(0,o.kt)("p",null,"Bitcoin/Ethereum use the curve Secp256k1 for operations. ( Elliptic Curve Digital Signature Algorithm (ECDSA))"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"y^2 = x^3 + 7 \n")),(0,o.kt)("h3",{id:"eth-block-header"},"ETH Block Header"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ETH Block Header",src:n(2635).Z,width:"856",height:"471"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transaction Root:  A commitment to the list of transactions.Just like in Bitcoin, there is a commitment for\nall transactions in this block.We can prove a transaction was included in the block using hash and this tree root."),(0,o.kt)("li",{parentName:"ul"},"State Root: A commitment to the entire ledger\u2019s state. or any block, we can prove : Balance of an account and  State\nof a smart contract."),(0,o.kt)("li",{parentName:"ul"},"Recepit Root : A receipt detailing the outcome of a transaction\u2019s execution : Status (did tx fail?), Sender / Receiver,\nGas Used ,Logs (emit events),Useful for watching the progression of a smart contract.")),(0,o.kt)("h3",{id:"light-clientspv"},"Light Client/SPV"),(0,o.kt)("p",null,"A light client or light node is a piece of software that connects to full nodes to interact with the blockchain.\nUnlike their full node counterparts, light nodes don\u2019t need to run 24/7 or read and write a lot of\ninformation on the blockchain. In fact, light clients do not interact directly with the blockchain;\nthey instead use full nodes as intermediaries. Light clients rely on full nodes for many operations,\nfrom requesting the latest headers to asking for the balance of an account."),(0,o.kt)("p",null,"The way light client protocols are designed allows them to interact with full nodes in a trust-minimized manner."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u201cLightweight clients\u201d store the list of block headers\nDiscard (or simply do not receive) all transactions.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transaction Inclusion Proof:Transaction + Merkle Tree Branch + Block Header")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Weaker Trust assumption.Cannot validate all transactions, assumes chain with most proof of work is correct\n\u201cFraud Proof\u201d is a research direction - prove that a block is invalid.")),(0,o.kt)("h3",{id:"utxo-vs-account-based-model"},"UTXO vs Account based Model"),(0,o.kt)("p",null,"An Unspent Transaction Output is \u201cessentially\u201d a single database entry.\nAnyone who can satisfy a list of spending conditions can claim the coins.\nETH account based model can be simplified as Rows & colums , where columns would be address, storage trie root,code ,\nbalance , nonce."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"UTXO vs Account model",src:n(8109).Z,width:"1179",height:"673"})),(0,o.kt)("h3",{id:"hard-fork-vs-soft-fork"},"Hard Fork vs Soft Fork"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hard Fork : A new consensus rule is publicly detectable by non-upgraded nodes.For example, increasing\nthe block size from 1mb to 2mb.Bob must upgrade his node software to follow the new blocks He has an explicit\nchoice whether to accept the new consensus rule or not."),(0,o.kt)("li",{parentName:"ul"},"Soft fork : A new consensus rule is NOT publicly detectable by non-upgraded nodes.Assuming the block size is 1MB,\nminers all agree to only mine blocks of 500kb.Bob\u2019s node software will accept the new consensus rule, no upgrade required\nHe has no choice but to follow the new consensus rules.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pisa.watch/"},"Introduction to Blockchains")," - ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/stonecoldpat0"},"Patrick McRorry")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.parity.io/blog/what-is-a-light-client/"},"Light clients"))))}p.isMDXComponent=!0},2635:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/eth_block_header-fce5fb79086a3c5efe49dc37cd8e16e3.png"},8109:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/utxo_vs_account-1c6e8070ab3b36fa1b685bdf94703ae1.png"}}]);