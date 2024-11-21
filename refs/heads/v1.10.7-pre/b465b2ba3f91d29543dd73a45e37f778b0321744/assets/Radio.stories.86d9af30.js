import{s as r,a as e,F as i,j as n}from"./index.15efebc5.js";import{R as o}from"./Radio.cf240007.js";import"./theme.b15327d7.js";import"./palette.15e4d008.js";import"./Tooltip.e691ef1e.js";import"./OverlayArrow.module.d982f49f.js";import"./focusSafely.module.8c735c82.js";import"./context.module.7431fa97.js";import"./Info.a1df16e7.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
