import{s as r,a as e,F as i,j as n}from"./index.68de9e9d.js";import{R as o}from"./Radio.7d66d384.js";import"./theme.7350b22e.js";import"./palette.15e4d008.js";import"./Tooltip.e9f96be2.js";import"./OverlayArrow.module.2a4d951c.js";import"./context.module.f80f659d.js";import"./useButton.module.2e3e9929.js";import"./Info.3f152d31.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
