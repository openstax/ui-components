import{s as r,a as e,F as i,j as n}from"./index.029a6614.js";import{R as o}from"./Radio.9fe2c01f.js";import"./theme.96c068a4.js";import"./palette.15e4d008.js";import"./Tooltip.ea2a44c9.js";import"./OverlayArrow.module.3ce2baad.js";import"./focusSafely.module.657101c1.js";import"./context.module.1bad0e5e.js";import"./Info.bfc3fcf3.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
