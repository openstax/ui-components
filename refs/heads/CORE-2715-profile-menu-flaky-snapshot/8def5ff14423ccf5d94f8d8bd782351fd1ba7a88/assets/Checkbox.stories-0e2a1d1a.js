import{s as n,a as d,F as i,j as l}from"./index-2c7a4860.js";import{C as o}from"./Checkbox-d1d55226.js";import"./Checkbox-7f80dab0.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";const h=n.div`
  text-transform: capitalize;
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,t=(r,e)=>d(h,{children:[d("h2",{children:["Size ",e]}),l(o,{size:e,variant:r,children:"Checkbox label"}),l(o,{size:e,variant:r,defaultChecked:!0,children:"Checkbox label"}),l(o,{size:e,variant:r,defaultChecked:!0,bold:!0,children:"Checkbox label"})]}),p=()=>d(i,{children:[t("primary",1.4),t("primary",1.6),t("primary",1.8),t("primary",2)]}),C=()=>d(i,{children:[t("light",1.4),t("light",1.6),t("light",1.8),t("light",2)]}),c=(r,e)=>d(h,{children:[d("h2",{children:[r," - Size ",e]}),l(o,{size:e,variant:r,disabled:!0,children:"Checkbox label"}),l(o,{size:e,variant:r,disabled:!0,defaultChecked:!0,children:"Checkbox label"}),l(o,{size:e,variant:r,disabled:!0,defaultChecked:!0,bold:!0,children:"Checkbox label"})]}),k=()=>d(i,{children:[c("primary",1.6),c("primary",2),c("light",1.6),c("light",2)]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{k as Disabled,C as Light,p as Primary};
