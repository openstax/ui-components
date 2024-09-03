import{s as r,a as e,F as i,j as n}from"./index.e82e894c.js";import{R as o}from"./Radio.3e075271.js";import"./theme.50138889.js";import"./palette.15e4d008.js";import"./Tooltip.29feaf76.js";import"./OverlayArrow.module.7d06e037.js";import"./focusSafely.module.912049a4.js";import"./context.module.d961cb6b.js";import"./Info.1d7c6f37.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
