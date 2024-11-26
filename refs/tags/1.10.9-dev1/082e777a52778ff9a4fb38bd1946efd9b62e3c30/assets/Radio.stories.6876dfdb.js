import{s as r,a as e,F as i,j as n}from"./index.eb6ac3b8.js";import{R as o}from"./Radio.7c63ab62.js";import"./theme.0a16f905.js";import"./palette.15e4d008.js";import"./Tooltip.f2b8cf80.js";import"./OverlayArrow.module.7a0706e6.js";import"./focusSafely.module.150f5f9a.js";import"./context.module.8968ea18.js";import"./Info.468f020f.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
