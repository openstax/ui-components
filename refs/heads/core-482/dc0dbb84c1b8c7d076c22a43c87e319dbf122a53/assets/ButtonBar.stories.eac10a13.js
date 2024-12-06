import{s as c,a as e,R as d,j as l}from"./index.52210f8f.js";import{t as p,b as u,a as h,c as b}from"./Tabs.2bcb7b63.js";import"./theme.a2fe6e85.js";import"./palette.15e4d008.js";import"./SelectionManager.module.a4f93b57.js";import"./context.module.2e90d596.js";import"./focusSafely.module.6462c9ae.js";import"./FocusScope.module.b751d6d7.js";import"./useFocusRing.module.9b3ecc29.js";import"./isScrollable.module.9a3de2cc.js";const S=c.div`
  ${p}
  ${u}

  > * {
    all: unset;
    ${h}
    ${b}
  }
`,o=({size:s="medium",children:n,...a})=>e(S,{size:s,...a,children:n}),C=c.div`
  padding: 2.4rem;
`,E=()=>{const[s,n]=d.useState("medium"),[a,m]=d.useState([0,2,null]),i=(t,r)=>{m([...a.slice(0,t),r,...a.slice(t+1)])};return l(C,{children:[l("label",{children:[e("b",{children:"Size"}),e("br",{}),e("select",{onChange:t=>n(t.currentTarget.value),defaultValue:s,children:["large","medium","small"].map(t=>e("option",{children:t},t))})]}),e("br",{}),e("br",{}),e(o,{size:s,children:["First Item","Second Item"].map((t,r)=>e("a",{"data-selected":a[0]===r,onClick:()=>i(0,r),children:t},r))}),e("br",{}),e("br",{}),e(o,{size:s,children:["First Item","Second Item","Third Item"].map((t,r)=>e("a",{"data-selected":a[1]===r,onClick:()=>i(1,r),children:t},r))}),e("br",{}),e("br",{}),e(o,{size:s,children:["First Item with a really long title","Second Item","Third Item"].map((t,r)=>e("a",{"data-selected":a[2]===r,onClick:()=>i(2,r),children:t},r))})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as Examples};
