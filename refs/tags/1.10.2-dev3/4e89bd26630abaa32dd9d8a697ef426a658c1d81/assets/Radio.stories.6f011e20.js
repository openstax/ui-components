import{s as r,a as e,F as i,j as n}from"./index.07f3ac88.js";import{R as o}from"./Radio.d9957ef8.js";import"./theme.0e572517.js";import"./palette.15e4d008.js";import"./Tooltip.1c266b94.js";import"./OverlayArrow.module.7d72686c.js";import"./focusSafely.module.2f7ce911.js";import"./context.module.8cad4157.js";import"./Info.d16241a7.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
