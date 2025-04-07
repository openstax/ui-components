import{s as r,a as e,F as i,j as n}from"./index.9f927896.js";import{R as o}from"./Radio.d28c48b4.js";import"./theme.0132c22d.js";import"./palette.15e4d008.js";import"./Tooltip.fee02722.js";import"./OverlayArrow.module.117d3df0.js";import"./context.module.fd63364d.js";import"./useButton.module.d3aeee7a.js";import"./Info.73b16942.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
