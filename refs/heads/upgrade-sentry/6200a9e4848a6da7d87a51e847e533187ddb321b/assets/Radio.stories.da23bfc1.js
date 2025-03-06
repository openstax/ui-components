import{s as r,a as e,F as i,j as n}from"./index.c26cb431.js";import{R as o}from"./Radio.1781d0d3.js";import"./theme.d637bad8.js";import"./palette.15e4d008.js";import"./Tooltip.10149e16.js";import"./OverlayArrow.module.705ea28e.js";import"./context.module.d6c1ad53.js";import"./useButton.module.fbed7de3.js";import"./Info.88a70aa8.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
