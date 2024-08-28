import{s as r,a as e,F as i,j as n}from"./index.ed164ab4.js";import{R as o}from"./Radio.ef9396ea.js";import"./theme.aefcb3a1.js";import"./palette.15e4d008.js";import"./Tooltip.5699bc21.js";import"./OverlayArrow.module.cd339e02.js";import"./focusSafely.module.bb24d709.js";import"./context.module.a3a1ea48.js";import"./Info.5759b1ad.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
