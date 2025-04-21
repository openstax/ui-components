import{s as r,a as e,F as i,j as n}from"./index.37207b3f.js";import{R as o}from"./Radio.1bf17a81.js";import"./theme.19c845c6.js";import"./palette.15e4d008.js";import"./Tooltip.284b814d.js";import"./OverlayArrow.module.e01b64d1.js";import"./context.module.c13434dd.js";import"./useButton.module.c809ce8e.js";import"./Info.864e39c8.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
