import{c as r}from"./theme.e5e3f992.js";import{s as t,j as s,a as g}from"./index.e0203407.js";const p='data:image/svg+xml,<svg height="125px" width="125px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837" xml:space="preserve" fill="%23000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path style="fill:%23fff;" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"></path></g></g></svg>',h='data:image/svg+xml,<svg height="125px" width="125px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837" xml:space="preserve" fill="%23000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path style="fill:%235e5e5e;" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"></path></g></g></svg>',k='data:image/svg+xml,<svg height="125px" width="125px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837" xml:space="preserve" fill="%23000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path style="fill:%23C22032;" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"></path></g></g></svg>',o={primary:{backgroundColor:r.palette.mediumBlue,color:"inherit",unCheckedBorder:`1px solid ${r.palette.neutralThin}`,checkedBorder:`1px solid ${r.palette.mediumBlue}`,backgroundImage:p},light:{backgroundColor:r.palette.white,color:"inherit",unCheckedBorder:`1px solid ${r.palette.pale}`,checkedBorder:`1px solid ${r.palette.pale}`,backgroundImage:h},error:{backgroundColor:r.palette.paleRed,color:r.palette.darkRed,unCheckedBorder:`1px solid ${r.palette.lightRed}`,checkedBorder:`1px solid ${r.palette.lightRed}`,backgroundImage:k},disabled:{backgroundColor:r.palette.white,color:"inherit",unCheckedBorder:`1px solid ${r.palette.pale}`,checkedBorder:`1px solid ${r.palette.pale}`,backgroundImage:"none"}},m=t.label`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  font-weight: ${e=>e.bold?700:400};
  color: ${e=>e.isDisabled?r.palette.neutralLight:o[e.variant].color};
`,x=t.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${r.palette.white};
  opacity: ${e=>e.isDisabled?"0.4":"1"};
  border: ${e=>e.isDisabled?`1px solid ${r.palette.pale}`:o[e.variant].unCheckedBorder};
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
    border: ${e=>o[e.variant].checkedBorder};
    border-radius: 0.2rem;
    transform: scale(0);
    background-color: ${e=>o[e.variant].backgroundColor};
    background-image: url('${e=>o[e.variant].backgroundImage}');
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
  }

  &:checked::before {
    transform: scale(1);
    opacity: ${e=>e.isDisabled?0:1};
  }
  `,w=({children:e,disabled:a,variant:i="primary",bold:l=!1,size:c=1.6,labelProps:d,...n})=>s(m,{bold:l,variant:i,isDisabled:a,...d,children:[g(x,{...n,type:"checkbox",variant:i,checkboxSize:c,isDisabled:a}),e]});export{w as C};
