import{s as l,R as m,a as t,j as e}from"./index-5c4a7fe3.js";import{T as a,$ as o,a as n,b as s}from"./Tabs-5d98183a.js";import"./palette-97ed00c9.js";/* empty css              */import"./Collection-64a115cc.js";import"./useFocusRing-f616c5c6.js";import"./Hidden-4f6ef5b8.js";import"./useFocusable-0a7b6916.js";import"./FocusScope-cdcccf00.js";import"./context-562d9161.js";import"./useHasTabbableChild-9f41072e.js";const i=l(s)`
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
`,T=()=>{const[d,c]=m.useState("medium");return t(h,{children:[t("label",{children:[e("b",{children:"Size"}),e("br",{}),e("select",{onChange:r=>c(r.currentTarget.value),defaultValue:d,children:["large","medium","small"].map(r=>e("option",{children:r},r))})]}),t(a,{size:d,children:[t(o,{"aria-label":"Items",children:[e(n,{id:"one",children:"First Item"}),e(n,{id:"two",children:"Second Item"}),e(n,{id:"three",children:"Last Item"})]}),e(i,{id:"one",children:"First Content Panel"}),e(i,{id:"two",children:"Second Content Panel"}),e(i,{id:"three",children:"Third Content Panel"})]}),e("br",{}),t(a,{variant:"button-bar",size:d,children:[t(o,{"aria-label":"Items",children:[e(n,{id:"one",children:"First Item"}),e(n,{id:"two",children:"Second Item"}),e(n,{id:"three",children:"Last Item"})]}),e(i,{id:"one",children:"First Content Panel"}),e(i,{id:"two",children:"Second Content Panel"}),e(i,{id:"three",children:"Third Content Panel"})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{T as Examples};
