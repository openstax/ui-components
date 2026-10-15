import{s as d,j as t,F as o,a as r}from"./index-117e0f76.js";import{T as i}from"./TreeCheckbox-adf69302.js";import"./VisuallyHidden-f36f2b88.js";import"./useFocusRing-8126d61d.js";import"./useFocusable-9499235a.js";import"./useToggleState-00b99ec4.js";import"./useControlledState-cfd1d50d.js";import"./Checkbox-e115ef8b.js";import"./theme-bc69133b.js";import"./palette-97ed00c9.js";/* empty css              */const a=d.div`
  text-transform: capitalize;

  & + & {
    margin-top: 3.2rem;
  }

  > * + * {
    margin-top: 0.5rem;
  }
`,e=(c,l,n=!1)=>t(a,{children:[t("h2",{children:["Size ",l]}),r(i,{slot:"selection",size:l,variant:c,isIndeterminate:n,children:"Checkbox label"}),r(i,{slot:"selection",size:l,variant:c,isIndeterminate:n,defaultSelected:!0,children:"Checkbox label"}),r(i,{slot:"selection",size:l,variant:c,isIndeterminate:n,defaultSelected:!0,bold:!0,children:"Checkbox label"})]}),C=()=>t(o,{children:[e("primary",1.4),e("primary",1.6),e("primary",1.8),e("primary",2)]}),w=()=>t(o,{children:[e("light",1.4),e("light",1.6),e("light",1.8),e("light",2)]}),D=()=>t(o,{children:[e("primary",1.4,!0),e("primary",1.6,!0),e("primary",1.8,!0),e("primary",2,!0)]}),S=()=>t(o,{children:[e("error",1.4),e("error",1.6),e("error",1.8),e("error",2)]}),j=()=>r(o,{children:t(a,{children:[r("h2",{children:"Disabled"}),r(i,{slot:"selection",variant:"primary",size:1.6,isDisabled:!0,children:"Checkbox label"}),r(i,{slot:"selection",variant:"primary",size:1.6,isDisabled:!0,defaultSelected:!0,children:"Checkbox label"})]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{j as Disabled,S as Error,D as IsIndeterminate,w as Light,C as Primary};
