import{s as r,a as e,F as i,j as n}from"./index.04903a84.js";import{R as o}from"./Radio.4b3b0493.js";import"./theme.6864226e.js";import"./palette.15e4d008.js";import"./Tooltip.0ed47e0e.js";import"./OverlayArrow.module.2410b171.js";import"./context.module.b4edb34a.js";import"./useButton.module.c264ba19.js";import"./Info.d15719cf.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
