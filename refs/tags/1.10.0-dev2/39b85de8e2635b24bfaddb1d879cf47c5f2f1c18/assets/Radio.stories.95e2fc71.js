import{s as r,a as e,F as i,j as n}from"./index.d6fac028.js";import{R as o}from"./Radio.e29b3eb8.js";import"./theme.7681647e.js";import"./palette.15e4d008.js";import"./Tooltip.f8edf76c.js";import"./OverlayArrow.module.f2f328ca.js";import"./context.module.9a763501.js";import"./Info.6826d135.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),b=()=>e(i,{children:d({name:"default"})}),w=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default,w as WithTooltip};
