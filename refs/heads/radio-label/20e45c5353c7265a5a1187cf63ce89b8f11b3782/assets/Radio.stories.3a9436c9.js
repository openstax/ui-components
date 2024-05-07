import{s as d,a as e,F as o,j as n}from"./index.bc8d8fee.js";import{R as i}from"./Radio.1ae99c33.js";import"./theme.c8930371.js";import"./palette.15e4d008.js";import"./Tooltip.552e198d.js";import"./module.191d94f7.js";const l=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>n(l,{children:[e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"})]}),p=()=>e(o,{children:a({name:"default"})}),w=()=>e(o,{children:a({name:"withTooltip",tooltipText:"This option is unavailable when 'Allow smart attempts' is selected."})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{p as Default,w as WithTooltip};
