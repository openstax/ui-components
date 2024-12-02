import{s as r,a as e,F as i,j as n}from"./index.7db02d4b.js";import{R as o}from"./Radio.e4aa22c5.js";import"./theme.9c04a50b.js";import"./palette.15e4d008.js";import"./Tooltip.bc677d9a.js";import"./OverlayArrow.module.1fc1b122.js";import"./focusSafely.module.e2426ede.js";import"./context.module.a426bb27.js";import"./Info.2bca3e7d.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
