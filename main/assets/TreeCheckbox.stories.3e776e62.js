import{s as d,j as t,F as l,a as r}from"./index.6a46d10b.js";import{T as o}from"./TreeCheckbox.4f92f5de.js";import"./VisuallyHidden.module.1f4c5df1.js";import"./useFocusRing.module.ec264aa1.js";import"./useToggleState.module.e726a14e.js";import"./sharedCheckboxStyles.5039d45f.js";import"./theme.6118982a.js";import"./palette.15e4d008.js";const n=d.div`
  text-transform: capitalize;

  & + & {
    margin-top: 3.2rem;
  }

  > * + * {
    margin-top: 0.5rem;
  }
`,e=(c,i)=>t(n,{children:[t("h2",{children:["Size ",i]}),r(o,{slot:"selection",size:i,variant:c,children:"Checkbox label"}),r(o,{slot:"selection",size:i,variant:c,defaultSelected:!0,children:"Checkbox label"}),r(o,{slot:"selection",size:i,variant:c,defaultSelected:!0,bold:!0,children:"Checkbox label"})]}),y=()=>t(l,{children:[e("primary",1.4),e("primary",1.6),e("primary",1.8),e("primary",2)]}),f=()=>t(l,{children:[e("light",1.4),e("light",1.6),e("light",1.8),e("light",2)]}),g=()=>t(l,{children:[e("error",1.4),e("error",1.6),e("error",1.8),e("error",2)]}),k=()=>r(l,{children:t(n,{children:[r("h2",{children:"Disabled"}),r(o,{slot:"selection",variant:"primary",size:1.6,isDisabled:!0,children:"Checkbox label"}),r(o,{slot:"selection",variant:"primary",size:1.6,isDisabled:!0,defaultSelected:!0,children:"Checkbox label"})]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{k as Disabled,g as Error,f as Light,y as Primary};
