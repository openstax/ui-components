import{s as r,a as e,F as i,j as n}from"./index.22d09426.js";import{R as o}from"./Radio.92d705ae.js";import"./theme.2fb09e35.js";import"./palette.15e4d008.js";import"./Tooltip.a0e70d51.js";import"./OverlayArrow.module.48a1be8c.js";import"./context.module.1ef91ab0.js";import"./Info.4e8070d2.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),b=()=>e(i,{children:d({name:"default"})}),w=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default,w as WithTooltip};
