import { Header } from "@/components/Header";
import { PageHero } from "@/components/layout/PageHero";
import { BigIdea } from "@/components/layout/BigIdea";
import { WhyItMatters } from "@/components/layout/WhyItMatters";
import { ProfessionalReasoning } from "@/components/layout/ProfessionalReasoning";
import { ProfessionalWalkthrough } from "@/components/layout/ProfessionalWalkthrough";
import { CogConnections } from "@/components/layout/CogConnections";
import { CogsInAction } from "@/components/layout/CogsInAction";
import { EvidenceReveal } from "@/components/layout/EvidenceReveal";
import { EvidenceMap } from "@/components/layout/EvidenceMap";
import { MultiAgeVisibleLearning } from "@/components/layout/MultiAgeVisibleLearning";

export default function CurriculumIntentPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="Professional Reasoning"
          title="Curriculum Intent"
          lead="Everything begins with understanding what students are expected to know, understand and be able to do."
          insight="You cannot design effective teaching until you understand what successful learning actually requires."
        />

        <BigIdea>
          <p>
            Curriculum Intent is more than reading the achievement standard.
          </p>

          <p>
            It is the professional reasoning process of identifying the
            essential knowledge, understanding and skills students are expected
            to develop before decisions about assessment or teaching are made.
          </p>
        </BigIdea>

        <WhyItMatters
          clearTitle="When Curriculum Intent is Clear"
          unclearTitle="When Curriculum Intent is Unclear"
          clearItems={[
            "Assessment aligns with intended learning.",
            "Learning intentions become purposeful.",
            "Success criteria clearly describe quality.",
            "Learning walls reflect the intended learning.",
            "Teaching focuses on what matters most.",
          ]}
          unclearItems={[
            "Activities become the focus.",
            "Assessment loses alignment.",
            "Students are unsure what success looks like.",
            "Moderation becomes inconsistent.",
            "Learning gaps remain hidden.",
          ]}
        />

        <ProfessionalReasoning
          title="How do I unpack Curriculum Intent?"
          intro="Start with the curriculum, not the activities. Work through the intended learning before deciding how it will be taught."
          steps={[
            {
              number: "01",
              title: "Read the Achievement Standard",
              description:
                "Read it as a complete statement first. Focus on what successful learning is expected to look like.",
            },
            {
              number: "02",
              title: "Identify the Cognitive Verbs",
              description:
                "Notice the actions students must demonstrate, such as explain, compare, analyse, justify or create.",
            },
            {
              number: "03",
              title: "Identify the Knowledge",
              description:
                "Clarify the concepts, facts and subject-specific knowledge students need.",
            },
            {
              number: "04",
              title: "Identify the Skills",
              description:
                "Determine what students must be able to do with their knowledge.",
            },
            {
              number: "05",
              title: "Identify the Understanding",
              description:
                "Consider the deeper ideas and connections students need to understand, not simply recall.",
            },
            {
              number: "06",
              title: "Clarify Successful Learning",
              description:
                "Bring the pieces together and describe what students will need to demonstrate successfully.",
            },
          ]}
        />

        <ProfessionalWalkthrough
          title="From curriculum intent to clear learning"
          context="This walkthrough shows how professional reasoning begins before lesson planning. The purpose is not to copy the example, but to see how the thinking connects."
          steps={[
            {
              title: "Start with the Achievement Standard",
              description:
                "Read the standard as a whole and identify what successful learning is expected to look like by the end of the unit.",
            },
            {
              title: "Identify the Cognitive Demand",
              description:
                "Locate the verbs and consider what students must actually do. A student who is expected to explain needs different learning opportunities from a student who is only expected to identify.",
            },
            {
              title: "Clarify the Essential Learning",
              description:
                "Separate the knowledge, skills and understanding students will need in order to meet the expected standard.",
            },
            {
              title: "Connect the Assessment",
              description:
                "Check that the assessment genuinely gives students an opportunity to demonstrate the intended learning and cognitive demand.",
            },
            {
              title: "Clarify What Quality Looks Like",
              description:
                "Use the marking guide and assessment expectations to understand what successful performance looks like and how quality progresses.",
            },
            {
              title: "Design the Learning",
              description:
                "Only now begin deciding how this particular cohort will be taught, supported and challenged to reach success.",
            },
          ]}
        />

  <EvidenceReveal
  eyebrow="Show me the evidence"
  title="Unpacking the Curriculum Intent"
  sourceLabel="Year 3 Science — Achievement Standard / Marking Guide"
  imageSrc={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/examples/year3-science/achievement-standard.png`}
  imageAlt="Extract from the Year 3 Science marking guide showing the curriculum expectations used to unpack the curriculum intent."
  segments={[
    { text: "Students " },
    { text: "identify", category: "cognitive" },
    { text: " sources of " },
    { text: "heat energy", category: "knowledge" },
    { text: " and examples of " },
    { text: "heat transfer", category: "terminology" },
    { text: ". They " },
    { text: "explain", category: "cognitive" },
    { text: " changes in " },
    { text: "temperature", category: "knowledge" },
    { text: ". They " },
    { text: "describe", category: "cognitive" },
    { text: " how people use " },
    { text: "data", category: "terminology" },
    {
      text: " from changes in temperature to develop explanations. Students ",
    },
    { text: "plan and conduct", category: "cognitive" },
    { text: " safe investigations", category: "skills" },
    { text: " to " },
    { text: "identify", category: "cognitive" },
    { text: " patterns and relationships", category: "skills" },
    { text: " and " },
    { text: "make conclusions", category: "cognitive" },
    { text: "." },
  ]}
  filters={[
  {
    label: "Cognitive demand",
    value: "cognitive",
    className: "learning",
  },
  {
    label: "Knowledge",
    value: "knowledge",
    className: "assessment",
  },
  {
    label: "Skills",
    value: "skills",
    className: "pedagogy",
  },
  {
    label: "Key terminology",
    value: "terminology",
    className: "impact",
  },
]}
  notices={[
    {
      category: "cognitive",
      text: "The cognitive demand goes beyond identifying. Students are expected to explain, describe, plan, identify relationships and make conclusions.",
      reasoning:
        "Teaching must deliberately build towards the full cognitive demand. Students need opportunities to move beyond recalling or identifying information and practise explaining, describing, planning investigations and drawing conclusions.",
    },
    {
      category: "knowledge",
      text: "Students need knowledge of heat energy, heat transfer and temperature change.",
      reasoning:
        "Before students can explain what is happening in the investigation, they need secure conceptual knowledge of heat energy, heat transfer and temperature change. This knowledge needs to be explicitly developed rather than assumed.",
    },
    {
      category: "skills",
      text: "Science inquiry skills are part of the intended learning, not simply activities used to teach the content.",
      reasoning:
        "Planning and conducting an investigation is part of what students are learning to do. Inquiry skills therefore need to be explicitly taught, modelled, practised and revisited rather than treated only as the method used to complete the assessment.",
    },
    {
      category: "terminology",
      text: "Patterns, relationships, data, temperature and heat transfer are important concepts and terminology that students need to understand and use.",
      reasoning:
        "Students need repeated opportunities to hear, read, discuss and accurately use the language of the learning. Key terminology should therefore be deliberately introduced and made visible throughout the learning sequence.",
    },
  ]}
  overallReasoning="Curriculum intent brings all of these aspects together. Students need the required knowledge and terminology, but they must also develop the skills and cognitive capability to use that knowledge successfully. Teaching decisions therefore need to address the whole intent rather than isolated parts of the standard."
/>
<EvidenceReveal
  eyebrow="Show me the connection"
  title="From Curriculum Intent to Assessment Design"
  sourceLabel="Year 3 Science — Heat Transfer Investigation"
  imageSrc={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/examples/year3-science/assessment-context.png`}
  imageAlt="Extract from the Year 3 Science Heat Transfer assessment showing the investigation context and assessment question."
  instruction="Click on the aspects below to see how the assessment creates opportunities for students to demonstrate the intended learning."
  segments={[
    {
      text: "Students investigate ",
    },
    {
      text: "which material will keep water warm for the longest",
      category: "alignment",
    },
    {
      text: ". They ",
    },
    {
      text: "plan and conduct a safe and fair investigation",
      category: "accessibility",
    },
    {
      text: ", ",
    },
    {
      text: "measure and record temperature over time",
      category: "evidence",
    },
    {
      text: ", organise and represent their data, and ",
    },
    {
      text: "identify patterns and relationships",
      category: "demand",
    },
    {
      text: ". Students construct a model of heat transfer and ",
    },
    {
      text: "use evidence from their investigation to explain which material is the best insulator",
      category: "demand",
    },
    {
      text: ".",
    },
  ]}
  filters={[
    {
      label: "Curriculum alignment",
      value: "alignment",
      className: "learning",
    },
    {
      label: "Cognitive demand",
      value: "demand",
      className: "assessment",
    },
    {
      label: "Evidence opportunity",
      value: "evidence",
      className: "pedagogy",
    },
    {
      label: "Accessibility",
      value: "accessibility",
      className: "impact",
    },
  ]}
  notices={[
    {
      category: "alignment",
      text: "The assessment context gives students an authentic opportunity to apply their understanding of heat transfer and temperature change.",
      reasoning:
        "Assessment alignment means more than covering the same topic as the curriculum. The task must provide an opportunity for students to demonstrate the knowledge, understanding and skills identified in the curriculum intent.",
    },
    {
      category: "cognitive",
      text: "Students are required to identify relationships, model heat transfer and use evidence to explain their findings — not simply recall facts about heat.",
      reasoning:
        "The cognitive demand of the assessment needs to match the intended curriculum demand. If students are expected to explain and identify relationships, the assessment must require those actions rather than only asking them to identify or recall information.",
    },
    {
      category: "evidence",
      text: "The investigation generates several forms of evidence, including temperature measurements, organised data, identified patterns, a heat-transfer model and an evidence-based explanation.",
      reasoning:
        "A well-designed assessment creates clear opportunities for students to make their learning visible. Teachers need to be able to point to where each aspect of the intended learning can actually be observed in the student's response.",
    },
    {
      category: "accessibility",
      text: "Students demonstrate their learning through an investigation involving planning, measuring, recording, representing, modelling and explaining.",
      reasoning:
        "Accessibility does not mean reducing the curriculum demand. Assessment design should remove unnecessary barriers while preserving what students are actually expected to know, understand and do.",
    },
  ]}
  overallReasoning="Assessment Design turns Curriculum Intent into observable evidence. The assessment must align with the intended learning, preserve the required cognitive demand, provide sufficient opportunities for students to demonstrate what they know and can do, and allow students to access the task without changing the standard being assessed."
  tryPrompt="Look at your own assessment. Where can students demonstrate each part of the curriculum intent? Is the cognitive demand preserved, and are there any unnecessary barriers preventing students from showing what they know and can do?"
