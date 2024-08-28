import{s as r,a as e,F as i,j as n}from"./index.26cbc119.js";import{R as o}from"./Radio.1198539e.js";import"./theme.6423b43d.js";import"./palette.15e4d008.js";import"./Tooltip.7614fea9.js";import"./OverlayArrow.module.19faa043.js";import"./focusSafely.module.d6edb272.js";import"./context.module.e6aa4c0c.js";import"./Info.e708210d.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
