import{s as r,a as e,F as i,j as n}from"./index.b278cb37.js";import{R as o}from"./Radio.b340b438.js";import"./theme.38d341b4.js";import"./palette.15e4d008.js";import"./Tooltip.be2af1e7.js";import"./OverlayArrow.module.e607e15b.js";import"./focusSafely.module.1cadf06a.js";import"./context.module.1206020f.js";import"./Info.bb99f691.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
