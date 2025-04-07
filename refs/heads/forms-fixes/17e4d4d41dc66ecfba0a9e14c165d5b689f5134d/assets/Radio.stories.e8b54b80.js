import{s as r,a as e,F as i,j as n}from"./index.1fe52fd1.js";import{R as o}from"./Radio.3c8a5555.js";import"./theme.3b9f2548.js";import"./palette.15e4d008.js";import"./Tooltip.7d6f7af2.js";import"./OverlayArrow.module.3008b355.js";import"./context.module.7c4b0fb9.js";import"./useButton.module.8d67609a.js";import"./Info.5d638cdf.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
