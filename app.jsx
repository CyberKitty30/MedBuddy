import { useState, useEffect, useRef } from "react";

const IC={pill:"M10.5 20.5 20.5 10.5a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7ZM8.5 8.5l7 7",upload:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12",check:"M20 6 9 17 4 12",mic:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v3",user:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",users:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",plus:"M12 5v14M5 12h14",trash:"M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6",close:"M18 6 6 18M6 6l12 12",eye:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",eyeOff:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22",chevR:"M9 18l6-6-6-6",chevD:"M6 9l6 6 6-6",chevL:"M15 18l-6-6 6-6",bell:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0",logout:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",calendar:"M3 4h18v18H3zM16 2v4M8 2v4M3 10h18",download:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",send:"M22 2 11 13M22 2 15 22 11 13 2 9l20-7z",copy:"M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zM5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",history:"M12 8v4l3 3M3.05 11a9 9 0 1 0 .5-3.5M3 4v4h4",chat:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",inbox:"M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",search:"M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z",activity:"M22 12h-4l-3 9L9 3l-3 9H2",zap:"M13 2 3 14h9l-1 8 10-12h-9l1-8z",file:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6",edit:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",volume:"M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07",stop:"M18 6H6v12h12z",shield:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"};
const I=({n,size=18,color="currentColor",sw=2,style:s={}})=>(
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,...s}}><path d={IC[n]}/></svg>
);

const DEMO_MEDS=[
  {name:"Amlodipine",dose:"5mg",timing:["morning"],food:"After food",duration:"30 days",color:"#0ea5e9",category:"Blood Pressure",purpose:"Lowers blood pressure by relaxing blood vessels.",interactions:"Avoid grapefruit juice.",storage:"Room temperature"},
  {name:"Metformin",dose:"500mg",timing:["morning","night"],food:"After food",duration:"30 days",color:"#10b981",category:"Diabetes",purpose:"Controls blood sugar by reducing glucose production.",interactions:"Avoid alcohol.",storage:"Room temperature, keep dry"},
  {name:"Atorvastatin",dose:"10mg",timing:["night"],food:"After food",duration:"30 days",color:"#8b5cf6",category:"Cholesterol",purpose:"Reduces bad cholesterol to protect the heart.",interactions:"Avoid grapefruit.",storage:"Cool dry place"},
  {name:"Aspirin EC",dose:"75mg",timing:["morning"],food:"After food",duration:"30 days",color:"#f59e0b",category:"Heart Protection",purpose:"Prevents blood clots, protects heart and brain.",interactions:"Avoid ibuprofen.",storage:"Away from moisture"},
];
const SEED_RX=[
  {id:"rx001",name:"Hypertension + Diabetes",doctor:"Dr. Priya Nair",clinic:"Patel Clinic, Mumbai",date:"23 Mar 2026",meds:4,status:"active",diagnosis:"Stage 1 Hypertension, Type 2 Diabetes",fileName:"prescription_mar2026.pdf",fileSize:"1.2 MB",fileType:"pdf",tags:["Heart","Diabetes"],medications:DEMO_MEDS,owner:"self",advice:["Monitor BP daily","Low salt diet","Walk 30 min daily","Follow-up in 4 weeks"],previewSrc:null},
  {id:"rx002",name:"Fever & Infection",doctor:"Dr. Ravi Menon",clinic:"Apollo Clinic",date:"10 Feb 2026",meds:3,status:"completed",diagnosis:"Viral fever with secondary infection",fileName:"prescription_feb2026.jpg",fileSize:"0.8 MB",fileType:"image",tags:["Fever"],medications:[
    {name:"Paracetamol",dose:"500mg",timing:["morning","afternoon","night"],food:"After food",duration:"5 days",color:"#ef4444",category:"Fever",purpose:"Reduces fever and relieves pain.",interactions:"Max 4 doses/day.",storage:"Room temperature"},
    {name:"Azithromycin",dose:"500mg",timing:["morning"],food:"After food",duration:"3 days",color:"#f97316",category:"Antibiotic",purpose:"Antibiotic to treat bacterial infection.",interactions:"Avoid antacids.",storage:"Room temperature"},
    {name:"Cetirizine",dose:"10mg",timing:["night"],food:"After food",duration:"5 days",color:"#06b6d4",category:"Allergy",purpose:"Relieves allergy symptoms.",interactions:"Avoid alcohol.",storage:"Room temperature"},
  ],owner:"self",advice:["Drink plenty of warm fluids","Rest for 3 days"],previewSrc:null},
];
const FAMILY_INIT=[
  {id:"m1",name:"Sunita Kumar",relation:"Wife",age:58,initials:"S",color:"#ec4899",lastActive:"2 days ago"},
  {id:"m2",name:"Arjun Kumar",relation:"Son",age:28,initials:"A",color:"#3b82f6",lastActive:"5 hrs ago"},
];
const MED_DB={amlodipine:{category:"Blood Pressure",purpose:"Lowers blood pressure by relaxing blood vessels."},metformin:{category:"Diabetes",purpose:"Controls blood sugar by reducing glucose production."},atorvastatin:{category:"Cholesterol",purpose:"Reduces bad cholesterol to protect the heart."},aspirin:{category:"Heart Protection",purpose:"Prevents blood clots, protects heart and brain."},paracetamol:{category:"Fever / Pain",purpose:"Reduces fever and relieves mild pain."},azithromycin:{category:"Antibiotic",purpose:"Antibiotic to fight bacterial infections."},amoxicillin:{category:"Antibiotic",purpose:"Antibiotic for respiratory infections."},cetirizine:{category:"Allergy",purpose:"Relieves allergy symptoms."},diclofenac:{category:"Pain Relief",purpose:"Reduces pain and inflammation."},pantoprazole:{category:"Stomach",purpose:"Protects the stomach lining from acidity."},omeprazole:{category:"Stomach",purpose:"Reduces stomach acid production."},losartan:{category:"Blood Pressure",purpose:"Lowers blood pressure by blocking angiotensin."},atenolol:{category:"Blood Pressure",purpose:"Slows heart rate and lowers blood pressure."},vitamin:{category:"Supplement",purpose:"Replenishes essential vitamin levels."},calcium:{category:"Supplement",purpose:"Supports bone strength."},levothyroxine:{category:"Thyroid",purpose:"Replaces thyroid hormone."},prednisolone:{category:"Steroid",purpose:"Reduces inflammation."},montelukast:{category:"Respiratory",purpose:"Prevents asthma symptoms."},ibuprofen:{category:"Pain Relief",purpose:"Reduces pain, fever and inflammation."}};
const MED_COLORS=["#0ea5e9","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#f97316","#14b8a6","#a855f7"];

function parseTiming(s){
  if(!s) return ["morning"];
  const m=s.match(/(\d)\s*[-]\s*(\d)\s*[-]\s*(\d)/);
  if(m){const t=[];if(+m[1])t.push("morning");if(+m[2])t.push("afternoon");if(+m[3])t.push("night");return t.length?t:["morning"];}
  const t=[];
  if(/morn|am|bd|tds|breakfast/i.test(s))t.push("morning");
  if(/after|noon|lunch|tds/i.test(s))t.push("afternoon");
  if(/night|pm|dinner|hs|bd|tds|bed/i.test(s))t.push("night");
  return t.length?t:["morning"];
}
function enrichMed(name,m){const k=Object.keys(MED_DB).find(k=>name.toLowerCase().includes(k));return k?{...m,...MED_DB[k]}:m;}
function apiToRx(p){
  const medications=(p.medications||[]).map((m,i)=>enrichMed(m.name||"",{name:m.name||"Medicine",dose:m.dose||"",purpose:m.purpose||"As prescribed by your doctor.",category:m.category||"Medicine",timing:parseTiming(m.timing||"1-0-0"),food:m.food||"After food",duration:m.duration||"As directed",color:MED_COLORS[i%MED_COLORS.length],interactions:"Consult doctor if side effects occur.",storage:"Store in cool dry place."}));
  return{medications,diagnosis:p.diagnosis||"",doctor:p.doctor||"",clinic:p.clinic||"",patient:p.patient||"",date:p.date||"",advice:p.advice||[]};
}
const CLAUDE_PROMPT=`You are a medical prescription reader. Read this prescription carefully - it may be handwritten, printed, or both. Return ONLY valid JSON with no markdown or explanation:
{"doctor":"","clinic":"","diagnosis":"","patient":"","date":"","medications":[{"name":"","dose":"","timing":"1-0-0","food":"After food","duration":"","purpose":"one sentence explanation","category":"Medicine"}],"advice":[]}
Rules: Extract every medicine visible. Do NOT invent medicines. Return JSON only.`;
async function callClaude(content){
  const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1500,messages:[{role:"user",content}]})});
  if(!res.ok){const e=await res.json().catch(()=>({}));throw new Error(e?.error?.message||`Error ${res.status}`);}
  const d=await res.json();
  const raw=d.content?.find(c=>c.type==="text")?.text||"{}";
  try{return JSON.parse(raw.replace(/```json\s*/gi,"").replace(/```\s*/gi,"").trim());}
  catch{throw new Error("Could not parse AI response.");}
}

const statusBadge=s=>s==="active"?{bg:"#dcfce7",c:"#14532d"}:{bg:"#f1f5f9",c:"#475569"};
const fileIcon=t=>t==="pdf"?"📄":t==="image"?"🖼️":"📁";
const tc=t=>t==="morning"?"#92400e":t==="afternoon"?"#134e4a":"#1e1b4b";
const tb=t=>t==="morning"?"#fef3c7":t==="afternoon"?"#ccfbf1":"#ede9fe";
const nowStr=()=>new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"});
const todayStr=()=>new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});