/>
<section className="framework-example-section">
  <div className="container">
    <div className="framework-example-heading">
    <span className="framework-example-eyebrow">Marking Guide</span>

    <h2>What does increasing quality look like?</h2>

    <p>
      Once we know the assessment provides opportunities for students to
      demonstrate the intended learning, we need to understand how the quality
      of that evidence progresses.
    </p>
  </div>

  <div className="marking-progression">
    <div className="marking-progression-intro">
      <span className="evidence-source-label">
        Year 3 Science — Teacher Marking Guide
      </span>

      <h3>Look beyond the grade letters</h3>

      <p>
        The purpose of the marking guide is not simply to decide whether a
        student receives a C, B or A. It helps teachers identify what changes
        as student understanding and performance become increasingly
        sophisticated.
      </p>
    </div>

    <div className="progression-cards">
      <article className="progression-card progression-c">
        <span className="progression-grade">C</span>
        <span className="progression-label">Expected standard</span>

        <h3>What must students demonstrate?</h3>

        <p>
          This is the expected Year 3 standard. It identifies the knowledge,
          understanding and skills students need opportunities to learn,
          practise and demonstrate.
        </p>
      </article>

      <div className="progression-arrow" aria-hidden="true">
        →
      </div>

      <article className="progression-card progression-b">
        <span className="progression-grade">B</span>
        <span className="progression-label">Stronger evidence</span>

        <h3>What changes?</h3>

        <p>
          Look for greater precision, detail or sophistication in the same
          intended learning — not simply more work.
        </p>
      </article>

      <div className="progression-arrow" aria-hidden="true">
        →
      </div>

      <article className="progression-card progression-a">
        <span className="progression-grade">A</span>
        <span className="progression-label">More sophisticated evidence</span>

        <h3>What changes again?</h3>

        <p>
          Identify the additional reasoning, independence, control and depth
          that distinguish highly developed evidence.
        </p>
      </article>
    </div>

    <div className="marking-reasoning">
      <strong>Professional reasoning</strong>

      <p>
        The B and A descriptors should not become extra activities for
        students who finish the C-level work. They describe increasing quality
        within the same intended learning. Understanding that progression
        allows teachers to deliberately teach towards improvement.
      </p>
    </div>
    <div className="living-sample">
  <div className="living-sample-heading">
    <span className="evidence-source-label">See it in action</span>
    <h3>Year 3 Science — What actually changes from C → B → A?</h3>
    <p>
      Follow the same aspect of learning across the marking guide. Notice what
      is added as the quality and sophistication of the evidence increases.
    </p>
  </div>

  <div className="living-sample-grid">
    <div className="living-row-label">
      <strong>Planning a fair investigation</strong>
    </div>

    <article className="living-cell living-c">
      <span className="living-grade">C</span>
      <p>
        Uses scaffolds to plan a <strong>safe investigation and fair test</strong>.
      </p>
    </article>

    <article className="living-cell living-b">
      <span className="living-grade">B</span>
      <p>
        Uses scaffolds to plan a safe investigation and fair test,
        <mark> considering the safe use of materials and equipment</mark>.
      </p>
    </article>

    <article className="living-cell living-a">
      <span className="living-grade">A</span>
      <p>
        Plans safely and identifies
        <mark> what to change, what to measure and further elements to control</mark>
        in a fair test.
      </p>
    </article>

    <div className="living-row-label">
      <strong>Data, patterns and models</strong>
    </div>

    <article className="living-cell living-c">
      <span className="living-grade">C</span>
      <p>
        Organises data and information and identifies a
        <strong> pattern and a relationship</strong>.
      </p>
    </article>

    <article className="living-cell living-b">
      <span className="living-grade">B</span>
      <p>
        Does this and <mark>constructs a visual model of heat transfer showing
        the direction of heat movement</mark>.
      </p>
    </article>

    <article className="living-cell living-a">
      <span className="living-grade">A</span>
      <p>
        Constructs the model and also
        <mark> describes the direction of the movement of heat</mark>.
      </p>
    </article>

    <div className="living-row-label">
      <strong>Heat knowledge and explanations</strong>
    </div>

    <article className="living-cell living-c">
      <span className="living-grade">C</span>
      <p>
        Identifies sources and examples of heat transfer and
        <strong> explains changes in temperature</strong>.
      </p>
    </article>

    <article className="living-cell living-b">
      <span className="living-grade">B</span>
      <p>
        Demonstrates stronger explanation by
        <mark> explaining sources of heat energy</mark>.
      </p>
    </article>

    <article className="living-cell living-a">
      <span className="living-grade">A</span>
      <p>
        Extends the reasoning further by
        <mark> proposing explanations for heat transfer</mark>.
      </p>
    </article>

    <div className="living-row-label">
      <strong>Using evidence</strong>
    </div>

    <article className="living-cell living-c">
      <span className="living-grade">C</span>
      <p>
        Describes how temperature-change data is used to develop
        <strong> explanations about insulation</strong>.
      </p>
    </article>

    <article className="living-cell living-b">
      <span className="living-grade">B</span>
      <p>
        Additionally identifies
        <mark> aspects of data and explanations in a journal article</mark>.
      </p>
    </article>

    <article className="living-cell living-a">
      <span className="living-grade">A</span>
      <p>
        Identifies
        <mark> a variety of data and explanations</mark>
        in the journal article.
      </p>
    </article>
  </div>

  <div className="living-sample-notice">
    <strong>What should I notice?</strong>
    <p>
      The learning has not changed. What changes is the quality of the
      evidence — students demonstrate increasing precision, control,
      explanation and sophistication.
    </p>
  </div>
