import{s as r,a as e,F as i,j as n}from"./index.5a7e9b17.js";import{R as o}from"./Radio.8f9d2351.js";import"./theme.f2ee44e7.js";import"./palette.15e4d008.js";import"./Tooltip.d767d058.js";import"./OverlayArrow.module.6d60216b.js";import"./focusSafely.module.89692780.js";import"./context.module.6f291d7f.js";import"./Info.a86923cb.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
