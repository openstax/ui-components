import{s as r,a as e,F as i,j as n}from"./index.6bf93fe2.js";import{R as o}from"./Radio.89eda037.js";import"./theme.b8d30864.js";import"./palette.15e4d008.js";import"./Tooltip.456bd454.js";import"./OverlayArrow.module.2269b490.js";import"./context.module.589ca550.js";import"./useButton.module.f0379966.js";import"./Info.51d482ad.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
