import{s as r,a as e,F as i,j as n}from"./index.6d68e8e0.js";import{R as o}from"./Radio.c28968be.js";import"./theme.72d7bce0.js";import"./palette.15e4d008.js";import"./Tooltip.86e862b7.js";import"./OverlayArrow.module.394bb346.js";import"./context.module.bcbc041c.js";import"./useButton.module.232cbe65.js";import"./Info.4fd6e044.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
