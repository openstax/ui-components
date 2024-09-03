import{s as r,a as e,F as i,j as n}from"./index.306bf6a6.js";import{R as o}from"./Radio.fe1c1084.js";import"./theme.2dc685db.js";import"./palette.15e4d008.js";import"./Tooltip.d54bb829.js";import"./OverlayArrow.module.0d944d4b.js";import"./focusSafely.module.60d14cdc.js";import"./context.module.5aefc454.js";import"./Info.664969ee.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
