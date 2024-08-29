import{s as r,a as e,F as i,j as n}from"./index.5c4b197b.js";import{R as o}from"./Radio.829e3319.js";import"./theme.6e056fed.js";import"./palette.15e4d008.js";import"./Tooltip.84510ff6.js";import"./OverlayArrow.module.dd8890b5.js";import"./focusSafely.module.ebed06a9.js";import"./context.module.8bae71a6.js";import"./Info.bea6fd37.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
