import{s as r,a as e,F as i,j as n}from"./index.71e6e9c2.js";import{R as o}from"./Radio.6a6577e0.js";import"./theme.71fdfcfc.js";import"./palette.15e4d008.js";import"./Tooltip.9f2a6210.js";import"./OverlayArrow.module.759b514a.js";import"./focusSafely.module.f247acac.js";import"./context.module.075db62b.js";import"./Info.9096bcc9.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
