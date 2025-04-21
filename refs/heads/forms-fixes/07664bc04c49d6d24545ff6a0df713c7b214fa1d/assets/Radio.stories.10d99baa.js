import{s as r,a as e,F as i,j as n}from"./index.18ccb163.js";import{R as o}from"./Radio.80bf2332.js";import"./theme.4d86e427.js";import"./palette.15e4d008.js";import"./Tooltip.9b5e97fa.js";import"./OverlayArrow.module.076af703.js";import"./context.module.bd931d7b.js";import"./useButton.module.bfccfa89.js";import"./Info.a588c13a.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
