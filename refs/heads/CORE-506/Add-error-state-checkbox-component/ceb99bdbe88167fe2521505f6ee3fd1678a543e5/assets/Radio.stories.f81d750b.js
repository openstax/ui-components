import{s as r,a as e,F as i,j as n}from"./index.046bc2d1.js";import{R as o}from"./Radio.079292a3.js";import"./theme.6f07147a.js";import"./palette.15e4d008.js";import"./Tooltip.417d327c.js";import"./OverlayArrow.module.e73e75b3.js";import"./focusSafely.module.bb377139.js";import"./context.module.d51d1177.js";import"./Info.437de683.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
