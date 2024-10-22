import{s as r,a as e,F as i,j as n}from"./index.ca5be0f1.js";import{R as o}from"./Radio.c27da349.js";import"./theme.be59c3c4.js";import"./palette.15e4d008.js";import"./Tooltip.61752af1.js";import"./OverlayArrow.module.0f826f14.js";import"./focusSafely.module.324aa0b9.js";import"./context.module.22cbb0b1.js";import"./Info.be2b1289.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
