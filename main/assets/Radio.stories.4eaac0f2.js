import{s as r,a as e,F as i,j as n}from"./index.feb36096.js";import{R as o}from"./Radio.8de3082c.js";import"./theme.4fe3a54d.js";import"./palette.15e4d008.js";import"./Tooltip.8d2bf927.js";import"./OverlayArrow.module.ae42b92c.js";import"./focusSafely.module.9cd57ea1.js";import"./context.module.f8ceb79d.js";import"./Info.e567a3bb.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
