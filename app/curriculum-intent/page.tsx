import { Header } from "@/components/Header";
import { PageHero } from "@/components/layout/PageHero";
import { BigIdea } from "@/components/layout/BigIdea";
import { WhyItMatters } from "@/components/layout/WhyItMatters";
import { ProfessionalReasoning } from "@/components/layout/ProfessionalReasoning";
import { ProfessionalWalkthrough } from "@/components/layout/ProfessionalWalkthrough";

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
      </main>
    </>
  );
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
}
