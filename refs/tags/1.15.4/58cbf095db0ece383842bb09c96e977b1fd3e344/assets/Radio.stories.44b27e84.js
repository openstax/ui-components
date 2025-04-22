import{s as r,a as e,F as i,j as n}from"./index.2c7e0eb7.js";import{R as o}from"./Radio.7351ccad.js";import"./theme.1014f7c7.js";import"./palette.15e4d008.js";import"./Tooltip.06f90244.js";import"./OverlayArrow.module.e8d998e9.js";import"./context.module.f97e2902.js";import"./useButton.module.44290b0d.js";import"./Info.6532eead.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
