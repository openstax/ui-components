import{c as r}from"./sharedCheckboxStyles.5a169419.js";import{c as a}from"./theme.465cf21c.js";import{s as i,j as l,a as b}from"./index.34fd5b17.js";const m=i.label`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  font-weight: ${e=>e.bold?700:400};
  color: ${e=>e.isDisabled?a.palette.neutralLight:r[e.variant].color};
`,h=i.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${a.palette.white};
  opacity: ${e=>e.isDisabled?"0.4":"1"};
  border: ${e=>e.isDisabled?`1px solid ${a.palette.pale}`:r[e.variant].unCheckedBorder};
  border-radius: 0.2rem;
  transform: translateY(-0.075em);
  width: ${e=>e.checkboxSize}rem;
  height: ${e=>e.checkboxSize}rem;
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: ${e=>e.checkboxSize}rem;
    height: ${e=>e.checkboxSize}rem;
    border: ${e=>r[e.variant].checkedBorder};
    border-radius: 0.2rem;
    transform: scale(0);
    background-color: ${e=>r[e.variant].backgroundColor};
    background-image: url('${e=>r[e.variant].backgroundImage}');
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
  }

  &:checked::before {
    transform: scale(1);
    opacity: ${e=>e.isDisabled?0:1};
  }
  `,u=({children:e,disabled:o,variant:t="primary",bold:c=!1,size:n=1.6,labelProps:s,...d})=>l(m,{bold:c,variant:t,isDisabled:o,...s,children:[b(h,{...d,type:"checkbox",variant:t,checkboxSize:n,isDisabled:o}),e]});export{u as C};
