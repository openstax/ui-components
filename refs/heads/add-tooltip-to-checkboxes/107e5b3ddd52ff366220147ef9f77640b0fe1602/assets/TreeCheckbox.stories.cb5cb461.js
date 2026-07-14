import{s as d,j as t,F as o,a as r}from"./index.4e69b304.js";import{T as i}from"./TreeCheckbox.92bc35fd.js";import"./RSPContexts.module.673f5d1f.js";import"./useFocusRing.module.89e2b32a.js";import"./useToggleState.module.1bf2054f.js";import"./VisuallyHidden.module.55906f73.js";import"./sharedCheckboxStyles.a0c2d325.js";import"./theme.469067e1.js";import"./palette.5e342580.js";const a=d.div`
  text-transform: capitalize;

  & + & {
    margin-top: 3.2rem;
  }

  > * + * {
    margin-top: 0.5rem;
  }
`,e=(c,l,n=!1)=>t(a,{children:[t("h2",{children:["Size ",l]}),r(i,{slot:"selection",size:l,variant:c,isIndeterminate:n,children:"Checkbox label"}),r(i,{slot:"selection",size:l,variant:c,isIndeterminate:n,defaultSelected:!0,children:"Checkbox label"}),r(i,{slot:"selection",size:l,variant:c,isIndeterminate:n,defaultSelected:!0,bold:!0,children:"Checkbox label"})]}),g=()=>t(o,{children:[e("primary",1.4),e("primary",1.6),e("primary",1.8),e("primary",2)]}),k=()=>t(o,{children:[e("light",1.4),e("light",1.6),e("light",1.8),e("light",2)]}),C=()=>t(o,{children:[e("primary",1.4,!0),e("primary",1.6,!0),e("primary",1.8,!0),e("primary",2,!0)]}),w=()=>t(o,{children:[e("error",1.4),e("error",1.6),e("error",1.8),e("error",2)]}),D=()=>r(o,{children:t(a,{children:[r("h2",{children:"Disabled"}),r(i,{slot:"selection",variant:"primary",size:1.6,isDisabled:!0,children:"Checkbox label"}),r(i,{slot:"selection",variant:"primary",size:1.6,isDisabled:!0,defaultSelected:!0,children:"Checkbox label"})]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Disabled,w as Error,C as IsIndeterminate,k as Light,g as Primary};
