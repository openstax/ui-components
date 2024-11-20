import{s as r,a as e,F as i,j as n}from"./index.0f9cd158.js";import{R as o}from"./Radio.763a7a03.js";import"./theme.f6b4b38a.js";import"./palette.15e4d008.js";import"./Tooltip.ec681c52.js";import"./OverlayArrow.module.01ffc244.js";import"./focusSafely.module.a8ccd019.js";import"./context.module.31aff834.js";import"./Info.55b9a18d.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
