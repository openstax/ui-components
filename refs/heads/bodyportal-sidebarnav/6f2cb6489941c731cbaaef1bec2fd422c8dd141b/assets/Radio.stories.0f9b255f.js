import{s as r,a as e,F as i,j as n}from"./index.3e2dd7df.js";import{R as o}from"./Radio.794fe5f0.js";import"./theme.d005d629.js";import"./palette.15e4d008.js";import"./Tooltip.525f5b48.js";import"./OverlayArrow.module.be8e51ac.js";import"./focusSafely.module.12e04c6b.js";import"./context.module.72667f9c.js";import"./Info.0e73328a.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
