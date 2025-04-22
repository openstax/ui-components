import{s as r,a as e,F as i,j as n}from"./index.35502c0a.js";import{R as o}from"./Radio.befdd159.js";import"./theme.546a2671.js";import"./palette.15e4d008.js";import"./Tooltip.b2d49815.js";import"./OverlayArrow.module.29dcdd72.js";import"./context.module.a44df2f8.js";import"./useButton.module.0e4de0c5.js";import"./Info.6ccdc610.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
