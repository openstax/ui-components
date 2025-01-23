import{s as l,R as m,j as t,a as e}from"./index.1b9b4ac1.js";import{e as s,T as a,$ as o,d as n}from"./Tabs.d6b6c753.js";import"./theme.aa5cf5ba.js";import"./palette.15e4d008.js";import"./Collection.module.293d0b1d.js";import"./context.module.bd5d5f40.js";import"./Hidden.module.c899cf57.js";import"./FocusScope.module.c0ac4f92.js";const d=l(s)`
  margin: 1rem 0;
  padding: 5rem;
  display: flex;
  align-items: center;
  border: 0.1rem solid #d5d5d5;
`,h=l.div`
  padding: 2.4rem;

  .react-aria-TabList {
    margin-top: 4.8rem;
  }
`,I=()=>{const[r,c]=m.useState("medium");return t(h,{children:[t("label",{children:[e("b",{children:"Size"}),e("br",{}),e("select",{onChange:i=>c(i.currentTarget.value),defaultValue:r,children:["large","medium","small"].map(i=>e("option",{children:i},i))})]}),t(a,{size:r,children:[t(o,{"aria-label":"Items",children:[e(n,{id:"one",children:"First Item"}),e(n,{id:"two",children:"Second Item"}),e(n,{id:"three",children:"Last Item"})]}),e(d,{id:"one",children:"First Content Panel"}),e(d,{id:"two",children:"Second Content Panel"}),e(d,{id:"three",children:"Third Content Panel"})]}),e("br",{}),t(a,{variant:"button-bar",size:r,children:[t(o,{"aria-label":"Items",children:[e(n,{id:"one",children:"First Item"}),e(n,{id:"two",children:"Second Item"}),e(n,{id:"three",children:"Last Item"})]}),e(d,{id:"one",children:"First Content Panel"}),e(d,{id:"two",children:"Second Content Panel"}),e(d,{id:"three",children:"Third Content Panel"})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{I as Examples};
