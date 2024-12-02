import{s as r,a as e,F as i,j as n}from"./index.b4656bd5.js";import{R as o}from"./Radio.49746cff.js";import"./theme.66638568.js";import"./palette.15e4d008.js";import"./Tooltip.ada6bfd1.js";import"./OverlayArrow.module.fb1c8e5d.js";import"./focusSafely.module.76cee6a9.js";import"./context.module.6d381773.js";import"./Info.54a4e17b.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
