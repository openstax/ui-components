import{s as r,a as e,F as i,j as n}from"./index.b1c0c990.js";import{R as o}from"./Radio.a8857563.js";import"./theme.d4b7cbef.js";import"./palette.15e4d008.js";import"./Tooltip.9ce5e2e5.js";import"./OverlayArrow.module.e5d21536.js";import"./focusSafely.module.928e7deb.js";import"./context.module.eafe6d51.js";import"./Info.4d36d9bd.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
