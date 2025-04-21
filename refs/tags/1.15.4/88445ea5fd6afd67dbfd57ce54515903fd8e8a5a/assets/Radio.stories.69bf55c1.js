import{s as r,a as e,F as i,j as n}from"./index.227eb4a7.js";import{R as o}from"./Radio.b181a0e5.js";import"./theme.0f1f64fc.js";import"./palette.15e4d008.js";import"./Tooltip.80dafe09.js";import"./OverlayArrow.module.888dbaed.js";import"./context.module.f0e3f31c.js";import"./useButton.module.feb4ab3a.js";import"./Info.79685e50.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
