import{s as r,a as e,F as i,j as n}from"./index.53a81f5b.js";import{R as o}from"./Radio.778768c0.js";import"./theme.c23a68d9.js";import"./palette.15e4d008.js";import"./Tooltip.150afb96.js";import"./OverlayArrow.module.400554d1.js";import"./context.module.0f893f80.js";import"./useButton.module.0df5f773.js";import"./Info.0c80093e.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
