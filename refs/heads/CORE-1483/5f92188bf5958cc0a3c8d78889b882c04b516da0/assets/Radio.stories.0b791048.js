import{s as d,a as e,F as i,j as n}from"./index.32774466.js";import{R as o}from"./Radio.d7c843df.js";import"./theme.c99223a2.js";import"./palette.15e4d008.js";import"./Tooltip.f3da68dd.js";import"./Button.module.deb7379c.js";import"./useFocusRing.module.cf862bf4.js";import"./context.module.c8cee43f.js";import"./useButton.module.ea2cf59e.js";import"./OverlayArrow.module.fb4ac2cb.js";import"./Info.c9178325.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
