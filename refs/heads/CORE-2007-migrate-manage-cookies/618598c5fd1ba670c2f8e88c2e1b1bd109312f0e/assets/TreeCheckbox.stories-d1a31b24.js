import{s as d,a as t,F as o,j as r}from"./index-39bc29f6.js";import{T as i}from"./TreeCheckbox-4685cb6c.js";import"./VisuallyHidden-b91c0eb6.js";import"./useFocusRing-6cc1ca05.js";import"./useToggleState-11f40e95.js";import"./Checkbox-cc542e87.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";const a=d.div`
  text-transform: capitalize;

  & + & {
    margin-top: 3.2rem;
  }

  > * + * {
    margin-top: 0.5rem;
  }
`,e=(c,l,n=!1)=>t(a,{children:[t("h2",{children:["Size ",l]}),r(i,{slot:"selection",size:l,variant:c,isIndeterminate:n,children:"Checkbox label"}),r(i,{slot:"selection",size:l,variant:c,isIndeterminate:n,defaultSelected:!0,children:"Checkbox label"}),r(i,{slot:"selection",size:l,variant:c,isIndeterminate:n,defaultSelected:!0,bold:!0,children:"Checkbox label"})]}),f=()=>t(o,{children:[e("primary",1.4),e("primary",1.6),e("primary",1.8),e("primary",2)]}),g=()=>t(o,{children:[e("light",1.4),e("light",1.6),e("light",1.8),e("light",2)]}),k=()=>t(o,{children:[e("primary",1.4,!0),e("primary",1.6,!0),e("primary",1.8,!0),e("primary",2,!0)]}),C=()=>t(o,{children:[e("error",1.4),e("error",1.6),e("error",1.8),e("error",2)]}),w=()=>r(o,{children:t(a,{children:[r("h2",{children:"Disabled"}),r(i,{slot:"selection",variant:"primary",size:1.6,isDisabled:!0,children:"Checkbox label"}),r(i,{slot:"selection",variant:"primary",size:1.6,isDisabled:!0,defaultSelected:!0,children:"Checkbox label"})]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Disabled,C as Error,k as IsIndeterminate,g as Light,f as Primary};
