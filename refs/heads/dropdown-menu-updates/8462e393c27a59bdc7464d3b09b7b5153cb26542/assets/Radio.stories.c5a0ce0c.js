import{s as r,a as e,F as i,j as n}from"./index.29e8c80b.js";import{R as o}from"./Radio.9b55a655.js";import"./theme.eaa51723.js";import"./palette.15e4d008.js";import"./Tooltip.b80a60ef.js";import"./OverlayArrow.module.8d15e9a4.js";import"./context.module.da52d543.js";import"./Info.b2ba74d6.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),b=()=>e(i,{children:d({name:"default"})}),w=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default,w as WithTooltip};
