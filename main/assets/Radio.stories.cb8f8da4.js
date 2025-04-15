import{s as r,a as e,F as i,j as n}from"./index.d26e8ca0.js";import{R as o}from"./Radio.9337d8c0.js";import"./theme.f79e1a54.js";import"./palette.15e4d008.js";import"./Tooltip.9fbc2072.js";import"./OverlayArrow.module.b421d910.js";import"./context.module.1d18a492.js";import"./useButton.module.bfb7491f.js";import"./Info.4ee9a7e6.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
