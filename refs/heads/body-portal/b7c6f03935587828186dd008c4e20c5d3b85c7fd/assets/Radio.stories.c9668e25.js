import{s as r,a as e,F as i,j as n}from"./index.9c531c8a.js";import{R as o}from"./Radio.df2b0bca.js";import"./theme.f923e64e.js";import"./palette.15e4d008.js";import"./Tooltip.33e15b03.js";import"./module.42b569a3.js";import"./Info.2e9f0347.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),f=()=>e(i,{children:d({name:"default"})}),b=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,b as WithTooltip};
