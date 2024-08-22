import{s as r,a as e,F as i,j as n}from"./index.061265c3.js";import{R as o}from"./Radio.4b8d6a05.js";import"./theme.d295de20.js";import"./palette.15e4d008.js";import"./Tooltip.2bbb709a.js";import"./OverlayArrow.module.2f53b472.js";import"./focusSafely.module.ecd252aa.js";import"./context.module.487dbbc3.js";import"./Info.332102e1.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
