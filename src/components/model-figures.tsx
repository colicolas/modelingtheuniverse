'use client';
import { useId, useState } from 'react';

export function SelfExtension() {
 const [mode,setMode]=useState(1); const id=useId();
 const captions=['Pain draws attention toward the body. Other concerns recede.','Relief makes room for attention, connection, and action beyond the body.','Language, relationships, and making extend the world a person can participate in.'];
 return <figure className="model-figure"><div className="graph-options" role="group" aria-label="Explore self-extension">{['Contraction','Relief','Extension'].map((label,i)=><button type="button" key={label} aria-pressed={mode===i} onClick={()=>setMode(i)}>{label}</button>)}</div><svg viewBox="0 0 660 300" role="img" aria-labelledby={id}><title id={id}>{`Self-extension: ${captions[mode]}`}</title><g className={`extension-field extension-mode-${mode}`}><circle cx="330" cy="145" r="110"/><circle cx="330" cy="145" r="72"/>{[[180,75],[480,75],[180,220],[480,220]].map(([x,y])=><line key={`${x}-${y}`} x1="330" y1="145" x2={x} y2={y}/>)}</g><circle className="self-core" cx="330" cy="145" r="33"/><text x="330" y="150" textAnchor="middle">self</text><g className={`extension-labels extension-labels-${mode}`}><text x="145" y="65" textAnchor="middle">knowledge</text><text x="515" y="65" textAnchor="middle">people</text><text x="145" y="240" textAnchor="middle">experience</text><text x="515" y="240" textAnchor="middle">making</text></g><text x="330" y="285" textAnchor="middle">The reach of a lived world</text></svg><figcaption><span aria-live="polite">{captions[mode]}</span><small>Figure 4. A conceptual reading of self-extension, developed from Scarry (1985).</small></figcaption></figure>;
}
export function HedonicCalculus(){
 const [horizon,setHorizon]=useState(5);const id=useId();
 const quick=6-2*horizon;const patient=-3+2*horizon;
 return <figure className="model-figure"><label className="figure-control">Time horizon <span>{horizon===1?'Immediate':`${horizon} periods`}</span><input aria-label="Time horizon" type="range" min="1" max="8" value={horizon} onChange={e=>setHorizon(Number(e.target.value))}/></label><svg viewBox="0 0 660 250" role="img" aria-labelledby={id}><title id={id}>{`Illustrative cumulative balance over ${horizon} periods. Quick relief: ${quick}. Working through discomfort: ${patient}. Positive means net relief.`}</title><line className="graph-axis" x1="330" y1="35" x2="330" y2="210"/><text x="75" y="25">More pain ←</text><text x="585" y="25" textAnchor="end">→ More relief</text><text x="30" y="70">Quick relief, recurring cost</text><rect className="calculus-bar cost-bar" x={330+Math.min(0,quick)*17} y="85" width={Math.abs(quick)*17} height="25"/><text x="30" y="155">Discomfort, lasting benefit</text><rect className="calculus-bar benefit-bar" x={330+Math.min(0,patient)*17} y="170" width={Math.abs(patient)*17} height="25"/><text x="330" y="235" textAnchor="middle">Cumulative relief minus pain</text></svg><figcaption><span aria-live="polite">{quick>patient?'At this horizon, immediate relief has the larger balance.':'Over this horizon, the lasting benefit outweighs the initial discomfort.'}</span><small>Figure 2. Invented units: quick relief starts at +6 and costs 2 each period; lasting benefit starts at −3 and adds 2. An illustration, not a measure of wellbeing or a moral score.</small></figcaption></figure>;
}
export function LearningLoop(){
 const [step,setStep]=useState(0);const labels=['A difficult conversation','Avoidance','Immediate relief','Avoidance becomes more likely'];
 return <figure className="model-figure learning-figure"><ol className="learning-sequence">{labels.map((label,i)=><li key={label} className={i<=step?'revealed':''}><span>{i+1}</span>{label}</li>)}</ol><button type="button" className="text-link" onClick={()=>setStep((step+1)%4)}>{step===3?'Replay the sequence ↺':'Follow the consequence →'}</button><figcaption><span aria-live="polite">{['An anticipated conflict brings anxiety.','Avoiding the conversation removes the immediate demand.','Anxiety falls, making avoidance rewarding.','If relief strengthens future avoidance, this is negative reinforcement.'][step]}</span><small>Figure 3. An illustrative learning loop (Spielman et al., 2020). The unresolved conflict may remain.</small></figcaption></figure>;
}

