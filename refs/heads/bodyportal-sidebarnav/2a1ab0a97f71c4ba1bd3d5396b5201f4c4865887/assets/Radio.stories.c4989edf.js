import{s as r,a as e,F as i,j as n}from"./index.e7440c6d.js";import{R as o}from"./Radio.b5a35e61.js";import"./theme.8b40f719.js";import"./palette.15e4d008.js";import"./Tooltip.25b7f1de.js";import"./OverlayArrow.module.96de75fb.js";import"./focusSafely.module.e29284d8.js";import"./context.module.17f02a4e.js";import"./Info.391e80aa.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
