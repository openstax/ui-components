import{s as r,a as e,F as i,j as n}from"./index.9367c45b.js";import{R as o}from"./Radio.bdb5fe37.js";import"./theme.e9af23dc.js";import"./palette.15e4d008.js";import"./Tooltip.34fd2e68.js";import"./OverlayArrow.module.6344d939.js";import"./focusSafely.module.014e81d8.js";import"./context.module.61dff26e.js";import"./Info.afa0fef8.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
