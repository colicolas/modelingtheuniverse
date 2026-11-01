import Link from 'next/link';
import { SelfExtension, HedonicCalculus, LearningLoop } from '@/components/model-figures';
import { References } from '@/components/references';
import { PainPleasure } from '@/components/pain-pleasure';

export default function Home() {
  return <main id="main" className="paper">
    <article>
      <header className="paper-header">
        <p className="paper-kicker">An essay on behavior, language, and self-extension</p>
        <h1>Modeling the universe</h1>
        <p className="paper-subtitle">Pain, pleasure, and what we do with them.</p>
        <p className="paper-byline">Demi Zheng <span>·</span> Pain, language & self-extension</p>
      </header>
      <nav className="paper-contents" aria-label="Article contents"><a href="#the-model">01 Pain & pleasure</a><a href="#self-extension">02 Self-extension</a><a href="#learning">03 Learning</a><a href="#language">04 Language & power</a></nav>
      <section id="the-model" className="paper-section opening-section">
        <span className="section-number">01</span>
        <h2>Pain & pleasure</h2>
        <p className="premise-statement">Pleasure begins with freedom from pain.</p>
        <PainPleasure/>
        <div className="paper-prose" id="premise">
          <p>Start with physical and mental pain. Under the Epicurean definition used here, pleasure means freedom from that pain. This follows the Epicurean account of bodily ease and freedom from mental disturbance <a className="reference" href="#ref-epicurus">(Epicurus, n.d.)</a>. It gives us a starting point for examining behavior: what is someone trying to relieve, and what happens when they try?</p>
          <p>Violence and language can both be examined by looking at <strong>the pain that is preexisting, the pain that an action causes, and the pain that persists afterwards.</strong> Immediate relief is only part of the picture. An action can relieve one person’s pain while causing someone else’s, or make things easier now and harder later.</p>
          <p>Language has that same duality. It can cause pain or help relieve it. Being able to communicate an overwhelming feeling gives someone a way to make another person understand what is happening.</p>
        </div>
        <h3>Defining pain</h3>
        <p>Here, <strong>pain</strong> names an experience of bodily hurt or mental distress: injury, fear, grief, humiliation, loneliness, or the frustration of being unable to act. These experiences differ in cause and intensity. The model groups them to ask what burdens a person and what would bring relief.</p>
        <p>This philosophical usage is broader than the clinical definition. The International Association for the Study of Pain defines pain around unpleasant sensory and emotional experience associated with actual or potential tissue damage, or resembling that experience. Pain is personal; the inability to describe it does not make it less real <a className="reference" href="#ref-iasp">(International Association for the Study of Pain [IASP], 2020)</a>.</p>
        <h3>Defining violence</h3>
        <p><strong>Violence</strong> involves the intentional use of force or power, including threats, where injury, psychological harm, deprivation, or death results or is likely. This follows the World Health Organization’s public health framework <a className="reference" href="#ref-krug">(Krug et al., 2002)</a>. Intention concerns the use of force or power; it does not require someone to admit intending every consequence.</p>
        <p>Pain describes an experience; violence describes an action or exercise of power. Illness can cause pain without violence. A threat can be violent before it leaves a visible injury. Disagreement and discomfort alone do not establish violence. Ask what force or coercion is being used, whose agency is restricted, and what harm follows.</p>
        <p>Overwhelming feeling can become a motive for violence, but it is not its only motive. Violence can also be deliberate and instrumental. Understanding someone’s distress does not excuse their actions or transfer responsibility to the person they harm.</p>
        <h3>Hedonic calculus: relief across time</h3>
        <p>Evaluate an action by more than its immediate reward. Consider the intensity and duration of relief, the pain that follows, and who carries each consequence. Epicurus argues that some pleasures should be passed over and some pains accepted for the life that follows <a className="reference" href="#ref-epicurus">(Epicurus, n.d.)</a>. The comparison below makes that tradeoff visible.</p>
        <HedonicCalculus/>
      </section>
      <section id="self-extension" className="paper-section">
        <span className="section-number">02</span><h2>Self-extension</h2>
        <p>Once our basic physical needs are met, we begin to want to extend ourselves beyond our immediate physical surroundings. This model develops a reading of Elaine Scarry’s <cite>The Body in Pain</cite> as <strong>self-extension</strong> <a className="reference" href="#ref-scarry">(Scarry, 1985)</a>.</p>
        <p>What does that mean? The scholar expands their knowledge. The traveler goes somewhere new. The lover experiences the world through another person’s eyes as well as their own. These are different ways of reaching something outside the self.</p>
        <SelfExtension/>
        <blockquote>“Maybe we should be asking them if their basic needs are fulfilled, and then beyond that, their definition of self-extension.”<cite>Demi Zheng</cite></blockquote>
        <p>From your definition of self-extension comes your version of self-worth. Someone who values knowledge may judge themselves by what they understand; someone who values influence may judge themselves by whom they can reach.</p>
        <p>Pain can reverse this movement. Think of being severely ill, lying in bed, confined to your room. The things you usually care about become distant. Your world reduces to your immediate physical surroundings. In this model, relief makes room to reach outward again.</p>
        <p>There is a question here: when does self-extension help relieve pain, and when does the need for more knowledge, recognition, or power become a source of pain itself?</p>
      </section>
      <section id="learning" className="paper-section">
        <span className="section-number">03</span><h2>Learning & making connections</h2>
        <p>How do we learn what to move toward and what to avoid? Experience matters. A person, a place, or a word can come to mean something because of what has happened around it. An action can become familiar because of what happened after it.</p>
        <h3>Classical conditioning: what predicts what</h3>
        <p>A previously neutral cue can acquire meaning when it predicts another event. A sound paired with food can eventually produce a response before the food arrives. That is classical conditioning: learning a relationship between events. <a className="reference" href="#ref-spielman">(Spielman et al., 2020)</a></p>
        <p>Applied to this model, a tone of voice could come to signal an expected argument before anything hurtful has been said. A familiar place could signal comfort. We can respond to what we have learned to expect, as well as to what is happening now.</p>
        <h3>Operant conditioning: what follows an action</h3>
        <p>Operant conditioning concerns behavior and its consequences. Reinforcement increases the likelihood of a behavior; punishment decreases it. Positive and negative refer to adding or removing something. They do not mean good and bad. <a className="reference" href="#ref-spielman">(Spielman et al., 2020)</a></p>
        <div className="learning-example"><p><strong>An example: avoiding a difficult conversation.</strong> Avoidance may remove anxiety for a moment. If that relief makes avoidance more likely next time, it is negative reinforcement. The immediate pain decreases, even though the unresolved problem may persist.</p></div>
        <p>This returns us to the question about pain before and after an action. What gives relief now may become a learned response. Whether it helps over time is a separate question.</p>
        <LearningLoop/>
        <h3>What changes in the brain?</h3>
        <p>Learning involves changes in neural circuits, including changes in the strength of connections between neurons. This capacity for change is called synaptic plasticity. Connections can strengthen or weaken with activity; forming a memory does not simply mean adding a new connection. <a className="reference" href="#ref-purves">(Purves et al., 2001)</a></p>
        <p>Some dopamine signals track the difference between an expected reward and the reward received. These reward prediction errors can contribute to learning. Dopamine is involved in more than pleasure, and this signal is not a measure of someone’s happiness. <a className="reference" href="#ref-odoherty">(O’Doherty, 2011)</a></p>
        <p>Our ways of seeking relief and extending ourselves are partly learned. Past experience helps shape what feels possible, threatening, or worth trying. These mechanisms give the model something to work with; they do not establish that every action reduces to pain and pleasure.</p>
      </section>
      <section id="language" className="paper-section">
        <span className="section-number">04</span><h2>Language & power</h2>
        <p>Language—or, broadly, communication—is both a vehicle for power and a manifestation of it. In this model, language includes speech, writing, art, movement, mathematical symbols, and programming languages. It gives us access to ideas, people, and things outside ourselves.</p>
        <h3>Language is power: what you can do</h3>
        <p>The draft begins this argument with a simple example: the more languages you understand, the more people you can understand. The same principle applies within a language. Learning the vocabulary of a field gives you access to questions and conversations that were previously difficult to enter. Mathematical symbols let the scholar describe relationships in the natural world; code gives an idea a form a computer can execute. Each new vocabulary changes the range of things a person can encounter and act upon.</p>
        <p>That reach grows through listening as well as speaking. Meeting people whose lives differ from your own gives you more circumstances to recognize when you meet someone else. A feeling or decision that once seemed incomprehensible may become easier to understand because you have heard someone describe a similar experience. Self-extension here means gaining a larger world of reference, with more ways to interpret what another person is trying to communicate.</p>
        <p>This power can relieve pain or intensify it. Giving someone words for an overwhelming experience may make recognition possible: another person can finally understand something that had felt private and incommunicable. But words can also humiliate, dismiss, or make an experience harder to name. The question is what a particular use of language makes possible for the people involved, and whose world expands or contracts as a result.</p>
        <p>Teaching is one of the draft’s central examples. School should cultivate academic learning, emotional intelligence, and moral reasoning. A student needs ways to acquire knowledge, communicate with people outside their familiar circle, and reason about conduct. Showing examples of coercion, embezzlement, or a healthy relationship gives a learner distinctions they can carry into another situation. Horace’s account of his father teaching through examples provides a point of connection: words help shape what a person can recognize and how they examine their own actions <a className="reference" href="#ref-horace-4">(Horace, n.d.)</a>.</p>
        <p>The political example follows the same logic in another direction. If a description obscures the pain an action caused, it can obstruct recognition and repair. The draft asks us to consider the effect of redescribing torture so that it no longer appears to count as torture. The point is to examine how a choice of words changes what listeners are invited to acknowledge, who can ask for a response, and whether the underlying harm remains visible.</p>
        <h3>Power is language: what you do not have to say</h3>
        <p>The reverse claim looks at the work a person can leave to someone else. Power appears in the explanation, translation, reassurance, or flattery that someone is not required to provide. If one person can assume they will be understood while another must continually adjust their language, the burden of making communication work is unequal. Looking at that burden can reveal authority that is less visible than a direct command.</p>
        <p>The draft uses English as an example: an English speaker may travel expecting other people to speak their language. An encounter can seem effortless to that traveler because someone else has learned the vocabulary and is doing the translating. The useful question is who gets to treat their own way of speaking as the default, and whose effort makes that expectation possible.</p>
        <p>Institutions raise a similar question. In the draft’s example of a court operating in the language of the party accused of causing harm, one side may have greater ease with the vocabulary in which events must be described. As a thought experiment, it asks us to look at who defines the terms, who must translate their experience into them, and whose account is easiest for the process to hear. The language of a proceeding is part of the conditions under which recognition is sought.</p>
        <p>On an individual level, consider someone who can give an instruction and punish a failure to comply. An employer, parent, or teacher may be able to end the exchange through their authority. The person receiving the instruction has more reason to anticipate, clarify, and avoid misunderstanding. What matters is how that authority is exercised: whether questions receive explanations, and whether the person with less power has room to say that something is unclear or unfair.</p>
        <p>The draft also notices the smaller work of pleasing others. Who needs to soften a disagreement, offer reassurance, or flatter before making a request? Who can speak briefly and expect cooperation? No single short sentence establishes a power imbalance. Across an interaction, though, the repeated expectation that one person will do this work can show whose comfort and understanding take priority.</p>
        <p>These two directions meet in relationships. Language gives us a means of reaching another person, while power shapes who is expected to make that reaching possible. Equal footing requires both people to help make their feelings understandable and to listen when the other person speaks. This is why the draft returns to the ordinary instruction “use your words”: making an experience shareable opens a possibility for connection, and listening determines whether that possibility has somewhere to go.</p>
        <blockquote>“Look at others’ words to understand their worlds.”<cite>Demi Zheng</cite></blockquote>
      </section>
      <section id="open-questions" className="paper-section">
        <span className="section-number">05</span><h2>Questions to keep asking</h2>
        <p>What is your own form of self-extension? What have you learned to expect from other people? How have you been causing pain, knowingly or not? What can you change with your words—and what requires an action?</p>
        <p>The method is to observe an interaction, attempt to explain it with the model, and refine the model if it does not fit. That includes asking where it falls short.</p>
        <p><Link href="/entries" className="text-link">Read the applications of the model →</Link></p>
      </section>
      <section id="origins" className="paper-section references"><h2>References</h2><References/><a href="/original-draft.pdf" className="text-link" target="_blank" rel="noreferrer">Founding essay (PDF) ↗</a></section>
    </article>
  </main>;
}