</div>
  </div>
  </div>
</section>
<div className="container">
<div className="student-gtmj-bridge">
  </div>
  <div className="student-gtmj-copy">
    <span className="evidence-source-label">
      Translate for learners
    </span>

    <h3>Turn the marking guide into observable student actions.</h3>

    <p>
      The Student GTMJ acts as the bridge between the formal marking guide
      and visible learning. It breaks the C–B–A progression into specific
      knowledge, skills and evidence that students can recognise and work
      towards.
    </p>
  </div>

  <div className="student-gtmj-grid">
    <article className="student-gtmj-card student-gtmj-c">
      <span>C</span>
      <h4>Expected standard</h4>
      <p>
        Plan a safe and fair investigation, organise data, identify a pattern
        and relationship, and explain changes in temperature.
      </p>
    </article>

    <article className="student-gtmj-card student-gtmj-b">
      <span>B</span>
      <h4>Stronger evidence</h4>
      <p>
        Add safer and more deliberate planning, construct a model showing heat
        movement, and provide stronger explanations using evidence.
      </p>
    </article>

    <article className="student-gtmj-card student-gtmj-a">
      <span>A</span>
      <h4>More sophisticated evidence</h4>
      <p>
        Control variables more precisely, describe heat movement in the model,
        and propose explanations using a wider range of evidence.
      </p>
    </article>
  </div>

  <div className="student-gtmj-reasoning">
    <strong>Why this matters</strong>
    <p>
      This translation gives teachers the content for the Learning Wall and
      the progression needed for the Bump-it-Up Wall. The wall is therefore
      built from evidence and professional reasoning, not from decoration or
      generic success criteria.
    </p>
  </div>
