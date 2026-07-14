import{s as d,j as t,F as o,a as r}from"./index.244dd005.js";import{T as i}from"./TreeCheckbox.cefb5525.js";import"./RSPContexts.module.385aa849.js";import"./useFocusRing.module.4e35c6bc.js";import"./useToggleState.module.f0f4d84f.js";import"./VisuallyHidden.module.8943f7b5.js";import"./sharedCheckboxStyles.031e40d7.js";import"./theme.469067e1.js";import"./palette.5e342580.js";const a=d.div`
  text-transform: capitalize;

  & + & {
    margin-top: 3.2rem;
  }

  > * + * {
    margin-top: 0.5rem;
  }
`,e=(c,l,n=!1)=>t(a,{children:[t("h2",{children:["Size ",l]}),r(i,{slot:"selection",size:l,variant:c,isIndeterminate:n,children:"Checkbox label"}),r(i,{slot:"selection",size:l,variant:c,isIndeterminate:n,defaultSelected:!0,children:"Checkbox label"}),r(i,{slot:"selection",size:l,variant:c,isIndeterminate:n,defaultSelected:!0,bold:!0,children:"Checkbox label"})]}),g=()=>t(o,{children:[e("primary",1.4),e("primary",1.6),e("primary",1.8),e("primary",2)]}),k=()=>t(o,{children:[e("light",1.4),e("light",1.6),e("light",1.8),e("light",2)]}),C=()=>t(o,{children:[e("primary",1.4,!0),e("primary",1.6,!0),e("primary",1.8,!0),e("primary",2,!0)]}),w=()=>t(o,{children:[e("error",1.4),e("error",1.6),e("error",1.8),e("error",2)]}),D=()=>r(o,{children:t(a,{children:[r("h2",{children:"Disabled"}),r(i,{slot:"selection",variant:"primary",size:1.6,isDisabled:!0,children:"Checkbox label"}),r(i,{slot:"selection",variant:"primary",size:1.6,isDisabled:!0,defaultSelected:!0,children:"Checkbox label"})]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Disabled,w as Error,C as IsIndeterminate,k as Light,g as Primary};
