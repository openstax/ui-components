import{s as r,a as e,F as i,j as n}from"./index.043a8ba9.js";import{R as o}from"./Radio.36b5a384.js";import"./theme.ba5e7596.js";import"./palette.15e4d008.js";import"./Tooltip.17c340fc.js";import"./OverlayArrow.module.61617a3b.js";import"./focusSafely.module.6d012b0d.js";import"./context.module.de60063b.js";import"./Info.2dd6071e.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
