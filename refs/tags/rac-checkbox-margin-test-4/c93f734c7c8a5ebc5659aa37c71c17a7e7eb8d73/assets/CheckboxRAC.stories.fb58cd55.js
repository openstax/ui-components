import{s as d,j as t,F as l,a as r}from"./index.aca28bb5.js";import{C as o}from"./CheckboxRAC.8cefd9f5.js";import"./theme.927cb98c.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.52cbe909.js";import"./useFocusRing.module.d7a713a9.js";import"./useToggleState.module.ff7f3473.js";import"./sharedCheckboxStyles.18544e5c.js";const n=d.div`
  text-transform: capitalize;

  & + & {
    margin-top: 3.2rem;
  }

  > * + * {
    margin-top: 0.5rem;
  }
`,e=(c,i)=>t(n,{children:[t("h2",{children:["Size ",i]}),r(o,{slot:"selection",size:i,variant:c,children:"Checkbox label"}),r(o,{slot:"selection",size:i,variant:c,defaultSelected:!0,children:"Checkbox label"}),r(o,{slot:"selection",size:i,variant:c,defaultSelected:!0,bold:!0,children:"Checkbox label"})]}),y=()=>t(l,{children:[e("primary",1.4),e("primary",1.6),e("primary",1.8),e("primary",2)]}),C=()=>t(l,{children:[e("light",1.4),e("light",1.6),e("light",1.8),e("light",2)]}),f=()=>t(l,{children:[e("error",1.4),e("error",1.6),e("error",1.8),e("error",2)]}),g=()=>r(l,{children:t(n,{children:[r("h2",{children:"Disabled"}),r(o,{slot:"selection",variant:"primary",size:1.6,isDisabled:!0,children:"Checkbox label"}),r(o,{slot:"selection",variant:"primary",size:1.6,isDisabled:!0,defaultSelected:!0,children:"Checkbox label"})]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Disabled,f as Error,C as Light,y as Primary};
