import{s as r,a as e,F as i,j as n}from"./index.d012f9c5.js";import{R as o}from"./Radio.5efb5c2b.js";import"./theme.7f0b2a10.js";import"./palette.15e4d008.js";import"./Tooltip.215b4a61.js";import"./OverlayArrow.module.4482f739.js";import"./focusSafely.module.a2ecb629.js";import"./context.module.e94045d9.js";import"./Info.2981133f.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
