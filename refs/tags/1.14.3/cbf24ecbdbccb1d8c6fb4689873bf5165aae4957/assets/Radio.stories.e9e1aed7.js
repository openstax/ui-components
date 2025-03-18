import{s as r,a as e,F as i,j as n}from"./index.ccc0dbf7.js";import{R as o}from"./Radio.d2d29213.js";import"./theme.3902300a.js";import"./palette.15e4d008.js";import"./Tooltip.75effa4a.js";import"./OverlayArrow.module.75b43e89.js";import"./context.module.85389306.js";import"./useButton.module.cad0a6d8.js";import"./Info.5ab727b6.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