export function EducationPaths() {
 const [active,setActive]=useState(0); const id=useId();
 const paths=[{name:'Academic excellence',label:'Knowledge',caption:'Learn how to learn and acquire knowledge.'},{name:'Emotional intelligence',label:'Other people',caption:'Learn to communicate beyond a small, familiar circle.'},{name:'Moral reasoning',label:'Conduct',caption:'Use concrete examples to recognize harm and healthy relationships.'}];
 return <figure className="model-figure"><div className="graph-options" role="group" aria-label="Explore the three tasks of school">{paths.map((path,i)=><button type="button" key={path.name} aria-pressed={active===i} onClick={()=>setActive(i)}>{i+1}. {path.name}</button>)}</div><svg viewBox="0 0 660 230" role="img" aria-labelledby={id}><title id={id}>Three ways school helps a student reach outward. Selected: {paths[active].name}.</title><circle className="self-core" cx="110" cy="115" r="36"/><text x="110" y="120" textAnchor="middle">student</text>{paths.map((path,i)=><g key={path.name} className={`education-path ${active===i?'active':''}`}><path d={`M 147 115 Q 310 115 470 ${45+i*70}`} fill="none" pathLength="1"/><circle cx="470" cy={45+i*70} r="5"/><text x="490" y={50+i*70}>{path.label}</text></g>)}</svg><figcaption><span aria-live="polite">{paths[active].caption}</span><small>Three connected tasks, each giving students a way to reach beyond themselves.</small></figcaption></figure>;
}

export function CommunicationBridge() {
 const [shared,setShared]=useState(false); const id=useId();
 return <figure className="model-figure"><div className="graph-options" role="group" aria-label="Explore communication"><button type="button" aria-pressed={!shared} onClick={()=>setShared(false)}>An unspoken feeling</button><button type="button" aria-pressed={shared} onClick={()=>setShared(true)}>Give it a form</button></div><svg viewBox="0 0 660 180" role="img" aria-labelledby={id}><title id={id}>{shared?'Words, art, or movement give another person something to respond to.':'An internal feeling has not yet been shared.'}</title><circle className="self-core" cx="100" cy="80" r="35"/><text x="100" y="85" textAnchor="middle">self</text><g className={`communication-link ${shared?'shared':''}`}><path d="M 140 80 L 520 80" pathLength="1"/><text x="330" y="60" textAnchor="middle">words · art · movement</text></g><circle className="self-core" cx="560" cy="80" r="35"/><text x="560" y="85" textAnchor="middle">other</text><text x="330" y="155" textAnchor="middle">{shared?'Something to encounter, interpret, and respond to':'What is felt is not yet shared knowledge'}</text></svg><figcaption><span aria-live="polite">{shared?'Expression opens a possibility for understanding. Listening helps it go somewhere.':'Another person cannot simply guess an inner experience.'}</span></figcaption></figure>;
}