</div>
<section className="section visible-learning-example">
  <div className="container">
    <div className="section-heading">
      <p className="eyebrow">Visible Learning</p>

      <h2>Make the progression visible and useful.</h2>

      <p>
        The marking guide gives the teacher clarity about quality. The Student
        GTMJ helps translate that quality into language and actions that can
        inform the Learning Wall and Bump-it-Up Wall.
      </p>
    </div>

    <div className="visible-learning-image">
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/examples/year3-science/learning-wall-progression.png`}
        alt="Year 3 Science learning progression showing the expected C standard and how evidence becomes stronger at B and more sophisticated at A."
      />
    </div>

    <div className="visible-learning-purpose-grid">
      <article className="visible-learning-purpose learning-wall-purpose">
        <span>Learning Wall</span>
        <h3>What am I learning?</h3>

        <p>
          Use the expected standard to make the essential knowledge, skills,
          concepts and terminology visible to students throughout the unit.
        </p>
      </article>

      <article className="visible-learning-purpose bump-wall-purpose">
        <span>Bump-it-Up Wall</span>
        <h3>How can I improve?</h3>

        <p>
          Use the C → B → A progression to show students what changes as the
          quality, precision and sophistication of their evidence improves.
        </p>
      </article>
    </div>

    <div className="visible-learning-reasoning">
      <strong>Professional reasoning</strong>

      <p>
        The wall should not be created first and the curriculum fitted into it
        afterwards. It is built from the teacher's understanding of the
        curriculum intent, assessment evidence and progression of quality.
      </p>
    </div>
  </div>
</section>

{/* Existing Year 3 Science visible learning example */}
...

{/* NEW Years 3–6 multi-age example */}
<MultiAgeVisibleLearning />

{/* Whatever section currently comes next */}
...

<section className="framework-example-section teaching-decisions-section">
  <div className="container">

    <div className="framework-example-heading">
      <span className="framework-example-eyebrow">Teaching Decisions</span>

      <h2>What therefore needs to be taught?</h2>

      <p>
        Once the intended learning, assessment demands and progression of
        quality are clear, teachers can make deliberate decisions about what
        students need to know, what they need to be explicitly taught to do,
        and where they will need modelling, practice and feedback.
      </p>
    </div>

    <div className="teaching-decisions-panel">

      <div className="teaching-decisions-intro">
        <span className="evidence-source-label">Professional reasoning</span>

        <h3>Plan backwards from the evidence students need to produce.</h3>

        <p>
          The assessment should not become the teaching program. Instead,
          analyse the evidence students will eventually need to produce and
          identify the knowledge, skills, models and practice that will enable
          them to produce it independently.
        </p>
      </div>

      <div className="teaching-lenses">

        <article className="teaching-lens teaching-knowledge">
          <span className="teaching-lens-number">01</span>
          <span className="teaching-lens-label">Knowledge to build</span>

          <h3>What must students understand?</h3>

          <p>
            Identify the concepts, vocabulary and subject knowledge students
            need before they can successfully reason, explain or apply.
          </p>
        </article>

        <article className="teaching-lens teaching-skills">
          <span className="teaching-lens-number">02</span>
          <span className="teaching-lens-label">Skills to explicitly teach</span>

          <h3>What must students learn to do?</h3>

          <p>
            Identify the processes and skills that need explicit instruction,
            modelling and guided practice rather than assuming students already
            know how to perform them.
          </p>
        </article>

        <article className="teaching-lens teaching-models">
          <span className="teaching-lens-number">03</span>
          <span className="teaching-lens-label">Models & examples</span>

          <h3>What does successful performance look like?</h3>

          <p>
            Select worked examples, models and exemplars that make thinking
            visible and help students recognise the features of quality.
          </p>
        </article>

        <article className="teaching-lens teaching-practice">
          <span className="teaching-lens-number">04</span>
          <span className="teaching-lens-label">Practice & response</span>

          <h3>Where will students practise and improve?</h3>

          <p>
            Plan opportunities to rehearse important knowledge and skills,
            receive feedback and improve before students are expected to
            demonstrate the learning independently.
          </p>
        </article>

      </div>

      <div className="teaching-living-sample">
        <div className="teaching-living-heading">
          <span className="evidence-source-label">See it in action</span>

          <h3>Year 3 Science — What does this mean for teaching?</h3>

          <p>
            Returning to our heat-transfer assessment, the earlier cogs now
            give us specific information about what needs to happen during
            teaching.
          </p>
        </div>

        <div className="teaching-living-grid">

          <article className="teaching-example teaching-example-knowledge">
            <span>Knowledge to build</span>

            <h4>Build the science understanding.</h4>

            <ul>
              <li>Sources of heat energy</li>
              <li>Heat transfer between objects</li>
              <li>Changes in temperature</li>
              <li>Insulators and their purpose</li>
              <li>Patterns and relationships in data</li>
            </ul>
          </article>

          <article className="teaching-example teaching-example-skills">
            <span>Skills to explicitly teach</span>

            <h4>Teach students how to investigate.</h4>

            <ul>
              <li>Plan a safe and fair test</li>
              <li>Identify what changes and what is measured</li>
              <li>Measure and record accurately</li>
              <li>Organise data so patterns can be identified</li>
              <li>Use evidence to explain findings</li>
            </ul>
          </article>

          <article className="teaching-example teaching-example-models">
            <span>Models & examples</span>

            <h4>Make successful thinking visible.</h4>

            <ul>
              <li>Model how heat moves between objects</li>
              <li>Think aloud when interpreting data</li>
              <li>Compare stronger and weaker explanations</li>
              <li>Show how evidence supports a conclusion</li>
              <li>Use the learning progression to discuss quality</li>
            </ul>
          </article>

          <article className="teaching-example teaching-example-practice">
            <span>Practice & response</span>

            <h4>Build towards independence.</h4>

            <ul>
              <li>Predict what will happen and explain why</li>
              <li>Practise identifying fair-test variables</li>
              <li>Interpret small sets of data</li>
              <li>Create and refine transfer models</li>
              <li>Improve explanations using feedback</li>
            </ul>
          </article>

        </div>

        <div className="teaching-decision-callout">
          <strong>The key professional decision</strong>

          <p>
            We are not teaching students how to complete the assessment.
            We are deliberately teaching the knowledge, skills and ways of
            thinking they will need so they can independently demonstrate the
            intended learning in the assessment.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="framework-example-section evidence-learning-section">
  <div className="container">

    <div className="framework-example-heading">
      <span className="framework-example-eyebrow">
        Evidence of Learning
      </span>

      <h2>What is the student evidence telling us?</h2>

      <p>
        Evidence gathered during learning helps teachers determine what
        students understand, what they can do independently and what they
        need next. The purpose is not simply to collect work — it is to use
        evidence to make informed teaching decisions.
      </p>
    </div>

    <div className="evidence-learning-panel">

      <div className="evidence-learning-intro">
        <span className="evidence-source-label">
          Year 3 Science — Student Work Sample
        </span>

        <h3>Look at the evidence before making the judgement.</h3>

        <p>
          Read the work sample as evidence of learning. What can the student
          already demonstrate? Where is stronger evidence beginning to emerge?
          What is not yet sufficiently demonstrated?
        </p>
      </div>

      <div className="student-work-image">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/examples/year3-science/learning-wall-progression.png`}
          alt="Year 3 Science student work sample showing an investigation into insulating materials, including a fair-test plan, temperature data, a heat-transfer model and written explanation."
        />
      </div>

      <div className="evidence-judgement">

        <div className="evidence-judgement-grade">
          <span>On-balance judgement</span>
          <strong>C</strong>
        </div>

        <div className="evidence-judgement-copy">
          <h3>Why C?</h3>

          <p>
            Across the work sample there is sufficient evidence of the
            expected standard: the student plans a fair investigation,
            organises and interprets data, demonstrates understanding of heat
            transfer and provides an explanation of the findings.
          </p>

          <p>
            There are also aspects of stronger evidence beginning to emerge,
            particularly in the student's modelling and identification of
            relationships. These isolated features do not automatically change
            the overall judgement.
          </p>
        </div>
        </div>
    </div>
  </div>
