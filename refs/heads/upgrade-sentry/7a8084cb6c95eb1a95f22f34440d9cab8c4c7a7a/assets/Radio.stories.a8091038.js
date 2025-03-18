import{s as r,a as e,F as i,j as n}from"./index.4b20b1a8.js";import{R as o}from"./Radio.1ceeafed.js";import"./theme.fadf525a.js";import"./palette.15e4d008.js";import"./Tooltip.6fca5730.js";import"./OverlayArrow.module.4dad6b23.js";import"./context.module.7790f34e.js";import"./useButton.module.91092ab4.js";import"./Info.9b9c62e9.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
