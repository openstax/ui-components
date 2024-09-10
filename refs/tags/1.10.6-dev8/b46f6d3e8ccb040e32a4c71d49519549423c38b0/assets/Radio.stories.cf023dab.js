import{s as r,a as e,F as i,j as n}from"./index.80f778e7.js";import{R as o}from"./Radio.67f927c2.js";import"./theme.b2800fef.js";import"./palette.15e4d008.js";import"./Tooltip.a176d5fb.js";import"./OverlayArrow.module.06b1b703.js";import"./focusSafely.module.1a4eccca.js";import"./context.module.8c2ff808.js";import"./Info.921d7289.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
