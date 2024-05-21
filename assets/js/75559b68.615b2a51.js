"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9143],{58453:(e,c,s)=>{s.r(c),s.d(c,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>r});var n=s(85893),l=s(11151);const i={title:"Client",sidebar_label:"Client",sidebar_position:7,slug:"/ibc/light-clients/wasm/client"},d="Client",t={id:"light-clients/wasm/client",title:"Client",description:"CLI",source:"@site/versioned_docs/version-v7.5.x/03-light-clients/04-wasm/08-client.md",sourceDirName:"03-light-clients/04-wasm",slug:"/ibc/light-clients/wasm/client",permalink:"/v7/ibc/light-clients/wasm/client",draft:!1,unlisted:!1,tags:[],version:"v7.5.x",sidebarPosition:7,frontMatter:{title:"Client",sidebar_label:"Client",sidebar_position:7,slug:"/ibc/light-clients/wasm/client"},sidebar:"defaultSidebar",previous:{title:"Contracts",permalink:"/v7/ibc/light-clients/wasm/contracts"},next:{title:"Overview",permalink:"/v7/middleware/ics29-fee/overview"}},a={},r=[{value:"CLI",id:"cli",level:2},{value:"Transactions",id:"transactions",level:3},{value:"<code>store-code</code>",id:"store-code",level:4},{value:"Query",id:"query",level:3},{value:"<code>checksums</code>",id:"checksums",level:4},{value:"<code>code</code>",id:"code",level:4},{value:"gRPC",id:"grpc",level:2},{value:"<code>Checksums</code>",id:"checksums-1",level:3},{value:"<code>Code</code>",id:"code-1",level:3}];function o(e){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.h1,{id:"client",children:"Client"}),"\n",(0,n.jsx)(c.h2,{id:"cli",children:"CLI"}),"\n",(0,n.jsxs)(c.p,{children:["A user can query and interact with the ",(0,n.jsx)(c.code,{children:"08-wasm"})," module using the CLI. Use the ",(0,n.jsx)(c.code,{children:"--help"})," flag to discover the available commands:"]}),"\n",(0,n.jsx)(c.h3,{id:"transactions",children:"Transactions"}),"\n",(0,n.jsxs)(c.p,{children:["The ",(0,n.jsx)(c.code,{children:"tx"})," commands allow users to interact with the ",(0,n.jsx)(c.code,{children:"08-wasm"})," submodule."]}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:"simd tx ibc-wasm --help\n"})}),"\n",(0,n.jsx)(c.h4,{id:"store-code",children:(0,n.jsx)(c.code,{children:"store-code"})}),"\n",(0,n.jsxs)(c.p,{children:["The ",(0,n.jsx)(c.code,{children:"store-code"})," command allows users to submit a governance proposal with a ",(0,n.jsx)(c.code,{children:"MsgStoreCode"})," to store the byte code of a Wasm light client contract."]}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:"simd tx ibc-wasm store-code [path/to/wasm-file] [flags]\n"})}),"\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"path/to/wasm-file"})," is the path to the ",(0,n.jsx)(c.code,{children:".wasm"})," or ",(0,n.jsx)(c.code,{children:".wasm.gz"})," file."]}),"\n",(0,n.jsx)(c.h3,{id:"query",children:"Query"}),"\n",(0,n.jsxs)(c.p,{children:["The ",(0,n.jsx)(c.code,{children:"query"})," commands allow users to query ",(0,n.jsx)(c.code,{children:"08-wasm"})," state."]}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:"simd query ibc-wasm --help\n"})}),"\n",(0,n.jsx)(c.h4,{id:"checksums",children:(0,n.jsx)(c.code,{children:"checksums"})}),"\n",(0,n.jsxs)(c.p,{children:["The ",(0,n.jsx)(c.code,{children:"checksums"})," command allows users to query the list of checksums of Wasm light client contracts stored in the Wasm VM via the ",(0,n.jsx)(c.code,{children:"MsgStoreCode"}),". The checksums are hex-encoded."]}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:"simd query ibc-wasm checksums [flags]\n"})}),"\n",(0,n.jsx)(c.p,{children:"Example:"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:"simd query ibc-wasm checksums\n"})}),"\n",(0,n.jsx)(c.p,{children:"Example Output:"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:'checksums:\n- c64f75091a6195b036f472cd8c9f19a56780b9eac3c3de7ced0ec2e29e985b64\npagination:\n  next_key: null\n  total: "1"\n'})}),"\n",(0,n.jsx)(c.h4,{id:"code",children:(0,n.jsx)(c.code,{children:"code"})}),"\n",(0,n.jsxs)(c.p,{children:["The ",(0,n.jsx)(c.code,{children:"code"})," command allows users to query the Wasm byte code of a light client contract given the provided input checksum."]}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:"./simd q ibc-wasm code\n"})}),"\n",(0,n.jsx)(c.p,{children:"Example:"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:"simd query ibc-wasm code c64f75091a6195b036f472cd8c9f19a56780b9eac3c3de7ced0ec2e29e985b64\n"})}),"\n",(0,n.jsx)(c.p,{children:"Example Output:"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:"code: AGFzb...AqBBE=\n"})}),"\n",(0,n.jsx)(c.h2,{id:"grpc",children:"gRPC"}),"\n",(0,n.jsxs)(c.p,{children:["A user can query the ",(0,n.jsx)(c.code,{children:"08-wasm"})," module using gRPC endpoints."]}),"\n",(0,n.jsx)(c.h3,{id:"checksums-1",children:(0,n.jsx)(c.code,{children:"Checksums"})}),"\n",(0,n.jsxs)(c.p,{children:["The ",(0,n.jsx)(c.code,{children:"Checksums"})," endpoint allows users to query the list of checksums of Wasm light client contracts stored in the Wasm VM via the ",(0,n.jsx)(c.code,{children:"MsgStoreCode"}),"."]}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:"ibc.lightclients.wasm.v1.Query/Checksums\n"})}),"\n",(0,n.jsx)(c.p,{children:"Example:"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:"grpcurl -plaintext \\\n  -d '{}' \\\n  localhost:9090 \\\n  ibc.lightclients.wasm.v1.Query/Checksums\n"})}),"\n",(0,n.jsx)(c.p,{children:"Example output:"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:'{\n  "checksums": [\n    "c64f75091a6195b036f472cd8c9f19a56780b9eac3c3de7ced0ec2e29e985b64"\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n'})}),"\n",(0,n.jsx)(c.h3,{id:"code-1",children:(0,n.jsx)(c.code,{children:"Code"})}),"\n",(0,n.jsxs)(c.p,{children:["The ",(0,n.jsx)(c.code,{children:"Code"})," endpoint allows users to query the Wasm byte code of a light client contract given the provided input checksum."]}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:"ibc.lightclients.wasm.v1.Query/Code\n"})}),"\n",(0,n.jsx)(c.p,{children:"Example:"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:'grpcurl -plaintext \\\n  -d \'{"checksum":"c64f75091a6195b036f472cd8c9f19a56780b9eac3c3de7ced0ec2e29e985b64"}\' \\\n  localhost:9090 \\\n  ibc.lightclients.wasm.v1.Query/Code\n'})}),"\n",(0,n.jsx)(c.p,{children:"Example output:"}),"\n",(0,n.jsx)(c.pre,{children:(0,n.jsx)(c.code,{className:"language-shell",children:'{\n  "code": AGFzb...AqBBE=\n}\n'})})]})}function h(e={}){const{wrapper:c}={...(0,l.a)(),...e.components};return c?(0,n.jsx)(c,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,c,s)=>{s.d(c,{Z:()=>t,a:()=>d});var n=s(67294);const l={},i=n.createContext(l);function d(e){const c=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function t(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(i.Provider,{value:c},e.children)}}}]);