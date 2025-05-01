import{s as r,a as e,F as i,j as n}from"./index.7b32fac2.js";import{R as o}from"./Radio.79cc4e78.js";import"./theme.3a44fd8f.js";import"./palette.15e4d008.js";import"./Tooltip.192a0960.js";import"./OverlayArrow.module.02872700.js";import"./context.module.c5c92464.js";import"./useButton.module.a5989205.js";import"./Info.7bfe5721.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
