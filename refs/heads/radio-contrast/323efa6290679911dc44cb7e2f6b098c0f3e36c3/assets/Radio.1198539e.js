import{s,R as m,a as i,j as n}from"./index.26cbc119.js";import{c as r}from"./theme.6423b43d.js";import{$ as h,a as u,C as y}from"./Tooltip.7614fea9.js";const c=s.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  color: ${e=>e.isDisabled?r.palette.pale:"inherit"};
  width: 100%;
  position: relative;
`,d=s.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${r.palette.white};
  opacity: ${e=>e.isDisabled?"0.4":"1"};
  font: inherit;
  color: ${r.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid #767676;
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
`,$=s.div`
  display: inline-block;
`,D=({children:e,disabled:t,...a})=>{const o=h({delay:0}),l=m.useRef(null),{triggerProps:p,tooltipProps:b}=u({delay:0},o,l);return a.tooltipText?i("div",{children:i($,{children:n(c,{ref:l,isDisabled:t,"aria-disabled":t,...p,children:[i(d,{type:"radio",onFocus:()=>o.open(),isDisabled:t,"aria-disabled":t,...a}),e,o.isOpen&&i(y,{state:o,...b,placement:"right",children:a.tooltipText})]})})}):n(c,{isDisabled:t,"aria-disabled":t,children:[i(d,{type:"radio",isDisabled:t,"aria-disabled":t,...a}),e]})};export{D as R};
