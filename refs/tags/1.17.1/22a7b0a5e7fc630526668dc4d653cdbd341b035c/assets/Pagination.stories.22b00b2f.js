import{s as p,a as n,j as f,R as F}from"./index.40ca4ef0.js";import{p as M}from"./palette.15e4d008.js";const s=p(({page:r,current:i,href:e,onClick:t,className:g})=>{const P=i?"page":void 0;return n("a",{className:g,"aria-label":`Page ${r}`,"aria-current":P,href:e||"#",onClick:t,children:r})})`
`,d=p(r=>{const{showFromEnd:i,showFromCurrent:e,pageSize:t,totalItems:g,className:P,currentPage:l,totalPages:c,Page:k}={showFromEnd:3,showFromCurrent:2,...r};if(c===0||c===1)return null;const b=i*2+e*2+1+2,o=[Math.max(1,Math.min(l-e,c+1)),Math.min(c,l+e)+1],h=[1,Math.min(o[0],i+1)],m=[Math.max(1,o[1],c-i+1),c+1],v=Math.max(0,h[1]-h[0])+Math.max(0,o[1]-o[0])+Math.max(0,m[1]-m[0])+(h[1]===o[0]?0:1)+(o[1]===m[0]?0:1);if(v<b){let a=b-v;const x=Math.floor(a/2),y=o[0]-h[1],u=m[0]-o[1],C=Math.min(y,u===0?a:u<a-x?a-u+1:x);a-=C;const E=Math.min(u,a);o[0]=Math.max(1,o[0]-C),o[1]=Math.min(c+1,o[1]+E),h[1]=Math.min(o[0],i+1),m[0]=Math.max(o[1],c-i+1)}return f("div",{className:P,children:[n("nav",{"aria-label":"pagination links",children:f("ul",{children:[w(...h).map(a=>n("li",{className:l===a?"active":void 0,children:n(k,{page:a,current:l===a})},a)),h[1]!==o[0]?n("li",{className:"disabled",children:n("span",{children:"..."})}):null,w(...o).map(a=>n("li",{className:l===a?"active":void 0,children:n(k,{page:a,current:l===a})},a)),o[1]!==m[0]?n("li",{className:"disabled",children:n("span",{children:"..."})}):null,w(...m).map(a=>n("li",{className:l===a?"active":void 0,children:n(k,{page:a,current:l===a})},a))]})}),t&&g?f("div",{className:"pagination-info",children:[(l-1)*t+1,"-",Math.min(l*t,g)," of ",g]}):null]})})`
  text-align: center;

  > nav > ul {
    list-style: none;
    padding: 0;
    border: thin solid ${M.neutralLight};
    border-radius: 0.5rem;
    display: inline-block;
    margin: 0 auto;

    > li {
      margin: 0;
      min-width: 4rem;
      text-align: center;
      display: inline-block;

      &:not(:last-child) {
        border-right: thin solid ${M.neutralLight};
      }

      &.active,
      &:focus-within:not(.disabled),
      &:hover:not(.disabled) {
        background-color: ${M.neutralLighter};
      }

      > ${s},span {
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
`;function w(r,i){return i<r?[]:Array.from({length:i-r}).map((e,t)=>t+r)}const S=()=>{const[r,i]=F.useState(1);return f("div",{children:[n("h2",{children:"Default settings"}),n(d,{currentPage:r,totalPages:10,Page:({page:e,current:t})=>n(s,{page:e,current:t,onClick:()=>i(e),href:"#"})}),n("h2",{children:"Showing only one link from the end"}),n(d,{currentPage:r,totalPages:10,showFromEnd:1,Page:({page:e,current:t})=>n(s,{page:e,current:t,onClick:()=>i(e),href:"#"})}),n("h2",{children:"Showing zero links from the end"}),n(d,{currentPage:r,totalPages:10,showFromEnd:0,Page:({page:e,current:t})=>n(s,{page:e,current:t,onClick:()=>i(e),href:"#"})}),n("h2",{children:"Showing only one link from the end and current"}),n(d,{currentPage:r,totalPages:10,showFromEnd:1,showFromCurrent:1,Page:({page:e,current:t})=>n(s,{page:e,current:t,onClick:()=>i(e),href:"#"})}),n("h2",{children:"less links"}),n(d,{currentPage:r,totalPages:2,Page:({page:e,current:t})=>n(s,{page:e,current:t,onClick:()=>i(e),href:"#"})}),n("h2",{children:"more links and summary"}),n(d,{currentPage:r,totalPages:40,totalItems:395,pageSize:10,Page:({page:e,current:t})=>n(s,{page:e,current:t,onClick:()=>i(e),href:"#"})}),n("h2",{children:"zero links"}),n(d,{currentPage:r,totalPages:0,Page:({page:e,current:t})=>n(s,{page:e,current:t,onClick:()=>i(e),href:"#"})}),n("h2",{children:"one link"}),n(d,{currentPage:r,totalPages:1,Page:({page:e,current:t})=>n(s,{page:e,current:t,onClick:()=>i(e),href:"#"})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{S as Examples};
