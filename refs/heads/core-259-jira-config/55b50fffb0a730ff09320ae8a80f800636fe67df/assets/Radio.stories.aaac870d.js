import{s as r,a as e,F as i,j as n}from"./index.46d972aa.js";import{R as o}from"./Radio.1193a3e6.js";import"./theme.b7a4b84e.js";import"./palette.15e4d008.js";import"./Tooltip.b8b2191b.js";import"./OverlayArrow.module.c6a3f899.js";import"./focusSafely.module.7f6f337a.js";import"./context.module.b4ac17ba.js";import"./Info.032faaeb.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