</section>
<EvidenceMap
  imageSrc={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/examples/year3-science/student-work-sample.png`}
  imageAlt="Year 3 Science student work sample showing a fair-test investigation, temperature data, heat-transfer model and written explanation."
  aspects={[
    {
      id: "planning",
      label: "Investigation Planning",
      className: "planning",
      highlight: {
        top: 25,
        left: 2,
        width: 42,
        height: 30,
      },
      evidence:
        "The student keeps the containers, water amount and starting temperature the same and changes the insulating material. This shows an understanding of the need for a fair comparison.",
      cDescriptor:
        "Uses scaffolds to plan a safe investigation and fair test.",
      judgement:
        "This is secure C-level evidence for investigation planning. The student has demonstrated the expected standard for planning a fair test.",
      strongerEvidence:
        "At B, the planning would also explicitly consider the safe use of materials and equipment. At A, the student would identify what is changed, what is measured and further elements that need to be controlled.",
      aExample:
        "I will change only the material wrapped around each container. I will keep the amount of water, starting temperature, container size and testing time the same. I will measure the temperature after the same amount of time for each material so the comparison is fair. I will handle the hot water carefully and keep the containers in the same place.",
    },
    {
      id: "data",
      label: "Data & Patterns",
      className: "data",
      highlight: {
        top: 5,
        left: 44,
        width: 54,
        height: 45,
      },
      evidence:
        "The student records temperature results and identifies that the bubble-wrapped container loses heat more slowly than the other containers.",
      cDescriptor:
        "Organises data and information using provided scaffolds and identifies a pattern and a relationship.",
      judgement:
        "This provides clear C-level evidence. The student has organised the results and identified the relationship between insulation and slower temperature loss.",
      strongerEvidence:
        "Stronger evidence would connect the identified pattern to a visual model of heat transfer. At A, the student would also describe the direction of heat movement within that model.",
      aExample:
        "Bubble wrap was the best insulator because its temperature decreased the least. The unwrapped container lost the most heat. This pattern shows that the material around the container affected how quickly heat moved from the warmer water to the cooler surroundings.",
    },
    {
      id: "understanding",
      label: "Science Understanding",
      className: "understanding",
      highlight: {
        top: 53,
        left: 44,
        width: 54,
        height: 30,
      },
      evidence:
        "The student explains that bubble wrap slows heat transfer because trapped air acts as an insulator and reduces the movement of heat away from the warmer water.",
      cDescriptor:
        "Identifies sources of heat energy and examples of heat transfer and explains changes in the temperature of objects.",
      judgement:
        "The explanation demonstrates the expected science understanding. The student is doing more than naming the best material; they are connecting the result to heat transfer and temperature change.",
      strongerEvidence:
        "At stronger levels, the explanation becomes more sophisticated. B-level evidence would include explaining sources of heat energy, while A-level evidence would propose explanations for heat transfer.",
      aExample:
        "Heat moved from the warmer water through the container towards the cooler surroundings. Bubble wrap slowed this transfer because the trapped air acted as an insulator. This meant less heat energy transferred away from the water, so its temperature decreased more slowly.",
    },
    {
      id: "model",
      label: "Model & Explanation",
      className: "model",
      highlight: {
        top: 53,
        left: 2,
        width: 42,
        height: 30,
      },
      evidence:
        "The student uses arrows in the diagram to represent heat moving from the warmer water towards the surrounding environment and shows insulation slowing this movement.",
      cDescriptor:
        "The C standard requires students to organise data and identify a pattern and relationship. A visual heat-transfer model appears in the stronger B and A descriptors.",
      judgement:
        "This aspect is beginning to show evidence above the expected standard. The visual model is consistent with emerging B-level evidence, even though the overall work sample remains an on-balance C.",
      strongerEvidence:
        "At B, the model should show the direction of heat movement. At A, the student would also clearly describe the direction of that movement and use the model as part of a more developed explanation.",
      aExample:
        "My arrows show heat energy moving from the warmer water towards the cooler surroundings. The smaller arrows through the bubble wrap show that heat is still transferring, but more slowly because the insulating layer reduces the rate of heat transfer.",
    },
    {
      id: "evidence",
      label: "Use of Evidence",
      className: "evidence",
      highlight: {
        top: 54,
        left: 44,
        width: 54,
        height: 30,
      },
      evidence:
        "The student identifies bubble wrap as the best insulator and refers to the overall pattern in the results, but does not consistently use specific temperature values to support the explanation.",
      cDescriptor:
        "Describes how people use temperature change data to develop explanations about which materials are the best insulators.",
      judgement:
        "There is sufficient C-level evidence because the student connects temperature change data with an explanation about insulation. However, the use of evidence could be more precise.",
      strongerEvidence:
        "A stronger response would deliberately select specific data points and integrate them into the explanation. B and A evidence would also show increasingly sophisticated use and interpretation of data and explanations.",
      aExample:
        "The results support my conclusion that bubble wrap was the best insulator. Its temperature decreased less than the other containers over the testing period, while the unwrapped container had the greatest temperature decrease. This evidence shows that bubble wrap slowed the transfer of heat from the warmer water to the surroundings.",
    },
  ]}
/>
<section className="moderation-section">
  <div className="container">
    <div className="moderation-heading">
      <span className="framework-example-eyebrow">Moderation</span>

      <h2>Shared clarity strengthens consistent judgement.</h2>

      <p>
        Moderation is strengthened long before teachers sit down with student
        work. When teachers share clarity about the intended learning, the
        evidence students need to produce and what increasing quality looks
        like, they enter moderation with a common reference point.
      </p>

      <p>
        The conversation shifts from comparing opinions about grades to
        examining evidence against an agreed understanding of the standard.
      </p>
    </div>

    <div className="moderation-clarity">
      <span className="moderation-clarity-label">
        Clarity builds across the framework
      </span>

      <div className="moderation-journey">
        <div className="moderation-journey-item">
          <span>01</span>
          <strong>Curriculum Intent</strong>
        </div>

        <div className="moderation-journey-arrow">→</div>

        <div className="moderation-journey-item">
          <span>02</span>
          <strong>Assessment Design</strong>
        </div>

        <div className="moderation-journey-arrow">→</div>

        <div className="moderation-journey-item">
          <span>03</span>
          <strong>Marking Guide</strong>
        </div>

        <div className="moderation-journey-arrow">→</div>

        <div className="moderation-journey-item">
          <span>04</span>
          <strong>Visible Learning</strong>
        </div>

        <div className="moderation-journey-arrow">→</div>

        <div className="moderation-journey-item">
          <span>05</span>
          <strong>Teaching Decisions</strong>
        </div>

        <div className="moderation-journey-arrow">→</div>

        <div className="moderation-journey-item">
          <span>06</span>
          <strong>Evidence of Learning</strong>
        </div>
      </div>

      <div className="moderation-shared-clarity">
        <span>↓</span>

        <div>
          <strong>Shared clarity</strong>
          <p>
            Teachers arrive at moderation already knowing what evidence they
            are looking for and how increasing quality is represented.
          </p>
        </div>
      </div>
    </div>

    <div className="moderation-conversation">
      <div className="moderation-conversation-heading">
        <span className="evidence-source-label">
          The moderation conversation
        </span>

        <h3>Keep the conversation anchored in evidence.</h3>

        <p>
          Rather than beginning with a grade, begin with what the student has
          demonstrated and trace the judgement back to the agreed standard.
        </p>
      </div>

      <div className="moderation-steps">
        <article className="moderation-step">
          <span className="moderation-step-number">1</span>

          <h3>Locate the evidence</h3>

          <p>What has the student actually demonstrated?</p>
        </article>

        <article className="moderation-step">
          <span className="moderation-step-number">2</span>

          <h3>Connect it to the standard</h3>

          <p>
            Which part of the marking guide does this evidence demonstrate?
          </p>
        </article>

        <article className="moderation-step">
          <span className="moderation-step-number">3</span>

          <h3>Test the judgement</h3>

          <p>
            Is the evidence sufficient and consistent across the body of work?
          </p>
        </article>

        <article className="moderation-step">
          <span className="moderation-step-number">4</span>

          <h3>Reach shared understanding</h3>

          <p>
            Can we justify the same on-balance judgement from the evidence?
          </p>
        </article>
      </div>
    </div>

    <div className="moderation-example">
      <div className="moderation-example-heading">
        <span className="evidence-source-label">
          Return to the evidence
        </span>

        <h3>Would you confirm the C?</h3>

        <p>
          You have now seen the Year 3 Science evidence and how it connects
          with the marking guide. Before confirming the judgement, consider
          the evidence across the whole work sample.
        </p>
      </div>

      <div className="moderation-prompts">
        <div className="moderation-prompt">
          <span>01</span>
          <p>
            Is there sufficient evidence of the expected standard across the
            sample?
          </p>
        </div>

        <div className="moderation-prompt">
          <span>02</span>
          <p>
            Do the emerging B-level features represent consistent B-level
            performance, or isolated stronger evidence?
          </p>
        </div>

        <div className="moderation-prompt">
          <span>03</span>
          <p>
            What evidence would you cite to justify your judgement to another
            teacher?
          </p>
        </div>
      </div>

      <div className="moderation-agreement">
        <div className="moderation-agreement-grade">
          <span>Agreed on-balance judgement</span>
          <strong>C</strong>
        </div>

        <div className="moderation-agreement-copy">
          <h3>Why does the judgement hold?</h3>

          <p>
            The evidence consistently demonstrates the expected standard
            across the relevant aspects of the work sample. The student
            demonstrates the required science understanding, investigation
            skills, organisation and interpretation of data, and explanation
            of findings.
          </p>

          <p>
            Some stronger features are emerging, particularly in the
            student's modelling and identification of relationships. These
            features are not yet sufficiently consistent across the body of
            evidence to support an overall B judgement.
          </p>
        </div>
      </div>
    </div>

    <div className="moderation-dialogue">
      <div className="moderation-dialogue-heading">
        <span className="evidence-source-label">
          Professional dialogue
        </span>

        <h3>Questions that keep moderation focused on evidence</h3>
      </div>

      <div className="moderation-dialogue-prompts">
        <blockquote>
          “Show me the evidence that led you there.”
        </blockquote>

        <blockquote>
          “Which descriptor are you connecting that evidence to?”
        </blockquote>

        <blockquote>
          “Is that evidence consistent across the work sample or isolated?”
        </blockquote>

        <blockquote>
          “What would we need to see to justify the next level?”
        </blockquote>
      </div>
    </div>

    <div className="moderation-close">
      <span className="moderation-close-label">
        The framework keeps turning
      </span>

      <h2>
        Moderation is not where clarity begins.
        <br />
        It is where shared clarity is tested.
      </h2>

      <p>
        When disagreement occurs, it provides useful information. It may
        signal a need to revisit our interpretation of the curriculum, the
        assessment opportunity, the marking guide, the teaching that occurred
        or the evidence being considered.
      </p>

      <div className="moderation-loop">
        <span>Evidence</span>
        <span>→</span>
        <span>Dialogue</span>
        <span>→</span>
        <span>Shared judgement</span>
        <span>→</span>
        <strong>Refine practice</strong>
        <span>↻</span>
      </div>
    </div>
  </div>
</section>

        <CogConnections
          currentCog="Curriculum Intent"
          connections={[
            {
              title: "Achievement Standards",
              description:
                "Curriculum Intent is clarified by understanding the standard students are expected to demonstrate by the end of the learning.",
              href: "#",
              className: "learning",
            },
            {
              title: "Assessment Design",
              description:
                "Assessment must provide students with a genuine opportunity to demonstrate the intended curriculum learning and cognitive demand.",
              href: "#",
              className: "assessment",
            },
            {
              title: "Marking Guide",
              description:
                "The marking guide helps translate curriculum expectations into observable differences in the quality of student performance.",
              href: "#",
              className: "assessment",
            },
            {
              title: "Teaching Decisions",
              description:
                "Once the intended learning is clear, teaching can be designed for the needs of this cohort without losing the required curriculum demand.",
              href: "#",
              className: "pedagogy",
            },
            {
              title: "Visible Learning",
              description:
                "Clear curriculum intent allows teachers to make the learning, success criteria, key terminology and progression visible to students.",
              href: "#",
              className: "pedagogy",
            },
            {
              title: "Evidence of Learning",
              description:
                "Knowing the intended learning helps teachers recognise which evidence will meaningfully show what students know, understand and can do.",
              href: "#",
              className: "impact",
            },
            {
              title: "Moderation",
              description:
                "A shared understanding of curriculum intent provides the foundation for consistent professional discussion about student achievement.",
              href: "#",
              className: "impact",
            },
          ]}
        />
      </main>
    </>
  );
}
