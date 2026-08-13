"use client";

import { useState } from "react";

type YearLevel = "3" | "4" | "5" | "6";

type ProgressionItem = {
  area: string;
  c: string;
  b: string;
  a: string;
  exampleC?: string;
  exampleB?: string;
  exampleA?: string;
};

type YearProgression = {
  year: YearLevel;
  items: ProgressionItem[];
};

const progressionData: YearProgression[] = [
  {
    year: "3",
    items: [
      {
        area: "Ideas & Reasons",
        c: "Expresses an opinion and supports it with relevant details.",
        b: "Adds relevant details and simple justifications to strengthen ideas.",
        a: "Clearly structures opinions and elaborates relevant details.",
        exampleC: "Our school should have more shade because it will keep us cooler.",
        exampleB:
          "Our school should have more shade because staying cooler will help us concentrate during outdoor learning.",
        exampleA:
          "More shaded learning spaces would help students stay cooler and concentrate for longer, making outdoor learning more comfortable and effective.",
      },
      {
        area: "Organisation & Cohesion",
        c: "Groups, sequences and links ideas logically.",
        b: "Organises and links ideas so the argument is easy to follow.",
        a: "Uses increasingly deliberate connections to develop a clear argument.",
        exampleC:
  "We should have more shade because it keeps us cooler. Another reason is that we could learn outside.",

exampleB:
  "More shade would keep us cooler and it would also give our classes more places to learn outside.",

exampleA:
  "More shade would help protect us from the heat. It would also mean our class could use outdoor areas for learning, even on warmer days.",
      },
      {
        area: "Language",
        c: "Uses topic-specific vocabulary and persuasive language.",
        b: "Uses more precise vocabulary and modal verbs.",
        a: "Uses precise vocabulary, appropriate modality and connectives deliberately.",
        exampleC: "More shade will help students.",
        exampleB: "Our school should provide more shaded areas.",
        exampleA:
          "Our school must create additional shaded spaces so students can learn safely and comfortably outdoors.",
      },
      {
        area: "Voice & Audience",
        c: "Uses features of voice appropriate to the presentation.",
        b: "Uses voice in ways suited to the audience.",
        a: "Varies voice deliberately for emphasis, audience and purpose.",
        exampleC:
  "I think our school should have more shade.",

exampleB:
  "I really think our school SHOULD have more shade because students need safe places to learn outside.",

exampleA:
  "Imagine sitting outside on a really hot day. [pause] Wouldn't learning be better if we had more shade?",
      },
    ],
  },

  {
  year: "4",
  items: [
    {
      area: "Ideas & Reasons",
      c: "Shares and extends ideas, opinions and information using relevant details.",
      b: "Develops ideas with stronger explanation and supporting detail.",
      a: "Develops and elaborates ideas deliberately to strengthen the argument.",

      exampleC:
        "Our school should have more shaded outdoor spaces because students need somewhere cooler to learn and play.",

      exampleB:
        "Our school should create more shaded outdoor spaces because they would give students cooler places to learn and play, especially on very hot days.",

      exampleA:
        "More shaded outdoor spaces would make our school safer and more comfortable. On hot days, students could continue learning outside without being exposed to the sun for long periods of time.",
    },

    {
      area: "Organisation & Cohesion",
      c: "Organises and links ideas logically.",
      b: "Connects ideas more deliberately across the presentation.",
      a: "Uses organisation and cohesive connections purposefully to build the argument.",

      exampleC:
        "Another reason we need more shade is so we can use outdoor areas for learning.",

      exampleB:
        "As well as keeping students cooler, more shade would allow classes to use our outdoor spaces more often.",

      exampleA:
        "Not only would additional shade help protect students from the heat, it would also make our outdoor areas more useful for learning throughout the school day.",
    },

    {
      area: "Language",
      c: "Uses subjective and objective language, topic-specific vocabulary and persuasive features.",
      b: "Makes increasingly precise language and modality choices.",
      a: "Selects language deliberately to influence and engage the audience.",

      exampleC:
        "I think our school should build more shaded areas.",

      exampleB:
        "Our school should provide more shaded learning areas so students can use outdoor spaces safely.",

      exampleA:
        "Surely we should be able to learn outside without the heat forcing us back into the classroom. Our school must provide more shaded spaces so students can learn safely and comfortably.",
    },

    {
      area: "Voice & Audience",
      c: "Uses features of voice appropriate to purpose and audience.",
      b: "Varies voice to strengthen meaning and engagement.",
      a: "Uses voice deliberately to emphasise ideas and position the audience.",

      exampleC:
        "Students need more shade at our school.",

      exampleB:
        "Students NEED more shade at our school because outdoor learning should be safe and comfortable.",

      exampleA:
        "Imagine trying to concentrate while the sun is beating down on you. [pause] Is that really the best place for us to learn?",
    },
  ],
},

  {
  year: "5",
  items: [
    {
      area: "Ideas, Reasons & Evidence",
      c: "Shares, develops and expands ideas and opinions using supporting details.",
      b: "Explains reasons more fully and selects relevant examples or evidence.",
      a: "Elaborates ideas and integrates well-chosen evidence to strengthen the position.",
      exampleC:
        "More shade would help students because we could use outdoor spaces more often.",
      exampleB:
        "Imagine trying to learn outside when the temperature is 35 degrees. More shade would make these spaces safer and more useful.",
      exampleA:
        "How can we expect students to concentrate when extreme heat makes outdoor learning uncomfortable? Creating more shade would give students safer, more flexible spaces for learning throughout the year.",
    },
    {
      area: "Organisation & Cohesion",
      c: "Organises, develops and links ideas logically.",
      b: "Uses varied connections rather than relying on basic sequencing.",
      a: "Builds the argument deliberately so each idea strengthens the next.",
      exampleC:
        "More shade would make outdoor learning safer. It would also give classes more places to work.",
      exampleB:
        "More shade would not only protect students from the heat, but would also allow outdoor spaces to be used more regularly for learning.",
      exampleA:
        "Protecting students from extreme heat is important; however, the benefits extend beyond safety. Shaded areas would also transform spaces that are currently difficult to use into flexible outdoor classrooms.",
    },
    {
      area: "Language & Persuasive Devices",
      c: "Uses topic-specific vocabulary and relevant persuasive language.",
      b: "Uses stronger modality, precise vocabulary and persuasive devices.",
      a: "Makes deliberate language choices, including rhetorical devices, to influence the audience.",
      exampleC:
        "Our school should have more shade.",
      exampleB:
        "Our school must provide safer and more comfortable outdoor learning spaces.",
      exampleA:
        "If we have the opportunity to create safer, cooler and more flexible learning spaces, why wouldn't we take it?",
    },
    {
      area: "Voice & Audience",
      c: "Uses voice features appropriate to the presentation.",
      b: "Varies pace, pitch and emphasis to engage listeners.",
      a: "Manipulates voice deliberately to emphasise key ideas and position the audience.",
      exampleC:
        "Our school should create more shaded learning spaces.",
      exampleB:
        "Imagine trying to concentrate while sitting in the hot sun. [pause] More shade would make outdoor learning safer and more comfortable.",
      exampleA:
        "How can we expect students to concentrate when they are struggling with the heat? [pause] Creating more shade isn't simply about comfort — it's about creating an environment where every student has the opportunity to learn effectively.",
    },
  ],
},

  {
  year: "6",
  items: [
    {
      area: "Ideas, Reasons & Evidence",
      c: "Shares, develops, explains and elaborates ideas about the issue.",
      b: "Develops increasingly complex ideas and supports them with relevant evidence.",
      a: "Purposefully develops and elaborates complex ideas, selecting evidence to maximise impact.",
      exampleC:
        "More shaded spaces would improve outdoor learning and help protect students from extreme heat.",
      exampleB:
        "Extreme heat affects both student wellbeing and concentration, so investing in shade would improve the safety and usefulness of our outdoor learning spaces.",
      exampleA:
        "Should extreme heat determine when and where students are able to learn? Investing in shade is not simply about comfort; it creates safer, more inclusive learning spaces and demonstrates that student wellbeing is central to the decisions our school makes.",
    },
    {
      area: "Organisation & Cohesion",
      c: "Uses and varies structures to organise, develop and link ideas.",
      b: "Connects increasingly complex ideas smoothly across the presentation.",
      a: "Purposefully controls structure and cohesion so the argument builds towards a clear impact.",
      exampleC:
        "More shade would protect students from extreme heat and make outdoor learning spaces more useful.",
      exampleB:
        "While protection from extreme heat is an important reason for creating more shade, the benefits extend further. These spaces could also provide flexible areas for learning, collaboration and school activities.",
      exampleA:
        "Protecting students from extreme heat should be reason enough to act. Yet the opportunity is greater than that: thoughtfully designed shaded spaces could improve wellbeing, expand where learning occurs and create more inclusive spaces for our whole school community.",
    },
    {
      area: "Language & Persuasive Devices",
      c: "Uses and varies relevant persuasive and language features.",
      b: "Uses precise vocabulary, strong modality and deliberate persuasive devices.",
      a: "Purposefully selects and varies language to position, influence and engage the audience.",
      exampleC:
        "Our school needs more shaded spaces.",
      exampleB:
        "Our school must prioritise shaded learning areas to protect student wellbeing.",
      exampleA:
        "We have the opportunity — and the responsibility — to create learning spaces that protect, include and inspire every student.",
    },
    {
      area: "Voice & Audience",
      c: "Uses and varies voice features appropriately.",
      b: "Uses deliberate changes in pace, pitch, volume and emphasis.",
      a: "Purposefully manipulates voice and multimodal features to position and engage the audience.",
      exampleC:
        "Our school needs more shaded outdoor learning spaces.",
      exampleB:
        "Think about the last time you tried to concentrate in extreme heat. [pause] Is that the environment we want for our students?",
      exampleA:
        "We ask students to be ready to learn every day — but are we providing an environment that allows them to do that? [pause] We have the opportunity, and the responsibility, to create outdoor spaces that protect, include and inspire every learner.",
    },
  ],
},
];

