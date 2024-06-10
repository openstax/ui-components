import{s as o,R as s,j as t,a as e}from"./index.ea1552af.js";import{T as a}from"./Tabs.7f74be74.js";import{m,n as l,o as n}from"./module.0521079f.js";import"./theme.543648ff.js";import"./palette.15e4d008.js";const d=o(m)`
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
`,$=()=>{const[i,c]=s.useState("medium");return t(h,{children:[t("label",{children:[e("b",{children:"Size"}),e("br",{}),e("select",{onChange:r=>c(r.currentTarget.value),defaultValue:i,children:["large","medium","small"].map(r=>e("option",{children:r},r))})]}),t(a,{size:i,children:[t(l,{"aria-label":"Items",children:[e(n,{id:"one",children:"First Item"}),e(n,{id:"two",children:"Second Item"}),e(n,{id:"three",children:"Last Item"})]}),e(d,{id:"one",children:"First Content Panel"}),e(d,{id:"two",children:"Second Content Panel"}),e(d,{id:"three",children:"Third Content Panel"})]}),e("br",{}),t(a,{variant:"button-bar",size:i,children:[t(l,{"aria-label":"Items",children:[e(n,{id:"one",children:"First Item"}),e(n,{id:"two",children:"Second Item"}),e(n,{id:"three",children:"Last Item"})]}),e(d,{id:"one",children:"First Content Panel"}),e(d,{id:"two",children:"Second Content Panel"}),e(d,{id:"three",children:"Third Content Panel"})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{$ as Examples};
