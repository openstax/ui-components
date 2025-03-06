import{s as r,a as e,F as i,j as n}from"./index.7e912bad.js";import{R as o}from"./Radio.10dc3c15.js";import"./theme.4d023e0a.js";import"./palette.15e4d008.js";import"./Tooltip.f434a6a4.js";import"./OverlayArrow.module.d63fb94b.js";import"./context.module.7f9d6dbe.js";import"./useButton.module.80b4fcd2.js";import"./Info.02ea7a41.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
