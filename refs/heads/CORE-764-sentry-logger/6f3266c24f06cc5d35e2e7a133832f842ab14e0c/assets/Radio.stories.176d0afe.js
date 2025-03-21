import{s as r,a as e,F as i,j as n}from"./index.c82e9722.js";import{R as o}from"./Radio.f2c9a60a.js";import"./theme.52473b37.js";import"./palette.15e4d008.js";import"./Tooltip.ac7c496b.js";import"./OverlayArrow.module.af455877.js";import"./context.module.6bb24aee.js";import"./useButton.module.7e38f064.js";import"./Info.902ce2bb.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
