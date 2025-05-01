import{s as E,j as f,a as n,R as F}from"./index.c4c6dca5.js";import{p as k}from"./palette.15e4d008.js";const c=E(o=>{const{showFromEnd:i,showFromCurrent:e,pageSize:t,totalItems:g,className:p,currentPage:l,totalPages:s,Page:P}={showFromEnd:3,showFromCurrent:2,...o};if(s===0||s===1)return null;const w=i*2+e*2+1+2,r=[Math.max(1,Math.min(l-e,s+1)),Math.min(s,l+e)+1],h=[1,Math.min(r[0],i+1)],m=[Math.max(1,r[1],s-i+1),s+1],b=Math.max(0,h[1]-h[0])+Math.max(0,r[1]-r[0])+Math.max(0,m[1]-m[0])+(h[1]===r[0]?0:1)+(r[1]===m[0]?0:1);if(b<w){let a=w-b;const v=Math.floor(a/2),C=r[0]-h[1],u=m[0]-r[1],x=Math.min(C,u===0?a:u<a-v?a-u+1:v);a-=x;const y=Math.min(u,a);r[0]=Math.max(1,r[0]-x),r[1]=Math.min(s+1,r[1]+y),h[1]=Math.min(r[0],i+1),m[0]=Math.max(r[1],s-i+1)}return f("div",{className:p,children:[n("nav",{"aria-label":"pagination links",children:f("ul",{children:[M(...h).map(a=>n("li",{className:l===a?"active":void 0,children:n(P,{page:a,current:l===a})},a)),h[1]!==r[0]?n("li",{className:"disabled",children:n("span",{children:"..."})}):null,M(...r).map(a=>n("li",{className:l===a?"active":void 0,children:n(P,{page:a,current:l===a})},a)),r[1]!==m[0]?n("li",{className:"disabled",children:n("span",{children:"..."})}):null,M(...m).map(a=>n("li",{className:l===a?"active":void 0,children:n(P,{page:a,current:l===a})},a))]})}),t&&g?f("div",{className:"pagination-info",children:[(l-1)*t+1,"-",Math.min(l*t,g)," of ",g]}):null]})})`
  text-align: center;

  > nav > ul {
    list-style: none;
    padding: 0;
    border: thin solid ${k.neutralLight};
    border-radius: 0.5rem;
    display: inline-block;
    margin: 0 auto;

    > li {
      margin: 0;
      min-width: 4rem;
      text-align: center;
      display: inline-block;

      &:not(:last-child) {
        border-right: thin solid ${k.neutralLight};
      }

      &.active,
      &:focus-within:not(.disabled),
      &:hover:not(.disabled) {
        background-color: ${k.neutralLighter};
      }

      > a,span {
        padding: 1rem;
        display: block;
        text-decoration: none;
        font-size: 1.6rem;
        line-height: 1.3rem;
        margin: 0;
        color: inherit;
      }
    }
  }

  .pagination-info {
    margin-top: 0.5rem;
    font-size: 1.6rem;
  }
`;function M(o,i){return i<o?[]:Array.from({length:i-o}).map((e,t)=>t+o)}function d({page:o,current:i,href:e,onClick:t}){return n("a",{"aria-current":i?"page":void 0,href:e||"#",onClick:t,children:o})}const S=()=>{const[o,i]=F.useState(1);return f("div",{children:[n("h2",{children:"Default settings"}),n(c,{currentPage:o,totalPages:10,Page:({page:e,current:t})=>n(d,{page:e,current:t,onClick:()=>i(e)})}),n("h2",{children:"Showing only one link from the end"}),n(c,{currentPage:o,totalPages:10,showFromEnd:1,Page:({page:e,current:t})=>n(d,{page:e,current:t,onClick:()=>i(e)})}),n("h2",{children:"Showing zero links from the end"}),n(c,{currentPage:o,totalPages:10,showFromEnd:0,Page:({page:e,current:t})=>n(d,{page:e,current:t,onClick:()=>i(e)})}),n("h2",{children:"Showing only one link from the end and current"}),n(c,{currentPage:o,totalPages:10,showFromEnd:1,showFromCurrent:1,Page:({page:e,current:t})=>n(d,{page:e,current:t,onClick:()=>i(e)})}),n("h2",{children:"less links"}),n(c,{currentPage:o,totalPages:2,Page:({page:e,current:t})=>n(d,{page:e,current:t,onClick:()=>i(e)})}),n("h2",{children:"more links and summary"}),n(c,{currentPage:o,totalPages:40,totalItems:395,pageSize:10,Page:({page:e,current:t})=>n(d,{page:e,current:t,onClick:()=>i(e)})}),n("h2",{children:"zero links"}),n(c,{currentPage:o,totalPages:0,Page:({page:e,current:t})=>n(d,{page:e,current:t,onClick:()=>i(e)})}),n("h2",{children:"one link"}),n(c,{currentPage:o,totalPages:1,Page:({page:e,current:t})=>n(d,{page:e,current:t,onClick:()=>i(e)})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{S as Examples};
