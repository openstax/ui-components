import{s as c,a as e,R as d,j as l}from"./index.f976ca7f.js";import{t as p,b as u,a as h,c as b}from"./Tabs.74876ac8.js";import"./theme.eeba9004.js";import"./palette.15e4d008.js";import"./SelectionManager.module.aa8ac38b.js";import"./context.module.1b130b0b.js";import"./focusSafely.module.e0c62841.js";import"./FocusScope.module.1910c327.js";import"./useFocusRing.module.90eed152.js";import"./isScrollable.module.6d337603.js";const S=c.div`
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