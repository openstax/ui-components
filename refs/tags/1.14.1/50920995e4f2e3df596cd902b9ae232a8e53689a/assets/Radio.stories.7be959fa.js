import{s as r,a as e,F as i,j as n}from"./index.b6d3e59b.js";import{R as o}from"./Radio.9717184a.js";import"./theme.9c9f69ec.js";import"./palette.15e4d008.js";import"./Tooltip.3a3c7d57.js";import"./OverlayArrow.module.0fb1973e.js";import"./context.module.5755ee13.js";import"./useButton.module.6b4e64ed.js";import"./Info.d0e33a1c.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
