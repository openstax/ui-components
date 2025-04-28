import{s as r,a as e,F as i,j as n}from"./index.a65d1ea5.js";import{R as o}from"./Radio.5de6fd42.js";import"./theme.ee87677b.js";import"./palette.15e4d008.js";import"./Tooltip.60c47834.js";import"./OverlayArrow.module.873fe86e.js";import"./context.module.b64e52e9.js";import"./useButton.module.a556efec.js";import"./Info.ef399057.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
