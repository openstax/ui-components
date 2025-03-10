import{s as r,a as e,F as i,j as n}from"./index.e27b1b36.js";import{R as o}from"./Radio.131affdb.js";import"./theme.77d2fe3c.js";import"./palette.15e4d008.js";import"./Tooltip.e56a8d97.js";import"./OverlayArrow.module.3f1611fe.js";import"./context.module.57f4ebfa.js";import"./useButton.module.de9279ac.js";import"./Info.09e886d0.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
