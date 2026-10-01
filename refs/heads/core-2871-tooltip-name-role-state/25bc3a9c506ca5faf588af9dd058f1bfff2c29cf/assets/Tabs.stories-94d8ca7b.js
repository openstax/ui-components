import{s as l,R as m,a as t,j as e}from"./index-4bf0fe39.js";import{T as a,$ as o,a as n,b as s}from"./Tabs-a9143c06.js";import"./palette-97ed00c9.js";import"./Collection-cfc95ce4.js";import"./useFocusRing-5099f795.js";import"./Hidden-f9649c51.js";import"./useFocusable-8961e2c2.js";import"./FocusScope-bfbf0742.js";import"./context-13fc5389.js";import"./useHasTabbableChild-507bbe61.js";const d=l(s)`
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
`,P=()=>{const[r,c]=m.useState("medium");return t(h,{children:[t("label",{children:[e("b",{children:"Size"}),e("br",{}),e("select",{onChange:i=>c(i.currentTarget.value),defaultValue:r,children:["large","medium","small"].map(i=>e("option",{children:i},i))})]}),t(a,{size:r,children:[t(o,{"aria-label":"Items",children:[e(n,{id:"one",children:"First Item"}),e(n,{id:"two",children:"Second Item"}),e(n,{id:"three",children:"Last Item"})]}),e(d,{id:"one",children:"First Content Panel"}),e(d,{id:"two",children:"Second Content Panel"}),e(d,{id:"three",children:"Third Content Panel"})]}),e("br",{}),t(a,{variant:"button-bar",size:r,children:[t(o,{"aria-label":"Items",children:[e(n,{id:"one",children:"First Item"}),e(n,{id:"two",children:"Second Item"}),e(n,{id:"three",children:"Last Item"})]}),e(d,{id:"one",children:"First Content Panel"}),e(d,{id:"two",children:"Second Content Panel"}),e(d,{id:"three",children:"Third Content Panel"})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{P as Examples};
