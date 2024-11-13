import{s as r,a as e,F as i,j as n}from"./index.d8193f44.js";import{R as o}from"./Radio.8062c060.js";import"./theme.49368adb.js";import"./palette.15e4d008.js";import"./Tooltip.cef71fde.js";import"./OverlayArrow.module.987d3214.js";import"./focusSafely.module.65f8e4ea.js";import"./context.module.1ec05b64.js";import"./Info.0fb2c1a2.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
