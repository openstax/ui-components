import{s as r,a as e,F as i,j as n}from"./index.2eec5f8b.js";import{R as o}from"./Radio.4c0547fe.js";import"./theme.d4ba8bf4.js";import"./palette.15e4d008.js";import"./Tooltip.28b5d9ba.js";import"./OverlayArrow.module.a98b95f6.js";import"./context.module.a486572e.js";import"./useButton.module.0c441a90.js";import"./Info.a57a0db7.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
