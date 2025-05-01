import{s as r,a as e,F as i,j as n}from"./index.01482421.js";import{R as o}from"./Radio.aee71e84.js";import"./theme.b1025011.js";import"./palette.15e4d008.js";import"./Tooltip.9a0a048a.js";import"./OverlayArrow.module.49da0f69.js";import"./context.module.cbfc006b.js";import"./useButton.module.d6de798d.js";import"./Info.34a4a765.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
