import{s as r,a as e,F as i,j as n}from"./index.6ebdf6ab.js";import{R as o}from"./Radio.806598e7.js";import"./theme.502056de.js";import"./palette.15e4d008.js";import"./Tooltip.72c7f8da.js";import"./OverlayArrow.module.277ac1a6.js";import"./focusSafely.module.daf75532.js";import"./context.module.38678099.js";import"./Info.24df5005.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
