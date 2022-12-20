"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[642],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70314:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(52983),r=n(14517);const s="tabItem_cygK";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:n},t)}},38005:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(18249),r=n(52983),s=n(14517),l=n(27250),o=n(62209),i=n(61748),p=n(34333);const c="tabList_N6AO",m="tabItem_Wt3n";function u(e){var t;const{lazy:n,block:l,defaultValue:u,values:d,groupId:k,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,o.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,i.U)(),[x,w]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=k){const e=h[k];null!=e&&e!==x&&b.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,n=C.indexOf(t),a=b[n].value;a!==x&&(S(t),w(a),null!=k&&N(k,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},f)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:I,onClick:j},l,{className:(0,s.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},16303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(18249),r=(n(52983),n(44993)),s=n(38005),l=n(70314);const o={title:"\u6dfb\u52a0\u6837\u5f0f"},i=void 0,p={unversionedId:"tutorials/first-app/c03-css",id:"tutorials/first-app/c03-css",title:"\u6dfb\u52a0\u6837\u5f0f",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528\u4f7f\u7528\u4e09\u65b9\u5e93\u4e2d\u7684\u7ec4\u4ef6\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c03-css.md",sourceDirName:"tutorials/first-app",slug:"/tutorials/first-app/c03-css",permalink:"/v2/en/docs/tutorials/first-app/c03-css",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6dfb\u52a0\u6837\u5f0f"},sidebar:"tutorialsSidebar",previous:{title:"\u7f16\u5199 UI \u7ec4\u4ef6",permalink:"/v2/en/docs/tutorials/first-app/c02-component"},next:{title:"\u6dfb\u52a0\u5ba2\u6237\u7aef\u8def\u7531",permalink:"/v2/en/docs/tutorials/first-app/c04-routes"}},c={},m=[{value:"\u4f7f\u7528 CSS \u5199 JS \u7ec4\u4ef6",id:"\u4f7f\u7528-css-\u5199-js-\u7ec4\u4ef6",level:2},{value:"\u4f7f\u7528 Utility",id:"\u4f7f\u7528-utility",level:2},{value:"\u81ea\u5b9a\u4e49 Utility Class",id:"\u81ea\u5b9a\u4e49-utility-class",level:2}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528\u4f7f\u7528\u4e09\u65b9\u5e93\u4e2d\u7684\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u5b9e\u73b0 UI \u7ec4\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-css-\u5199-js-\u7ec4\u4ef6"},"\u4f7f\u7528 CSS \u5199 JS \u7ec4\u4ef6"),(0,r.kt)("p",null,"\u9996\u5148\u6211\u4eec\u5e0c\u671b\u81ea\u5df1\u63a7\u5236\u8054\u7cfb\u4eba\u5934\u50cf\u7684\u5c55\u793a\uff0c\u5b9e\u73b0\u8fd9\u79cd\u8bbe\u8ba1\u7a3f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c03-css-expect.jpg",alt:"design"})),(0,r.kt)("p",null,"\u5047\u8bbe\u6ca1\u6709\u73b0\u6210\u7684\u7ec4\u4ef6\u53ef\u4ee5\u5b9e\u73b0\uff0c\u90a3\u5c31\u9700\u8981\u81ea\u5df1\u5199\u4e9b CSS \u4e86\uff0c\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://styled-components.com/"},"styled-components"),"\uff0c\u6765\u5b9e\u73b0\u7c7b\u4f3c\u7684\u9700\u6c42\u3002Modern.js \u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301 styled-components\uff0c\u65e2\u4e0d\u9700\u8981\u5b89\u88c5\u4f9d\u8d56\uff0c\u4e5f\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"styled-components \u901a\u8fc7\u6a21\u5757\u5316\u7684\u65b9\u5f0f\uff0c\u907f\u514d\u4e86\u4f20\u7edf CSS \u5199\u6cd5\u4e0a\u7684\u8bf8\u591a\u95ee\u9898\u3002\u4f8b\u5982\u76f4\u63a5\u5728\u5143\u7d20\u7684 style \u5c5e\u6027\u4e0a\u5199\u6837\u5f0f\uff0cUI \u89c6\u89c9\u4e0a\u7684\u7ec6\u8282\u4e5f\u4f1a\u8ddf UI \u7ed3\u6784\u4e0a\u7684\u7ec6\u8282\u548c\u4e1a\u52a1\u903b\u8f91\u6df7\u5728\u4e00\u8d77\u3002\u6216\u662f classname \u9700\u8981\u907f\u514d\u5168\u5c40\u7a7a\u95f4\u91cd\u540d\uff0c\u9700\u8981\u7528\u5230\u547d\u540d\u89c4\u8303\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/page.tsx")," \u91cc\u4fee\u6539\u9876\u90e8\u7684\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import styled from '@modern-js/runtime/styled';\n")),(0,r.kt)("p",null,"\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const Avatar = styled.img`\n  width: 50px;\n  height: 50px;\n  border: 4px solid #0ef;\n  border-radius: 50%;\n`;\n")),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"List.Item.Meta")," \u7684\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<List.Item.Meta\n  avatar={<Avatar src={avatar} />}\n  title={name}\n  description={email}\n/>\n")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u53ef\u4ee5\u770b\u5230\u9884\u671f\u7684\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nuvjhpqnuvr/modern-website/tutorials/c03-css-result1.png",alt:"result"})),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u505a\u4e00\u70b9\u91cd\u6784\uff0c\u4e3a\u4e86\u589e\u5f3a\u53ef\u8bfb\u6027\uff0c\u8ba9\u4ee3\u7801\u66f4\u5bb9\u6613\u7ef4\u62a4\uff0c\u53ef\u4ee5\u628a Avatar \u7ec4\u4ef6\u62c6\u5206\u51fa\u53bb\u3002\u6211\u4eec\u5728\u7ec8\u7aef\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u521b\u5efa\u65b0\u7684\u6587\u4ef6\uff1a"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/components/Avatar\ntouch src/components/Avatar/index.tsx\n"))),(0,r.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/components/Avatar\nni src/components/Avatar/index.tsx\n")))),(0,r.kt)("p",null,"\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/page.tsx")," \u91cc\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Avatar>")," \u5b9e\u73b0\u5220\u6389\uff0c\u4fee\u6539\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import Avatar from '../components/Avatar';\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src/components/Avatar/index.tsx")," \u7684\u5185\u5bb9\uff0c\u4fee\u6539\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import styled from '@modern-js/runtime/styled';\n\nconst Avatar = styled.img`\n  width: 50px;\n  height: 50px;\n  border: 4px solid #0ef;\n  border-radius: 50%;\n`;\n\nexport default Avatar;\n")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u8fd0\u884c\u7ed3\u679c\u5e94\u8be5\u662f\u4e00\u6837\u7684\u3002"),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u91c7\u7528\u76ee\u5f55\u5f62\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar/index.tsx")," \u800c\u4e0d\u662f\u5355\u6587\u4ef6\u5f62\u5f0f ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar.tsx")," \u7684\u539f\u56e0\u662f\uff0c\u4e4b\u540e\u53ef\u4ee5\u65b9\u4fbf\u7684\u5728\u76ee\u5f55\u5185\u90e8\u589e\u52a0\u5b50\u6587\u4ef6\uff0c\u5305\u62ec\u4e13\u7528\u7684\u8d44\u6e90\uff08\u56fe\u7247\u7b49\uff09\u3001\u4e13\u7528\u5b50\u7ec4\u4ef6\u3001CSS \u6587\u4ef6\u7b49\u3002")),(0,r.kt)("h2",{id:"\u4f7f\u7528-utility"},"\u4f7f\u7528 Utility"),(0,r.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u4f7f\u7528 style-components \u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Avatar>")," \u7ec4\u4ef6\uff0c\u4f46\u5f53\u524d\u7684 UI \u4ecd\u7136\u4e0d\u80fd\u8ba9\u4eba\u6ee1\u610f\uff0c\u7f3a\u4e4f\u4e13\u4e1a\u611f\uff0c\u4f8b\u5982\u5217\u8868\u9879\u5185\u90e8\u7684\u5e03\u5c40\u6709\u70b9\u7c97\u7cd9\uff0c\u5f88\u591a\u5730\u65b9\u6ca1\u5bf9\u9f50\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u81ea\u5df1\u6765\u5b9e\u73b0\u4e00\u4e2a\u66f4\u597d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," \u7ec4\u4ef6\uff0c\u5b9e\u73b0\u8fd9\u6837\u7684\u8bbe\u8ba1\u7a3f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/design2.png",alt:"design"})),(0,r.kt)("p",null,"\u8fd9\u6b21\u8981\u5b9e\u73b0\u7684 UI \u66f4\u590d\u6742\uff0c\u6709\u5185\u90e8\u7ed3\u6784\uff0c\u4f46\u53e6\u4e00\u65b9\u9762\uff0c\u5e76\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Avatar>")," \u7ec4\u4ef6\u7684",(0,r.kt)("strong",{parentName:"p"},"\u5f88\u7c97\u7684\u4eae\u84dd\u8272\u8fb9\u6846"),"\u8fd9\u6837\u5f88\u7279\u6b8a\u7684 UI\uff0c\u90fd\u662f\u5f88\u5e38\u89c4\u7684\u6c34\u5e73\u5782\u76f4\u5e03\u5c40\u3001\u5c45\u4e2d\u3001\u5b57\u4f53\u6837\u5f0f\u7b49\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5176\u5b9e\u6839\u672c\u6ca1\u5fc5\u8981\u5199 CSS\uff0c\u6709\u66f4\u9ad8\u6548\u7684\u3001\u8ddf styled-components \u4e92\u8865\u7684\u5b9e\u73b0\u65b9\u5f0f\uff1a",(0,r.kt)("strong",{parentName:"p"},"Utility Class"),"\u3002"),(0,r.kt)("p",null,"Modern.js \u96c6\u6210\u4e86\u4e3b\u6d41\u3001\u8f7b\u91cf\u3001\u901a\u7528\u7684 Utility Class \u5de5\u5177\u5e93 ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS"),"\u3002"),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run new"),"\uff0c\u8fdb\u884c\u5982\u4e0b\u9009\u62e9\uff0c\u5f00\u542f Tailwind CSS\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd \u542f\u7528 Tailwind CSS \u652f\u6301\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/page.tsx")," \u9876\u90e8\u5f15\u5165 Tailwind CSS \u7684 css \u6587\u4ef6\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u5feb\u901f\u5b9e\u73b0\u4e13\u4e1a\u7684 UI\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\n")),(0,r.kt)("p",null,"\u5148\u521b\u5efa Item \u7ec4\u4ef6\uff1a"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/components/Item\ntouch src/components/Item/index.tsx\n"))),(0,r.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/components/Item\nni src/components/Item/index.tsx\n")))),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/page.tsx"),"\uff0c\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," \u5b9e\u73b0\u4ea4\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," \u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { List } from 'antd';\nimport 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport Item from '../components/Item';\n\nconst getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n  { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n]);\n\nfunction Index() {\n  return (\n    <div className=\"container lg mx-auto\">\n      <List\n        dataSource={mockData}\n        renderItem={info => <Item key={info.name} info={info} />}\n      />\n    </div>\n  );\n}\n\nexport default Index;\n")),(0,r.kt)("p",null,"\u5728\u7236\u5bb9\u5668\u7684\u4e0a\u4f7f\u7528\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/container"},"Utility Class")," \uff0c\u5feb\u901f\u5b9e\u73b0\u4e86\u6700\u57fa\u672c\u7684\u6700\u5927\u5bbd\u5ea6\u3001\u5c45\u4e2d\u7b49\u6837\u5f0f\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components/Item/index.tsx"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import Avatar from \'../Avatar\';\n\ntype InfoProps = {\n  avatar: string;\n  name: string;\n  email: string;\n  archived?: boolean;\n};\n\nconst Item = ({ info }: { info: InfoProps }) => {\n  const { avatar, name, email, archived } = info;\n  return (\n    <div className="flex p-4 items-center border-gray-200 border-b">\n      <Avatar src={avatar} />\n      <div className="ml-4 flex-1 flex justify-between">\n        <div className="flex-1">\n          <p>{name}</p>\n          <p>{email}</p>\n        </div>\n        <button\n          type="button"\n          disabled={archived}\n          className={`bg-blue-500  text-white font-bold\n            py-2 px-4 rounded-full hover:bg-blue-700`}\n        >\n          Archive\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default Item;\n')),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u53ef\u4ee5\u770b\u5230\u9884\u671f\u7684\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/result2.png",alt:"result"})),(0,r.kt)("p",null,"\u6211\u4eec\u53ea\u4f7f\u7528\u4e86\u5c11\u91cf Utility Class\uff0c\u6bd4\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/display/"},"Flex"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/padding/"},"Padding"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/margin/"},"Margin"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/text-color/"},"Text"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/font-weight/"},"Font"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/border-width"},"Border"),"\uff0c\u4e0d\u5199\u4e00\u884c CSS \u5c31\u5b9e\u73b0\u4e86\u7b26\u5408\u8bbe\u8ba1\u7a3f\u7684\u4e13\u4e1a UI\u3002"),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49-utility-class"},"\u81ea\u5b9a\u4e49 Utility Class"),(0,r.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0\u65b0\u7684 Utility Class\uff0c\u65b9\u4fbf\u5728\u4ee3\u7801\u95f4\u590d\u7528\u3002"),(0,r.kt)("p",null,"Utility Class \u672c\u8eab\u4e5f\u662f\u4e00\u79cd",(0,r.kt)("strong",{parentName:"p"},"\u9762\u5411\u7ec4\u4ef6"),"\u7684\u6280\u672f\uff08\u5c06\u4e0d\u540c class \u7528\u5728\u4e00\u4e2a\u7ec4\u4ef6\u4e0a\uff0c\u7b49\u4ef7\u4e8e\u7ed9\u8fd9\u4e2a\u7ec4\u4ef6\u8bbe\u7f6e\u4e86\u4e00\u4e9b\u6765\u81ea\u57fa\u7c7b\u7684\u5c5e\u6027\uff09\uff0c\u4f46 Utility Class \u7684 classname \u662f\u5168\u5c40\u7684\uff08\u56e0\u4e3a\u8981\u7528\u5728\u4efb\u610f\u7ec4\u4ef6/\u5143\u7d20\u4e0a\uff09\uff0c\u5f88\u9002\u5408\u7528\u72ec\u7acb CSS \u6587\u4ef6\u6765\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 CSS \u6587\u4ef6\uff1a"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p src/styles\ntouch src/styles/utils.css\n"))),(0,r.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"mkdir -p src/styles\nni src/styles/utils.css\n")))),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/page.tsx")," \u91cc\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.css"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import '../styles/utils.css';\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/styles/utils.css")," \u91cc\u5b9e\u73b0\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"custom-text-gray")," \u7684 Utility Class\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},":root {\n  --custom-text-color:rgb(113, 128, 150);\n}\n\n.custom-text-gray {\n  color: var(--custom-text-color);\n}\n")),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Modern.js \u96c6\u6210\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/basic-features/css/postcss"},"PostCSS"),"\uff0c\u652f\u6301\u73b0\u4ee3 CSS \u8bed\u6cd5\u7279\u6027\uff0c\u6bd4\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"},"custom properties"),"\u3002")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/routes/components/Item/index.tsx")," \u91cc\u4f7f\u7528\uff0c\u628a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<div className="ml-4 flex-1 flex justify-between">\n')),(0,r.kt)("p",null,"\u6539\u6210\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<div className="ml-4 custom-text-gray flex-1 flex justify-between">\n')),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u53ef\u4ee5\u770b\u5230\u5b57\u4f53\u989c\u8272\u6539\u53d8\u4e86\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/06/result3.png",alt:"design2"})),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u5904\u53ea\u662f\u4e3a\u4e86\u6f14\u793a Utility Class \u7528\u6cd5\u3002\u771f\u5b9e\u9879\u76ee\u4e2d\uff0c\u5728\u6709 Tailwind CSS \u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u79cd Utility Class \u6ca1\u4ec0\u4e48\u4ef7\u503c\uff0c\u5e94\u8be5\u901a\u8fc7\u914d\u7f6e Design System \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/customizing-colors"},(0,r.kt)("strong",{parentName:"a"},"theme"))," \u6765\u589e\u52a0\u5b57\u4f53\u989c\u8272\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"utils.css")," \u4e5f\u53ef\u4ee5\u5199\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.scss")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.less"),"\uff0cModern.js \u5bf9 SCSS \u548c Less \u540c\u6837\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4e0d\u8fc7\u5728 PostCSS \u7684\u652f\u6301\u4e0b\uff0c\u73b0\u4ee3 CSS \u5e94\u8be5\u8db3\u4ee5\u6ee1\u8db3\u8fd9\u4e9b\u5f00\u53d1\u9700\u6c42\uff0c\u6027\u80fd\u76f8\u8f83\u4e8e\u9884\u5904\u7406\u5668\u4e5f\u66f4\u597d\uff0c\u5efa\u8bae\u4f18\u5148\u7528 .css \u6587\u4ef6\u3002")))}d.isMDXComponent=!0}}]);