import{s as r,a as e,F as i,j as n}from"./index.8536a5a5.js";import{R as o}from"./Radio.08452bdf.js";import"./theme.1f58f548.js";import"./palette.15e4d008.js";import"./Tooltip.6371a775.js";import"./OverlayArrow.module.1fe6e418.js";import"./context.module.ef3e16a4.js";import"./useButton.module.9bb24c44.js";import"./Info.79db2139.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
