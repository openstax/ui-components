import{s as l,R as m,j as t,a as e}from"./index-95baafca.js";import{T as a,$ as o,a as n,b as s}from"./Tabs-0e41c436.js";/* empty css              */import"./Collection-c2a40f83.js";import"./useFocusRing-f9f4a01b.js";import"./Hidden-b9734d08.js";import"./useFocusable-07f6b51a.js";import"./FocusScope-267fe387.js";import"./context-6436d33a.js";import"./useControlledState-bd0e6bef.js";import"./useHasTabbableChild-15aede9c.js";const i=l(s)`
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
