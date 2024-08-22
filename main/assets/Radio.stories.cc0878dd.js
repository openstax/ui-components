import{s as r,a as e,F as i,j as n}from"./index.1f82b929.js";import{R as o}from"./Radio.ce180fbb.js";import"./theme.8c2a3b76.js";import"./palette.15e4d008.js";import"./Tooltip.307a1a02.js";import"./OverlayArrow.module.b8e8cd2f.js";import"./focusSafely.module.4d8fae01.js";import"./context.module.4692e2d9.js";import"./Info.53933873.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
