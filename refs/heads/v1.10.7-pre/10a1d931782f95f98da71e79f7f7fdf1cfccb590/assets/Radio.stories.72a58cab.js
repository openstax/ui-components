import{s as r,a as e,F as i,j as n}from"./index.bc30b5ed.js";import{R as o}from"./Radio.5a6f2c5c.js";import"./theme.f8fe8198.js";import"./palette.15e4d008.js";import"./Tooltip.b6c15de7.js";import"./OverlayArrow.module.bc91dccf.js";import"./focusSafely.module.15542996.js";import"./context.module.7258508d.js";import"./Info.835a551e.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