const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#f8f9fc;--sur:#fff;--s2:#f1f3f9;--bor:#e4e7ef;--p:#4f46e5;--pd:#3730a3;--pl:#eef2ff;--pll:#f5f7ff;--teal:#0891b2;--tl:#cffafe;--green:#16a34a;--gl:#dcfce7;--amber:#d97706;--al:#fef3c7;--red:#dc2626;--rl:#fee2e2;--text:#0f172a;--t2:#475569;--t3:#94a3b8;--t4:#cbd5e1;--r:13px;--sh1:0 1px 4px rgba(0,0,0,.06);--sh2:0 4px 16px rgba(0,0,0,.08);--sh3:0 8px 32px rgba(0,0,0,.1)}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;-webkit-font-smoothing:antialiased}
h1,h2,h3,h4{font-family:'Inter',sans-serif;font-weight:700;letter-spacing:-.02em}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes slideDown{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes shimmer{from{background-position:-200% 0}to{background-position:200% 0}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
@keyframes popIn{0%{transform:scale(.9);opacity:0}70%{transform:scale(1.03)}100%{transform:scale(1);opacity:1}}
@keyframes glow{0%,100%{box-shadow:0 0 0 0 rgba(79,70,229,.4)}50%{box-shadow:0 0 0 12px rgba(79,70,229,0)}}
@keyframes bounce{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}
.page{animation:fadeIn .2s ease}
.card{background:var(--sur);border-radius:var(--r);border:1px solid var(--bor);box-shadow:var(--sh1);transition:box-shadow .18s,transform .18s}
.card-h:hover{box-shadow:var(--sh2);transform:translateY(-1px);cursor:pointer}
.btn{display:inline-flex;align-items:center;gap:6px;padding:9px 17px;border-radius:9px;font-weight:600;font-size:13.5px;cursor:pointer;border:none;transition:all .16s;font-family:'Inter',sans-serif;white-space:nowrap}
.btn:hover{transform:translateY(-1px)}.btn:active{transform:scale(.97)}
.btn-p{background:var(--p);color:#fff;box-shadow:0 2px 8px rgba(79,70,229,.28)}.btn-p:hover{background:var(--pd);box-shadow:0 4px 16px rgba(79,70,229,.38)}
.btn-g{background:var(--s2);color:var(--t2);border:1px solid var(--bor)}.btn-g:hover{background:var(--pl);color:var(--p);border-color:var(--pl)}
.btn-d{background:var(--red);color:#fff}
.btn-sm{padding:6px 12px;font-size:12.5px;border-radius:8px;gap:5px}
.btn-xs{padding:4px 9px;font-size:11.5px;border-radius:7px;gap:4px}
.btn-ic{padding:8px;aspect-ratio:1;border-radius:9px}
.inp{width:100%;padding:10px 14px;border:1.5px solid var(--bor);border-radius:9px;font-size:14px;font-family:'Inter',sans-serif;color:var(--text);background:var(--sur);outline:none;transition:border-color .16s,box-shadow .16s}
.inp:focus{border-color:var(--p);box-shadow:0 0 0 3px rgba(79,70,229,.1)}
.inp::placeholder{color:var(--t3)}
select.inp{cursor:pointer}
.badge{display:inline-flex;align-items:center;gap:3px;padding:2px 9px;border-radius:20px;font-size:11px;font-weight:600}
.tabs{display:flex;gap:2px;background:var(--s2);border-radius:10px;padding:3px;border:1px solid var(--bor)}
.tab{flex:1;padding:7px 10px;border-radius:8px;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-weight:500;font-size:13px;transition:all .16s;background:transparent;color:var(--t3);white-space:nowrap}
.tab.on{background:#fff;color:var(--p);font-weight:600;box-shadow:var(--sh1)}
.pb{height:6px;background:var(--s2);border-radius:20px;overflow:hidden}
.pf{height:100%;border-radius:20px;background:linear-gradient(90deg,var(--p),var(--teal));transition:width .4s ease}
.modal-bg{position:fixed;inset:0;background:rgba(15,23,42,.45);backdrop-filter:blur(4px);z-index:500;display:flex;align-items:flex-end;justify-content:center;animation:fadeIn .18s ease}
@media(min-width:640px){.modal-bg{align-items:center;padding:20px}}
.modal{background:var(--sur);border-radius:20px 20px 0 0;width:100%;max-height:90vh;overflow-y:auto;animation:slideUp .28s ease;box-shadow:var(--sh3)}
@media(min-width:640px){.modal{border-radius:18px;max-width:520px}}
.drop{border:2px dashed var(--bor);border-radius:14px;padding:38px 20px;text-align:center;transition:all .2s;cursor:pointer;background:var(--s2)}
.drop.drag{border-color:var(--p);background:var(--pl)}.drop:hover{border-color:var(--p);background:var(--pll)}
.skel{background:linear-gradient(90deg,var(--s2) 25%,var(--bg) 50%,var(--s2) 75%);background-size:200%;animation:shimmer 1.4s infinite;border-radius:8px}
.cb-user{background:var(--p);color:#fff;border-radius:18px 18px 4px 18px;padding:11px 15px;font-size:14px;line-height:1.55;max-width:78%;align-self:flex-end;animation:fadeUp .2s ease}
.cb-ai{background:#fff;color:var(--text);border-radius:18px 18px 18px 4px;padding:11px 15px;font-size:14px;line-height:1.55;max-width:82%;align-self:flex-start;border:1px solid var(--bor);box-shadow:var(--sh1);animation:fadeUp .2s ease}
.td{width:7px;height:7px;border-radius:50%;background:var(--t3);animation:bounce .8s infinite}
.nav{background:rgba(255,255,255,.96);backdrop-filter:blur(20px);border-bottom:1px solid var(--bor);position:sticky;top:0;z-index:200;height:58px}
.nav-in{max-width:1200px;margin:0 auto;display:flex;align-items:center;height:100%;padding:0 20px;gap:8px}
.nl{padding:6px 12px;border-radius:8px;font-weight:500;font-size:13.5px;cursor:pointer;color:var(--t2);border:none;background:transparent;font-family:'Inter',sans-serif;transition:all .15s;display:flex;align-items:center;gap:6px;white-space:nowrap}
.nl:hover{color:var(--p);background:var(--pl)}.nl.on{color:var(--p);background:var(--pl);font-weight:600}
.ava{border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;flex-shrink:0}
.rem-card{border-radius:12px;border:1.5px solid var(--bor);padding:14px 16px;background:#fff;transition:all .18s}
.rem-taken{border-color:var(--green)!important;background:#f0fdf4!important}
.rem-skipped{border-color:var(--t4)!important;background:var(--s2)!important;opacity:.6}
.rx-row{display:flex;align-items:flex-start;gap:11px;padding:12px 14px;border-radius:11px;cursor:pointer;transition:all .16s;border:1.5px solid transparent}
.rx-row:hover{background:var(--pl);border-color:var(--pl)}.rx-row.on{background:var(--pl);border-color:var(--p)}
.mic-btn{width:68px;height:68px;border-radius:50%;background:var(--p);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;box-shadow:0 4px 16px rgba(79,70,229,.35)}
.mic-btn.rec{animation:glow 1.5s infinite;background:#dc2626}.mic-btn:hover{transform:scale(1.06)}
@media(max-width:768px){.hide-m{display:none!important}}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--t4);border-radius:4px}
`;

/* LOGIN */
function LoginPage({onLogin}){
  const[isLogin,setIsLogin]=useState(true);
  const[form,setForm]=useState({name:"",email:"",password:""});
  const[showPw,setShowPw]=useState(false);
  const[err,setErr]=useState("");
  const[loading,setLoading]=useState(false);
  const handle=()=>{
    setErr("");
    if(!form.email||!form.password){setErr("Please fill in all fields.");return;}
    if(!isLogin&&!form.name){setErr("Please enter your name.");return;}
    setLoading(true);
    setTimeout(()=>{setLoading(false);onLogin({name:form.name||form.email.split("@")[0],email:form.email});},900);
  };
  return(
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#eef2ff 0%,#f5f3ff 50%,#f0fdfa 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{width:"100%",maxWidth:400}}>
        <div style={{textAlign:"center",marginBottom:32}}>
          <div style={{width:56,height:56,background:"var(--p)",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",boxShadow:"0 8px 24px rgba(79,70,229,.3)"}}>
            <I n="pill" size={26} color="#fff"/>
          </div>
          <h1 style={{fontSize:24,marginBottom:4}}>RxReader</h1>
          <p style={{color:"var(--t2)",fontSize:14}}>Your personal prescription assistant</p>
        </div>
        <div className="card" style={{padding:28}}>
          <div className="tabs" style={{marginBottom:22}}>
            <button className={`tab${isLogin?" on":""}`} onClick={()=>{setIsLogin(true);setErr("");}}>Sign In</button>
            <button className={`tab${!isLogin?" on":""}`} onClick={()=>{setIsLogin(false);setErr("");}}>Create Account</button>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {!isLogin&&<div><label style={{fontSize:12.5,fontWeight:600,color:"var(--t2)",display:"block",marginBottom:4}}>Full Name</label><input className="inp" placeholder="Rajesh Kumar" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}/></div>}
            <div><label style={{fontSize:12.5,fontWeight:600,color:"var(--t2)",display:"block",marginBottom:4}}>Email</label><input className="inp" type="email" placeholder="you@example.com" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} onKeyDown={e=>e.key==="Enter"&&handle()}/></div>
            <div>
              <label style={{fontSize:12.5,fontWeight:600,color:"var(--t2)",display:"block",marginBottom:4}}>Password</label>
              <div style={{position:"relative"}}>
                <input className="inp" type={showPw?"text":"password"} placeholder="••••••••" value={form.password} onChange={e=>setForm(f=>({...f,password:e.target.value}))} onKeyDown={e=>e.key==="Enter"&&handle()} style={{paddingRight:40}}/>
                <button onClick={()=>setShowPw(!showPw)} style={{position:"absolute",right:11,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--t3)",display:"flex"}}><I n={showPw?"eyeOff":"eye"} size={16}/></button>
              </div>
            </div>
          </div>
          {err&&<p style={{fontSize:13,color:"var(--red)",marginTop:10}}>⚠ {err}</p>}
          <button className="btn btn-p" style={{width:"100%",justifyContent:"center",marginTop:18,padding:12,fontSize:15}} onClick={handle} disabled={loading}>
            {loading?<div style={{width:18,height:18,border:"2px solid rgba(255,255,255,.4)",borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>:(isLogin?"Sign In →":"Create Account →")}
          </button>
          <p style={{textAlign:"center",fontSize:12,color:"var(--t3)",marginTop:12}}>Demo: any email + any password works</p>
        </div>
        <p style={{textAlign:"center",fontSize:12,color:"var(--t3)",marginTop:16}}>🔒 Your prescription data is never stored on our servers</p>
      </div>
    </div>
  );
}

/* UPLOAD MODAL */
function UploadModal({onClose,onAdd,familyMembers}){
  const[step,setStep]=useState(1);
  const[drag,setDrag]=useState(false);
  const[file,setFile]=useState(null);
  const[b64,setB64]=useState(null);
  const[mime,setMime]=useState(null);
  const[preview,setPreview]=useState(null);
  const[paste,setPaste]=useState("");
  const[mode,setMode]=useState("file");
  const[progress,setProgress]=useState(0);
  const[progMsg,setProgMsg]=useState("");
  const[owner,setOwner]=useState("self");
  const[parsed,setParsed]=useState(null);
  const[apiErr,setApiErr]=useState("");
  const[form,setForm]=useState({name:"",doctor:"",date:todayStr()});
  const fileRef=useRef();
  const MSGS=["Reading prescription…","Deciphering handwriting…","Identifying medicines…","Building dose schedule…","Almost done…"];
  const pickFile=f=>{
    if(!f)return;setFile(f);setApiErr("");
    setForm(p=>({...p,name:f.name.replace(/\.[^/.]+$/,"").replace(/[_-]/g," ")}));
    const r=new FileReader();
    r.onload=e=>{const d=e.target.result;setPreview(d);setB64(d.split(",")[1]);setMime(f.type||"image/jpeg");};
    r.readAsDataURL(f);setStep(2);
  };
  const analyse=async()=>{
    setStep(3);setProgress(0);setApiErr("");
    let done=false;setProgMsg(MSGS[0]);
    const iv=setInterval(()=>{if(done)return;setProgress(p=>{const n=Math.min(p+(p<80?Math.random()*12+4:Math.random()*2+.5),88);setProgMsg(MSGS[Math.min(Math.floor(n/20),MSGS.length-1)]);return n;});},350);
    try{
      let content;
      if(mode==="paste")content=[{type:"text",text:CLAUDE_PROMPT+"\n\nPrescription:\n"+paste}];
      else if(b64&&mime?.startsWith("image/"))content=[{type:"image",source:{type:"base64",media_type:mime,data:b64}},{type:"text",text:CLAUDE_PROMPT}];
      else if(b64)content=[{type:"document",source:{type:"base64",media_type:"application/pdf",data:b64}},{type:"text",text:CLAUDE_PROMPT}];
      else throw new Error("No file selected");
      const p=await callClaude(content);
      done=true;clearInterval(iv);
      const result=apiToRx(p);
      if(result.doctor&&!form.doctor)setForm(f=>({...f,doctor:result.doctor}));
      setParsed(result);setProgress(100);setProgMsg("Done!");
      setTimeout(()=>setStep(4),350);
    }catch(e){done=true;clearInterval(iv);setApiErr(e.message);setProgress(0);setStep(2);}
  };
  const finish=()=>{
    if(!parsed)return;
    onAdd({id:"rx"+Date.now(),name:form.name||"New Prescription",doctor:form.doctor||parsed.doctor||"Unknown Doctor",clinic:parsed.clinic||"",date:form.date,meds:parsed.medications.length,status:"active",diagnosis:parsed.diagnosis||"",fileName:file?file.name:"pasted.txt",fileSize:file?`${(file.size/1024/1024).toFixed(1)} MB`:"—",fileType:file?(file.type?.includes("pdf")?"pdf":"image"):"text",tags:parsed.diagnosis?[parsed.diagnosis.split(" ").slice(0,2).join(" ")]:[],medications:parsed.medications,advice:parsed.advice||[],previewSrc:preview||null,owner});
    onClose();
  };
  const ownerOpts=[{id:"self",label:"Myself",init:"Me",color:"var(--p)"},...familyMembers.map(m=>({id:m.id,label:m.name.split(" ")[0],init:m.initials,color:m.color}))];
  return(
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" style={{maxWidth:480}} onClick={e=>e.stopPropagation()}>
        <div style={{padding:"16px 20px 12px",borderBottom:"1px solid var(--bor)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <h3 style={{fontSize:15,marginBottom:4}}>Add Prescription</h3>
            <div style={{display:"flex",gap:8}}>
              {["Upload","Details","Analyse","Done"].map((s,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:4}}>
                  <div style={{width:18,height:18,borderRadius:"50%",background:step>i+1?"var(--green)":step===i+1?"var(--p)":"var(--s2)",color:step>=i+1?"#fff":"var(--t3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,transition:"all .2s"}}>
                    {step>i+1?<I n="check" size={9} color="#fff"/>:i+1}
                  </div>
                  <span style={{fontSize:11,color:step===i+1?"var(--p)":"var(--t3)",fontWeight:step===i+1?600:400}}>{s}</span>
                  {i<3&&<div style={{width:10,height:1,background:"var(--bor)"}}/>}
                </div>
              ))}
            </div>
          </div>
          <button className="btn btn-g btn-ic btn-sm" onClick={onClose}><I n="close" size={14}/></button>
        </div>
        <div style={{padding:20}}>
          {step===1&&<>
            <div style={{marginBottom:14}}>
              <p style={{fontSize:12,fontWeight:600,color:"var(--t2)",marginBottom:7}}>For whom?</p>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                {ownerOpts.map(o=>(
                  <button key={o.id} onClick={()=>setOwner(o.id)} style={{display:"flex",alignItems:"center",gap:6,padding:"5px 11px",borderRadius:8,border:`1.5px solid ${owner===o.id?"var(--p)":"var(--bor)"}`,background:owner===o.id?"var(--pl)":"#fff",cursor:"pointer",fontFamily:"'Inter',sans-serif",fontWeight:600,fontSize:13,color:owner===o.id?"var(--p)":"var(--t2)",transition:"all .15s"}}>
                    <div className="ava" style={{width:20,height:20,fontSize:8,background:o.color}}>{o.init}</div>{o.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="tabs" style={{marginBottom:12}}>
              {[["file","📄 File"],["image","📷 Photo"],["paste","⌨️ Paste"]].map(([id,l])=>(
                <button key={id} className={`tab${mode===id?" on":""}`} onClick={()=>setMode(id)}>{l}</button>
              ))}
            </div>
            {mode!=="paste"?(
              <div className={`drop${drag?" drag":""}`} onDragOver={e=>{e.preventDefault();setDrag(true);}} onDragLeave={()=>setDrag(false)} onDrop={e=>{e.preventDefault();setDrag(false);pickFile(e.dataTransfer.files[0]);}} onClick={()=>fileRef.current?.click()}>
                <input ref={fileRef} type="file" hidden accept=".pdf,.jpg,.jpeg,.png,.heic,.webp" onChange={e=>pickFile(e.target.files[0])}/>
                <div style={{width:48,height:48,borderRadius:"50%",background:"var(--pl)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 10px"}}><I n="upload" size={20} color="var(--p)"/></div>
                <p style={{fontWeight:600,fontSize:14,marginBottom:3}}>{drag?"Drop it here!":"Drag & drop prescription"}</p>
                <p style={{color:"var(--t2)",fontSize:13,marginBottom:10}}>or click to browse · PDF, JPG, PNG, HEIC</p>
                <p style={{fontSize:11.5,color:"var(--t3)"}}>Works with handwritten prescriptions · AI-powered OCR</p>
              </div>
            ):(
              <textarea className="inp" value={paste} onChange={e=>setPaste(e.target.value)} placeholder={"Paste prescription text here...\n\nTab. Amlodipine 5mg 1-0-0 x 30 days\nTab. Metformin 500mg 1-0-1 x 30 days"} rows={7} style={{fontFamily:"monospace",fontSize:13,lineHeight:1.9,resize:"vertical"}}/>
            )}
            {mode==="paste"&&paste.length>10&&<button className="btn btn-p" style={{width:"100%",justifyContent:"center",marginTop:10}} onClick={()=>setStep(2)}>Continue <I n="chevR" size={13} color="#fff"/></button>}
          </>}
          {step===2&&<>
            {preview&&<img src={preview} alt="Rx" style={{width:"100%",maxHeight:160,objectFit:"contain",borderRadius:9,marginBottom:12,border:"1px solid var(--bor)",background:"var(--s2)"}}/>}
            {file&&<div style={{display:"flex",alignItems:"center",gap:9,padding:"8px 12px",background:"var(--s2)",borderRadius:9,marginBottom:12,border:"1px solid var(--bor)"}}>
              <span style={{fontSize:20}}>{file.type?.includes("pdf")?"📄":"🖼️"}</span>
              <div style={{flex:1,minWidth:0}}><div style={{fontWeight:600,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{file.name}</div><div style={{fontSize:11.5,color:"var(--t3)"}}>{(file.size/1024/1024).toFixed(1)} MB</div></div>
              <button className="btn btn-g btn-xs" onClick={()=>{setFile(null);setPreview(null);setB64(null);setStep(1);}}>Change</button>
            </div>}
            {apiErr&&<div style={{padding:"9px 13px",background:"var(--rl)",borderRadius:9,marginBottom:10,fontSize:13,color:"var(--red)",lineHeight:1.6}}>⚠ {apiErr}<br/><span style={{fontSize:12,opacity:.8}}>Try again or use Paste Text.</span></div>}
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              <div><label style={{fontSize:12.5,fontWeight:600,color:"var(--t2)",display:"block",marginBottom:4}}>Label</label><input className="inp" placeholder="e.g. Diabetes check-up" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}/></div>
              <div><label style={{fontSize:12.5,fontWeight:600,color:"var(--t2)",display:"block",marginBottom:4}}>Doctor</label><input className="inp" placeholder="Dr. Priya Nair" value={form.doctor} onChange={e=>setForm(f=>({...f,doctor:e.target.value}))}/></div>
            </div>
            <div style={{display:"flex",gap:8,marginTop:16}}>
              <button className="btn btn-g" style={{flex:1,justifyContent:"center"}} onClick={()=>setStep(1)}><I n="chevL" size={13}/>Back</button>
              <button className="btn btn-p" style={{flex:2,justifyContent:"center"}} onClick={analyse}><I n="zap" size={13} color="#fff"/>Analyse with AI</button>
            </div>
          </>}
          {step===3&&<div style={{textAlign:"center",padding:"20px 0"}}>
            <div style={{position:"relative",width:64,height:64,margin:"0 auto 18px"}}>
              <div style={{position:"absolute",inset:0,border:"3px solid var(--s2)",borderTopColor:"var(--p)",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>
              <div style={{position:"absolute",inset:9,border:"2px solid var(--s2)",borderTopColor:"var(--teal)",borderRadius:"50%",animation:"spin 1s linear infinite reverse"}}/>
              <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🔍</div>
            </div>
            <p style={{fontWeight:600,fontSize:15,marginBottom:4}}>{progMsg}</p>
            <p style={{fontSize:13,color:"var(--t3)",marginBottom:14}}>Claude AI is reading your prescription…</p>
            <div className="pb" style={{maxWidth:260,margin:"0 auto 6px"}}><div className="pf" style={{width:`${progress}%`}}/></div>
            <p style={{fontSize:12,color:"var(--t3)"}}>{Math.round(progress)}%</p>
            <div style={{marginTop:16,display:"flex",flexDirection:"column",gap:6}}>{[80,60,90,50].map((w,i)=><div key={i} className="skel" style={{height:10,width:`${w}%`,margin:"0 auto"}}/>)}</div>
          </div>}
          {step===4&&parsed&&<div style={{textAlign:"center",padding:"16px 0"}}>
            <div style={{width:60,height:60,borderRadius:"50%",background:"var(--gl)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px",fontSize:28,animation:"popIn .4s ease"}}>✅</div>
            <h3 style={{fontSize:19,marginBottom:6}}>Ready!</h3>
            <p style={{color:"var(--t2)",fontSize:14,marginBottom:16}}>Found <strong>{parsed.medications.length} medicine{parsed.medications.length!==1?"s":""}</strong> in your prescription.</p>
            <div style={{background:"var(--s2)",borderRadius:10,padding:"10px 14px",marginBottom:16,textAlign:"left"}}>
              {parsed.medications.map((m,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 0",borderBottom:i<parsed.medications.length-1?"1px solid var(--bor)":"none"}}>
                  <div style={{width:7,height:7,borderRadius:"50%",background:m.color,flexShrink:0}}/>
                  <span style={{fontWeight:600,fontSize:13}}>{m.name}</span>
                  {m.dose&&<span style={{color:"var(--t3)",fontSize:12}}>{m.dose}</span>}
                  <span style={{marginLeft:"auto",fontSize:11,color:"var(--t2)"}}>{m.timing?.join("+")}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-p" style={{width:"100%",justifyContent:"center",padding:12,fontSize:14}} onClick={finish}><I n="chevR" size={13} color="#fff"/>View Prescription</button>
          </div>}
        </div>
      </div>
    </div>
  );
}

/* REMINDERS */
function RemindersPage({prescriptions}){
  const active=prescriptions.filter(r=>r.status==="active");
  const allMeds=active.flatMap(rx=>(rx.medications||[]).map(m=>({...m,rxName:rx.name,rxId:rx.id})));
  const slots=[
    {id:"morning",label:"Morning",emoji:"☀️",time:"8:00 AM",c:"#78350f",bg:"#fef9c3",border:"#fde68a"},
    {id:"afternoon",label:"Afternoon",emoji:"🌤️",time:"1:00 PM",c:"#134e4a",bg:"#f0fdfa",border:"#99f6e4"},
    {id:"night",label:"Night",emoji:"🌙",time:"9:00 PM",c:"#1e1b4b",bg:"#f5f3ff",border:"#c4b5fd"},
  ];
  const[taken,setTaken]=useState({});
  const[history,setHistory]=useState(()=>{try{return JSON.parse(localStorage.getItem("rxLog")||"[]");}catch{return[];}});
  const saveLog=(entry)=>{const h=[entry,...history].slice(0,80);setHistory(h);try{localStorage.setItem("rxLog",JSON.stringify(h));}catch(e){}};
  const markTaken=(key,medName,status)=>{setTaken(p=>({...p,[key]:status}));if(!taken[key])saveLog({id:Date.now(),medName,status,time:nowStr(),date:todayStr()});};
  const curH=new Date().getHours();
  const curSlot=curH<12?"morning":curH<17?"afternoon":"night";
  return(
    <div style={{display:"flex",flexDirection:"column",gap:18}}>
      <div><h2 style={{fontSize:20,marginBottom:3}}>Today's Medicines</h2><p style={{color:"var(--t2)",fontSize:14}}>{todayStr()} · Tap each medicine to confirm you've taken it</p></div>
      {active.length===0&&<div className="card" style={{padding:40,textAlign:"center",color:"var(--t3)"}}><div style={{fontSize:40,marginBottom:10}}>💊</div><p style={{fontSize:15,color:"var(--t2)",marginBottom:4}}>No active prescriptions</p><p style={{fontSize:13}}>Upload a prescription to start tracking</p></div>}
      {slots.map(slot=>{
        const meds=allMeds.filter(m=>m.timing?.includes(slot.id));
        if(meds.length===0)return null;
        return(
          <div key={slot.id}>
            <div style={{display:"flex",alignItems:"center",gap:9,marginBottom:10}}>
              <span style={{fontSize:22}}>{slot.emoji}</span>
              <div><p style={{fontWeight:700,fontSize:15,color:slot.c}}>{slot.label}</p><p style={{fontSize:12,color:"var(--t3)"}}>{slot.time}</p></div>
              {curSlot===slot.id&&<span className="badge" style={{background:"var(--gl)",color:"#14532d",marginLeft:6}}>Now</span>}
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:9}}>
              {meds.map((m,i)=>{
                const key=`${slot.id}_${m.rxId}_${m.name}`;
                const st=taken[key];
                return(
                  <div key={i} className={`rem-card${st==="taken"?" rem-taken":st==="skipped"?" rem-skipped":""}`}>
                    <div style={{display:"flex",alignItems:"center",gap:12}}>
                      <div style={{width:36,height:36,borderRadius:10,background:(m.color||"#888")+"18",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n="pill" size={16} color={m.color||"#888"}/></div>
                      <div style={{flex:1}}><div style={{fontWeight:600,fontSize:14,marginBottom:1}}>{m.name} <span style={{fontWeight:400,color:"var(--t3)",fontSize:13}}>{m.dose}</span></div><div style={{fontSize:12.5,color:"var(--t2)"}}>{m.food||"After food"} · from {m.rxName}</div></div>
                      {!st&&<div style={{display:"flex",gap:7,flexShrink:0}}>
                        <button className="btn btn-sm" style={{background:"var(--gl)",color:"var(--green)",border:"none",padding:"6px 12px"}} onClick={()=>markTaken(key,m.name,"taken")}><I n="check" size={12} color="var(--green)"/>Taken</button>
                        <button className="btn btn-g btn-sm" onClick={()=>markTaken(key,m.name,"skipped")}>Skip</button>
                      </div>}
                      {st==="taken"&&<span className="badge" style={{background:"var(--gl)",color:"var(--green)",padding:"5px 12px",fontSize:12.5}}>✓ Taken</span>}
                      {st==="skipped"&&<span className="badge" style={{background:"#f1f5f9",color:"#475569",padding:"5px 12px",fontSize:12.5}}>Skipped</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      {history.length>0&&<div className="card" style={{padding:18}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
          <h3 style={{fontSize:14,display:"flex",alignItems:"center",gap:6}}><I n="history" size={15} color="var(--p)"/>Medicine Log</h3>
          <button className="btn btn-g btn-xs" onClick={()=>{setHistory([]);try{localStorage.removeItem("rxLog");}catch(e){}}}>Clear</button>
        </div>
        <div style={{maxHeight:240,overflowY:"auto",display:"flex",flexDirection:"column",gap:0}}>
          {history.slice(0,20).map((h,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:11,padding:"9px 0",borderBottom:i<Math.min(history.length,20)-1?"1px solid var(--bor)":"none"}}>
              <div style={{width:8,height:8,borderRadius:"50%",background:h.status==="taken"?"var(--green)":"var(--t4)",flexShrink:0}}/>
              <div style={{flex:1}}><div style={{fontSize:13.5,fontWeight:600}}>{h.medName}</div><div style={{fontSize:12,color:"var(--t3)"}}>{h.time} · {h.date}</div></div>
              <span className="badge" style={{background:h.status==="taken"?"var(--gl)":"#f1f5f9",color:h.status==="taken"?"var(--green)":"#475569",fontSize:11}}>{h.status}</span>
            </div>
          ))}
        </div>
      </div>}
    </div>
  );
}

/* RX DETAIL */
function RxDetail({rx,onClose}){
  const[tab,setTab]=useState("summary");
  const[expanded,setExpanded]=useState(null);
  const[showPdf,setShowPdf]=useState(false);
  const[showShare,setShowShare]=useState(false);
  const[showImg,setShowImg]=useState(false);
  const[copied,setCopied]=useState(false);
  const taRef=useRef();
  const tl={morning:rx.medications?.filter(m=>m.timing?.includes("morning"))||[],afternoon:rx.medications?.filter(m=>m.timing?.includes("afternoon"))||[],night:rx.medications?.filter(m=>m.timing?.includes("night"))||[]};
  const summaryText=[
    "PRESCRIPTION SUMMARY — RxReader","━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    `Doctor    : ${rx.doctor||"—"}`,`Clinic    : ${rx.clinic||"—"}`,`Date      : ${rx.date||"—"}`,
    rx.diagnosis?`Diagnosis : ${rx.diagnosis}`:"","",
    `MEDICINES (${rx.medications?.length||0})`,`━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ...(rx.medications||[]).map((m,i)=>`${i+1}. ${m.name} ${m.dose||""} — ${(m.timing||[]).join("+")} (${m.food||"after food"}) x ${m.duration||"as directed"}`),
    "","DAILY SCHEDULE","━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    tl.morning.length?`Morning   : ${tl.morning.map(m=>`${m.name} ${m.dose||""}`).join(", ")}` :"",
    tl.afternoon.length?`Afternoon : ${tl.afternoon.map(m=>`${m.name} ${m.dose||""}`).join(", ")}`:"",
    tl.night.length?`Night     : ${tl.night.map(m=>`${m.name} ${m.dose||""}`).join(", ")}`:"",
    rx.advice?.length?"\nDOCTOR'S ADVICE\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"+rx.advice.map((a,i)=>`${i+1}. ${a}`).join("\n"):"",
    "\nGenerated by RxReader. Follow your doctor's instructions.",
  ].filter(Boolean).join("\n");
  const tryCopy=()=>{
    if(taRef.current){taRef.current.select();try{document.execCommand("copy");setCopied(true);setTimeout(()=>setCopied(false),2200);}catch(e){}}
    try{navigator.clipboard?.writeText(summaryText).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2200);});}catch(e){}
  };
  return(
    <div style={{display:"flex",flexDirection:"column",height:"100%",animation:"fadeIn .2s ease"}}>
      <div style={{padding:"16px 20px 12px",borderBottom:"1px solid var(--bor)",background:"linear-gradient(135deg,var(--pll),#f0fdf9)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10,flexWrap:"wrap"}}>
          <div style={{flex:1,minWidth:0}}>
            <div style={{display:"flex",alignItems:"center",gap:7,flexWrap:"wrap",marginBottom:4}}>
              <h2 style={{fontSize:17}}>{rx.name}</h2>
              <span className="badge" style={{background:statusBadge(rx.status).bg,color:statusBadge(rx.status).c}}>{rx.status}</span>
            </div>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              {[rx.doctor&&"🩺 "+rx.doctor,rx.date&&"📅 "+rx.date,rx.fileName&&"📁 "+rx.fileName].filter(Boolean).map((v,i)=><span key={i} style={{fontSize:12.5,color:"var(--t2)"}}>{v}</span>)}
            </div>
          </div>
          <div style={{display:"flex",gap:6,flexShrink:0,flexWrap:"wrap",alignItems:"center"}}>
            {copied&&<span style={{fontSize:12,color:"var(--green)",fontWeight:600}}>Copied ✓</span>}
            <button className="btn btn-g btn-sm" onClick={()=>setShowPdf(true)}><I n="download" size={13}/>PDF</button>
            <button className="btn btn-g btn-sm" onClick={()=>setShowShare(true)}><I n="send" size={13}/>Share</button>
            <button className="btn btn-g btn-sm" onClick={tryCopy}><I n="copy" size={13}/>{copied?"Done":"Copy"}</button>
            {onClose&&<button className="btn btn-g btn-ic btn-sm" onClick={onClose}><I n="close" size={13}/></button>}
          </div>
        </div>
        {rx.tags?.length>0&&<div style={{display:"flex",gap:5,marginTop:7,flexWrap:"wrap"}}>{rx.tags.map((t,i)=><span key={i} className="badge" style={{background:"var(--pl)",color:"var(--pd)"}}>{t}</span>)}</div>}
      </div>
      <div style={{padding:"10px 20px 0",borderBottom:"1px solid var(--bor)"}}>
        <div className="tabs" style={{maxWidth:380}}>
          {[["summary","📋 Summary"],["medicines","💊 Medicines"],["schedule","⏰ Schedule"]].map(([id,l])=>(
            <button key={id} className={`tab${tab===id?" on":""}`} onClick={()=>setTab(id)}>{l}</button>
          ))}
        </div>
      </div>
      <div style={{padding:"16px 20px",overflowY:"auto",flex:1}}>
        {tab==="summary"&&<div style={{display:"flex",flexDirection:"column",gap:13,animation:"fadeUp .2s ease"}}>
          {rx.diagnosis&&<div style={{padding:"12px 16px",background:"#fef9c3",borderRadius:11,border:"1.5px solid #fde68a"}}><p style={{fontSize:12,fontWeight:700,color:"#78350f",marginBottom:2}}>🩺 Diagnosis</p><p style={{fontSize:14,color:"#92400e"}}>{rx.diagnosis}</p></div>}
          {rx.previewSrc&&<div className="card" style={{padding:12}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
              <p style={{fontWeight:600,fontSize:13,color:"var(--t2)"}}>🖼️ Uploaded Prescription</p>
              <button className="btn btn-g btn-xs" onClick={()=>setShowImg(true)}><I n="eye" size={11}/>View Full</button>
            </div>
            <img src={rx.previewSrc} alt="Rx" style={{width:"100%",maxHeight:200,objectFit:"contain",borderRadius:7,background:"var(--s2)",cursor:"pointer"}} onClick={()=>setShowImg(true)}/>
          </div>}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(90px,1fr))",gap:9}}>
            {[{i:"💊",l:"Medicines",v:rx.medications?.length||0,b:true},{i:"⏰",l:"Slots/day",v:new Set(rx.medications?.flatMap(m=>m.timing||[])).size||0,b:true},{i:"🩺",l:"Doctor",v:rx.doctor?.split(" ").pop()||"—",b:false},{i:"📅",l:"Date",v:rx.date||"—",b:false}].map((s,i)=>(
              <div key={i} className="card" style={{padding:"11px 9px",textAlign:"center"}}>
                <div style={{fontSize:18,marginBottom:3}}>{s.i}</div>
                <div style={{fontWeight:800,fontSize:s.b?20:12,color:"var(--p)",lineHeight:1.1,wordBreak:"break-word"}}>{s.v}</div>
                <div style={{fontSize:10.5,color:"var(--t3)",marginTop:2}}>{s.l}</div>
              </div>
            ))}
          </div>
          {rx.advice?.length>0&&<div className="card" style={{padding:16}}>
            <p style={{fontWeight:700,fontSize:13.5,marginBottom:10}}>👨‍⚕️ Doctor's Advice</p>
            {rx.advice.map((a,i)=><div key={i} style={{display:"flex",gap:8,alignItems:"flex-start",padding:"6px 0",borderBottom:i<rx.advice.length-1?"1px solid var(--bor)":"none"}}>
              <div style={{width:16,height:16,borderRadius:"50%",background:"var(--pl)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}><I n="check" size={8} color="var(--p)"/></div>
              <p style={{fontSize:13.5,color:"var(--t2)",lineHeight:1.65}}>{a}</p>
            </div>)}
          </div>}
        </div>}
        {tab==="medicines"&&<div style={{display:"flex",flexDirection:"column",gap:9,animation:"fadeUp .2s ease"}}>
          {(!rx.medications||rx.medications.length===0)&&<div style={{textAlign:"center",padding:"40px 0",color:"var(--t3)"}}><div style={{fontSize:36,marginBottom:8}}>💊</div><p>No medicine data found.</p></div>}
          {rx.medications?.map((m,i)=>(
            <div key={i} className="card" style={{padding:0,overflow:"hidden",border:expanded===i?`2px solid ${m.color||"var(--p)"}`:"1px solid var(--bor)"}}>
              <div style={{padding:"12px 15px",cursor:"pointer",display:"flex",alignItems:"center",gap:10}} onClick={()=>setExpanded(expanded===i?null:i)}>
                <div style={{width:34,height:34,borderRadius:10,background:(m.color||"#888")+"18",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n="pill" size={15} color={m.color||"#888"}/></div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                    <span style={{fontWeight:700,fontSize:14}}>{m.name}</span>
                    {m.dose&&<span className="badge" style={{background:(m.color||"#888")+"20",color:m.color||"#888"}}>{m.dose}</span>}
                    <span className="badge" style={{background:"#f1f5f9",color:"#475569"}}>{m.category||"Medicine"}</span>
                  </div>
                  <div style={{fontSize:12,color:"var(--t3)",marginTop:1}}>{m.food||"After food"} · {m.duration||"As directed"}</div>
                </div>
                <div style={{display:"flex",gap:3,flexShrink:0}}>{m.timing?.map(t=><span key={t} className="badge" style={{background:tb(t),color:tc(t),fontSize:10}}>{t}</span>)}</div>
                <div style={{color:"var(--t3)",transform:expanded===i?"rotate(90deg)":"none",transition:".15s",marginLeft:4,flexShrink:0}}><I n="chevR" size={13}/></div>
              </div>
              {expanded===i&&<div style={{padding:"0 15px 14px",borderTop:"1px solid var(--bor)",animation:"slideDown .15s ease"}}>
                <div style={{paddingTop:10,display:"flex",flexDirection:"column",gap:7}}>
                  {[["What it does",m.purpose],["Interactions",m.interactions],["Storage",m.storage]].filter(([,v])=>v).map(([k,v],j)=>(
                    <p key={j} style={{fontSize:13.5,color:"var(--t2)",lineHeight:1.7}}><strong style={{color:"var(--text)"}}>{k}:</strong> {v}</p>
                  ))}
                </div>
              </div>}
            </div>
          ))}
        </div>}
        {tab==="schedule"&&<div style={{display:"flex",flexDirection:"column",gap:11,animation:"fadeUp .2s ease"}}>
          {[{id:"morning",label:"Morning",emoji:"☀️",time:"8:00 AM",meds:tl.morning,bg:"#fef9c3",border:"#fde68a",c:"#78350f"},{id:"afternoon",label:"Afternoon",emoji:"🌤️",time:"1:00 PM",meds:tl.afternoon,bg:"#f0fdfa",border:"#99f6e4",c:"#134e4a"},{id:"night",label:"Night",emoji:"🌙",time:"9:00 PM",meds:tl.night,bg:"var(--pll)",border:"var(--bor)",c:"var(--pd)"}].map((slot,i)=>(
            <div key={i} style={{borderRadius:11,padding:14,background:slot.bg,border:`1.5px solid ${slot.border}`}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:slot.meds.length?11:0}}>
                <span style={{fontSize:20}}>{slot.emoji}</span>
                <div><div style={{fontWeight:700,fontSize:14,color:slot.c}}>{slot.label}</div><div style={{fontSize:11.5,color:slot.c,opacity:.65}}>{slot.time}</div></div>
                {slot.meds.length===0&&<p style={{marginLeft:"auto",fontSize:13,color:slot.c,opacity:.45}}>No medicines</p>}
              </div>
              {slot.meds.map((m,j)=>(
                <div key={j} style={{display:"flex",alignItems:"center",gap:9,background:"rgba(255,255,255,.75)",borderRadius:8,padding:"8px 11px",marginBottom:j<slot.meds.length-1?6:0}}>
                  <div style={{width:8,height:8,borderRadius:"50%",background:m.color||"#888",flexShrink:0}}/>
                  <span style={{fontWeight:600,fontSize:13.5,color:slot.c,flex:1}}>{m.name}</span>
                  {m.dose&&<span style={{fontSize:12.5,color:slot.c,opacity:.7}}>{m.dose}</span>}
                  <span style={{fontSize:12,color:slot.c,opacity:.6}}>{m.food||"After food"}</span>
                </div>
              ))}
            </div>
          ))}
        </div>}
      </div>
      {showPdf&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:600,overflowY:"auto",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"20px 12px"}} onClick={()=>setShowPdf(false)}>
        <div style={{background:"#fff",borderRadius:15,maxWidth:620,width:"100%",overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,.25)",animation:"fadeUp .22s ease"}} onClick={e=>e.stopPropagation()}>
          <div style={{padding:"14px 20px",borderBottom:"1px solid #e5e7eb",display:"flex",justifyContent:"space-between",alignItems:"center",background:"var(--pll)"}}>
            <div><h3 style={{fontSize:15,marginBottom:2}}>Prescription Summary</h3><p style={{fontSize:12,color:"var(--t3)"}}>Print this page or copy the text below</p></div>
            <div style={{display:"flex",gap:7}}>
              <button className="btn btn-p btn-sm" onClick={tryCopy}><I n="copy" size={12} color="#fff"/>{copied?"Copied!":"Copy"}</button>
              <button className="btn btn-g btn-ic btn-sm" onClick={()=>setShowPdf(false)}><I n="close" size={13}/></button>
            </div>
          </div>
          <div style={{padding:20}}>
            {rx.previewSrc&&<img src={rx.previewSrc} alt="Rx" style={{width:"100%",maxHeight:160,objectFit:"contain",borderRadius:7,marginBottom:12,border:"1px solid #e5e7eb"}}/>}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7,marginBottom:12}}>
              {[["Doctor",rx.doctor||"—"],["Clinic",rx.clinic||"—"],["Date",rx.date||"—"],["Diagnosis",rx.diagnosis||"—"]].map(([k,v])=>(
                <div key={k} style={{background:"#f9fafb",borderRadius:7,padding:"7px 11px",border:"1px solid #e5e7eb"}}>
                  <div style={{fontSize:10,color:"#9ca3af",fontWeight:700,textTransform:"uppercase",marginBottom:1}}>{k}</div>
                  <div style={{fontSize:13,fontWeight:600,color:"#111",wordBreak:"break-word"}}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{borderRadius:8,border:"1px solid #e5e7eb",padding:"10px 13px",marginBottom:12}}>
              <p style={{fontSize:11,fontWeight:700,textTransform:"uppercase",color:"#9ca3af",marginBottom:7}}>Medicines ({rx.medications?.length||0})</p>
              {(rx.medications||[]).map((m,i)=>(
                <div key={i} style={{display:"flex",gap:8,padding:"5px 0",borderBottom:i<(rx.medications.length-1)?"1px solid #f3f4f6":"none"}}>
                  <div style={{width:7,height:7,borderRadius:"50%",background:m.color||"#888",marginTop:5,flexShrink:0}}/>
                  <div style={{flex:1}}><span style={{fontWeight:700,fontSize:13}}>{m.name}</span>{m.dose&&<span style={{color:"#6b7280",fontSize:12,marginLeft:5}}>{m.dose}</span>}<span style={{color:"#6b7280",fontSize:12,marginLeft:5}}>· {(m.timing||[]).join("+")} · {m.food||"after food"} · {m.duration||"as directed"}</span></div>
                </div>
              ))}
            </div>
            <p style={{fontSize:12,color:"var(--t3)",marginBottom:5}}>Plain text (tap to select all and copy):</p>
            <textarea ref={taRef} readOnly value={summaryText} onClick={e=>{e.target.select();tryCopy();}}
              style={{width:"100%",height:90,fontFamily:"monospace",fontSize:11,lineHeight:1.8,padding:8,borderRadius:7,border:"1px solid #e5e7eb",background:"#f9fafb",color:"#374151",resize:"none",cursor:"text"}}/>
          </div>
        </div>
      </div>}
      {showShare&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.5)",zIndex:600,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setShowShare(false)}>
        <div style={{background:"#fff",borderRadius:15,maxWidth:420,width:"100%",padding:22,boxShadow:"0 20px 60px rgba(0,0,0,.22)",animation:"fadeUp .22s ease"}} onClick={e=>e.stopPropagation()}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <h3 style={{fontSize:15}}>Share Prescription</h3>
            <button className="btn btn-g btn-ic btn-sm" onClick={()=>setShowShare(false)}><I n="close" size={13}/></button>
          </div>
          <p style={{fontSize:13,color:"var(--t2)",marginBottom:10}}>Tap the text area to select all, then copy and paste into WhatsApp, email or SMS.</p>
          <textarea readOnly value={summaryText} onClick={e=>{e.target.select();tryCopy();}}
            style={{width:"100%",height:150,fontFamily:"monospace",fontSize:11.5,lineHeight:1.8,padding:9,borderRadius:8,border:"1px solid var(--bor)",background:"var(--s2)",color:"var(--text)",resize:"none",marginBottom:11,cursor:"text"}}/>
          <button className="btn btn-p" style={{width:"100%",justifyContent:"center"}} onClick={tryCopy}>
            <I n="copy" size={13} color="#fff"/>{copied?"✓ Copied to clipboard!":"Tap to Copy Text"}
          </button>
          {copied&&<p style={{textAlign:"center",marginTop:9,fontSize:13,color:"var(--green)",fontWeight:600}}>Paste into WhatsApp, Email, or any app ✓</p>}
        </div>
      </div>}
      {showImg&&rx.previewSrc&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.88)",zIndex:600,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setShowImg(false)}>
        <div style={{position:"relative"}} onClick={e=>e.stopPropagation()}>
          <button style={{position:"absolute",top:-12,right:-12,width:28,height:28,borderRadius:"50%",background:"#fff",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setShowImg(false)}><I n="close" size={13}/></button>
          <img src={rx.previewSrc} alt="Rx" style={{maxWidth:"90vw",maxHeight:"86vh",objectFit:"contain",borderRadius:9}}/>
        </div>
      </div>}
    </div>
  );
}

/* CHAT */
function ChatPanel({prescriptions,onClose}){
  const[msgs,setMsgs]=useState([{role:"ai",text:"Hello! I'm your RxReader assistant. Ask me anything about your medicines, side effects, dosage, or prescription. 😊"}]);
  const[input,setInput]=useState("");
  const[loading,setLoading]=useState(false);
  const bottomRef=useRef();
  const inputRef=useRef();
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[msgs]);
  const ctx=prescriptions.filter(r=>r.status==="active").map(r=>`${r.name}: ${(r.medications||[]).map(m=>`${m.name} ${m.dose} ${m.timing?.join("+")} ${m.food}`).join(", ")}`).join(". ");
  const send=async()=>{
    const q=input.trim();if(!q||loading)return;
    setInput("");setMsgs(p=>[...p,{role:"user",text:q}]);setLoading(true);
    try{
      const sys=`You are a friendly medical assistant for RxReader. Help patients understand their prescriptions.\nActive prescriptions: ${ctx||"none"}.\nRules: Answer questions about medicines only. Never suggest new medicines or change doses. Keep answers short, clear, and reassuring. Always remind patient to follow their doctor's advice.`;
      const p=await callClaude([{type:"text",text:sys+"\n\nPatient question: "+q}]);
      const text=typeof p==="string"?p:(p?.answer||p?.content||"I could not process that. Please try again.");
      setMsgs(p=>[...p,{role:"ai",text}]);
    }catch(e){setMsgs(p=>[...p,{role:"ai",text:"Connection error. Please check your internet and try again."}]);}
    setLoading(false);
  };
  const QUICK=["What are my morning medicines?","Any side effects to watch for?","Can I take these with food?","What does 1-0-1 mean?"];
  return(
    <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
      <div style={{padding:"14px 18px",borderBottom:"1px solid var(--bor)",display:"flex",alignItems:"center",gap:11,background:"linear-gradient(135deg,var(--pll),#f0fdf9)"}}>
        <div style={{width:36,height:36,borderRadius:11,background:"var(--p)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n="chat" size={17} color="#fff"/></div>
        <div style={{flex:1}}><h3 style={{fontSize:14,marginBottom:1}}>AI Chat Assistant</h3><p style={{fontSize:11.5,color:"var(--green)",fontWeight:600}}>● Ready to help</p></div>
        {onClose&&<button className="btn btn-g btn-ic btn-sm" onClick={onClose}><I n="close" size={13}/></button>}
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"14px 16px",display:"flex",flexDirection:"column",gap:9}}>
        {msgs.map((m,i)=>(
          <div key={i} className={m.role==="user"?"cb-user":"cb-ai"}>
            {m.role==="ai"&&<div style={{fontSize:10.5,fontWeight:700,color:"var(--p)",marginBottom:4}}>RxReader AI</div>}
            <div style={{whiteSpace:"pre-wrap",lineHeight:1.6}}>{m.text}</div>
          </div>
        ))}
        {loading&&<div className="cb-ai"><div style={{fontSize:10.5,fontWeight:700,color:"var(--p)",marginBottom:5}}>RxReader AI</div><div style={{display:"flex",gap:4}}>{[0,.2,.4].map(d=><div key={d} className="td" style={{animationDelay:`${d}s`}}/>)}</div></div>}
        <div ref={bottomRef}/>
      </div>
      <div style={{padding:"6px 14px 8px",display:"flex",gap:6,overflowX:"auto"}}>
        {QUICK.map((q,i)=>(
          <button key={i} onClick={()=>{setInput(q);setTimeout(()=>inputRef.current?.focus(),50);}} style={{padding:"5px 10px",borderRadius:20,border:"1.5px solid var(--bor)",background:"#fff",cursor:"pointer",fontFamily:"'Inter',sans-serif",fontWeight:500,fontSize:12,color:"var(--t2)",whiteSpace:"nowrap",flexShrink:0,transition:"all .15s"}} onMouseOver={e=>{e.currentTarget.style.borderColor="var(--p)";e.currentTarget.style.color="var(--p)";}} onMouseOut={e=>{e.currentTarget.style.borderColor="var(--bor)";e.currentTarget.style.color="var(--t2)";}}>
            {q}
          </button>
        ))}
      </div>
      <div style={{padding:"10px 14px",borderTop:"1px solid var(--bor)",display:"flex",gap:8,alignItems:"flex-end"}}>
        <textarea ref={inputRef} value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}} placeholder="Ask about your medicines…" rows={1}
          style={{flex:1,resize:"none",border:"1.5px solid var(--bor)",borderRadius:9,padding:"8px 12px",fontFamily:"'Inter',sans-serif",fontSize:13.5,outline:"none",lineHeight:1.5,transition:"border-color .15s",maxHeight:70,overflowY:"auto"}}
          onFocus={e=>e.target.style.borderColor="var(--p)"} onBlur={e=>e.target.style.borderColor="var(--bor)"}/>
        <button className="btn btn-p btn-ic" style={{width:38,height:38,borderRadius:9,padding:0,flexShrink:0}} onClick={send} disabled={loading||!input.trim()}><I n="send" size={15} color="#fff"/></button>
      </div>
    </div>
  );
}

/* VOICE */
function VoicePanel({prescriptions,onClose}){
  const[active,setActive]=useState(false);
  const[transcript,setTranscript]=useState("");
  const[response,setResponse]=useState("");
  const[speaking,setSpeaking]=useState(false);
  const[loading,setLoading]=useState(false);
  const[history,setHistory]=useState([]);
  const[err,setErr]=useState("");
  const recRef=useRef();
  const ctx=prescriptions.filter(r=>r.status==="active").map(r=>`${r.name}: ${(r.medications||[]).map(m=>`${m.name} ${m.dose} ${m.timing?.join("+")} ${m.food}`).join(", ")}`).join(". ");
  const speak=(text)=>{
    if(!window.speechSynthesis)return;
    window.speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.rate=0.9;u.pitch=1;u.volume=1;
    u.onstart=()=>setSpeaking(true);u.onend=()=>setSpeaking(false);
    window.speechSynthesis.speak(u);
  };
  const stopSpeak=()=>{window.speechSynthesis?.cancel();setSpeaking(false);};
  const startListen=()=>{
    setErr("");
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!SR){setErr("Voice recognition is not supported. Please use Chrome or Edge.");return;}
    const rec=new SR();
    rec.continuous=false;rec.interimResults=true;rec.lang="en-IN";
    rec.onstart=()=>setActive(true);
    rec.onresult=e=>{const t=Array.from(e.results).map(r=>r[0].transcript).join("");setTranscript(t);};
    rec.onerror=e=>{setActive(false);setErr(`Microphone error: ${e.error}. Please allow microphone access.`);};
    rec.onend=async()=>{
      setActive(false);
      const q=transcript||"";if(!q.trim())return;
      setLoading(true);
      try{
        const sys=`You are a voice assistant for RxReader. Answer the patient's question about their medicines in 1-3 short sentences. Patient's prescriptions: ${ctx||"none"}. Keep your answer brief since it will be read aloud.`;
        const p=await callClaude([{type:"text",text:sys+"\n\nQuestion: "+q}]);
        const text=typeof p==="string"?p:(p?.answer||p?.content||"I could not process that. Please try again.");
        setResponse(text);setHistory(h=>[{q,a:text,time:nowStr()},...h].slice(0,8));speak(text);
      }catch(e){const msg="Connection error. Please try again.";setResponse(msg);speak(msg);}
      setLoading(false);setTranscript("");
    };
    recRef.current=rec;rec.start();
  };
  const stopListen=()=>{recRef.current?.stop();setActive(false);};
  useEffect(()=>()=>{recRef.current?.stop();window.speechSynthesis?.cancel();},[]);
  return(
    <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
      <div style={{padding:"14px 18px",borderBottom:"1px solid var(--bor)",display:"flex",alignItems:"center",gap:11,background:"linear-gradient(135deg,var(--pll),#f0fdf9)"}}>
        <div style={{width:36,height:36,borderRadius:11,background:"linear-gradient(135deg,var(--p),var(--teal))",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><I n="volume" size={17} color="#fff"/></div>
        <div style={{flex:1}}><h3 style={{fontSize:14,marginBottom:1}}>Voice Assistant</h3><p style={{fontSize:11.5,color:"var(--t2)"}}>Speak your question about medicines</p></div>
        {onClose&&<button className="btn btn-g btn-ic btn-sm" onClick={onClose}><I n="close" size={13}/></button>}
      </div>
      <div style={{flex:1,padding:"18px 20px",display:"flex",flexDirection:"column",gap:16,overflowY:"auto"}}>
        <div style={{textAlign:"center",padding:"10px 0"}}>
          <div style={{position:"relative",display:"inline-block",marginBottom:14}}>
            {active&&[1,2,3].map(i=><div key={i} style={{position:"absolute",inset:-i*12,borderRadius:"50%",border:`2px solid rgba(79,70,229,${.12/i})`,animation:`pulse ${i*.3+.7}s ease infinite`,animationDelay:`${i*.12}s`}}/>)}
            <button className={`mic-btn${active?" rec":""}`} onClick={active?stopListen:startListen}>
              <I n={active?"stop":"mic"} size={26} color="#fff"/>
            </button>
          </div>
          <p style={{fontWeight:700,fontSize:15,color:active?"#dc2626":loading?"var(--amber)":speaking?"var(--teal)":"var(--text)",marginBottom:3}}>
            {active?"Listening…":loading?"Processing…":speaking?"Speaking…":"Tap to speak"}
          </p>
          <p style={{fontSize:13,color:"var(--t3)"}}>{active?"Speak your question clearly":loading?"Getting your answer…":speaking?"Playing response…":"Ask anything about your medicines"}</p>
          {err&&<p style={{fontSize:13,color:"var(--red)",marginTop:9,padding:"8px 13px",background:"var(--rl)",borderRadius:8}}>{err}</p>}
        </div>
        {transcript&&<div className="card" style={{padding:14}}>
          <p style={{fontSize:11,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",marginBottom:5}}>You said</p>
          <p style={{fontSize:14.5,color:"var(--text)",fontStyle:"italic"}}>"{transcript}"</p>
        </div>}
        {response&&<div className="card" style={{padding:14,border:"1.5px solid var(--pl)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:7}}>
            <p style={{fontSize:11,fontWeight:700,color:"var(--p)",textTransform:"uppercase"}}>Response</p>
            <div style={{display:"flex",gap:5}}>
              <button className="btn btn-g btn-xs" onClick={()=>speak(response)} disabled={speaking}><I n="volume" size={10}/>Replay</button>
              <button className="btn btn-g btn-xs" onClick={stopSpeak} disabled={!speaking}><I n="stop" size={10}/>Stop</button>
            </div>
          </div>
          <p style={{fontSize:14,color:"var(--text)",lineHeight:1.7}}>{response}</p>
        </div>}
        <div>
          <p style={{fontSize:11,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",marginBottom:9}}>Try asking</p>
          <div style={{display:"flex",flexDirection:"column",gap:7}}>
            {["What medicines do I take in the morning?","What are the side effects of Metformin?","Can I skip a dose today?","When should I take Atorvastatin?"].map((q,i)=>(
              <button key={i} onClick={()=>setTranscript(q)} style={{textAlign:"left",padding:"9px 13px",borderRadius:9,border:"1.5px solid var(--bor)",background:"#fff",cursor:"pointer",fontFamily:"'Inter',sans-serif",fontSize:13.5,color:"var(--t2)",transition:"all .15s"}} onMouseOver={e=>{e.currentTarget.style.borderColor="var(--p)";e.currentTarget.style.color="var(--p)";}} onMouseOut={e=>{e.currentTarget.style.borderColor="var(--bor)";e.currentTarget.style.color="var(--t2)";}}>
                🎤 {q}
              </button>
            ))}
          </div>
        </div>
        {history.length>0&&<div>
          <p style={{fontSize:11,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",marginBottom:9}}>Recent</p>
          {history.map((h,i)=><div key={i} style={{padding:"10px 13px",borderRadius:9,background:"var(--s2)",marginBottom:7,border:"1px solid var(--bor)"}}>
            <p style={{fontSize:11.5,color:"var(--t3)",marginBottom:2}}>{h.time}</p>
            <p style={{fontSize:13.5,fontWeight:600,color:"var(--text)",marginBottom:4}}>"{h.q}"</p>
            <p style={{fontSize:13,color:"var(--t2)",lineHeight:1.6}}>{h.a}</p>
          </div>)}
        </div>}
      </div>
    </div>
  );
}

/* FAMILY */
function FamilyPage({familyMembers,setFamilyMembers,prescriptions}){
  const[showAdd,setShowAdd]=useState(false);
  const[form,setForm]=useState({name:"",relation:"",age:""});
  const COLORS=["#4f46e5","#ec4899","#3b82f6","#10b981","#f59e0b","#ef4444"];
  const[color,setColor]=useState(COLORS[0]);
  const addMember=()=>{
    if(!form.name||!form.relation)return;
    setFamilyMembers(p=>[...p,{id:"m"+Date.now(),name:form.name,relation:form.relation,age:parseInt(form.age)||0,initials:form.name[0],color,lastActive:"Just now"}]);
    setForm({name:"",relation:"",age:""});setShowAdd(false);
  };
  return(
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
        <div><h2 style={{fontSize:20,marginBottom:3}}>Family Health Sync</h2><p style={{color:"var(--t2)",fontSize:14}}>Manage prescriptions for your whole family</p></div>
        <button className="btn btn-p btn-sm" onClick={()=>setShowAdd(true)}><I n="plus" size={13} color="#fff"/>Add Member</button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:13}}>
        <div className="card card-h" style={{padding:18}}>
          <div style={{display:"flex",alignItems:"center",gap:11,marginBottom:12}}>
            <div className="ava" style={{width:44,height:44,fontSize:17,background:"var(--p)"}}>R</div>
            <div><div style={{fontWeight:700,fontSize:14.5}}>Rajesh Kumar <span className="badge" style={{background:"var(--pl)",color:"var(--pd)",marginLeft:4}}>You</span></div><div style={{fontSize:12.5,color:"var(--t2)"}}>Account owner</div></div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}}>
            {[{l:"Prescriptions",v:prescriptions.filter(r=>r.owner==="self").length,c:"var(--p)"},{l:"Active Rx",v:prescriptions.filter(r=>r.owner==="self"&&r.status==="active").length,c:"var(--green)"}].map((s,i)=>(
              <div key={i} style={{background:"var(--s2)",borderRadius:8,padding:"8px 10px",textAlign:"center"}}><div style={{fontWeight:800,fontSize:19,color:s.c}}>{s.v}</div><div style={{fontSize:11,color:"var(--t3)"}}>{s.l}</div></div>
            ))}
          </div>
        </div>
        {familyMembers.map(m=>{
          const mRx=prescriptions.filter(r=>r.owner===m.id);
          return(
            <div key={m.id} className="card card-h" style={{padding:18}}>
              <div style={{display:"flex",alignItems:"center",gap:11,marginBottom:12}}>
                <div className="ava" style={{width:44,height:44,fontSize:17,background:m.color}}>{m.initials}</div>
                <div style={{flex:1}}><div style={{fontWeight:700,fontSize:14.5}}>{m.name}</div><div style={{fontSize:12.5,color:"var(--t2)"}}>{m.relation}{m.age?` · ${m.age} yrs`:""}</div></div>
                <button className="btn btn-xs" style={{background:"var(--rl)",color:"var(--red)",border:"none"}} onClick={()=>setFamilyMembers(p=>p.filter(x=>x.id!==m.id))}><I n="trash" size={11}/></button>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}}>
                {[{l:"Prescriptions",v:mRx.length,c:m.color},{l:"Active",v:mRx.filter(r=>r.status==="active").length,c:"var(--green)"}].map((s,i)=>(
                  <div key={i} style={{background:"var(--s2)",borderRadius:8,padding:"8px 10px",textAlign:"center"}}><div style={{fontWeight:800,fontSize:19,color:s.c}}>{s.v}</div><div style={{fontSize:11,color:"var(--t3)"}}>{s.l}</div></div>
                ))}
              </div>
            </div>
          );
        })}
        <div className="card" style={{padding:18,border:"2px dashed var(--bor)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,minHeight:160,cursor:"pointer",background:"var(--s2)"}} onClick={()=>setShowAdd(true)}>
          <div style={{width:40,height:40,borderRadius:11,background:"var(--pl)",display:"flex",alignItems:"center",justifyContent:"center"}}><I n="plus" size={18} color="var(--p)"/></div>
          <p style={{fontSize:13.5,fontWeight:600,color:"var(--t2)"}}>Add Family Member</p>
        </div>
      </div>
      {showAdd&&<div className="modal-bg" onClick={()=>setShowAdd(false)}>
        <div className="modal" style={{maxWidth:400}} onClick={e=>e.stopPropagation()}>
          <div style={{padding:"16px 20px 12px",borderBottom:"1px solid var(--bor)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <h3 style={{fontSize:15}}>Add Family Member</h3>
            <button className="btn btn-g btn-ic btn-sm" onClick={()=>setShowAdd(false)}><I n="close" size={13}/></button>
          </div>
          <div style={{padding:20,display:"flex",flexDirection:"column",gap:11}}>
            <div style={{display:"flex",gap:7,flexWrap:"wrap",marginBottom:2}}>{COLORS.map(c=><div key={c} onClick={()=>setColor(c)} style={{width:24,height:24,borderRadius:"50%",background:c,cursor:"pointer",border:`3px solid ${color===c?"var(--text)":"transparent"}`,transition:"all .15s"}}/>)}</div>
            <div><label style={{fontSize:12.5,fontWeight:600,color:"var(--t2)",display:"block",marginBottom:4}}>Full Name *</label><input className="inp" placeholder="Sunita Kumar" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}/></div>
            <div><label style={{fontSize:12.5,fontWeight:600,color:"var(--t2)",display:"block",marginBottom:4}}>Relation *</label><select className="inp" value={form.relation} onChange={e=>setForm(f=>({...f,relation:e.target.value}))}><option value="">Select…</option>{["Spouse","Parent","Child","Sibling","Grandparent","Other"].map(r=><option key={r}>{r}</option>)}</select></div>
            <div><label style={{fontSize:12.5,fontWeight:600,color:"var(--t2)",display:"block",marginBottom:4}}>Age</label><input className="inp" type="number" placeholder="58" value={form.age} onChange={e=>setForm(f=>({...f,age:e.target.value}))}/></div>
            <div style={{display:"flex",gap:8,marginTop:4}}>
              <button className="btn btn-g" style={{flex:1,justifyContent:"center"}} onClick={()=>setShowAdd(false)}>Cancel</button>
              <button className="btn btn-p" style={{flex:2,justifyContent:"center"}} onClick={addMember} disabled={!form.name||!form.relation}><I n="users" size={13} color="#fff"/>Add to Family</button>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}

/* HISTORY */
function HistoryPage({prescriptions,setPrescriptions}){
  const[search,setSearch]=useState("");
  const[filter,setFilter]=useState("all");
  const filtered=prescriptions.filter(r=>{
    const q=search.toLowerCase();
    const mQ=!q||r.name.toLowerCase().includes(q)||r.doctor?.toLowerCase().includes(q)||r.tags?.some(t=>t.toLowerCase().includes(q));
    const mF=filter==="all"||(filter==="active"&&r.status==="active")||(filter==="completed"&&r.status==="completed");
    return mQ&&mF;
  }).sort((a,b)=>new Date(b.date)-new Date(a.date));
  return(
    <div>
      <div style={{marginBottom:18}}><h2 style={{fontSize:20,marginBottom:3}}>Prescription History</h2><p style={{color:"var(--t2)",fontSize:14}}>{prescriptions.length} prescription{prescriptions.length!==1?"s":""} on record</p></div>
      <div style={{display:"flex",gap:9,marginBottom:16,flexWrap:"wrap"}}>
        <div style={{position:"relative",flex:"1 1 200px"}}>
          <I n="search" size={13} color="var(--t3)" style={{position:"absolute",left:11,top:"50%",transform:"translateY(-50%)"}}/>
          <input className="inp" style={{paddingLeft:32}} placeholder="Search by name, doctor, tag…" value={search} onChange={e=>setSearch(e.target.value)}/>
        </div>
        <select className="inp" value={filter} onChange={e=>setFilter(e.target.value)} style={{width:"auto",flex:"0 0 auto"}}>
          <option value="all">All Status</option><option value="active">Active</option><option value="completed">Completed</option>
        </select>
      </div>
      {filtered.length===0&&<div className="card" style={{padding:44,textAlign:"center",color:"var(--t3)"}}><div style={{fontSize:40,marginBottom:10}}>📭</div><p style={{fontSize:15,color:"var(--t2)",marginBottom:4}}>No prescriptions found</p><p style={{fontSize:13}}>Try adjusting search or filters</p></div>}
      <div style={{display:"flex",flexDirection:"column",gap:9}}>
        {filtered.map(rx=>(
          <div key={rx.id} className="card card-h" style={{padding:16}}>
            <div style={{display:"flex",alignItems:"flex-start",gap:12}}>
              <div style={{width:40,height:40,borderRadius:11,background:"var(--pl)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{fileIcon(rx.fileType)}</div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:"flex",alignItems:"center",gap:7,flexWrap:"wrap",marginBottom:3}}>
                  <span style={{fontWeight:700,fontSize:14}}>{rx.name}</span>
                  <span className="badge" style={{background:statusBadge(rx.status).bg,color:statusBadge(rx.status).c}}>{rx.status}</span>
                </div>
                <div style={{fontSize:13,color:"var(--t2)",marginBottom:4}}>🩺 {rx.doctor} · 📅 {rx.date}</div>
                {rx.diagnosis&&<div style={{fontSize:12.5,color:"var(--t3)",marginBottom:5}}>{rx.diagnosis}</div>}
                <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
                  {rx.tags?.map((t,i)=><span key={i} className="badge" style={{background:"var(--pl)",color:"var(--pd)"}}>{t}</span>)}
                  <span className="badge" style={{background:"#f1f5f9",color:"#475569"}}>💊 {rx.meds} medicines</span>
                </div>
              </div>
              <div style={{display:"flex",gap:6,flexShrink:0}}>
                <button className="btn btn-g btn-xs" onClick={()=>setPrescriptions(p=>p.map(x=>x.id===rx.id?{...x,status:x.status==="active"?"completed":"active"}:x))}>
                  {rx.status==="active"?"Mark Done":"Re-activate"}
                </button>
                <button className="btn btn-xs" style={{background:"var(--rl)",color:"var(--red)",border:"none"}} onClick={()=>setPrescriptions(p=>p.filter(x=>x.id!==rx.id))}>
                  <I n="trash" size={11}/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* APP */
export default function App(){
  const[user,setUser]=useState(null);
  const[page,setPage]=useState("reminders");
  const[prescriptions,setPrescriptions]=useState([...SEED_RX]);
  const[familyMembers,setFamilyMembers]=useState([...FAMILY_INIT]);
  const[selectedRx,setSelectedRx]=useState(null);
  const[showUpload,setShowUpload]=useState(false);
  const[rightPanel,setRightPanel]=useState(null);
  const[search,setSearch]=useState("");
  const[filterStatus,setFilterStatus]=useState("all");
  const addRx=rx=>{setPrescriptions(p=>[rx,...p]);setSelectedRx(rx);setPage("library");};
  const filtered=prescriptions.filter(r=>{
    const q=search.toLowerCase();
    const mS=!q||r.name.toLowerCase().includes(q)||r.doctor?.toLowerCase().includes(q)||r.tags?.some(t=>t.toLowerCase().includes(q));
    const mF=filterStatus==="all"||r.status===filterStatus;
    return mS&&mF;
  });
  const NAV=[{id:"reminders",icon:"bell",label:"Reminders"},{id:"library",icon:"inbox",label:"Library"},{id:"family",icon:"users",label:"Family"},{id:"history",icon:"history",label:"History"}];
  if(!user)return(<><style>{CSS}</style><LoginPage onLogin={setUser}/></>);
  return(
    <>
      <style>{CSS}</style>
      <nav className="nav">
        <div className="nav-in">
          <div style={{display:"flex",alignItems:"center",gap:7,cursor:"pointer",marginRight:6}} onClick={()=>{setPage("reminders");setSelectedRx(null);}}>
            <div style={{width:28,height:28,borderRadius:7,background:"var(--p)",display:"flex",alignItems:"center",justifyContent:"center"}}><I n="pill" size={14} color="#fff"/></div>
            <span style={{fontWeight:800,fontSize:15,letterSpacing:"-.03em"}}>RxReader</span>
          </div>
          <div style={{display:"flex",flex:1,gap:2}} className="hide-m">
            {NAV.map(n=>(
              <button key={n.id} className={`nl${page===n.id?" on":""}`} onClick={()=>{setPage(n.id);setSelectedRx(null);}}>
                <I n={n.icon} size={14}/>{n.label}
              </button>
            ))}
          </div>
          <div style={{display:"flex",gap:7,alignItems:"center",marginLeft:"auto"}}>
            <button className={`btn btn-sm ${rightPanel==="voice"?"btn-p":"btn-g"}`} onClick={()=>setRightPanel(rightPanel==="voice"?null:"voice")}>
              <I n="mic" size={13} color={rightPanel==="voice"?"#fff":undefined}/><span className="hide-m">Voice</span>
            </button>
            <button className={`btn btn-sm ${rightPanel==="chat"?"btn-p":"btn-g"}`} onClick={()=>setRightPanel(rightPanel==="chat"?null:"chat")}>
              <I n="chat" size={13} color={rightPanel==="chat"?"#fff":undefined}/><span className="hide-m">Chat</span>
            </button>
            <button className="btn btn-p btn-sm" onClick={()=>setShowUpload(true)}><I n="plus" size={13} color="#fff"/>Upload Rx</button>
            <div style={{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",borderRadius:9,background:"var(--s2)",border:"1px solid var(--bor)",cursor:"pointer"}} onClick={()=>setUser(null)} title="Sign out">
              <div className="ava" style={{width:24,height:24,fontSize:10,background:"var(--p)"}}>{user.name[0].toUpperCase()}</div>
              <span style={{fontSize:13,fontWeight:600,color:"var(--t2)"}} className="hide-m">{user.name.split(" ")[0]}</span>
              <I n="logout" size={12} color="var(--t3)"/>
            </div>
          </div>
        </div>
      </nav>
      <div style={{display:"flex",flex:1,maxWidth:1200,margin:"0 auto",width:"100%"}}>
        {page==="library"&&(
          <div style={{width:290,flexShrink:0,borderRight:"1px solid var(--bor)",background:"var(--sur)",height:"calc(100vh - 58px)",position:"sticky",top:58,display:"flex",flexDirection:"column"}} className="hide-m">
            <div style={{padding:"12px 12px 9px",borderBottom:"1px solid var(--bor)"}}>
              <div style={{position:"relative",marginBottom:8}}>
                <I n="search" size={13} color="var(--t3)" style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)"}}/>
                <input className="inp" style={{paddingLeft:30,fontSize:13}} placeholder="Search prescriptions…" value={search} onChange={e=>setSearch(e.target.value)}/>
              </div>
              <div style={{display:"flex",gap:4}}>
                {["all","active","completed"].map(s=>(
                  <button key={s} onClick={()=>setFilterStatus(s)} style={{padding:"4px 10px",borderRadius:20,border:`1.5px solid ${filterStatus===s?"var(--p)":"var(--bor)"}`,background:filterStatus===s?"var(--pl)":"transparent",color:filterStatus===s?"var(--p)":"var(--t2)",cursor:"pointer",fontFamily:"'Inter',sans-serif",fontWeight:600,fontSize:12,transition:"all .14s"}}>
                    {s.charAt(0).toUpperCase()+s.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div style={{flex:1,overflowY:"auto",padding:"8px 10px"}}>
              {filtered.length===0&&<div style={{textAlign:"center",padding:"36px 14px",color:"var(--t3)"}}><div style={{fontSize:28,marginBottom:7}}>🔍</div><p style={{fontSize:13}}>No prescriptions found</p></div>}
              {filtered.map(rx=>(
                <div key={rx.id} className={`rx-row${selectedRx?.id===rx.id?" on":""}`} onClick={()=>setSelectedRx(rx)}>
                  <div style={{width:36,height:36,borderRadius:10,background:"var(--pl)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,flexShrink:0}}>{fileIcon(rx.fileType)}</div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontWeight:600,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{rx.name}</div>
                    <div style={{fontSize:11.5,color:"var(--t3)",marginTop:1}}>{rx.doctor} · {rx.date}</div>
                    <div style={{display:"flex",gap:4,marginTop:4}}>
                      <span className="badge" style={{background:statusBadge(rx.status).bg,color:statusBadge(rx.status).c,fontSize:10}}>{rx.status}</span>
                      <span className="badge" style={{background:"#f1f5f9",color:"#475569",fontSize:10}}>💊 {rx.meds}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{padding:"9px 11px",borderTop:"1px solid var(--bor)"}}>
              <button className="btn btn-p" style={{width:"100%",justifyContent:"center",fontSize:13}} onClick={()=>setShowUpload(true)}><I n="plus" size={13} color="#fff"/>Upload New Prescription</button>
            </div>
          </div>
        )}
        <div style={{flex:1,minWidth:0,height:"calc(100vh - 58px)",overflowY:"auto",padding:"20px 22px"}}>
          {page==="reminders"&&<div className="page"><RemindersPage prescriptions={prescriptions}/></div>}
          {page==="library"&&<div className="page">
            {selectedRx?<RxDetail rx={selectedRx} onClose={()=>setSelectedRx(null)}/>:(
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:380,textAlign:"center",gap:13}}>
                <div style={{width:64,height:64,borderRadius:18,background:"var(--pl)",display:"flex",alignItems:"center",justifyContent:"center"}}><I n="pill" size={28} color="var(--p)"/></div>
                <div><h2 style={{fontSize:19,marginBottom:5}}>Select a Prescription</h2><p style={{color:"var(--t2)",fontSize:14,maxWidth:300,lineHeight:1.7}}>Choose from the list or upload a new prescription.</p></div>
                <div style={{display:"flex",gap:9,flexWrap:"wrap",justifyContent:"center"}}>
                  <button className="btn btn-p" onClick={()=>setShowUpload(true)}><I n="upload" size={13} color="#fff"/>Upload Prescription</button>
                  {filtered.length>0&&<button className="btn btn-g" onClick={()=>setSelectedRx(filtered[0])}>View Latest</button>}
                </div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:9,width:"100%",maxWidth:300,marginTop:4}}>
                  {[{l:"Total Rx",v:prescriptions.length,c:"var(--p)"},{l:"Active",v:prescriptions.filter(r=>r.status==="active").length,c:"var(--green)"},{l:"Family",v:familyMembers.length,c:"#ec4899"}].map((s,i)=>(
                    <div key={i} className="card" style={{padding:"12px 9px",textAlign:"center"}}>
                      <div style={{fontSize:21,fontWeight:800,color:s.c}}>{s.v}</div>
                      <div style={{fontSize:11,color:"var(--t3)",marginTop:2}}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>}
          {page==="family"&&<div className="page"><FamilyPage familyMembers={familyMembers} setFamilyMembers={setFamilyMembers} prescriptions={prescriptions}/></div>}
          {page==="history"&&<div className="page"><HistoryPage prescriptions={prescriptions} setPrescriptions={setPrescriptions}/></div>}
        </div>
        {rightPanel&&(
          <div style={{width:340,flexShrink:0,borderLeft:"1px solid var(--bor)",background:"var(--sur)",height:"calc(100vh - 58px)",position:"sticky",top:58,display:"flex",flexDirection:"column",animation:"slideDown .2s ease"}} className="hide-m">
            {rightPanel==="chat"&&<ChatPanel prescriptions={prescriptions} onClose={()=>setRightPanel(null)}/>}
            {rightPanel==="voice"&&<VoicePanel prescriptions={prescriptions} onClose={()=>setRightPanel(null)}/>}
          </div>
        )}
      </div>
      <div style={{position:"fixed",bottom:0,left:0,right:0,background:"rgba(255,255,255,.97)",backdropFilter:"blur(20px)",borderTop:"1px solid var(--bor)",display:"none",zIndex:100,padding:"7px 0 max(7px,env(safe-area-inset-bottom))"}} ref={el=>{if(el)el.style.display=window.innerWidth<769?"flex":"none"}}>
        <div style={{display:"flex",width:"100%",justifyContent:"space-around",padding:"0 8px"}}>
          {[...NAV,{id:"upload",icon:"plus",label:"Upload"}].map(n=>(
            <button key={n.id} onClick={()=>n.id==="upload"?setShowUpload(true):setPage(n.id)} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,padding:"3px 9px",border:"none",background:"none",cursor:"pointer",color:page===n.id?"var(--p)":"var(--t3)",fontFamily:"'Inter',sans-serif",fontWeight:page===n.id?700:400,fontSize:10,minWidth:40}}>
              <I n={n.icon} size={20} color={page===n.id?"var(--p)":"var(--t3)"}/>
              {n.label}
            </button>
          ))}
        </div>
      </div>
      {showUpload&&<UploadModal onClose={()=>setShowUpload(false)} onAdd={addRx} familyMembers={familyMembers}/>}
    </>
  );
}
