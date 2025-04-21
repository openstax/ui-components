import{s as r,a as e,F as i,j as n}from"./index.9c6a7386.js";import{R as o}from"./Radio.872cdbe4.js";import"./theme.f9ddeb4d.js";import"./palette.15e4d008.js";import"./Tooltip.a6a7da22.js";import"./OverlayArrow.module.0cd4e4e2.js";import"./context.module.9624e326.js";import"./useButton.module.5cc231d6.js";import"./Info.2dfe622e.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
