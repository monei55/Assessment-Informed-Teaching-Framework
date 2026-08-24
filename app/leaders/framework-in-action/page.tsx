import Link from "next/link";
import { Header } from "@/components/Header";
import { LeaderLensNav } from "@/components/LeaderLensNav";

const leadershipActions = [
  {
    title: "Align it",
    description:
      "Establish shared expectations, language and processes so curriculum, assessment, teaching and evidence work as one connected system.",
  },
  {
    title: "Enable it",
    description:
      "Provide the time, structures, professional learning, resources and leadership support needed for strong practice to happen consistently.",
  },
  {
    title: "Monitor impact",
    description:
      "Use implementation and student learning evidence to determine whether the system is strengthening teaching and improving outcomes.",
  },
];

export default function LeaderFrameworkInActionPage() {
  return (
    <>
      <Header />

      <div className="teacher-lens-layout leader-lens-layout">
        <LeaderLensNav />

        <main className="teacher-lens-content">
          <section className="pathway-hero leader-framework-hero">
            <div className="container">
              <p className="eyebrow">Principal / School Leader Lens</p>

              <h1>Create the conditions for strong practice to happen consistently.</h1>

              <p className="pathway-lead">
                Use the same connected framework to align expectations, enable
                capability and monitor whether the system is improving teaching and
                learning across the school.
              </p>

              <div className="pathway-principle">
                <strong>The shift in lens</strong>
                <p>
                  The framework does not change. The professional question becomes:
                  “How do I create the conditions for this to happen well across the
                  school?”
                </p>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="why-it-matters">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Why it Matters</span>
                <h2>School-wide coherence reduces variation in practice.</h2>
                <p>
                  Strong practice should not depend on individual expertise alone.
                  Leaders create the conditions for teachers and teams to work from
                  shared expectations, shared language and shared evidence.
                </p>
              </div>

              <div className="leader-action-grid">
                {leadershipActions.map((action) => (
                  <article className="leader-action-card" key={action.title}>
                    <span>{action.title}</span>
                    <p>{action.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="framework-example-section section-soft" id="understand">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Understand</span>
                <h2>Build shared clarity before expecting consistency.</h2>
                <p>
                  The leadership task is to ensure teachers have a common
                  understanding of curriculum intent, cognitive demand, expected
                  standards and progression of quality.
                </p>
              </div>

              <div className="leader-system-grid">
                <article>
                  <span>What should be in place?</span>
                  <h3>Shared curriculum interpretation</h3>
                  <p>
                    Teams regularly unpack curriculum expectations and use common
                    language when discussing knowledge, skills and cognitive demand.
                  </p>
                </article>

                <article>
                  <span>What evidence would tell me?</span>
                  <h3>Consistency across planning and assessment</h3>
                  <p>
                    Planning documents, assessment tasks and teacher explanations
                    show common understanding rather than isolated interpretation.
                  </p>
                </article>

                <article>
                  <span>What might I do next?</span>
                  <h3>Strengthen the enabling conditions</h3>
                  <p>
                    Provide collaborative planning time, professional learning,
                    coaching or exemplars where shared understanding is weak.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="professional-walkthrough">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Professional Walkthrough</span>
                <h2>Use the framework as a school-level diagnostic.</h2>
                <p>
                  Walk through each part of the system and ask what should be in
                  place, what evidence would show it is working and what leadership
                  response is needed when it is not.
                </p>
              </div>

              <div className="leader-walkthrough-grid">
                <article>
                  <span>01</span>
                  <h3>Curriculum clarity</h3>
                  <p>Do teachers share a clear understanding of what students are expected to learn?</p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Assessment alignment</h3>
                  <p>Do assessment tasks preserve curriculum intent and cognitive demand?</p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Quality expectations</h3>
                  <p>Can teachers describe what distinguishes expected, stronger and more sophisticated evidence?</p>
                </article>
                <article>
                  <span>04</span>
                  <h3>Visible learning</h3>
                  <p>Can students articulate what they are learning, what success looks like and how to improve?</p>
                </article>
                <article>
                  <span>05</span>
                  <h3>Teaching response</h3>
                  <p>Are teaching decisions informed by curriculum and evidence rather than activity preference?</p>
                </article>
                <article>
                  <span>06</span>
                  <h3>Impact</h3>
                  <p>Does student evidence show that agreed practices are strengthening learning?</p>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section section-soft" id="show-evidence">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Show me the Evidence</span>
                <h2>Look for evidence of the system, not just isolated examples.</h2>
                <p>
                  Leaders need enough visibility to know whether agreed expectations
                  are understood and enacted consistently across teams and classrooms.
                </p>
              </div>

              <div className="leader-evidence-grid">
                <article>
                  <span>Planning evidence</span>
                  <h3>What are teachers planning for?</h3>
                  <p>Look for curriculum alignment, cognitive demand and clear progression.</p>
                </article>
                <article>
                  <span>Classroom evidence</span>
                  <h3>What are students experiencing?</h3>
                  <p>Look for visible learning, explicit teaching and opportunities to practise the intended learning.</p>
                </article>
                <article>
                  <span>Student evidence</span>
                  <h3>What are students demonstrating?</h3>
                  <p>Look for evidence that students can meet the intended standard and show increasing quality.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="show-connection">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Show me the Connection</span>
                <h2>Trace school-wide practice back to the intended learning.</h2>
                <p>
                  When practice is inconsistent, use the framework to identify where
                  the connection is breaking down rather than treating the symptom.
                </p>
              </div>

              <div className="leader-connection-flow">
                <span>Curriculum intent</span>
                <span>→</span>
                <span>Assessment design</span>
                <span>→</span>
                <span>Marking guide</span>
                <span>→</span>
                <span>Teaching decisions</span>
                <span>→</span>
                <span>Student evidence</span>
              </div>
            </div>
          </section>

          <section className="framework-example-section section-soft" id="design-the-question">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Design the Assessment Opportunity</span>
                <h2>Set expectations for assessment quality across the school.</h2>
                <p>
                  The leadership role is not to write every assessment question. It
                  is to ensure teachers understand how to design coherent
                  opportunities that preserve curriculum demand and allow students
                  to demonstrate progression.
                </p>
              </div>

              <div className="leader-system-grid">
                <article>
                  <span>Align it</span>
                  <h3>Establish the expectation</h3>
                  <p>
                    Assessment should preserve the intended cognitive demand and
                    avoid unnecessary repetition.
                  </p>
                </article>
                <article>
                  <span>Enable it</span>
                  <h3>Build capability</h3>
                  <p>
                    Provide exemplars, collaborative planning and moderation so
                    teachers can design and review assessment together.
                  </p>
                </article>
                <article>
                  <span>Monitor impact</span>
                  <h3>Check the evidence produced</h3>
                  <p>
                    Student responses should provide sufficient evidence for
                    teachers to make defensible on-balance judgements.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="marking-guide">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Marking Guide</span>
                <h2>Build consistent expectations of quality.</h2>
                <p>
                  Leaders ensure teachers have the structures and professional
                  dialogue needed to interpret progression consistently.
                </p>
              </div>

              <div className="leader-progression-grid">
                <article className="progression-c">
                  <span>C</span>
                  <h3>Expected standard</h3>
                  <p>Do teachers share clarity about the minimum evidence required?</p>
                </article>
                <article className="progression-b">
                  <span>B</span>
                  <h3>Stronger evidence</h3>
                  <p>Do teams recognise increasing precision, control and reasoning?</p>
                </article>
                <article className="progression-a">
                  <span>A</span>
                  <h3>More sophisticated evidence</h3>
                  <p>Do teams recognise depth, independence and sophistication without adding extra tasks?</p>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section section-soft" id="visible-learning">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Visible Learning</span>
                <h2>Make school-wide expectations visible and usable.</h2>
                <p>
                  Leaders create shared expectations for how learning, quality and
                  progression are made visible to students without enforcing a
                  one-size-fits-all display.
                </p>
              </div>

              <div className="leader-visible-grid">
                <article id="learning-wall">
                  <span>Learning Wall</span>
                  <h3>Can students see what they are learning?</h3>
                  <p>
                    Look for curriculum-linked knowledge, vocabulary, skills and
                    concepts that are actively used during teaching.
                  </p>
                </article>

                <article id="bump-it-up-wall">
                  <span>Bump-it-Up Wall</span>
                  <h3>Can students see how quality improves?</h3>
                  <p>
                    Look for authentic progression that reflects the marking guide
                    and helps students understand what stronger evidence looks like.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="teaching-decisions">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Teaching Decisions</span>
                <h2>Create the conditions for deliberate, responsive teaching.</h2>
                <p>
                  Leaders enable strong teaching decisions by ensuring curriculum,
                  evidence and agreed approaches are connected through planning,
                  coaching and professional learning.
                </p>
              </div>

              <div className="leader-decision-grid">
                <article>
                  <span>Clarity</span>
                  <h3>Do teachers know what must be taught?</h3>
                </article>
                <article>
                  <span>Capability</span>
                  <h3>Do teachers know how to teach it well?</h3>
                </article>
                <article>
                  <span>Support</span>
                  <h3>Are coaching, modelling and resources available?</h3>
                </article>
                <article>
                  <span>Response</span>
                  <h3>Can teachers adapt using evidence without lowering the standard?</h3>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section section-soft" id="evidence-of-learning">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Evidence of Learning</span>
                <h2>Use evidence to understand the impact of the system.</h2>
                <p>
                  Student evidence should inform more than individual teaching
                  decisions. At school level, it helps leaders identify patterns,
                  strengths and areas where capability or coherence need attention.
                </p>
              </div>

              <div className="leader-evidence-grid">
                <article>
                  <span>Student level</span>
                  <h3>What are students demonstrating?</h3>
                </article>
                <article>
                  <span>Class level</span>
                  <h3>What patterns are emerging within classrooms?</h3>
                </article>
                <article>
                  <span>School level</span>
                  <h3>What does the evidence suggest about the effectiveness of our agreed practices?</h3>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="trace-judgement">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Trace the Judgement</span>
                <h2>Expect professional judgements to be explainable and defensible.</h2>
                <p>
                  Leaders create the structures that allow judgements to be traced
                  back through student evidence, marking guides, assessment design
                  and curriculum intent.
                </p>
              </div>

              <div className="leader-connection-flow">
                <span>Student evidence</span>
                <span>→</span>
                <span>Marking descriptor</span>
                <span>→</span>
                <span>Assessment opportunity</span>
                <span>→</span>
                <span>Curriculum intent</span>
              </div>
            </div>
          </section>

          <section className="framework-example-section section-soft" id="moderation">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Moderation</span>
                <h2>Build structures that strengthen collective confidence.</h2>
                <p>
                  Moderation becomes a capability-building structure when it is
                  regular, evidence-based and connected to shared understanding of
                  curriculum and quality.
                </p>
              </div>

              <div className="leader-moderation-grid">
                <article>
                  <span>Schedule it</span>
                  <h3>Is moderation built into the work?</h3>
                </article>
                <article>
                  <span>Anchor it</span>
                  <h3>Is dialogue grounded in evidence and descriptors?</h3>
                </article>
                <article>
                  <span>Use it</span>
                  <h3>Do disagreements inform professional learning?</h3>
                </article>
                <article>
                  <span>Monitor it</span>
                  <h3>Is consistency strengthening over time?</h3>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="connect">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Connect</span>
                <h2>Use the framework to diagnose the system before choosing the response.</h2>
                <p>
                  When student outcomes or classroom practice are not where they
                  need to be, trace the issue through the connected cogs and
                  identify the leadership lever most likely to make a difference.
                </p>
              </div>

              <div className="leader-connect-grid">
                <article>
                  <span>Visible issue</span>
                  <h3>Students are not producing sufficiently strong explanations.</h3>
                </article>
                <article>
                  <span>System questions</span>
                  <h3>
                    Was the curriculum demand clear? Did the assessment require it?
                    Was quality visible? Was the thinking explicitly taught?
                  </h3>
                </article>
                <article>
                  <span>Leadership response</span>
                  <h3>
                    Align expectations, enable capability or adjust the structure at
                    the point where the system is breaking down.
                  </h3>
                </article>
              </div>

              <div className="leader-final-actions">
                {leadershipActions.map((action) => (
                  <div key={action.title}>
                    <strong>{action.title}</strong>
                    <p>{action.description}</p>
                  </div>
                ))}
              </div>

              <div className="leader-back-link">
                <Link className="button button-secondary" href="/leaders">
                  ← Back to Principal / School Leader overview
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}