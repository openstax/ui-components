import{s as r,a as e,F as i,j as n}from"./index.56892473.js";import{R as o}from"./Radio.ab3f668e.js";import"./theme.a04e998e.js";import"./palette.15e4d008.js";import"./Tooltip.c2e63ac7.js";import"./OverlayArrow.module.91db7bc5.js";import"./focusSafely.module.82d7c88e.js";import"./context.module.0bfdf56a.js";import"./Info.049c8305.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
