import{s as r,a as e,F as i,j as n}from"./index.e95779b4.js";import{R as o}from"./Radio.14ad79df.js";import"./theme.97363549.js";import"./palette.15e4d008.js";import"./Tooltip.7f778306.js";import"./OverlayArrow.module.08ea3720.js";import"./focusSafely.module.41ed01a7.js";import"./context.module.9ccd312f.js";import"./Info.563d3eb3.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