export function ActionConsequenceNetwork() {
 const [choice, setChoice] = useState(0);
 const [stage, setStage] = useState(0);
 const id = useId();
 const paths = [
  { action: ['Ask for help'], immediate: ['Receive support'], later: ['More willing', 'to ask again'], stages: ['A person considers asking for help with an uncertain task.', 'If asking brings support, the person encounters a useful consequence.', 'That experience may make asking for help more likely in another situation.', 'The outcome can revise the expectation that asking will help. Another encounter may turn out differently.'] },
  { action: ['Avoid the task'], immediate: ['Immediate relief'], later: ['The problem', 'remains'], stages: ['A person considers avoiding the task.', 'Avoidance may remove the immediate anxiety.', 'The task can remain unresolved even though avoiding it brought relief.', 'Immediate relief may reinforce avoidance despite the later cost. Learning what to repeat and evaluating its value can diverge.'] },
  { action: ['Pressure someone'], immediate: ['Gain compliance'], later: ['Fear or', 'damaged trust'], stages: ['A person considers pressuring someone else to act.', 'If pressure produces compliance, the person may obtain the immediate result they wanted.', 'The other person may carry fear or lose trust. The initial result leaves these consequences out.', 'Compliance may reinforce the use of pressure. A fuller calculation must also include the other person’s suffering and the later consequences.'] },
 ];
 const selected = paths[choice];
 const node = (x: number, y: number, lines: string[], active: boolean) => <g className={`association-node ${active ? 'active' : ''}`}><rect x={x-65} y={y-30} width="130" height="60" rx="5"/><text x={x} y={y-(lines.length-1)*8+4} textAnchor="middle">{lines.map((line,i)=><tspan key={line} x={x} dy={i===0?0:16}>{line}</tspan>)}</text></g>;
 return <figure className="model-figure association-figure">
  <div className="graph-options" role="group" aria-label="Choose an action to follow">{paths.map((path,i)=><button type="button" key={path.action[0]} aria-pressed={choice===i} onClick={()=>{setChoice(i);setStage(0);}}>{path.action[0]}</button>)}</div>
  <div className="association-scroll" role="region" aria-label="Action and consequence diagram, scroll horizontally on smaller screens" tabIndex={0}>
   <svg viewBox="0 0 730 415" role="img" aria-labelledby={`${id}-title ${id}-description`}>
    <title id={`${id}-title`}>A network of possible action–consequence associations</title>
    <desc id={`${id}-description`}>{selected.stages[stage]} The diagram shows three possible paths from uncertainty through an action, an immediate outcome, and a later consequence. These are hypothetical outcomes.</desc>
    <defs><marker id={`${id}-arrow`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M 0 0 L 7 3.5 L 0 7 z"/></marker></defs>
    <text x="80" y="24" textAnchor="middle">Situation</text><text x="250" y="24" textAnchor="middle">Action</text><text x="435" y="24" textAnchor="middle">Immediate outcome</text><text x="630" y="24" textAnchor="middle">Later consequence</text>
    {paths.map((path,i)=>{
     const y=80+i*115;
     return <g key={path.action[0]}>
      {[`M 145 195 C 165 195 165 ${y} 180 ${y}`,`M 315 ${y} L 365 ${y}`,`M 500 ${y} L 560 ${y}`].map((d,j)=><path key={d} className={`association-edge ${choice===i&&stage>=j?'active':''}`} d={d} fill="none" markerEnd={`url(#${id}-arrow)`}/>)}
      {node(250,y,path.action,choice===i)}
      {node(435,y,path.immediate,choice===i&&stage>=1)}
      {node(630,y,path.later,choice===i&&stage>=2)}
     </g>;
    })}
    {node(80,195,['Uncertainty','about a task'],true)}
    <path key={`${choice}-${stage}`} className={`association-feedback ${stage===3?'active':''}`} d={`M 695 ${80+choice*115} C 720 ${80+choice*115} 720 380 690 380 L 80 380 Q 55 380 55 355 L 55 230`} fill="none" markerEnd={`url(#${id}-arrow)`} pathLength="1"/>
    <text className="association-feedback-label" x="375" y="407" textAnchor="middle">Experience can update what we expect next time</text>
   </svg>
  </div>
  <div className="association-controls"><span>Step {stage+1} of 4</span><button type="button" className="text-link" onClick={()=>setStage((stage+1)%4)}>{stage===3?'Replay this path ↺':['Follow the immediate outcome →','Consider the later consequence →','Update the expectation →'][stage]}</button></div>
  <figcaption><span aria-live="polite">{selected.stages[stage]}</span><small>A conceptual network of learned expectations. Outcomes are hypothetical, and the nodes represent experiences rather than individual neurons.</small></figcaption>
 </figure>;
}
