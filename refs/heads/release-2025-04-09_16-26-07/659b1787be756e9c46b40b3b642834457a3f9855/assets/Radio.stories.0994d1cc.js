import{s as r,a as e,F as i,j as n}from"./index.4dc8374d.js";import{R as o}from"./Radio.62e4c108.js";import"./theme.4704fc27.js";import"./palette.15e4d008.js";import"./Tooltip.94900a72.js";import"./OverlayArrow.module.c9f56038.js";import"./context.module.26473488.js";import"./useButton.module.eaa7eb64.js";import"./Info.33d06e90.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
