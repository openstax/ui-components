import{s as r,a as e,F as i,j as n}from"./index.d878c4e5.js";import{R as o}from"./Radio.0a2a06bf.js";import"./theme.a7a67b7e.js";import"./palette.15e4d008.js";import"./Tooltip.3b176855.js";import"./OverlayArrow.module.1e6a9133.js";import"./focusSafely.module.acb075c8.js";import"./context.module.08934d4f.js";import"./Info.a7e31fc5.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
