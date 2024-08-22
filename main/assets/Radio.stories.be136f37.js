import{s as r,a as e,F as i,j as n}from"./index.f190344a.js";import{R as o}from"./Radio.8b9a88a1.js";import"./theme.d2e825be.js";import"./palette.15e4d008.js";import"./Tooltip.7ee46939.js";import"./OverlayArrow.module.3bcab41b.js";import"./focusSafely.module.e8463b8c.js";import"./context.module.bb7f2660.js";import"./Info.6a240bef.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
