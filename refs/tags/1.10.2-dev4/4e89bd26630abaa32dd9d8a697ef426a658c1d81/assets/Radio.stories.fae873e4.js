import{s as r,a as e,F as i,j as n}from"./index.2120f737.js";import{R as o}from"./Radio.c48f4ab5.js";import"./theme.812194fb.js";import"./palette.15e4d008.js";import"./Tooltip.f5c9ae73.js";import"./OverlayArrow.module.71bd83f7.js";import"./focusSafely.module.9190f177.js";import"./context.module.d6637155.js";import"./Info.0e923663.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
