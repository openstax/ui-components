import{s as l,j as r,F as c,a as i}from"./index.34fd5b17.js";import{C as d}from"./Checkbox.53e7951c.js";import"./sharedCheckboxStyles.5a169419.js";import"./theme.465cf21c.js";import"./palette.15e4d008.js";const n=l.div`
  text-transform: capitalize;
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,e=(o,t)=>r(n,{children:[r("h2",{children:["Size ",t]}),i(d,{size:t,variant:o,children:"Checkbox label"}),i(d,{size:t,variant:o,defaultChecked:!0,children:"Checkbox label"}),i(d,{size:t,variant:o,defaultChecked:!0,bold:!0,children:"Checkbox label"})]}),u=()=>r(c,{children:[e("primary",1.4),e("primary",1.6),e("primary",1.8),e("primary",2)]}),b=()=>r(c,{children:[e("light",1.4),e("light",1.6),e("light",1.8),e("light",2)]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Light,u as Primary};
