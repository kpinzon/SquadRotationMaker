(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(a,e,t){a.exports=t(312)},155:function(a,e,t){},310:function(a,e,t){},312:function(a,e,t){"use strict";t.r(e);var r=t(1),m=t.n(r),n=t(9),s=t.n(n),i=(t(155),t(27)),l=t(50),o=t(30),c=t(28),g=t(31),I=t(147),S=t(53),v=["Al Basrah","Belaya","Chora","Fool's Road","Gorodok","Kamdesh","Jensen's Range","Kohat","Kokan","Logar","Mestia","Narva","Sumari","Tallil","Yehorivka"],d=t(134),y=d.a.Option,k=function(a){function e(){var a,t;Object(i.a)(this,e);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(o.a)(this,(a=Object(c.a)(e)).call.apply(a,[this].concat(n)))).state={addButtonDisabled:!0,selectedMap:null},t.mapSelectRef=m.a.createRef(),t.emptyText="Select a Map",t.handleChange=function(a){t.setState({selectedMap:a}),t.props.changeSelection(a)},t.handleAdd=function(){t.props.addMap(t.state.selectedLayer)},t.render=function(){return m.a.createElement("div",null,m.a.createElement(d.a,{showSearch:!0,onChange:t.handleChange,ref:t.mapSelectRef,name:"selectMap",style:{width:300},optionFilterProp:"children",placeholder:"Select a Map",filterOption:function(a,e){return e.props.children.toLowerCase().indexOf(a.toLowerCase())>=0}},v.map(function(a,e){return m.a.createElement(y,{key:a,value:e},a)})))},t}return Object(g.a)(e,a),e}(m.a.Component),A=t(316),h=t(313),u=t(314),V=t(317),f=t(73),N=A.a.Meta,R=function(a){function e(){var a,t;Object(i.a)(this,e);for(var r=arguments.length,m=new Array(r),n=0;n<r;n++)m[n]=arguments[n];return(t=Object(o.a)(this,(a=Object(c.a)(e)).call.apply(a,[this].concat(m)))).state={visible:!1,layerSelected:{}},t.test=function(){console.log("Test")},t.showModal=function(a){console.log(a),t.setState({visible:!0,layerSelected:a})},t.handleOk=function(a){t.setState({visible:!1})},t.handleCancel=function(a){t.setState({visible:!1})},t}return Object(g.a)(e,a),Object(l.a)(e,[{key:"render",value:function(){var a=this;return m.a.createElement(h.a,{type:"flex",justify:"center",gutter:12},this.props.layers.map(function(e){return m.a.createElement(u.a,{key:e.name},m.a.createElement(A.a,{bodyStyle:{backgroundColor:"#d9e8e7 "},key:e.name,style:{width:250,marginBottom:10},actions:[m.a.createElement("span",{onClick:function(){return a.showModal(e)}},"View Map"),m.a.createElement("span",{onClick:function(){return a.props.addMap(e)}},"Add")]},m.a.createElement(N,{title:e.name,description:m.a.createElement(h.a,{justify:"center"},m.a.createElement(u.a,{span:8},m.a.createElement("img",{alt:"team1Image",src:e.team1Image,style:{width:50,heigth:25}})),m.a.createElement(u.a,{span:2}),m.a.createElement(u.a,{span:4},m.a.createElement("span",null,"VS.")),m.a.createElement(u.a,{span:2}),m.a.createElement(u.a,{span:8},m.a.createElement("img",{alt:"team2Image",src:e.team2Image,style:{width:50,heigth:25}})),m.a.createElement(u.a,null,m.a.createElement("span",{style:{fontSize:10}},"Faction Info Last Updated: v",e.factionDataVers)))})),m.a.createElement(V.a,{title:a.state.layerSelected.name,visible:a.state.visible,onOk:a.handleOk,onCancel:a.handleCancel,centered:!0,width:700,footer:[m.a.createElement(f.a,{key:"ok",type:"primary",onClick:a.handleOk},"Close")]},m.a.createElement("p",null,"Image As Of Squad Version: ",a.state.layerSelected.imageVers),m.a.createElement("p",null,"Reminder: RAAS layers have random capture points"),m.a.createElement("img",{alt:"layer",style:{width:600,height:600},src:a.state.layerSelected.layerImage})))}))}}]),e}(m.a.Component),p=[{name:"Al Basrah RAAS v1",team1:"MIL",team2:"INS",attackersId:"null",layerImage:"/images/AlBasrahRAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Al Basrah Invasion v1",team1:"GB",team2:"INS",attackersId:1,layerImage:"/images/AlBasrahINVv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Al Basrah Invasion v2",team1:"GB",team2:"INS",attackersId:1,layerImage:"/images/AlBasrahINVv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Al Basrah Insurgency v1",team1:"GB",team2:"INS",attackersId:1,layerImage:"/images/AlBasrahINSv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Belaya AAS v1",team1:"RUS",team2:"MIL",attackersId:"null",layerImage:"/images/BelayaAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Belaya AAS v2",team1:"US",team2:"MIL",attackersId:"null",layerImage:"/images/BelayaAASv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Belaya AAS v3",team1:"GB",team2:"MIL",attackersId:"null",layerImage:"/images/BelayaAASv3_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Belaya RAAS v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/BelayaRAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Belaya Invasion v1",team1:"RUS",team2:"MIL",attackersId:1,layerImage:"/images/BelayaINVv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Belaya Invasion v2",team1:"US",team2:"RUS",attackersId:1,layerImage:"/images/BelayaINVv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Belaya Invasion v3",team1:"GB",team2:"RUS",attackersId:1,layerImage:"/images/BelayaINVv3_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Chora AAS v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/ChoraAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Chora AAS v2",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/ChoraAASv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Chora RAAS v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/ChoraRAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Chora Invasion v1 Night",team1:"US",team2:"INS",attackersId:1,layerImage:"/images/ChoraINVv1night_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Chora Insurgency v1",team1:"US",team2:"INS",attackersId:1,layerImage:"/images/ChoraINSv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Chora Skirmish v1 Night",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/ChoraSkirmishv1night_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Fool's Road AAS v1",team1:"RUS",team2:"MIL",attackersId:"null",layerImage:"/images/FoolsroadAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Fool's Road AAS v2",team1:"RUS",team2:"MIL",attackersId:"null",layerImage:"/images/FoolsroadAASv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Fool's Road AAS v3",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/FoolsroadAASv3_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Fool's Road AAS v4",team1:"GB",team2:"MIL",attackersId:"null",layerImage:"/images/FoolsroadAASv4_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Fool's Road RAAS v1",team1:"GB",team2:"MIL",attackersId:"null",layerImage:"/images/FoolsroadRAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Fool's Road Skirmish v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/FoolsroadSkirmishv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Fool's Road Skirmish v2",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/FoolsroadSkirmishv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Gorodok AAS v1",team1:"RUS",team2:"MIL",attackersId:"null",layerImage:"/images/GorodokAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Gorodok AAS v2",team1:"US",team2:"MIL",attackersId:"null",layerImage:"/images/GorodokAASv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Gorodok AAS v3",team1:"GB",team2:"RUS",attackersId:"null",layerImage:"/images/GorodokAASv3_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Gorodok AAS v4",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/GorodokAASv4_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Gorodok RAAS v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/GorodokRAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Gorodok RAAS v2",team1:"GB",team2:"RUS",attackersId:"null",layerImage:"/images/GorodokRAASv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Gorodok Invasion v1",team1:"US",team2:"RUS",attackersId:1,layerImage:"/images/GorodokINVv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Gorodok Invasion v2",team1:"RUS",team2:"MIL",attackersId:1,layerImage:"/images/GorodokINVv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Gorodok Skirmish v1",team1:"RUS",team2:"MIL",attackersId:"null",layerImage:"/images/GorodokSkirmishv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Jensen's Range v1",team1:"GB",team2:"MIL",attackersId:"null",layerImage:"/images/Jensensrangev1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Jensen's Range v2",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/Jensensrangev2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Jensen's Range v3",team1:"US",team2:"INS",attackersId:"null",layerImage:"/images/Jensensrangev3_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Jensen's Range Skirmish v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/JensensrangeSkirmishv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kamdesh AAS v1",team1:"GB",team2:"RUS",attackersId:"null",layerImage:"/images/KamdeshAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kamdesh RAAS v1",team1:"GB",team2:"RUS",attackersId:"null",layerImage:"/images/KamdeshRAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kamdesh RAAS v2",team1:"GB",team2:"RUS",attackersId:"null",layerImage:"/images/KamdeshRAASv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kamdesh RAAS v3",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/KamdeshRAASv3_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kamdesh Invasion v1",team1:"US",team2:"INS",attackersId:1,layerImage:"/images/KamdeshINVv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kamdesh Invasion v2",team1:"GB",team2:"INS",attackersId:1,layerImage:"/images/KamdeshINVv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kamdesh Invasion v3",team1:"US",team2:"INS",attackersId:1,layerImage:"/images/KamdeshINVv3_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kamdesh Insurgency v1",team1:"US",team2:"INS",attackersId:1,layerImage:"/images/KamdeshINSv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kamdesh Insurgency v2",team1:"GB",team2:"INS",attackersId:1,layerImage:"/images/KamdeshINSv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kamdesh Skirmish v1",team1:"US",team2:"GB",attackersId:"null",layerImage:"/images/KamdeshSkirmishv1.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Kohat AAS v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/KohatAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kohat AAS v2",team1:"GB",team2:"RUS",attackersId:"null",layerImage:"/images/KohatAASv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kohat RAAS v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/KohatRAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kohat Invasion v1",team1:"US",team2:"INS",attackersId:1,layerImage:"/images/KohatINVv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kohat Insurgency v1",team1:"US",team2:"INS",attackersId:1,layerImage:"/images/KohatINSv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kohat Skirmish v1",team1:"US",team2:"GB",attackersId:"null",layerImage:"/images/KohatSkirmishv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kokan AAS v1",team1:"US",team2:"MIL",attackersId:"null",layerImage:"/images/KokanAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kokan AAS v2",team1:"RUS",team2:"MIL",attackersId:"null",layerImage:"/images/KokanAASv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kokan RAAS v1",team1:"US",team2:"MIL",attackersId:"null",layerImage:"/images/KokanRAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kokan Invasion v1",team1:"RUS",team2:"INS",attackersId:1,layerImage:"/images/KokanINVv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kokan Insurgency v1",team1:"US",team2:"INS",attackersId:1,layerImage:"/images/KokanINSv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Kokan Skirmish v1",team1:"MIL",team2:"INS",attackersId:"null",layerImage:"/images/KokanSkirmishv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Logar Valley AAS v1",team1:"US",team2:"MIL",attackersId:"null",layerImage:"/images/LogarAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Logar Valley AAS INF v1",team1:"US",team2:"MIL",attackersId:"null",layerImage:"/images/LogarAASinfv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Logar Valley RAAS v1",team1:"US",team2:"MIL",attackersId:"null",layerImage:"/images/LogarRAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Logar Valley Insurgency v1",team1:"RUS",team2:"INS",attackersId:1,layerImage:"/images/LogarINSv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Logar Valley Insurgency v1 Night",team1:"US",team2:"INS",attackersId:1,layerImage:"/images/LogarINSv1night_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Mestia AAS v1",team1:"RUS",team2:"MIL",attackersId:"null",layerImage:"/images/MestiaAASv1.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Mestia AAS v2",team1:"US",team2:"MIL",attackersId:"null",layerImage:"/images/MestiaAASv2.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Mestia RAAS v1",team1:"US",team2:"MIL",attackersId:"null",layerImage:"/images/MestiaRAASv1.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Mestia Invasion v1",team1:"RUS",team2:"MIL",attackersId:1,layerImage:"/images/MestiaINVv1.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Mestia Invasion v2",team1:"US",team2:"MIL",attackersId:1,layerImage:"/images/MestiaINVv2.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Narva AAS v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/NarvaAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Narva AAS v2",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/NarvaAASv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Narva AAS v3",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/NarvaAASv3_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Narva RAAS v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/NarvaRAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Narva Invasion v1",team1:"US",team2:"RUS",attackersId:2,layerImage:"/images/NarvaINVv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Narva Invasion v2",team1:"GB",team2:"RUS",attackersId:1,layerImage:"/images/NarvaINVv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Narva Skirmish v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/NarvaSkirmishv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Sumari AAS v3",team1:"GB",team2:"MIL",attackersId:"null",layerImage:"/images/SumariAASv3_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Sumari RAAS v1",team1:"US",team2:"MIL",attackersId:"null",layerImage:"/images/SumariRAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Sumari Insurgency v1",team1:"US",team2:"INS",attackersId:1,layerImage:"/images/SumariINSv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Sumari Skirmish v1",team1:"MIL",team2:"INS",attackersId:"null",layerImage:"/images/SumariSkirmishv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Tallil Outskirts AAS v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/TallilAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Tallil Outskirts RAAS v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/TallilRAASv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Tallil Outskirts RAAS v2",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/TallilRAASv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Tallil Outskirts Invasion v1",team1:"US",team2:"RUS",attackersId:1,layerImage:"/images/TallilINVv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Tallil Outskirts Skirmish v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/TallilSkirmishv1_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Tallil Outskirts Skirmish v2",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/TallilSkirmishv2_12-1.PNG",imageVers:12.1,factionDataVers:12.1},{name:"Yehorivka AAS v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/YehorivkaAASv1.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Yehorivka AAS v2",team1:"GB",team2:"RUS",attackersId:"null",layerImage:"/images/YehorivkaAASv2.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Yehorivka AAS v3",team1:"GB",team2:"RUS",attackersId:"null",layerImage:"/images/YehorivkaAASv3.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Yehorivka AAS v5",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/YehorivkaAASv5.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Yehorivka RAAS v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/YehorivkaRAASv1.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Yehorivka RAAS v2",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/YehorivkaRAASv2.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Yehorivka Invasion v1",team1:"US",team2:"RUS",attackersId:2,layerImage:"/images/YehorivkaINVv1.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Yehorivka Invasion v2",team1:"US",team2:"RUS",attackersId:2,layerImage:"/images/YehorivkaINVv2.PNG",imageVers:12.2,factionDataVers:12.2},{name:"Yehorivka Skirmish v1",team1:"US",team2:"RUS",attackersId:"null",layerImage:"/images/YehorivkaSkirmishv1.PNG",imageVers:12.2,factionDataVers:12.2}],G=t(315),U=t(318),D=function(a){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(g.a)(e,a),Object(l.a)(e,[{key:"render",value:function(){var a=this;return this.columns=[{title:"Actions",key:"actions",width:160,render:function(e,t,r){return m.a.createElement("span",null,m.a.createElement(f.a,{style:{marginRight:3},ghost:!0,type:"primary",icon:"caret-up",onClick:function(){return a.props.handleMoveUp(r)}}),m.a.createElement(f.a,{style:{marginRight:3},ghost:!0,type:"primary",icon:"caret-down",onClick:function(){return a.props.handleMoveDown(r)}}),m.a.createElement(f.a,{ghost:!0,type:"danger",icon:"close",onClick:function(){return a.props.handleRemove(r)}}))}},{title:"Layer Name",dataIndex:"name",key:"name"},{title:"Team ID 1",key:"team1",render:function(a,e){return m.a.createElement("img",{alt:"team 1",src:e.team1Image,style:{width:50,heigth:25}})}},{title:"Team ID 2",key:"team2",render:function(a,e){return m.a.createElement("img",{alt:"team 2",src:e.team2Image,style:{width:50,heigth:25}})}},{title:"Attacking Team",key:"attacking",render:function(a,e){return 1===e.attackersId?m.a.createElement("img",{alt:"attackers",src:e.team1Image,style:{width:50,heigth:25}}):2===e.attackersId?m.a.createElement("img",{alt:"attackers",src:e.team2Image,style:{width:50,heigth:25}}):void 0}},{title:"Warnings",key:"warningMessage",dataIndex:"warningMessage",render:function(a){if(a)return m.a.createElement(U.a,{color:"red"},a)}}],m.a.createElement(G.a,{columns:this.columns,dataSource:this.props.layerRotation,rowKey:function(a){return a.key},pagination:!1,style:{width:900,backgroundColor:"#f5f3f2"}})}}]),e}(m.a.Component),P=(t(308),function(a){function e(){var a,t;Object(i.a)(this,e);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=Object(o.a)(this,(a=Object(c.a)(e)).call.apply(a,[this].concat(n)))).state={mapsRotation:[],layersToChooseFrom:[],optionRowStyle:{marginBottom:20,height:200}},t.handleAddMap=function(a){console.log("ADD MAP!!!",a);var e=Object(S.a)(t.state.mapsRotation);e.push(Object(I.a)({},a)),e[e.length-1].key=Date.now(),console.log(e),t.checkLayersForIssues(e),t.setState({mapsRotation:e})},t.handleSelectMap=function(a){var e=[],r=v[a];p.map(function(a){if(a.name.startsWith(r)){switch(a.team1){case"US":a.team1Image="/images/US_Flag.png";break;case"GB":a.team1Image="/images/GB_flag.jpg";break;case"INS":a.team1Image="/images/INS_Flag.png";break;case"MIL":a.team1Image="/images/MIL_Flag.png";break;case"RUS":a.team1Image="/images/RUS_Flag.png";break;default:console.log("default")}switch(a.team2){case"US":a.team2Image="/images/US_Flag.png";break;case"GB":a.team2Image="/images/GB_flag.jpg";break;case"INS":a.team2Image="/images/INS_Flag.png";break;case"MIL":a.team2Image="/images/MIL_Flag.png";break;case"RUS":a.team2Image="/images/RUS_Flag.png";break;default:console.log("default")}e.push(a)}return a}),t.setState({layersToChooseFrom:e,optionRowStyle:{marginBottom:20}})},t.handleMoveLayerUpInArray=function(a){var e=Object(S.a)(t.state.mapsRotation);if(a>0){var r=t.moveItemInArrayFromIndexToIndex(e,a,a-1);t.checkLayersForIssues(r),t.setState({mapsRotation:r})}},t.handleMoveLayerDownInArray=function(a){var e=Object(S.a)(t.state.mapsRotation);if(a<e.length-1){var r=t.moveItemInArrayFromIndexToIndex(e,a,a+1);t.checkLayersForIssues(r),t.setState({mapsRotation:r})}},t.handleRemoveLayerInArray=function(a){var e=Object(S.a)(t.state.mapsRotation);e.splice(a,1),t.checkLayersForIssues(e),t.setState({mapsRotation:e})},t.moveItemInArrayFromIndexToIndex=function(a,e,t){if(e===t)return a;for(var r=Object(S.a)(a),m=r[e],n=t<e?-1:1,s=e;s!==t;s+=n)r[s]=r[s+n];return r[t]=m,r},t.checkLayersForIssues=function(a){var e=a.length;1===e?delete a[0].warningMessage:e>1&&a.map(function(t,r){return 0===r?t.team1===a[e-1].team2||t.team2===a[e-1].team1?a[0].warningMessage="Same Faction As Very Last Layer":1===t.attackersId&&2===a[e-1].attackersId||2===t.attackersId&&1===a[e-1].attackersId?a[0].warningMessage="Same ATK/DEF As Very Last Layer":delete a[0].warningMessage:t.team1===a[r-1].team2||t.team2===a[r-1].team1?a[r].warningMessage="Same Faction On Map Roll":1===t.attackersId&&2===a[r-1].attackersId||2===t.attackersId&&1===a[r-1].attackersId?a[r].warningMessage="Same ATK/DEF On Map Roll":t.name===a[r-1].name?a[r].warningMessage="Same Layer as Above":delete a[r].warningMessage,t})},t.render=function(){return m.a.createElement("div",null,m.a.createElement(h.a,{type:"flex",justify:"center",style:{marginBottom:20,marginTop:50}},m.a.createElement(u.a,null,m.a.createElement("h1",{style:{color:"#FFF0CE"}},"Squad Rotation Tool"))),m.a.createElement(h.a,{type:"flex",justify:"center",style:{marginBottom:20}},m.a.createElement(u.a,null,m.a.createElement(k,{addMap:t.handleAddMap,changeSelection:t.handleSelectMap}))),m.a.createElement(h.a,{type:"flex",justify:"center",style:t.state.optionRowStyle},m.a.createElement(u.a,{span:12},m.a.createElement(R,{layers:t.state.layersToChooseFrom,addMap:t.handleAddMap}))),m.a.createElement(h.a,{type:"flex",justify:"center"},m.a.createElement(u.a,null,m.a.createElement(D,{layerRotation:t.state.mapsRotation,handleMoveUp:t.handleMoveLayerUpInArray,handleMoveDown:t.handleMoveLayerDownInArray,handleRemove:t.handleRemoveLayerInArray}))),m.a.createElement(h.a,{type:"flex",justify:"center",style:{marginTop:10}},m.a.createElement(u.a,null,m.a.createElement("p",{style:{color:"#FFF0CE",width:900}},"Reminder: As of 12.1, both Yehorivka Invasions and Narva Invasion v1 have team ID 2 attacking. This can cause same ATK/DEF side issues when going from 1 to 2 (or 2 to 1). Usually best to put these back to back together, if doing invasion rotation"))),m.a.createElement(h.a,{type:"flex",justify:"center",style:{marginTop:20}},m.a.createElement(u.a,null,t.state.mapsRotation.length>0?m.a.createElement("h2",{style:{color:"#FFF0CE"}},"Text for Config File"):m.a.createElement("span",null))),m.a.createElement(h.a,{type:"flex",justify:"center",style:{paddingBottom:50}},m.a.createElement(u.a,{style:{backgroundColor:"#FFF",width:300}},t.state.mapsRotation.map(function(a){return m.a.createElement("span",null,a.name," ",m.a.createElement("br",null))}))))},t}return Object(g.a)(e,a),e}(m.a.Component)),_=(t(310),function(a){function e(){return Object(i.a)(this,e),Object(o.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(g.a)(e,a),Object(l.a)(e,[{key:"render",value:function(){return m.a.createElement(P,null)}}]),e}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(m.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})}},[[150,2,1]]]);
//# sourceMappingURL=main.e6064cd5.chunk.js.map