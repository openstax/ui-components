import{s as r,a as e,F as i,j as n}from"./index.4193e21a.js";import{R as o}from"./Radio.1f9043b9.js";import"./theme.44905229.js";import"./palette.15e4d008.js";import"./Tooltip.c110413e.js";import"./OverlayArrow.module.11703662.js";import"./context.module.4ccba5d3.js";import"./useButton.module.7e2fcd8b.js";import"./Info.1f3015f3.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
