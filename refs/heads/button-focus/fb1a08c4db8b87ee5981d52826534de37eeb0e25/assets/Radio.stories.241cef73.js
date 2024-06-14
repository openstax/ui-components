import{s as n,a as e,F as i,j as r}from"./index.2d760649.js";import{R as o}from"./Radio.dfc70e46.js";import"./theme.ac0f3aac.js";import"./palette.15e4d008.js";import"./Tooltip.d8b038c5.js";import"./module.7a7e6a0e.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>r(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),p=()=>e(i,{children:d({name:"default"})}),f=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{p as Default,f as WithTooltip};
