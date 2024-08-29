import{s as r,a as e,F as i,j as n}from"./index.6dbed8fb.js";import{R as o}from"./Radio.b4508891.js";import"./theme.d1095bc3.js";import"./palette.15e4d008.js";import"./Tooltip.77de4e7f.js";import"./OverlayArrow.module.712260a6.js";import"./focusSafely.module.dacd31db.js";import"./context.module.e68fc31f.js";import"./Info.712bd56b.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
