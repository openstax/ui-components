import{s as l,j as r,F as c,a as i}from"./index.0226d2e0.js";import{C as d}from"./Checkbox.11cb9432.js";import"./sharedCheckboxStyles.d361bc0e.js";import"./theme.2f0b88da.js";import"./palette.15e4d008.js";const n=l.div`
  text-transform: capitalize;
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,e=(o,t)=>r(n,{children:[r("h2",{children:["Size ",t]}),i(d,{size:t,variant:o,children:"Checkbox label"}),i(d,{size:t,variant:o,defaultChecked:!0,children:"Checkbox label"}),i(d,{size:t,variant:o,defaultChecked:!0,bold:!0,children:"Checkbox label"})]}),u=()=>r(c,{children:[e("primary",1.4),e("primary",1.6),e("primary",1.8),e("primary",2)]}),b=()=>r(c,{children:[e("light",1.4),e("light",1.6),e("light",1.8),e("light",2)]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Light,u as Primary};
