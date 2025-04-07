import{s as r,a as e,F as i,j as n}from"./index.7e4e779f.js";import{R as o}from"./Radio.3e7e2654.js";import"./theme.bd757b8d.js";import"./palette.15e4d008.js";import"./Tooltip.9b72a721.js";import"./OverlayArrow.module.dadc457d.js";import"./context.module.fe5d2df5.js";import"./useButton.module.1e7c04b7.js";import"./Info.1fea08a9.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
