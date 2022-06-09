"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[1601],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2671:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Feeder Gateway Connection"},c=void 0,u={unversionedId:"features/feeder-gateway",id:"features/feeder-gateway",title:"Feeder Gateway Connection",description:"We implemented a wrapper around the Feeder Gateway.",source:"@site/docs/features/feeder-gateway.mdx",sourceDirName:"features",slug:"/features/feeder-gateway",permalink:"/docs/features/feeder-gateway",editUrl:"https://github.com/NethermindEth/juno/tree/main/docs/docs/features/feeder-gateway.mdx",tags:[],version:"current",frontMatter:{title:"Feeder Gateway Connection"},sidebar:"tutorialSidebar",previous:{title:"Cryptographic basis",permalink:"/docs/features/cryptography"},next:{title:"Merkle Tries Details",permalink:"/docs/features/merkle-tree"}},p=[],s={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We implemented a wrapper around the Feeder Gateway."),(0,o.kt)("p",null,"StarkNet Api Getaway can be queried against these endpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Goerli: ",(0,o.kt)("a",{parentName:"li",href:"http://alpha4.starknet.io"},"http://alpha4.starknet.io")),(0,o.kt)("li",{parentName:"ul"},"MainNet: ",(0,o.kt)("a",{parentName:"li",href:"https://alpha-mainnet.starknet.io"},"https://alpha-mainnet.starknet.io"))),(0,o.kt)("p",null,"For the feeder Gateway wrapper implementation, we use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/starknet/services/api/feeder_gateway/feeder_gateway_client.py"},"this"),"\nas the codebase for the functions we need."),(0,o.kt)("p",null,"Using the feeder Gateway we can connect to these endpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"get_contract_addresses"),(0,o.kt)("li",{parentName:"ul"},"call_contract"),(0,o.kt)("li",{parentName:"ul"},"get_block"),(0,o.kt)("li",{parentName:"ul"},"get_state_update"),(0,o.kt)("li",{parentName:"ul"},"get_code"),(0,o.kt)("li",{parentName:"ul"},"get_full_contract"),(0,o.kt)("li",{parentName:"ul"},"get_storage_at"),(0,o.kt)("li",{parentName:"ul"},"get_transaction_status"),(0,o.kt)("li",{parentName:"ul"},"get_transaction"),(0,o.kt)("li",{parentName:"ul"},"get_transaction_receipt"),(0,o.kt)("li",{parentName:"ul"},"get_block_hash_by_id"),(0,o.kt)("li",{parentName:"ul"},"get_block_id_by_hash"),(0,o.kt)("li",{parentName:"ul"},"get_transaction_hash_by_id"),(0,o.kt)("li",{parentName:"ul"},"get_transaction_id_by_hash")))}f.isMDXComponent=!0}}]);