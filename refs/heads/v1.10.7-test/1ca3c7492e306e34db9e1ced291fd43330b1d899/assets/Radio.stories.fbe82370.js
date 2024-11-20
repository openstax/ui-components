import{s as r,a as e,F as i,j as n}from"./index.31aa55de.js";import{R as o}from"./Radio.f2462d39.js";import"./theme.fdec47b6.js";import"./palette.15e4d008.js";import"./Tooltip.48aa780c.js";import"./OverlayArrow.module.d45304ab.js";import"./focusSafely.module.a3bcc026.js";import"./context.module.067d51d2.js";import"./Info.98b5d775.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
