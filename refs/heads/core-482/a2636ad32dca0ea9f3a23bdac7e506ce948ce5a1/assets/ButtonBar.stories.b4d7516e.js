import{s as c,a as e,R as d,j as l}from"./index.0a27c5ce.js";import{t as p,b as u,a as h,c as b}from"./Tabs.12d82910.js";import"./theme.3d34f3e6.js";import"./palette.15e4d008.js";import"./SelectionManager.module.7f4f7158.js";import"./context.module.cbef6687.js";import"./focusSafely.module.baee9b88.js";import"./FocusScope.module.ba3a5f3c.js";import"./useFocusRing.module.b05559ad.js";import"./isScrollable.module.6d6276d4.js";const S=c.div`
  ${p}
  ${u}

  > * {
    all: unset;
    ${h}
    ${b}
  }
`,o=({size:s="medium",children:n,...a})=>e(S,{size:s,...a,children:n}),C=c.div`
  padding: 2.4rem;
`,E=()=>{const[s,n]=d.useState("medium"),[a,m]=d.useState([0,2,null]),i=(t,r)=>{m([...a.slice(0,t),r,...a.slice(t+1)])};return l(C,{children:[l("label",{children:[e("b",{children:"Size"}),e("br",{}),e("select",{onChange:t=>n(t.currentTarget.value),defaultValue:s,children:["large","medium","small"].map(t=>e("option",{children:t},t))})]}),e("br",{}),e("br",{}),e(o,{size:s,children:["First Item","Second Item"].map((t,r)=>e("a",{"data-selected":a[0]===r,onClick:()=>i(0,r),children:t}))}),e("br",{}),e("br",{}),e(o,{size:s,children:["First Item","Second Item","Third Item"].map((t,r)=>e("a",{"data-selected":a[1]===r,onClick:()=>i(1,r),children:t}))}),e("br",{}),e("br",{}),e(o,{size:s,children:["First Item with a really long title","Second Item","Third Item"].map((t,r)=>e("a",{"data-selected":a[2]===r,onClick:()=>i(2,r),children:t}))})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as Examples};