export function MultiAgeVisibleLearning() {
  const [activeYear, setActiveYear] = useState<YearLevel>("3");

  const activeData = progressionData.find(
    (item) => item.year === activeYear
  )!;

  return (
    <section className="multi-age-visible-learning">

      <div className="multi-age-heading">
        <span className="evidence-source-label">
          Multi-age classroom example
        </span>

        <h3>One shared learning focus. Different year-level expectations.</h3>

        <p>
          Students can participate in shared learning while working towards
          the achievement expectations for their own year level. The learning
          wall makes the content of the learning visible; the bump-it-up wall
          helps students recognise how the quality of their evidence can
          improve.
        </p>
      </div>

      <div className="multi-age-principle">
        <strong>Multi-age does not mean four separate learning experiences.</strong>
        <p>
          Identify what can be taught together while maintaining clarity about
          the achievement expectations for each year level.
        </p>
      </div>

      <div className="multi-age-wall-section">
        <div className="multi-age-wall-heading">
          <span>Learning Wall</span>
          <h4>What do students need to know and do?</h4>
          <p>
            This wall is built throughout the unit as students develop the
            knowledge, language and skills needed for the assessment.
          </p>
        </div>

        <img
          src="/examples/multi-age-english/learning-wall-years3-6.png"
          alt="Years 3 to 6 English learning wall for a persuasive speaking unit."
          className="multi-age-wall-image"
        />
      </div>

      <div className="multi-age-wall-section">
        <div className="multi-age-wall-heading">
          <span>Bump-It-Up Wall</span>
          <h4>How can students improve the quality of their assessment?</h4>
          <p>
            The wall pinpoints differences in quality rather than attempting
            to display a complete exemplar for every year level and standard.
          </p>
        </div>

        <div className="multi-age-biu-layout">
          <div className="multi-age-biu-image">
            <img
              src="/examples/multi-age-english/bump-it-up-wall-years3-6.png"
              alt="Years 3 to 6 bump-it-up wall showing increasing quality in persuasive speaking."
              className="multi-age-wall-image"
            />
          </div>

         <div className="year-progression-explorer">
  <span className="evidence-source-label">
    Pinpoint the difference in quality
  </span>

  <h4>Explore the year-level progression</h4>

  <p>
    Select a year level to see how evidence changes from the
    expected standard towards increasingly sophisticated quality.
  </p>

  <div className="shared-wall-lens">
    <strong>The wall is shared. The lens changes.</strong>
    <span>
      Viewing the examples through the Year {activeYear} marking guide.
    </span>
  </div>

            <div className="year-selector">
              {(["3", "4", "5", "6"] as YearLevel[]).map((year) => (
                <button
                  key={year}
                  type="button"
                  className={activeYear === year ? "active" : ""}
                  onClick={() => setActiveYear(year)}
                >
                  Year {year}
                </button>
              ))}
            </div>

            <div className="progression-columns">
              <div className="progression-heading c">
                <strong>C</strong>
                <span>Secure</span>
              </div>

              <div className="progression-heading b">
                <strong>B</strong>
                <span>Stronger</span>
              </div>

              <div className="progression-heading a">
                <strong>A</strong>
                <span>More sophisticated</span>
              </div>
            </div>

            <div className="progression-items">
              {activeData.items.map((item) => (
                <div className="progression-item" key={item.area}>
                  <h5>{item.area}</h5>

                  <div className="progression-grid">
                    <div className="progression-cell c">
                      <p>{item.c}</p>
                      {item.exampleC && (
                        <blockquote>{item.exampleC}</blockquote>
                      )}
                    </div>

                    <div className="progression-cell b">
                      <p>{item.b}</p>
                      {item.exampleB && (
                        <blockquote>{item.exampleB}</blockquote>
                      )}
                    </div>

                    <div className="progression-cell a">
                      <p>{item.a}</p>
                      {item.exampleA && (
                        <blockquote>{item.exampleA}</blockquote>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="progression-caution">
              <strong>These examples pinpoint differences in quality.</strong>
              <p>
                They are not complete C, B or A assessment responses. An
                overall judgement is made against the full year-level marking
                guide and the evidence demonstrated across the complete
                assessment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="multi-age-teacher-thinking">
        <span>Teacher Thinking</span>

        <h4>Pinpoint the difference in quality.</h4>

        <p>
          You do not need twelve complete exemplars on a multi-age classroom
          wall. Use the marking guides to identify the important differences
          in quality, then make those differences visible through carefully
          selected excerpts, annotations and discussion.
        </p>

        <p>
          The wall should evolve with the learning. Examples can be added,
          replaced and annotated as students analyse mentor presentations,
          co-construct responses and examine their own work.
        </p>
      </div>

    </section>
  );
}