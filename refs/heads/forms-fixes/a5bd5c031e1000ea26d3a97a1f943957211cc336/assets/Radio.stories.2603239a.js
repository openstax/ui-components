import{s as r,a as e,F as i,j as n}from"./index.ba54a6f4.js";import{R as o}from"./Radio.90c7b9eb.js";import"./theme.151da14b.js";import"./palette.15e4d008.js";import"./Tooltip.6dae715b.js";import"./OverlayArrow.module.3e82ba8a.js";import"./context.module.bca3e26a.js";import"./useButton.module.8c7552e7.js";import"./Info.cc997052.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
