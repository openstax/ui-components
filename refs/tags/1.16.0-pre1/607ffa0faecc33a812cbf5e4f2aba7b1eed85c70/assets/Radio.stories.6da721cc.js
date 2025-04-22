import{s as r,a as e,F as i,j as n}from"./index.95e8e4bf.js";import{R as o}from"./Radio.6db4fb21.js";import"./theme.06c601cc.js";import"./palette.15e4d008.js";import"./Tooltip.0fd58d99.js";import"./OverlayArrow.module.e0437c4e.js";import"./context.module.370f4e89.js";import"./useButton.module.94f6c6c8.js";import"./Info.c37c4b52.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
