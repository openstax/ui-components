import{s as l,j as r,F as c,a as d}from"./index.c4c6dca5.js";import{C as i}from"./Checkbox.64c1c8da.js";import"./theme.780a3272.js";import"./palette.15e4d008.js";const n=l.div`
  text-transform: capitalize;
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,e=(o,t)=>r(n,{children:[r("h2",{children:["Size ",t]}),d(i,{size:t,variant:o,children:"Checkbox label"}),d(i,{size:t,variant:o,defaultChecked:!0,children:"Checkbox label"}),d(i,{size:t,variant:o,defaultChecked:!0,bold:!0,children:"Checkbox label"})]}),p=()=>r(c,{children:[e("primary",1.4),e("primary",1.6),e("primary",1.8),e("primary",2)]}),u=()=>r(c,{children:[e("light",1.4),e("light",1.6),e("light",1.8),e("light",2)]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{u as Light,p as Primary};
