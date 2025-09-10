import{C as a}from"./index.0c79af41.js";import{c as r}from"./theme.b5bbaa15.js";const i='data:image/svg+xml,<svg height="125px" width="125px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837" xml:space="preserve" fill="%23000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path style="fill:%23fff;" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"></path></g></g></svg>',l='data:image/svg+xml,<svg height="125px" width="125px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837" xml:space="preserve" fill="%23000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path style="fill:%235e5e5e;" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"></path></g></g></svg>',c='data:image/svg+xml,<svg height="125px" width="125px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837" xml:space="preserve" fill="%23000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path style="fill:%23C22032;" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"></path></g></g></svg>',s='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 4" width="12" height="4"><path d="M10.5.965a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75H1.5a.75.75 0 0 1-.75-.75v-.75a.75.75 0 0 1 .75-.75Z" fill="%23fff"/></svg>',o={primary:{backgroundColor:r.palette.mediumBlue,color:"inherit",unCheckedBorder:`1px solid ${r.palette.neutralThin}`,checkedBorder:`1px solid ${r.palette.mediumBlue}`,backgroundImage:i},light:{backgroundColor:r.palette.white,color:"inherit",unCheckedBorder:`1px solid ${r.palette.pale}`,checkedBorder:`1px solid ${r.palette.pale}`,backgroundImage:l},error:{backgroundColor:r.palette.paleRed,color:r.palette.darkRed,unCheckedBorder:`1px solid ${r.palette.lightRed}`,checkedBorder:`1px solid ${r.palette.lightRed}`,backgroundImage:c},disabled:{backgroundColor:r.palette.white,color:"inherit",unCheckedBorder:`1px solid ${r.palette.pale}`,checkedBorder:`1px solid ${r.palette.pale}`,backgroundImage:"none"}},g=a`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  font-weight: ${({bold:e})=>e?700:400};
  color: ${({isDisabled:e,variant:t})=>e?r.palette.neutralLight:o[t].color};
`,p=a`
  appearance: none;
  background-color: ${r.palette.white};
  opacity: ${({isDisabled:e})=>e?"0.4":"1"};
  border: ${({isDisabled:e,variant:t})=>e?`1px solid ${r.palette.pale}`:o[t].unCheckedBorder};
  border-radius: 0.2rem;
  transform: translateY(-0.075em);
  width: ${({checkboxSize:e})=>e}rem;
  height: ${({checkboxSize:e})=>e}rem;
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    border-radius: 0.2rem;
    width: ${({checkboxSize:e})=>e}rem;
    height: ${({checkboxSize:e})=>e}rem;
    border: ${({variant:e})=>o[e].checkedBorder};
    border-radius: 0.2rem;
    transform: scale(0);
    background-color: ${({variant:e})=>o[e].backgroundColor};
    background-image: url('${({variant:e})=>o[e].backgroundImage}');
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(0);
  }

  &:checked::before {
    transform: scale(1);
    opacity: ${({isDisabled:e})=>e?0:1};
  }
`,h=a`
  transform: scale(1);
  opacity: ${({isDisabled:e})=>e?0:1};
`;export{p as a,h as b,g as c,s as d};
