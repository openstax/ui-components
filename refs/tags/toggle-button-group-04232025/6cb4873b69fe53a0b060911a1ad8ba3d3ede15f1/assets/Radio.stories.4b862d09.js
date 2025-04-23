import{s as r,a as e,F as i,j as n}from"./index.722bcc42.js";import{R as o}from"./Radio.7271564c.js";import"./theme.c3194663.js";import"./palette.15e4d008.js";import"./Tooltip.42e22bd1.js";import"./OverlayArrow.module.ad1eabed.js";import"./context.module.018045bd.js";import"./useButton.module.a8cb4965.js";import"./Info.67937004.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
