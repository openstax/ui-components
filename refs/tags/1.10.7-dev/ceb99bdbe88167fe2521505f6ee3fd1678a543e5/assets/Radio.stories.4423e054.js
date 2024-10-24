import{s as r,a as e,F as i,j as n}from"./index.d9b48cac.js";import{R as o}from"./Radio.471b242a.js";import"./theme.9ccf4190.js";import"./palette.15e4d008.js";import"./Tooltip.ed5a6dfd.js";import"./OverlayArrow.module.f5b9a0d9.js";import"./focusSafely.module.4406e650.js";import"./context.module.7c331624.js";import"./Info.38d17bdb.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
