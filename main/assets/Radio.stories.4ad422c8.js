import{s as r,a as e,F as i,j as n}from"./index.db0317c6.js";import{R as o}from"./Radio.dd4bda8e.js";import"./theme.11661764.js";import"./palette.15e4d008.js";import"./Tooltip.978590d7.js";import"./OverlayArrow.module.d105a73d.js";import"./context.module.340ae0da.js";import"./useButton.module.9b1836e5.js";import"./Info.a64bb908.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
