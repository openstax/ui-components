import{s as r,a as e,F as i,j as n}from"./index.605b74c1.js";import{R as o}from"./Radio.80f349d0.js";import"./theme.5bf50f21.js";import"./palette.15e4d008.js";import"./Tooltip.2cc0f168.js";import"./OverlayArrow.module.1ce346b5.js";import"./focusSafely.module.780dd1e1.js";import"./context.module.b6d220f5.js";import"./Info.efc6cdb4.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
