import{s as n,a as d,F as i,j as l}from"./index-93d17b08.js";import{C as o}from"./Checkbox-e837e192.js";import"./Checkbox-9fcb4b94.js";import"./theme-9fff7edc.js";import"./palette-d465a6d8.js";/* empty css              */const h=n.div`
  text-transform: capitalize;
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,t=(r,e)=>d(h,{children:[d("h2",{children:["Size ",e]}),l(o,{size:e,variant:r,children:"Checkbox label"}),l(o,{size:e,variant:r,defaultChecked:!0,children:"Checkbox label"}),l(o,{size:e,variant:r,defaultChecked:!0,bold:!0,children:"Checkbox label"})]}),C=()=>d(i,{children:[t("primary",1.4),t("primary",1.6),t("primary",1.8),t("primary",2)]}),k=()=>d(i,{children:[t("light",1.4),t("light",1.6),t("light",1.8),t("light",2)]}),c=(r,e)=>d(h,{children:[d("h2",{children:[r," - Size ",e]}),l(o,{size:e,variant:r,disabled:!0,children:"Checkbox label"}),l(o,{size:e,variant:r,disabled:!0,defaultChecked:!0,children:"Checkbox label"}),l(o,{size:e,variant:r,disabled:!0,defaultChecked:!0,bold:!0,children:"Checkbox label"})]}),x=()=>d(i,{children:[c("primary",1.6),c("primary",2),c("light",1.6),c("light",2)]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Disabled,k as Light,C as Primary};
