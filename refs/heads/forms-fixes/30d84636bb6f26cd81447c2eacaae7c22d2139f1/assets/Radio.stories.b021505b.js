import{s as r,a as e,F as i,j as n}from"./index.0edc2388.js";import{R as o}from"./Radio.a7a60067.js";import"./theme.ca682476.js";import"./palette.15e4d008.js";import"./Tooltip.8d5dae1c.js";import"./OverlayArrow.module.edbbe1cc.js";import"./context.module.a3feaa0a.js";import"./useButton.module.9c4d8459.js";import"./Info.46924370.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
