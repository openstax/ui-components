import{s as r,a as e,F as i,j as n}from"./index.8ec087ea.js";import{R as o}from"./Radio.8e3062d3.js";import"./theme.e9f3b33a.js";import"./palette.15e4d008.js";import"./Tooltip.e607e6b7.js";import"./OverlayArrow.module.5526dcaf.js";import"./context.module.29cc6323.js";import"./useButton.module.08eafea0.js";import"./Info.869c7ee3.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
