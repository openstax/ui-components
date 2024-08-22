import{s as r,a as e,F as i,j as n}from"./index.a4011639.js";import{R as o}from"./Radio.db9281b0.js";import"./theme.ab800c39.js";import"./palette.15e4d008.js";import"./Tooltip.db62e135.js";import"./OverlayArrow.module.04a5bbad.js";import"./focusSafely.module.9640ff75.js";import"./context.module.aeef4674.js";import"./Info.a98f2be8.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
