import{s as r,a as e,F as i,j as n}from"./index.1725ba47.js";import{R as o}from"./Radio.f67b3914.js";import"./theme.9e7aa81e.js";import"./palette.15e4d008.js";import"./Tooltip.f7b23b8f.js";import"./OverlayArrow.module.cb573b65.js";import"./context.module.17a0d507.js";import"./useButton.module.45261402.js";import"./Info.3d365c71.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
