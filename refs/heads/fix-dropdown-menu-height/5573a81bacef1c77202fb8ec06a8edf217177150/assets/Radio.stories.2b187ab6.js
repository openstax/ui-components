import{s as r,a as e,F as i,j as n}from"./index.d02ef7ff.js";import{R as o}from"./Radio.f45a5e04.js";import"./theme.1294dcb7.js";import"./palette.15e4d008.js";import"./Tooltip.f04a1a9d.js";import"./OverlayArrow.module.28cdb492.js";import"./focusSafely.module.b47f43ce.js";import"./context.module.cce46bc7.js";import"./Info.77538634.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
