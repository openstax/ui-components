import{s as r,a as e,F as i,j as n}from"./index.faf95f15.js";import{R as o}from"./Radio.005db3ec.js";import"./theme.3b4e7d7e.js";import"./palette.15e4d008.js";import"./Tooltip.141c38e9.js";import"./OverlayArrow.module.5a67e2a8.js";import"./focusSafely.module.7063b024.js";import"./context.module.c5d54df9.js";import"./Info.e62cb9cb.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};