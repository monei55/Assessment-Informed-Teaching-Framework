import Link from "next/link";
import { Header } from "@/components/Header";
import { CoachLensNav } from "@/components/CoachLensNav";

const capabilityActions = [
  {
    label: "Model it",
    description:
      "Make the professional reasoning visible. Explain not only what decision is being made, but why.",
  },
  {
    label: "Coach it",
    description:
      "Use questions, evidence and dialogue to help teachers strengthen their own reasoning.",
  },
  {
    label: "Build capability",
    description:
      "Create routines and structures that help teachers use the reasoning independently next time.",
  },
];

export default function CoachFrameworkInActionPage() {
  return (
    <>
      <Header />

      <div className="teacher-lens-layout coach-lens-layout">
        <CoachLensNav />

        <main className="teacher-lens-content">
          <section className="pathway-hero coach-framework-hero">
            <div className="container">
              <p className="eyebrow">Instructional Coach / Middle Leader Lens</p>

              <h1>Strengthen the professional reasoning of others.</h1>

              <p className="pathway-lead">
                Use the same connected framework to model thinking, facilitate
                professional dialogue and build teacher capability over time.
              </p>

              <div className="pathway-principle">
                <strong>The shift in lens</strong>

                <p>
                  The framework does not change. The professional question changes
                  from “What do I need to do?” to “How do I help others understand,
                  apply and strengthen this work?”
                </p>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="why-it-matters">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Why it Matters</span>
                <h2>Capability grows when the thinking is made visible.</h2>
                <p>
                  Middle leadership is not simply checking whether a planning
                  document is complete. It is helping teachers understand the
                  reasoning that connects curriculum, assessment, teaching and
                  evidence so they can make stronger decisions independently.
                </p>
              </div>

              <div className="coach-capability-grid">
                {capabilityActions.map((action) => (
                  <article className="coach-capability-card" key={action.label}>
                    <span>{action.label}</span>
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
                <h2>Build shared clarity before trying to improve practice.</h2>
                <p>
                  Begin with the same curriculum sources teachers use. The role of
                  the coach is to help the team notice the important knowledge,
                  cognitive demand, skills, terminology and quality expectations
                  rather than providing a completed interpretation for them.
                </p>
              </div>

              <div className="coach-question-grid">
                <article>
                  <span>01</span>
                  <h3>What are students expected to know and understand?</h3>
                  <p>
                    Keep the conversation anchored in the curriculum rather than
                    preferred activities or resources.
                  </p>
                </article>

                <article>
                  <span>02</span>
                  <h3>What are students expected to do?</h3>
                  <p>
                    Identify the cognitive verbs and discuss what those actions
                    actually require from students.
                  </p>
                </article>

                <article>
                  <span>03</span>
                  <h3>What does the expected standard look like?</h3>
                  <p>
                    Build shared understanding of the C standard before discussing
                    stronger or more sophisticated evidence.
                  </p>
                </article>

                <article>
                  <span>04</span>
                  <h3>Where might interpretation differ?</h3>
                  <p>
                    Surface assumptions early so teams can establish shared
                    language and a common reference point.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="professional-walkthrough">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">
                  Professional Walkthrough
                </span>
                <h2>Facilitate the reasoning rather than supplying the answer.</h2>
                <p>
                  Use the Year 3 Science heat-transfer example to see how a coach
                  can move a team through the framework while keeping teachers
                  responsible for the thinking.
                </p>
              </div>

              <div className="coach-walkthrough-grid">
                <article>
                  <span>1</span>
                  <h3>Start with the Achievement Standard</h3>
                  <p>
                    Ask teachers to read the standard as a whole before highlighting
                    individual words.
                  </p>
                  <strong>Coach prompt</strong>
                  <p>“What would successful learning look like by the end?”</p>
                </article>

                <article>
                  <span>2</span>
                  <h3>Surface the cognitive demand</h3>
                  <p>
                    Ask teachers to identify the verbs and explain what each verb
                    would require students to actually do.
                  </p>
                  <strong>Coach prompt</strong>
                  <p>“What would we have to see in student work to know they can explain?”</p>
                </article>

                <article>
                  <span>3</span>
                  <h3>Clarify the essential learning</h3>
                  <p>
                    Separate knowledge, skills, concepts and terminology before
                    discussing teaching activities.
                  </p>
                  <strong>Coach prompt</strong>
                  <p>“What must students understand before they can do this successfully?”</p>
                </article>

                <article>
                  <span>4</span>
                  <h3>Test the assessment opportunity</h3>
                  <p>
                    Check whether the task genuinely allows students to demonstrate
                    the intended learning and cognitive demand.
                  </p>
                  <strong>Coach prompt</strong>
                  <p>“Where, exactly, can the student show us this?”</p>
                </article>

                <article>
                  <span>5</span>
                  <h3>Clarify progression</h3>
                  <p>
                    Compare C, B and A evidence without turning stronger standards
                    into extra tasks.
                  </p>
                  <strong>Coach prompt</strong>
                  <p>“What changes in the quality of the evidence?”</p>
                </article>

                <article>
                  <span>6</span>
                  <h3>Return to teaching</h3>
                  <p>
                    Use the analysis to identify what must be explicitly taught,
                    modelled, practised and revisited.
                  </p>
                  <strong>Coach prompt</strong>
                  <p>“What do students need from us before they can do this independently?”</p>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section section-soft" id="show-evidence">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">
                  Show me the Evidence
                </span>
                <h2>Use evidence to focus the coaching conversation.</h2>
                <p>
                  Rather than beginning with an opinion about a lesson or task,
                  anchor the conversation in something teachers can inspect
                  together: curriculum wording, assessment questions, marking
                  descriptors or student work.
                </p>
              </div>

              <div className="coach-evidence-panel">
                <span className="evidence-source-label">
                  Year 3 Science — Achievement Standard
                </span>

                <p className="coach-evidence-statement">
                  Students <mark>identify</mark> sources of heat energy and examples
                  of heat transfer, <mark>explain</mark> changes in temperature,
                  <mark>describe</mark> how data is used to develop explanations,
                  and <mark>plan and conduct</mark> safe investigations.
                </p>

                <div className="coach-dialogue-callout">
                  <strong>Facilitation move</strong>
                  <p>
                    Ask each teacher to identify one piece of curriculum evidence
                    and explain what it means for assessment or teaching. This makes
                    interpretation visible and allows differences to be discussed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="show-connection">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">
                  Show me the Connection
                </span>
                <h2>Help teachers trace curriculum intent into the assessment.</h2>
                <p>
                  The coaching conversation should make alignment visible rather
                  than simply asking whether the assessment is “good”.
                </p>
              </div>

              <div className="coach-connection-grid">
                <article className="learning">
                  <span>Curriculum intent</span>
                  <h3>Explain changes in temperature.</h3>
                </article>

                <article className="assessment">
                  <span>Assessment opportunity</span>
                  <h3>
                    Use evidence from the investigation to explain which material
                    is the best insulator.
                  </h3>
                </article>

                <article className="pedagogy">
                  <span>Coaching question</span>
                  <h3>
                    “Does this question preserve the level of thinking in the
                    curriculum, or has the demand been reduced?”
                  </h3>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section section-soft" id="design-the-question">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">
                  Design the Assessment Opportunity
                </span>
                <h2>Coach for one coherent opportunity across the progression.</h2>
                <p>
                  Help teachers move away from writing separate “C, B and A”
                  questions. Instead, design a response structure that allows the
                  same concept to be demonstrated with increasing depth.
                </p>
              </div>

              <div className="coach-design-grid">
                <article>
                  <span>Interpreting results</span>
                  <h3>Identify → Describe → Explain</h3>
                  <p>
                    One investigation question can invite students to identify the
                    best insulator, describe the pattern in the data and explain the
                    result using evidence and heat-transfer understanding.
                  </p>
                  <strong>Coach prompt</strong>
                  <p>
                    “Can we remove repetition and create one connected opportunity
                    for students to show how far their understanding goes?”
                  </p>
                </article>

                <article>
                  <span>Planning a fair investigation</span>
                  <h3>Plan → Refine → Control</h3>
                  <p>
                    The verb may stay the same while quality increases through
                    greater precision, safety, independence and control of variables.
                  </p>
                  <strong>Coach prompt</strong>
                  <p>
                    “What would stronger planning look like without adding another
                    planning question?”
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="marking-guide">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Marking Guide</span>
                <h2>Build a shared language for quality.</h2>
                <p>
                  The middle leader helps the team move beyond grade letters and
                  identify the discernible differences in evidence across C, B and A.
                </p>
              </div>

              <div className="coach-progression-grid">
                <article className="progression-c">
                  <span>C</span>
                  <h3>Expected standard</h3>
                  <p>What evidence must be secure for the student to meet the standard?</p>
                </article>

                <article className="progression-b">
                  <span>B</span>
                  <h3>Stronger evidence</h3>
                  <p>Where do precision, detail, control or reasoning become stronger?</p>
                </article>

                <article className="progression-a">
                  <span>A</span>
                  <h3>More sophisticated evidence</h3>
                  <p>What additional depth, independence or sophistication is evident?</p>
                </article>
              </div>

              <div className="coach-dialogue-callout">
                <strong>Facilitation move</strong>
                <p>
                  Ask the team to complete the sentence: “The learning stays the
                  same; what changes is…” If responses focus on more work or extra
                  activities, return to the descriptors and evidence.
                </p>
              </div>
            </div>
          </section>

          <section className="framework-example-section section-soft" id="visible-learning">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Visible Learning</span>
                <h2>Support teachers to make quality usable for students.</h2>
                <p>
                  The coach helps teachers translate formal curriculum and marking
                  language into visible learning structures without losing the
                  intended demand.
                </p>
              </div>

              <div className="coach-visible-grid">
                <article id="learning-wall">
                  <span>Learning Wall</span>
                  <h3>Is the intended learning actually visible?</h3>
                  <p>
                    Check that knowledge, vocabulary, skills, concepts and the
                    learning journey are visible and revisited during teaching.
                  </p>
                  <strong>Coach prompt</strong>
                  <p>“Could a student tell us what they are learning and why it matters?”</p>
                </article>

                <article id="bump-it-up-wall">
                  <span>Bump-it-Up Wall</span>
                  <h3>Can students see how quality improves?</h3>
                  <p>
                    Check that the progression reflects authentic differences in
                    quality rather than generic statements such as “add more detail”.
                  </p>
                  <strong>Coach prompt</strong>
                  <p>“What exactly changes from the expected standard to stronger evidence?”</p>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="teaching-decisions">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Teaching Decisions</span>
                <h2>Use the analysis to strengthen teaching decisions.</h2>
                <p>
                  Coaching should move from clarity into action. Help teachers
                  identify what students need to know, what requires explicit
                  instruction and where modelling, practice and feedback are needed.
                </p>
              </div>

              <div className="coach-decision-grid">
                <article>
                  <span>Knowledge</span>
                  <h3>What must be explicitly built?</h3>
                  <p>Heat energy, heat transfer, temperature change and insulation.</p>
                </article>

                <article>
                  <span>Skills</span>
                  <h3>What must be explicitly taught?</h3>
                  <p>Fair testing, measuring, recording, representing and explaining.</p>
                </article>

                <article>
                  <span>Models</span>
                  <h3>What needs to be made visible?</h3>
                  <p>Worked examples, modelled thinking and comparisons of response quality.</p>
                </article>

                <article>
                  <span>Practice</span>
                  <h3>Where can students improve before assessment?</h3>
                  <p>Short cycles of rehearsal, feedback, refinement and independent application.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section section-soft" id="evidence-of-learning">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Evidence of Learning</span>
                <h2>Help teachers interpret evidence before deciding what to do next.</h2>
                <p>
                  The role of the coach is not to make the judgement for the teacher.
                  It is to strengthen how evidence is located, interpreted and used
                  to inform the next teaching decision.
                </p>
              </div>

              <div className="coach-evidence-questions">
                <article>
                  <span>01</span>
                  <h3>What has the student demonstrated?</h3>
                </article>
                <article>
                  <span>02</span>
                  <h3>Which part of the standard does this connect to?</h3>
                </article>
                <article>
                  <span>03</span>
                  <h3>What is secure, emerging or not yet evident?</h3>
                </article>
                <article>
                  <span>04</span>
                  <h3>What teaching response does this evidence suggest?</h3>
                </article>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="trace-judgement">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Trace the Judgement</span>
                <h2>Make professional judgement explainable and defensible.</h2>
                <p>
                  A strong coaching conversation can trace a judgement backwards
                  through the evidence, marking guide, assessment opportunity and
                  curriculum intent.
                </p>
              </div>

              <div className="coach-trace-flow">
                <span>Student evidence</span>
                <span>→</span>
                <span>Marking descriptor</span>
                <span>→</span>
                <span>Assessment opportunity</span>
                <span>→</span>
                <span>Curriculum intent</span>
              </div>

              <div className="coach-dialogue-callout">
                <strong>Coach prompt</strong>
                <p>“Show me the evidence that led you to that judgement.”</p>
              </div>
            </div>
          </section>

          <section className="framework-example-section section-soft" id="moderation">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Moderation</span>
                <h2>Facilitate shared understanding, not grade negotiation.</h2>
                <p>
                  Use moderation to test the team’s shared interpretation of quality
                  and identify where further capability building is needed.
                </p>
              </div>

              <div className="coach-moderation-grid">
                <article>
                  <span>Locate</span>
                  <h3>What has the student demonstrated?</h3>
                </article>
                <article>
                  <span>Connect</span>
                  <h3>Which descriptor does the evidence demonstrate?</h3>
                </article>
                <article>
                  <span>Test</span>
                  <h3>Is the evidence sufficient and consistent?</h3>
                </article>
                <article>
                  <span>Calibrate</span>
                  <h3>Can the team justify the same on-balance judgement?</h3>
                </article>
              </div>

              <div className="coach-dialogue-callout">
                <strong>Middle leadership insight</strong>
                <p>
                  Disagreement is useful evidence. It may reveal inconsistent
                  curriculum interpretation, unclear assessment design, different
                  expectations of quality or a need for further professional learning.
                </p>
              </div>
            </div>
          </section>

          <section className="framework-example-section" id="connect">
            <div className="container">
              <div className="framework-example-heading">
                <span className="framework-example-eyebrow">Connect</span>
                <h2>Use the framework to diagnose where support is needed.</h2>
                <p>
                  When a problem appears in one area, resist treating it in
                  isolation. Trace it through the connected cogs and identify the
                  professional learning, coaching or collaborative structure that
                  will have the greatest impact.
                </p>
              </div>

              <div className="coach-connect-grid">
                <article>
                  <span>Teacher says</span>
                  <h3>“Students are not giving detailed enough answers.”</h3>
                </article>
                <article>
                  <span>Coach investigates</span>
                  <h3>
                    Was the cognitive demand clear? Did the assessment provide the
                    opportunity? Was quality made visible? Was the thinking explicitly taught?
                  </h3>
                </article>
                <article>
                  <span>Capability response</span>
                  <h3>
                    Model, coach, co-plan or moderate at the point where the system
                    is actually breaking down.
                  </h3>
                </article>
              </div>

              <div className="coach-final-actions">
                {capabilityActions.map((action) => (
                  <div key={action.label}>
                    <strong>{action.label}</strong>
                    <p>{action.description}</p>
                  </div>
                ))}
              </div>

              <div className="coach-back-link">
                <Link className="button button-secondary" href="/coaches">
                  ← Back to Coach / Middle Leader overview
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}