import{s as r,a as e,F as i,j as n}from"./index.a9f07d77.js";import{R as o}from"./Radio.cf31325e.js";import"./theme.095ccc43.js";import"./palette.15e4d008.js";import"./Tooltip.9a6f44ad.js";import"./OverlayArrow.module.5033c58f.js";import"./focusSafely.module.d07b08d9.js";import"./context.module.88f937e7.js";import"./Info.905d0bf4.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
