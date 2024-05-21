"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9411],{99729:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=n(85893),i=n(11151);const o={title:"Integration",sidebar_label:"Integration",sidebar_position:3,slug:"/ibc/light-clients/wasm/integration"},a="Integration",r={id:"light-clients/wasm/integration",title:"Integration",description:"Learn how to integrate the 08-wasm module in a chain binary and about the recommended approaches depending on whether the x/wasm module is already used in the chain. The following document only applies for Cosmos SDK chains.",source:"@site/docs/03-light-clients/04-wasm/03-integration.md",sourceDirName:"03-light-clients/04-wasm",slug:"/ibc/light-clients/wasm/integration",permalink:"/main/ibc/light-clients/wasm/integration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:3,slug:"/ibc/light-clients/wasm/integration"},sidebar:"defaultSidebar",previous:{title:"Concepts",permalink:"/main/ibc/light-clients/wasm/concepts"},next:{title:"Messages",permalink:"/main/ibc/light-clients/wasm/messages"}},c={},d=[{value:"Importing the <code>08-wasm</code> module",id:"importing-the-08-wasm-module",level:2},{value:"<code>app.go</code> setup",id:"appgo-setup",level:2},{value:"Keeper instantiation",id:"keeper-instantiation",level:2},{value:"If <code>x/wasm</code> is present",id:"if-xwasm-is-present",level:3},{value:"If <code>x/wasm</code> is not present",id:"if-xwasm-is-not-present",level:3},{value:"Options",id:"options",level:3},{value:"<code>WithQueryPlugins</code>",id:"withqueryplugins",level:4},{value:"Updating <code>AllowedClients</code>",id:"updating-allowedclients",level:2},{value:"Adding the module to the store",id:"adding-the-module-to-the-store",level:2},{value:"Adding snapshot support",id:"adding-snapshot-support",level:2},{value:"Pin byte codes at start",id:"pin-byte-codes-at-start",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"integration",children:"Integration"}),"\n",(0,t.jsxs)(s.p,{children:["Learn how to integrate the ",(0,t.jsx)(s.code,{children:"08-wasm"})," module in a chain binary and about the recommended approaches depending on whether the ",(0,t.jsxs)(s.a,{href:"https://github.com/CosmWasm/wasmd/tree/main/x/wasm",children:[(0,t.jsx)(s.code,{children:"x/wasm"})," module"]})," is already used in the chain. The following document only applies for Cosmos SDK chains."]}),"\n",(0,t.jsxs)(s.h2,{id:"importing-the-08-wasm-module",children:["Importing the ",(0,t.jsx)(s.code,{children:"08-wasm"})," module"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"08-wasm"})," has no stable releases yet. To use it, you need to import the git commit that contains the module with the compatible versions of ",(0,t.jsx)(s.code,{children:"ibc-go"})," and ",(0,t.jsx)(s.code,{children:"wasmvm"}),". To do so, run the following command with the desired git commit in your project:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"go get github.com/cosmos/ibc-go/modules/light-clients/08-wasm@7ee2a2452b79d0bc8316dc622a1243afa058e8cb\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The following table shows the compatibility matrix between the ",(0,t.jsx)(s.code,{children:"08-wasm"})," module, ",(0,t.jsx)(s.code,{children:"ibc-go"}),", and ",(0,t.jsx)(s.code,{children:"wasmvm"}),"."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"center"},children:(0,t.jsx)(s.strong,{children:"Version"})}),(0,t.jsx)(s.th,{style:{textAlign:"center"},children:(0,t.jsx)(s.strong,{children:"Git commit to import"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:(0,t.jsx)(s.code,{children:"v0.1.1+ibc-go-v7.3-wasmvm-v1.5"})}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"7ee2a2452b79d0bc8316dc622a1243afa058e8cb"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:(0,t.jsx)(s.code,{children:"v0.1.0+ibc-go-v8.0-wasmvm-v1.5"})}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"57fcdb9a9a9db9b206f7df2f955866dc4e10fef4"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:(0,t.jsx)(s.code,{children:"v0.1.0+ibc-go-v7.3-wasmvm-v1.5"})}),(0,t.jsx)(s.td,{style:{textAlign:"center"},children:"b306e7a706e1f84a5e11af0540987bd68de9bae5"})]})]})]}),"\n",(0,t.jsxs)(s.h2,{id:"appgo-setup",children:[(0,t.jsx)(s.code,{children:"app.go"})," setup"]}),"\n",(0,t.jsxs)(s.p,{children:["The sample code below shows the relevant integration points in ",(0,t.jsx)(s.code,{children:"app.go"})," required to setup the ",(0,t.jsx)(s.code,{children:"08-wasm"})," module in a chain binary. Since ",(0,t.jsx)(s.code,{children:"08-wasm"})," is a light client module itself, please check out as well the section ",(0,t.jsx)(s.a,{href:"/main/ibc/integration#integrating-light-clients",children:"Integrating light clients"})," for more information:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'// app.go\nimport (\n  ...\n  "github.com/cosmos/cosmos-sdk/runtime"\n\n  cmtos "github.com/cometbft/cometbft/libs/os"\n\n  ibcwasm "github.com/cosmos/ibc-go/modules/light-clients/08-wasm"\n  ibcwasmkeeper "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/keeper"\n  ibcwasmtypes "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"\n  ...\n)\n\n...\n\n// Register the AppModule for the 08-wasm module\nModuleBasics = module.NewBasicManager(\n  ...\n  ibcwasm.AppModuleBasic{},\n  ...\n)\n\n// Add 08-wasm Keeper\ntype SimApp struct {\n  ...\n  WasmClientKeeper ibcwasmkeeper.Keeper\n  ...\n}\n\nfunc NewSimApp(\n  logger log.Logger,\n  db dbm.DB,\n  traceStore io.Writer,\n  loadLatest bool,\n  appOpts servertypes.AppOptions,\n  baseAppOptions ...func(*baseapp.BaseApp),\n) *SimApp {\n  ...\n  keys := sdk.NewKVStoreKeys(\n    ...\n    ibcwasmtypes.StoreKey,\n  )\n\n  // Instantiate 08-wasm\'s keeper\n  // This sample code uses a constructor function that\n  // accepts a pointer to an existing instance of Wasm VM.\n  // This is the recommended approach when the chain\n  // also uses `x/wasm`, and then the Wasm VM instance\n  // can be shared.\n  app.WasmClientKeeper = ibcwasmkeeper.NewKeeperWithVM(\n    appCodec,\n    runtime.NewKVStoreService(keys[ibcwasmtypes.StoreKey]),\n    app.IBCKeeper.ClientKeeper,\n    authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n    wasmVM,\n    app.GRPCQueryRouter(),\n  )\n  app.ModuleManager = module.NewManager(\n    // SDK app modules\n    ...\n    ibcwasm.NewAppModule(app.WasmClientKeeper),\n  )\n  app.ModuleManager.SetOrderBeginBlockers(\n    ...\n    ibcwasmtypes.ModuleName,\n    ...\n  )\n  app.ModuleManager.SetOrderEndBlockers(\n    ...\n    ibcwasmtypes.ModuleName,\n    ...\n  )\n  genesisModuleOrder := []string{\n    ...\n    ibcwasmtypes.ModuleName,\n    ...\n  }\n  app.ModuleManager.SetOrderInitGenesis(genesisModuleOrder...)\n  app.ModuleManager.SetOrderExportGenesis(genesisModuleOrder...)\n  ...\n\n  // initialize BaseApp\n  app.SetInitChainer(app.InitChainer)\n  ...\n\n  // must be before Loading version\n  if manager := app.SnapshotManager(); manager != nil {\n    err := manager.RegisterExtensions(\n      ibcwasmkeeper.NewWasmSnapshotter(app.CommitMultiStore(), &app.WasmClientKeeper),\n    )\n    if err != nil {\n      panic(fmt.Errorf("failed to register snapshot extension: %s", err))\n    }\n  }\n  ...\n\n  if loadLatest {\n    ...\n\n    ctx := app.BaseApp.NewUncachedContext(true, cmtproto.Header{})\n\n    // Initialize pinned codes in wasmvm as they are not persisted there\n    if err := ibcwasmkeeper.InitializePinnedCodes(ctx); err != nil {\n      cmtos.Exit(fmt.Sprintf("failed initialize pinned codes %s", err))\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"keeper-instantiation",children:"Keeper instantiation"}),"\n",(0,t.jsxs)(s.p,{children:["When it comes to instantiating ",(0,t.jsx)(s.code,{children:"08-wasm"}),"'s keeper there are two recommended ways of doing it. Choosing one or the other will depend on whether the chain already integrates ",(0,t.jsx)(s.a,{href:"https://github.com/CosmWasm/wasmd/tree/main/x/wasm",children:(0,t.jsx)(s.code,{children:"x/wasm"})})," or not."]}),"\n",(0,t.jsxs)(s.h3,{id:"if-xwasm-is-present",children:["If ",(0,t.jsx)(s.code,{children:"x/wasm"})," is present"]}),"\n",(0,t.jsxs)(s.p,{children:["If the chain where the module is integrated uses ",(0,t.jsx)(s.code,{children:"x/wasm"})," then we recommend that both ",(0,t.jsx)(s.code,{children:"08-wasm"})," and ",(0,t.jsx)(s.code,{children:"x/wasm"})," share the same Wasm VM instance. Having two separate Wasm VM instances is still possible, but care should be taken to make sure that both instances do not share the directory when the VM stores blobs and various caches, otherwise unexpected behaviour is likely to happen (from ",(0,t.jsx)(s.code,{children:"x/wasm"})," v0.51 and ",(0,t.jsx)(s.code,{children:"08-wasm"})," v0.2.0+ibc-go-v8.3-wasmvm-v2.0 this will be forbidden anyway, since wasmvm v2.0.0 and above will not allow two different Wasm VM instances to shared the same data folder)."]}),"\n",(0,t.jsxs)(s.p,{children:["In order to share the Wasm VM instance please follow the guideline below. Please note that this requires ",(0,t.jsx)(s.code,{children:"x/wasm"})," v0.41 or above."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Instantiate the Wasm VM in ",(0,t.jsx)(s.code,{children:"app.go"})," with the parameters of your choice."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsxs)(s.a,{href:"https://github.com/CosmWasm/wasmd/blob/db93d7b6c7bb6f4a340d74b96a02cec885729b59/x/wasm/keeper/options.go#L21-L25",children:["Create an ",(0,t.jsx)(s.code,{children:"Option"})," with this Wasm VM instance"]}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Add the option created in the previous step to a slice and ",(0,t.jsxs)(s.a,{href:"https://github.com/CosmWasm/wasmd/blob/db93d7b6c7bb6f4a340d74b96a02cec885729b59/x/wasm/keeper/keeper_cgo.go#L36",children:["pass it to the ",(0,t.jsx)(s.code,{children:"x/wasm NewKeeper"})," constructor function"]}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Pass the pointer to the Wasm VM instance to ",(0,t.jsx)(s.code,{children:"08-wasm"})," ",(0,t.jsxs)(s.a,{href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/keeper/keeper.go#L39-L47",children:[(0,t.jsx)(s.code,{children:"NewKeeperWithVM"})," constructor function"]}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The code to set this up would look something like this:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'// app.go\nimport (\n  ...\n  "github.com/cosmos/cosmos-sdk/runtime"\n\n  wasmvm "github.com/CosmWasm/wasmvm/v2"\n  wasmkeeper "github.com/CosmWasm/wasmd/x/wasm/keeper"\n  wasmtypes "github.com/CosmWasm/wasmd/x/wasm/types"\n\n  ibcwasmkeeper "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/keeper"\n  ibcwasmtypes "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"\n  ...\n)\n\n...\n\n// instantiate the Wasm VM with the chosen parameters\nwasmer, err := wasmvm.NewVM(\n  dataDir,\n  availableCapabilities,\n  contractMemoryLimit, // default of 32\n  contractDebugMode,\n  memoryCacheSize,\n)\nif err != nil {\n  panic(err)\n}\n\n// create an Option slice (or append to an existing one)\n// with the option to use a custom Wasm VM instance\nwasmOpts = []wasmkeeper.Option{\n  wasmkeeper.WithWasmEngine(wasmer),\n}\n\n// the keeper will use the provided Wasm VM instance,\n// instead of instantiating a new one\napp.WasmKeeper = wasmkeeper.NewKeeper(\n  appCodec,\n  keys[wasmtypes.StoreKey],\n  app.AccountKeeper,\n  app.BankKeeper,\n  app.StakingKeeper,\n  distrkeeper.NewQuerier(app.DistrKeeper),\n  app.IBCFeeKeeper, // ISC4 Wrapper: fee IBC middleware\n  app.IBCKeeper.ChannelKeeper,\n  &app.IBCKeeper.PortKeeper,\n  scopedWasmKeeper,\n  app.TransferKeeper,\n  app.MsgServiceRouter(),\n  app.GRPCQueryRouter(),\n  wasmDir,\n  wasmConfig,\n  availableCapabilities,\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n  wasmOpts...,\n)\n\napp.WasmClientKeeper = ibcwasmkeeper.NewKeeperWithVM(\n  appCodec,\n  runtime.NewKVStoreService(keys[ibcwasmtypes.StoreKey]),\n  app.IBCKeeper.ClientKeeper,\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n  wasmer, // pass the Wasm VM instance to `08-wasm` keeper constructor\n  app.GRPCQueryRouter(),\n)\n...\n'})}),"\n",(0,t.jsxs)(s.h3,{id:"if-xwasm-is-not-present",children:["If ",(0,t.jsx)(s.code,{children:"x/wasm"})," is not present"]}),"\n",(0,t.jsxs)(s.p,{children:["If the chain does not use ",(0,t.jsx)(s.a,{href:"https://github.com/CosmWasm/wasmd/tree/main/x/wasm",children:(0,t.jsx)(s.code,{children:"x/wasm"})}),", even though it is still possible to use the method above from the previous section\n(e.g. instantiating a Wasm VM in app.go an pass it to 08-wasm's ",(0,t.jsxs)(s.a,{href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/keeper/keeper.go#L39-L47",children:[(0,t.jsx)(s.code,{children:"NewKeeperWithVM"})," constructor function"]}),", since there would be no need in this case to share the Wasm VM instance with another module, you can use the ",(0,t.jsxs)(s.a,{href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/keeper/keeper.go#L88-L96",children:[(0,t.jsx)(s.code,{children:"NewKeeperWithConfig"})," constructor function"]})," and provide the Wasm VM configuration parameters of your choice instead. A Wasm VM instance will be created in ",(0,t.jsx)(s.code,{children:"NewKeeperWithConfig"}),". The parameters that can set are:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"DataDir"})," is the ",(0,t.jsx)(s.a,{href:"https://github.com/CosmWasm/wasmvm/blob/v2.0.0/lib.go#L25",children:"directory for Wasm blobs and various caches"}),". As an example, in ",(0,t.jsx)(s.code,{children:"wasmd"})," this is set to the ",(0,t.jsxs)(s.a,{href:"https://github.com/CosmWasm/wasmd/blob/36416def20effe47fb77f29f5ba35a003970fdba/app/app.go#L578",children:[(0,t.jsx)(s.code,{children:"wasm"})," folder under the home directory"]}),". In the code snippet below we set this field to the ",(0,t.jsx)(s.code,{children:"ibc_08-wasm_client_data"})," folder under the home directory."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"SupportedCapabilities"})," is a ",(0,t.jsx)(s.a,{href:"https://github.com/CosmWasm/wasmvm/blob/v2.0.0/lib.go#L26",children:"list of capabilities supported by the chain"}),". ",(0,t.jsxs)(s.a,{href:"https://github.com/CosmWasm/wasmd/blob/36416def20effe47fb77f29f5ba35a003970fdba/app/app.go#L586",children:[(0,t.jsx)(s.code,{children:"wasmd"})," sets this to all the available capabilities"]}),", but 08-wasm only requires ",(0,t.jsx)(s.code,{children:"iterator"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"MemoryCacheSize"})," sets ",(0,t.jsx)(s.a,{href:"https://github.com/CosmWasm/wasmvm/blob/v2.0.0/lib.go#L29C16-L29C104",children:"the size in MiB of an in-memory cache for e.g. module caching"}),". It is not consensus-critical and should be defined on a per-node basis, often in the range 100 to 1000 MB. ",(0,t.jsxs)(s.a,{href:"https://github.com/CosmWasm/wasmd/blob/36416def20effe47fb77f29f5ba35a003970fdba/app/app.go#L579",children:[(0,t.jsx)(s.code,{children:"wasmd"})," reads this value of"]}),". Default value is 256."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"ContractDebugMode"})," is a ",(0,t.jsx)(s.a,{href:"https://github.com/CosmWasm/wasmvm/blob/v2.0.0/lib.go#L28",children:"flag to enable/disable printing debug logs from the contract to STDOUT"}),". This should be false in production environments. Default value is false."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Another configuration parameter of the Wasm VM is the contract memory limit (in MiB), which is ",(0,t.jsx)(s.a,{href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/types/config.go#L8",children:"set to 32"}),", ",(0,t.jsxs)(s.a,{href:"https://github.com/CosmWasm/wasmd/blob/36416def20effe47fb77f29f5ba35a003970fdba/x/wasm/keeper/keeper.go#L32-L34",children:["following the example of ",(0,t.jsx)(s.code,{children:"wasmd"})]}),". This parameter is not configurable by users of ",(0,t.jsx)(s.code,{children:"08-wasm"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The following sample code shows how the keeper would be constructed using this method:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'// app.go\nimport (\n  ...\n  "github.com/cosmos/cosmos-sdk/runtime"\n\n  ibcwasmkeeper "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/keeper"\n  ibcwasmtypes "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"\n  ...\n)\n\n...\n\n// homePath is the path to the directory where the data\n// directory for Wasm blobs and caches will be created\nwasmConfig := ibcwasmtypes.WasmConfig{\n  DataDir:               filepath.Join(homePath, "ibc_08-wasm_client_data"),\n  SupportedCapabilities: []string{"iterator"},\n  ContractDebugMode:     false,\n}\napp.WasmClientKeeper = ibcwasmkeeper.NewKeeperWithConfig(\n  appCodec,\n  runtime.NewKVStoreService(keys[ibcwasmtypes.StoreKey]),\n  app.IBCKeeper.ClientKeeper,\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n  wasmConfig,\n  app.GRPCQueryRouter(),\n)\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Check out also the ",(0,t.jsxs)(s.a,{href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/types/config.go#L21-L31",children:[(0,t.jsx)(s.code,{children:"WasmConfig"})," type definition"]})," for more information on each of the configurable parameters. Some parameters allow node-level configurations. There is additionally the function ",(0,t.jsx)(s.a,{href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/types/config.go#L36-L42",children:(0,t.jsx)(s.code,{children:"DefaultWasmConfig"})})," available that returns a configuration with the default values."]}),"\n",(0,t.jsx)(s.h3,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"08-wasm"})," module comes with an options API inspired by the one in ",(0,t.jsx)(s.code,{children:"x/wasm"}),".\nCurrently the only option available is the ",(0,t.jsx)(s.code,{children:"WithQueryPlugins"})," option, which allows registration of custom query plugins for the ",(0,t.jsx)(s.code,{children:"08-wasm"})," module. The use of this API is optional and it is only required if the chain wants to register custom query plugins for the ",(0,t.jsx)(s.code,{children:"08-wasm"})," module."]}),"\n",(0,t.jsx)(s.h4,{id:"withqueryplugins",children:(0,t.jsx)(s.code,{children:"WithQueryPlugins"})}),"\n",(0,t.jsxs)(s.p,{children:["By default, the ",(0,t.jsx)(s.code,{children:"08-wasm"})," module does not configure any querier options for light client contracts. However, it is possible to register custom query plugins for ",(0,t.jsx)(s.a,{href:"https://github.com/CosmWasm/cosmwasm/blob/v1.5.0/packages/std/src/query/mod.rs#L45",children:(0,t.jsx)(s.code,{children:"QueryRequest::Custom"})})," and ",(0,t.jsx)(s.a,{href:"https://github.com/CosmWasm/cosmwasm/blob/v1.5.0/packages/std/src/query/mod.rs#L54-L61",children:(0,t.jsx)(s.code,{children:"QueryRequest::Stargate"})}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Assuming that the keeper is not yet instantiated, the following sample code shows how to register query plugins for the ",(0,t.jsx)(s.code,{children:"08-wasm"})," module."]}),"\n",(0,t.jsxs)(s.p,{children:["We first construct a ",(0,t.jsx)(s.a,{href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/types/querier.go#L78-L87",children:(0,t.jsx)(s.code,{children:"QueryPlugins"})})," object with the desired query plugins:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:"queryPlugins := ibcwasmtypes.QueryPlugins {\n  Custom: MyCustomQueryPlugin(),\n  // `myAcceptList` is a `[]string` containing the list of gRPC query paths that the chain wants to allow for the `08-wasm` module to query.\n  // These queries must be registered in the chain's gRPC query router, be deterministic, and track their gas usage.\n  // The `AcceptListStargateQuerier` function will return a query plugin that will only allow queries for the paths in the `myAcceptList`.\n  // The query responses are encoded in protobuf unlike the implementation in `x/wasm`.\n  Stargate: ibcwasmtypes.AcceptListStargateQuerier(myAcceptList),\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Note that the ",(0,t.jsx)(s.code,{children:"Stargate"})," querier appends the user defined accept list of query routes to a default list defined by the ",(0,t.jsx)(s.code,{children:"08-wasm"})," module.\nThe ",(0,t.jsx)(s.code,{children:"defaultAcceptList"})," defines a single query route: ",(0,t.jsx)(s.code,{children:'"/ibc.core.client.v1.Query/VerifyMembership"'}),". This allows for light client smart contracts to delegate parts of their workflow to other light clients for auxiliary proof verification. For example, proof of inclusion of block and tx data by a data availability provider."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'// defaultAcceptList defines a set of default allowed queries made available to the Querier.\nvar defaultAcceptList = []string{\n  "/ibc.core.client.v1.Query/VerifyMembership",\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["You may leave any of the fields in the ",(0,t.jsx)(s.code,{children:"QueryPlugins"})," object as ",(0,t.jsx)(s.code,{children:"nil"})," if you do not want to register a query plugin for that query type."]}),"\n",(0,t.jsxs)(s.p,{children:["Then, we pass the ",(0,t.jsx)(s.code,{children:"QueryPlugins"})," object to the ",(0,t.jsx)(s.code,{children:"WithQueryPlugins"})," option:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:"querierOption := ibcwasmkeeper.WithQueryPlugins(&queryPlugins)\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Finally, we pass the option to the ",(0,t.jsx)(s.code,{children:"NewKeeperWithConfig"})," or ",(0,t.jsx)(s.code,{children:"NewKeeperWithVM"})," constructor function during ",(0,t.jsx)(s.a,{href:"#keeper-instantiation",children:"Keeper instantiation"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-diff",children:"app.WasmClientKeeper = ibcwasmkeeper.NewKeeperWithConfig(\n  appCodec,\n  runtime.NewKVStoreService(keys[ibcwasmtypes.StoreKey]),\n  app.IBCKeeper.ClientKeeper,\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n  wasmConfig,\n  app.GRPCQueryRouter(),\n+ querierOption,\n)\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-diff",children:"app.WasmClientKeeper = ibcwasmkeeper.NewKeeperWithVM(\n  appCodec,\n  runtime.NewKVStoreService(keys[ibcwasmtypes.StoreKey]),\n  app.IBCKeeper.ClientKeeper,\n  authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n  wasmer, // pass the Wasm VM instance to `08-wasm` keeper constructor\n  app.GRPCQueryRouter(),\n+ querierOption,\n)\n"})}),"\n",(0,t.jsxs)(s.h2,{id:"updating-allowedclients",children:["Updating ",(0,t.jsx)(s.code,{children:"AllowedClients"})]}),"\n",(0,t.jsxs)(s.p,{children:["If the chain's 02-client submodule parameter ",(0,t.jsx)(s.code,{children:"AllowedClients"})," contains the single wildcard ",(0,t.jsx)(s.code,{children:'"*"'})," element, then it is not necessary to do anything in order to allow the creation of ",(0,t.jsx)(s.code,{children:"08-wasm"})," clients. However, if the parameter contains a list of client types (e.g. ",(0,t.jsx)(s.code,{children:'["06-solomachine", "07-tendermint"]'}),"), then in order to use the ",(0,t.jsx)(s.code,{children:"08-wasm"})," module chains must update the ",(0,t.jsxs)(s.a,{href:"https://github.com/cosmos/ibc-go/blob/v8.0.0/proto/ibc/core/client/v1/client.proto#L64",children:[(0,t.jsx)(s.code,{children:"AllowedClients"})," parameter"]})," of core IBC. This can be configured directly in the application upgrade handler with the sample code below:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'import (\n  ...\n  ibcwasmtypes "github.com/cosmos/ibc-go/modules/light-clients/08-wasm/types"\n  ...\n)\n\n...\n\nfunc CreateWasmUpgradeHandler(\n  mm *module.Manager,\n  configurator module.Configurator,\n  clientKeeper clientkeeper.Keeper,\n) upgradetypes.UpgradeHandler {\n  return func(ctx context.Context, _ upgradetypes.Plan, vm module.VersionMap) (module.VersionMap, error) {\n    sdkCtx := sdk.UnwrapSDKContext(ctx)\n    // explicitly update the IBC 02-client params, adding the wasm client type\n    params := clientKeeper.GetParams(ctx)\n    params.AllowedClients = append(params.AllowedClients, ibcwasmtypes.Wasm)\n    clientKeeper.SetParams(ctx, params)\n\n    return mm.RunMigrations(ctx, configurator, vm)\n  }\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Or alternatively the parameter can be updated via a governance proposal (see at the bottom of section ",(0,t.jsx)(s.a,{href:"/main/ibc/light-clients/setup#creating-clients",children:(0,t.jsx)(s.code,{children:"Creating clients"})})," for an example of how to do this)."]}),"\n",(0,t.jsx)(s.h2,{id:"adding-the-module-to-the-store",children:"Adding the module to the store"}),"\n",(0,t.jsx)(s.p,{children:"As part of the upgrade migration you must also add the module to the upgrades store."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:"func (app SimApp) RegisterUpgradeHandlers() {\n\n  ...\n\n  if upgradeInfo.Name == UpgradeName && !app.UpgradeKeeper.IsSkipHeight(upgradeInfo.Height) {\n    storeUpgrades := storetypes.StoreUpgrades{\n      Added: []string{\n        ibcwasmtypes.ModuleName,\n      },\n    }\n\n    // configure store loader that checks if version == upgradeHeight and applies store upgrades\n    app.SetStoreLoader(upgradetypes.UpgradeStoreLoader(upgradeInfo.Height, &storeUpgrades))\n  }\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"adding-snapshot-support",children:"Adding snapshot support"}),"\n",(0,t.jsxs)(s.p,{children:["In order to use the ",(0,t.jsx)(s.code,{children:"08-wasm"})," module chains are required to register the ",(0,t.jsx)(s.code,{children:"WasmSnapshotter"})," extension in the snapshot manager. This snapshotter takes care of persisting the external state, in the form of contract code, of the Wasm VM instance to disk when the chain is snapshotted. ",(0,t.jsx)(s.a,{href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/testing/simapp/app.go#L775-L782",children:"This code"})," should be placed in ",(0,t.jsx)(s.code,{children:"NewSimApp"})," function in ",(0,t.jsx)(s.code,{children:"app.go"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"pin-byte-codes-at-start",children:"Pin byte codes at start"}),"\n",(0,t.jsxs)(s.p,{children:["Wasm byte codes should be pinned to the WasmVM cache on every application start, therefore ",(0,t.jsx)(s.a,{href:"https://github.com/cosmos/ibc-go/blob/57fcdb9a9a9db9b206f7df2f955866dc4e10fef4/modules/light-clients/08-wasm/testing/simapp/app.go#L825-L830",children:"this code"})," should be placed in ",(0,t.jsx)(s.code,{children:"NewSimApp"})," function in ",(0,t.jsx)(s.code,{children:"app.go"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>a});var t=n(67294);const i={},o=t.createContext(i);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);