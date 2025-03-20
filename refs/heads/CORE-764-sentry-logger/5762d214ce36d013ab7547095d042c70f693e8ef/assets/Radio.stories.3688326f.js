import{s as r,a as e,F as i,j as n}from"./index.72f770f4.js";import{R as o}from"./Radio.111b1d0f.js";import"./theme.f80aeec3.js";import"./palette.15e4d008.js";import"./Tooltip.0a94164b.js";import"./OverlayArrow.module.453b89cf.js";import"./context.module.0fc03b23.js";import"./useButton.module.f4529245.js";import"./Info.36d59b42.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
