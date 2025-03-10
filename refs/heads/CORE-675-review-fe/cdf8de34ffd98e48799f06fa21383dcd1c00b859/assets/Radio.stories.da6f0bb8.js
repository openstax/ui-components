import{s as r,a as e,F as i,j as n}from"./index.65ce4e2d.js";import{R as o}from"./Radio.4805bfd6.js";import"./theme.d9bb0adf.js";import"./palette.15e4d008.js";import"./Tooltip.97a41b5d.js";import"./OverlayArrow.module.fd645f3c.js";import"./context.module.cb81d9b8.js";import"./useButton.module.9debfb93.js";import"./Info.e242f293.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
