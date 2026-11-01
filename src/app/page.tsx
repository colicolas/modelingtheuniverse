import Link from 'next/link';
import { SelfExtension, HedonicCalculus, ActionConsequenceNetwork } from '@/components/model-figures';
import { References } from '@/components/references';
import { DecisionNetwork } from '@/components/decision-network';
import { CollapsibleSection } from '@/components/collapsible-section';
import { EssayControls } from '@/components/essay-controls';
import { PainPleasure } from '@/components/pain-pleasure';

export default function Home() {
  return <main id="main" className="paper">
    <article>
      <header className="paper-header">
        <p className="paper-kicker">Demi Zheng</p>
        <h1>Modeling the universe</h1>
        <p className="paper-subtitle">pain, behavior, self-extension</p>
        <p className="paper-byline">Last Updated <span>·</span> November 1, 2026</p>
      </header>
      <div className="paper-introduction">
        <p>I propose a model of human behavior that begins with pain and pleasure and develops into an account of learning, self-extension, language, and power. Once our basic needs are met, we seek to extend ourselves beyond our immediate physical surroundings through knowledge, relationships, travel, wealth, or spiritual life. Our experiences of relief and reward help shape which forms of extension we pursue, and from our definition of self-extension comes our version of self-worth. Language, understood broadly as communication, makes this reaching possible. It is both a vehicle for power and a manifestation of it: power lies in what we can communicate and in what we do not have to explain. Because language can cause pain or help relieve it, this model also offers a way to examine violence through the pain that precedes an action, the pain it causes, and the pain that persists afterwards.</p>
        <p>I will first establish the account of pain and pleasure, then consider how consequences and examples teach us what to seek and avoid. From there, I will explain self-extension and develop the two claims at the center of this argument: language is power, and power is language.</p>
      </div>
      <nav className="paper-contents" aria-label="Article contents"><a href="#the-model">01 Pain & pleasure</a><a href="#learning">02 Learning</a><a href="#self-extension">03 Self-extension</a><a href="#language">04 Language & power</a></nav>
      <EssayControls/>
      <CollapsibleSection id="the-model" className="opening-section" number="01" heading={<> Pain & pleasure </>}>

        <p className="premise-statement">Pleasure begins with freedom from pain.</p>
        <div className="paper-prose" id="premise">
          <p>Under the Epicurean definition I am using here, pleasure is freedom from physical pain and mental disturbance. This makes relief from pain a starting point for understanding what we seek and what we avoid. It also means that pleasure cannot be judged only by the intensity of an enjoyable moment. A choice matters for the life that follows it <a className="reference" href="#ref-epicurus">(Epicurus, n.d.)</a>.</p>
        </div>
        <CollapsibleSection subsection heading={<>Defining pain</>}>

        <p>Here, pain includes bodily hurt and mental distress. Injury, fear, grief, humiliation, loneliness, and the frustration of being unable to act differ in cause and intensity, but each can occupy a person’s attention and restrict what they feel able to do. I group these experiences to examine what burdens someone and what would bring relief.</p>
        <p>This usage is broader than the clinical definition. The International Association for the Study of Pain defines pain in relation to unpleasant sensory and emotional experiences associated with actual or potential tissue damage, or resembling those experiences. It also emphasizes that pain is personal and that an inability to communicate does not negate its existence <a className="reference" href="#ref-iasp">(International Association for the Study of Pain [IASP], 2020)</a>.</p>
        <PainPleasure/>

</CollapsibleSection>
<CollapsibleSection subsection heading={<>Hedonic calculus: consequences across time</>}>

        <p>If our goal is to minimize pain, how do we make decisions? Immediate relief is not enough to evaluate an action. Epicurus argues that some pleasures should be passed over because of the trouble they produce, while some pains should be accepted because greater pleasure follows. We must consider the intensity and duration of an experience and the consequences of choosing it <a className="reference" href="#ref-epicurus">(Epicurus, n.d.)</a>.</p>
        <p>Putting off a difficult task may relieve anxiety today and create a larger burden tomorrow. Completing it may require discomfort now but remove a recurring source of distress. This distinction between immediate and later consequences will matter when we examine learning. The response that brings the fastest relief can become familiar even when it leaves the underlying problem unresolved.</p>
        <HedonicCalculus/>

</CollapsibleSection>
</CollapsibleSection>
      <CollapsibleSection id="learning" number="02" heading={<> Learning & making connections </>}>

        <p>The account of pain and pleasure raises a further question: how do we learn which experiences to approach and which to avoid? We do not encounter each situation without a history. Previous experiences affect what we expect to happen and what consequences we expect our actions to have. Teaching adds another route by allowing us to learn from examples before encountering those consequences ourselves.</p>
        <CollapsibleSection subsection heading={<>Classical conditioning: learning an association</>}>

        <p>Classical conditioning occurs when a previously neutral stimulus acquires the capacity to elicit a response through association with another stimulus. In Pavlov’s experiments, pairing a tone with food eventually led dogs to salivate at the tone alone. A response that initially depended on food came to occur in anticipation of it <a className="reference" href="#ref-spielman">(Spielman et al., 2020, §6.2)</a>.</p>
        <p>Consider how a tone of voice might acquire significance through repeated encounters. If it regularly precedes an intimidating exchange, hearing it may bring anxiety before the exchange begins. This illustrates how the expectation of pain can become part of a present experience. The sound matters because of what the listener has learned to associate with it.</p>

</CollapsibleSection>
<CollapsibleSection subsection heading={<>Operant conditioning: learning from consequences</>}>

        <p>Operant conditioning concerns how consequences change the likelihood of a behavior. Reinforcement increases that likelihood, while punishment decreases it. “Positive” means adding a stimulus, and “negative” means removing one. They do not mean good and bad <a className="reference" href="#ref-spielman">(Spielman et al., 2020, §6.3)</a>.</p>
        <div className="learning-example"><p>Return to the intimidating conversation. The tone of voice may elicit anxiety through a learned association. Leaving may then reduce that anxiety. If the relief makes leaving more likely in future encounters, leaving has been negatively reinforced.</p></div>
        <p>Consequences therefore have two roles in this argument. They affect what a person learns to repeat, and they provide grounds for evaluating the action over time. The two can diverge. Avoidance may be reinforced by immediate relief while allowing a conflict to persist. Horace’s examples make later consequences available for reflection, even when an immediate response points in another direction.</p>

</CollapsibleSection>
<CollapsibleSection subsection heading={<>Examples, consequences, and moral teaching</>}>

        <p>There are two connected ways to teach the relation between an action and its consequences. The first changes what happens to the learner. The second makes someone else’s experience available as an example.</p>
        <ol className="moral-learning-paths">
          <li><p><strong>Rewarding good behavior and applying consequences to harmful behavior.</strong> When a consequence increases a behavior, it functions as reinforcement. When it reduces a behavior, it functions as punishment. Whether a response teaches what was intended depends on what the learner actually comes to expect and do. Calling something a punishment does not establish that it has reduced the behavior.</p></li>
          <li><p><strong>Showing examples of reward and punishment.</strong> Point to an action and explain what followed: look at what this person did, what happened to them, and how it affected someone else. Observational learning allows consequences experienced by another person to influence what the observer chooses to do. This includes vicarious reinforcement and punishment <a className="reference" href="#ref-spielman">(Spielman et al., 2020, §6.4)</a>.</p></li>
        </ol>
        <p>Horace’s <cite>Satire 1.4</cite> gives us an example of the second method. His father points to other people’s conduct and its consequences to guide him. Someone’s loss of wealth becomes a warning against squandering an inheritance. An admired person provides an example to follow. Horace later examines his own conduct through a similar practice of reflection <a className="reference" href="#ref-horace-4">(Horace, n.d., 1.4.105–139)</a>.</p>
        <p>The phrase <i>dictis formabat</i> captures the connection I want to make: his father was shaping him with words. A visible example, a label, and an explanation of the consequence become connected. Horace can consider an outcome without first having to experience it himself.</p>
        <p>This is also what I mean by showing a student an example of embezzlement and labeling it “embezzlement,” or identifying a healthy friendship and explaining what makes it healthy. The label gives the student a category. The example gives it substance. Explaining the consequences connects the action to what it does to people. Moral teaching must also examine whether a consequence is fair and whose pain is being counted. Reward and punishment describe how behavior changes, but they do not by themselves establish what is right. <Link className="text-link" href="/entries/pedagogy">The broader role of schools →</Link></p>

</CollapsibleSection>
<CollapsibleSection subsection id="neuroscience" heading={<>Learning and the brain: association and connection</>}>

        <p>Association and connection run throughout this account. Association areas of the cortex integrate information across sensory inputs and contribute to memory, language, planning, and other complex functions. They help place what we encounter in relation to what we already know and what we might do <a className="reference" href="#ref-association-cortex">(Wright, 2026)</a>.</p>
        <p>Learning also involves changes in neural circuits, including changes in the strength of connections between neurons. This capacity for change is called synaptic plasticity. Connections can strengthen or weaken with activity, so learning does not simply mean adding a new connection each time an event occurs <a className="reference" href="#ref-purves">(Purves et al., 2001)</a>.</p>
        <p>For this model, I picture an extensive network of action–consequence associations. Operant conditioning concerns how the consequences of an action change the likelihood of repeating it. Deliberate decision-making can draw on those learned relations to anticipate what an action might produce. One consequence can also become the starting condition for another decision, so the relations extend into chains.</p>
        <p>This gives the model a way to address what someone can affect or control. A person learns that asking a question sometimes brings help, withdrawing sometimes brings relief, or threatening someone sometimes produces compliance. Repetition can make these expectations familiar. But a learned association is not proof of control. Another person can respond differently, and an outcome may have depended on circumstances the learner did not recognize.</p>
        <p>Hedonic calculus brings anticipated consequences into the decision. What events might follow this action? What pleasure, pain, or suffering is associated with them, for whom, and over what period of time? On this account, the network supplies learned expectations, and the calculus evaluates what pursuing or avoiding those outcomes would mean. The graph below makes that proposed relation visible.</p>
        <ActionConsequenceNetwork/>
        <p>The graph represents associations between experiences and possible actions. Its nodes are concepts, rather than individual neurons, and its arrows are possible expectations, rather than a map of anatomical connections. Learning and decision-making depend on interacting brain systems, including cortical and subcortical circuits. Association cortex is part of that account, rather than a single location that contains the whole model.</p>
        <p>Some dopamine signals track differences between expected and received rewards. These reward prediction errors can contribute to learning when an outcome differs from what was anticipated <a className="reference" href="#ref-odoherty">(O’Doherty, 2011)</a>. A prediction can therefore be revised by experience. This matters because a decision is only as useful as the expectations and values it draws upon.</p>

</CollapsibleSection>
<CollapsibleSection subsection heading={<>Adolescence and the development of a worldview</>}>

        <p>The process of learning is important throughout life, and adolescence is a particularly important period of development. Brain systems involved in planning and decision-making continue to mature, social experiences become especially salient, and the brain remains responsive to new experiences <a className="reference" href="#ref-teen-brain">(National Institute of Mental Health [NIMH], 2023)</a>.</p>
        <p>In the terms of this model, a young person is developing an increasingly extensive set of expectations about what their actions can produce. If speaking honestly repeatedly brings ridicule, silence may come to seem safer. If a request for help brings support, asking may become something worth trying again. What the person learns includes both a response and a prediction about the world in which that response will be used.</p>
        <p>If this learning repeatedly connects trust with betrayal, vulnerability with punishment, or domination with reward, the resulting worldview can make later encounters difficult and sometimes destructive. A response that once offered protection may cause harm in a different setting. The problem is the fit between a learned expectation and the present circumstances. Having a model different from the people around you does not itself make tragedy inevitable, and adolescence does not fix a person’s future. Later experiences can revise these associations.</p>

</CollapsibleSection>
<CollapsibleSection subsection heading={<>Understanding another person’s expectations</>}>

        <p>Psychopathy raises a particular question about the relation between predicting another person and caring about the consequences for them. Research has examined differences in reinforcement learning and responses to others’ distress <a className="reference" href="#ref-blair">(Blair, 2008)</a>. In one study of incarcerated men, higher psychopathic traits were associated with reduced automatic perspective-taking, while deliberate perspective-taking remained available <a className="reference" href="#ref-drayton">(Drayton et al., 2018)</a>.</p>
        <p>Within my model, this suggests a distinction between knowing how someone is likely to respond and giving their suffering weight in one’s own decision. A person may understand another’s trust, fear, or desire for approval well enough to exploit it for an individual end. The point is that accurately predicting someone’s response does not guarantee concern for them. Psychopathy cannot be reduced to adolescent learning having gone wrong, and these findings do not describe every person with psychopathic traits.</p>

</CollapsibleSection>
<CollapsibleSection subsection id="error-threshold" heading={<>Differences between people: an error threshold</>}>

        <p>I use “error threshold” to describe a proposed limit in how accurately one person can anticipate another’s hedonic calculation. Here, error means the difference between the consequences and values I assume you are using and those you actually use. It concerns both what we expect will happen and how much weight we give the outcome. This is a conceptual comparison, rather than an established neurological measure or a numerical cutoff.</p>
        <p>If I assume that a direct question signals interest, while you have learned that it precedes criticism, we can assign different meanings to the same words. As this difference grows, communication that relies on unspoken assumptions becomes less reliable. We may agree on the dictionary meaning while predicting different consequences for answering. Explaining the intended meaning and examining the other person’s expectation can make the difference visible.</p>
        <p>This offers one way to examine why communication across cultures or backgrounds can be difficult. People may have learned different relations between authority, disagreement, respect, safety, and reward. Bringing those expectations together requires more than shared vocabulary. Prejudice can make the problem worse by replacing attention to an individual’s experience with an assumed model of their group. Difference becomes a source of error when we fail to recognize it and continue to predict another person through our own history.</p>
        <DecisionNetwork/>

</CollapsibleSection>
<CollapsibleSection subsection heading={<>From reinforcers to self-extension</>}>

        <p>Primary reinforcers, such as food and water, have reinforcing qualities that do not depend on learning. Secondary reinforcers acquire their value through associations with other reinforcers. Money is an example: its value depends on what it has come to provide access to <a className="reference" href="#ref-spielman">(Spielman et al., 2020, §6.3)</a>.</p>
        <p>My proposal is that our experience with these reinforcers, and the action–consequence associations we develop around them, helps give us our definition of self-extension and happiness. A student whose learning repeatedly brings understanding, recognition, or new opportunities may come to locate fulfillment in knowledge. Someone for whom money has meant security or influence may come to pursue wealth.</p>
        <p>Using a hedonic calculation to pursue greater reward and avoid punishment offers another view of self-extension. We learn what outcomes matter, what actions appear to make them possible, and what kind of future seems worth reaching. My argument is that these learned relations help organize a person’s pursuits into a definition of a larger or more fulfilling life. They influence that definition without making it permanent or reducing happiness to any single neural pathway.</p>
        <p>We begin with needs and learn ways of meeting them. Through relief, rewards, examples, and consequences, we develop an understanding of what makes a life feel larger. This brings the argument from avoiding pain to pursuing something beyond our immediate physical needs: self-extension.</p>

</CollapsibleSection>
</CollapsibleSection>
      <CollapsibleSection id="self-extension" number="03" heading={<> Self-extension </>}>

        <p>What do I mean by self-extension? Once our basic physical needs are met, we begin to want to extend ourselves beyond our immediate physical surroundings. Drawing on Elaine Scarry’s account of pain and its destruction of a world in <cite>The Body in Pain</cite>, I use self-extension to describe this movement beyond the self <a className="reference" href="#ref-scarry">(Scarry, 1985)</a>.</p>
        <p>Self-extension can be mental, physical, material, or spiritual. The scholar defines it as an expansion of their mental faculties and knowledge. The CEO defines it as an accumulation of influence through wealth and power. The traveler defines it as a physical extension. The priest might define it as communication with a higher power, though this is a secular perspective and I welcome corrections.</p>
        <p>The lover sees their significant other as a part of themselves. You experience the world both through your own eyes and through theirs. This also applies platonically. In each case, something outside the individual becomes part of the world they can experience and participate in.</p>
        <p>I propose that these different pursuits can be understood as forms of self-extension. Avoiding pain and seeking extension approach fulfillment from different directions. The first asks what prevents someone from living freely. The second asks what they want to reach once there is room to do so. Learning helps explain why the answer differs from person to person.</p>
        <SelfExtension/>
        <blockquote>“Maybe we should be asking them if their basic needs are fulfilled, and then beyond that, their definition of self-extension.”<cite>Demi Zheng</cite></blockquote>
        <p>We often ask people, “What makes you happy?” Maybe the question above gets us closer. And from your definition of self-extension comes your version of self-worth. If knowledge is how you extend yourself, what you understand can become how you judge yourself. If influence is your form of extension, your ability to affect others can become your measure of success.</p>
        <CollapsibleSection subsection heading={<>Pain reverses self-extension</>}>

        <p>Imagine the last time you had a fever or got severely ill, lying in bed, confined to your room. Your money, travels, and mathematical formulas do not help right now. The world you ordinarily participate in recedes as the pain demands your attention. Ideas from your civilization are usurped by that migraine.</p>
        <p>This is the sense in which pain reduces one’s world and reverses self-extension. It also explains why relief matters beyond the immediate sensation of comfort. Relief can restore the possibility of attending to people, ideas, and activities outside the body.</p>

</CollapsibleSection>
<CollapsibleSection subsection heading={<>Language as a tool of self-extension</>}>

        <p>If someone was unable to communicate in any manner with anything, how might they self-extend? The very nature of self-extension requires something other than the self. And you access ideas, people, and things outside yourself through language.</p>
        <p>I use language broadly to mean communication, including speech, writing, art, dance, mathematical symbols, and programming languages. The scholar can converse with others in English, Spanish, Chinese, or Arabic, or converse with the universe and natural laws through mathematics. Either way, the scholar self-extends. Through shared language, individual experiences become available to other people. From here, civilization is formed: we who can communicate with each other.</p>

</CollapsibleSection>
</CollapsibleSection>
      <CollapsibleSection id="language" number="04" heading={<> Language & power </>}>

        <p>Language is both a vehicle for power and a manifestation of it. As a vehicle, it changes what a person can understand, communicate, and do. As a manifestation, it reveals who is expected to make communication work and who can leave that effort to others. Its consequences can be examined through the same account of pain and relief.</p>
        <CollapsibleSection subsection heading={<>Language, pain, and violence</>}>

        <p>My thoughts on violence run in parallel with my thoughts on language. One way I understand violence on an individual level is as a physical manifestation, and in a sense a communication, of overwhelming internal emotions, often pain. Language offers another means of expression. With similar vocabulary on both the speaking and receiving end, an overwhelming sensation can at least in part be communicated.</p>
        <p>From this perspective, relieving the mental pain of an incommunicable feeling may help interrupt one route to violence. That is why I examine <strong>the pain that is preexisting, the pain that an action causes, and the pain that persists afterwards.</strong> The account must include the people who bear the consequences, rather than ending with the relief experienced by the person acting.</p>
        <p>Violence involves intentional force or power, including threats, that results in or is likely to result in injury, psychological harm, deprivation, or death <a className="reference" href="#ref-krug">(Krug et al., 2002)</a>. Overwhelming feeling is one possible motive. Violence can also be deliberate and instrumental, so understanding distress does not excuse an action or explain every use of force.</p>
        <p>Language has a corresponding duality. It can help relieve pain by making an experience understandable, and it can cause or intensify pain through humiliation, threats, or denial. The ability to communicate gives someone power, but what that power does depends on how it is used.</p>

</CollapsibleSection>
<CollapsibleSection subsection heading={<>Language is power: what you can do</>}>

        <p>Literally, the more languages you understand, the more people you understand. The more you extend in this way, the more powerful you are. Academically, the more vocabulary you learn from different fields, the more people and researchers you can communicate with. The more people you have met and talked with, the more circumstances you can recognize when you encounter someone new.</p>
        <p>Education makes the stakes of this clear. School should teach academic excellence, emotional intelligence, and moral reasoning. Students need to acquire knowledge, communicate beyond a small social bubble, and recognize what is wrong and what is right. As in the discussion of Horace, examples give words substance. Identifying abuse or a healthy friendship gives students distinctions they can apply to their own circumstances. <Link className="text-link" href="/entries/pedagogy">The three tasks of school →</Link></p>
        <p>In politics, events are framed through different words and rhetoric. Consider torture being framed as not torture. Denying that an event caused pain can obstruct the recognition needed to address it. If pain reduces someone’s world, language that prevents its acknowledgment can also obstruct their ability to move beyond it.</p>

</CollapsibleSection>
<CollapsibleSection subsection heading={<>Power is language: what you do not have to say</>}>

        <p>Conversely, you can examine someone’s language for what they do not have to say to see how powerful they are. Some people pursue power as their form of self-extension. That power can appear in the work of explanation they are able to leave to others.</p>
        <p>A broad example is English as a global language. English speakers might expect to go other places and have other people speak English to them. They are not the ones forced to learn another language. Their freedom from that work depends on someone else having done it.</p>
        <p>Consider, too, a country that commits war crimes in another country and a court that conducts the trials in the perpetrator’s language. The question is who has greater command of the vocabulary in which the harm must be described. Who defines the terms, and who has to translate their pain into them?</p>
        <p>On an individual level, some people are expected to be understood when giving commands. If they are not, they can fire the employee, beat their child, or expel the student. Their privilege of expecting to be understood without having to explain more shows their power. Those who do not have to flatter or please others also avoid communicative work that someone with less power may be expected to perform.</p>
        <p>This is why people say communication is key in relationships. A relationship expects equal footing, so you cannot try to hold all the power and expect the other person to guess what you are feeling, get mad when they do not, and say it is their obligation to. Both people must participate in making their experiences understandable.</p>
        <p>I always think it is funny when a child has learned some basic words and still whines for what they want, and the parent says, “Use your words.” It is applicable to more than just these children. Using our words makes an experience available to someone else. Listening allows that communication to become a connection.</p>
        <blockquote>“Look at others’ words to understand their worlds.”<cite>Demi Zheng</cite></blockquote>

</CollapsibleSection>
</CollapsibleSection>
      <CollapsibleSection id="open-questions" number="05" heading={<> Questions to keep asking </>}>

        <p>The method I have been using is to observe an interaction, attempt to explain it with this model, and refine the model if it does not fit. When examining people and institutions, I ask what language they have been given, what consequences they have learned to expect, and what language they put out into the world to achieve an effect.</p>
        <p>The same questions apply to ourselves. What is your own form of self-extension, and what experiences helped give it value? How have you been causing pain to others, knowingly or not? How can your words help address it, and what actions must follow?</p>
        <p>I hope you understand what I am saying, or at least trying to say, so we can engage in a conversation about it, including why it is wrong or how some part of the argument could be improved.</p>
        <p><Link href="/entries" className="text-link">Read the applications of the model →</Link></p>
      </CollapsibleSection>
      <CollapsibleSection id="origins" className="references" heading={<> References </>}>
<References only={['epicurus','horace-1','horace-4','iasp','krug','odoherty','purves','scarry','spielman','association-cortex','teen-brain','blair','drayton']}/><a href="/original-draft.pdf" className="text-link" target="_blank" rel="noreferrer">Download the essay (PDF) ↗</a></CollapsibleSection>
    </article>
  </main>;
}
