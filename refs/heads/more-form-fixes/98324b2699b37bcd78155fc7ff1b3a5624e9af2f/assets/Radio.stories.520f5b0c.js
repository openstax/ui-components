import{s as r,a as e,F as i,j as n}from"./index.054f068f.js";import{R as o}from"./Radio.d9990a50.js";import"./theme.c72c059a.js";import"./palette.15e4d008.js";import"./Tooltip.1ce34d9f.js";import"./OverlayArrow.module.8c5057a9.js";import"./context.module.f8220338.js";import"./useButton.module.ebdef723.js";import"./Info.8be2111c.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
