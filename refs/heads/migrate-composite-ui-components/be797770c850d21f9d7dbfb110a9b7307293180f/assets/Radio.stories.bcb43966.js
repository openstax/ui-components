import{s as n,R as x,a as t,j as a,F as s}from"./index.2bf602ce.js";import{c as r}from"./theme.469067e1.js";import{$,a as D,C as w}from"./Tooltip.9528067a.js";import"./palette.5e342580.js";import"./Button.module.5276be63.js";import"./useFocusRing.module.6e60fef6.js";import"./Hidden.module.2cbc25bc.js";import"./useButton.module.76caaf0a.js";import"./OverlayArrow.module.bc5c0080.js";import"./context.module.180862e1.js";import"./Info.cff3c914.js";const p=n.label`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: ${e=>e.isDisabled?r.palette.pale:"inherit"};
  width: 100%;
  position: relative;
`,b=n.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${r.palette.white};
  opacity: ${e=>e.isDisabled?"0.4":"1"};
  font: inherit;
  color: ${r.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid ${r.palette.neutralThin};
  border-radius: 50%;
  transform: translateY(-0.075em);
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    opacity: 0;
    box-shadow: inset 1em 1em ${r.palette.mediumBlue};
  }

  &:checked::before {
    opacity: ${e=>e.isDisabled?0:1};
  }
`,T=n.div`
  display: inline-block;
`,o=({children:e,disabled:i,labelAs:c,...l})=>{const d=$({delay:0}),m=x.useRef(null),{triggerProps:g,tooltipProps:y}=D({delay:0},d,m);return l.tooltipText?t("div",{children:t(T,{children:a(p,{ref:m,as:c,isDisabled:i,...g,children:[t(b,{type:"radio",onFocus:()=>d.open(),isDisabled:i,disabled:i,...l}),e,d.isOpen&&t(w,{state:d,...y,placement:"right",children:l.tooltipText})]})})}):a(p,{isDisabled:i,as:c,children:[t(b,{type:"radio",isDisabled:i,disabled:i,...l}),e]})},u=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,f=e=>a(u,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),P=()=>t(s,{children:f({name:"default"})}),z=()=>t(s,{children:f({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),h=e=>a(u,{children:[t(o,{disabled:!0,...e,children:"Disabled label"}),t(o,{disabled:!0,defaultChecked:!0,...e,children:"Disabled label"})]}),B=()=>a(s,{children:[h({name:"disabled"}),h({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{P as Default,B as Disabled,z as WithTooltip};
