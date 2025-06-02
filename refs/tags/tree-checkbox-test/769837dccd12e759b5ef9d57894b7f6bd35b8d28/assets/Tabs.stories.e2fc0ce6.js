import{s as o,R as s,j as t,a as e}from"./index.2434011c.js";import{e as m,T as a,$ as l,d as n}from"./Tabs.bfa965aa.js";import"./theme.9e2be59f.js";import"./palette.15e4d008.js";import"./Collection.module.28de5bb6.js";import"./useFocusRing.module.c3aedc56.js";import"./context.module.f51aa8dc.js";const d=o(m)`
  margin: 1rem 0;
  padding: 5rem;
  display: flex;
  align-items: center;
  border: 0.1rem solid #d5d5d5;
`,h=o.div`
  padding: 2.4rem;

  .react-aria-TabList {
    margin-top: 4.8rem;
  }
`,x=()=>{const[r,c]=s.useState("medium");return t(h,{children:[t("label",{children:[e("b",{children:"Size"}),e("br",{}),e("select",{onChange:i=>c(i.currentTarget.value),defaultValue:r,children:["large","medium","small"].map(i=>e("option",{children:i},i))})]}),t(a,{size:r,children:[t(l,{"aria-label":"Items",children:[e(n,{id:"one",children:"First Item"}),e(n,{id:"two",children:"Second Item"}),e(n,{id:"three",children:"Last Item"})]}),e(d,{id:"one",children:"First Content Panel"}),e(d,{id:"two",children:"Second Content Panel"}),e(d,{id:"three",children:"Third Content Panel"})]}),e("br",{}),t(a,{variant:"button-bar",size:r,children:[t(l,{"aria-label":"Items",children:[e(n,{id:"one",children:"First Item"}),e(n,{id:"two",children:"Second Item"}),e(n,{id:"three",children:"Last Item"})]}),e(d,{id:"one",children:"First Content Panel"}),e(d,{id:"two",children:"Second Content Panel"}),e(d,{id:"three",children:"Third Content Panel"})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Examples};
