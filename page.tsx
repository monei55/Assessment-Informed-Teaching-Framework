import { FrameworkCycle } from "@/components/FrameworkCycle";
import { Header } from "@/components/Header";
import { QuestionCard } from "@/components/QuestionCard";

const questions = [
  { number: "01", title: "Learning Clarity", question: "What are students expected to learn?", description: "Clarify the intended learning, success criteria, cognitive demand and progression.", tone: "learning" as const },
  { number: "02", title: "Assessment Clarity", question: "What evidence will demonstrate successful learning?", description: "Plan purposeful evidence that reveals what students know, understand and can do.", tone: "assessment" as const },
  { number: "03", title: "Pedagogical Clarity", question: "What pedagogical approaches will best support every student to learn?", description: "Select and adapt instructional responses according to the learning need.", tone: "pedagogy" as const },
  { number: "04", title: "Impact Clarity", question: "What is the evidence telling me, and what should I do next?", description: "Interpret learning change and make responsive instructional decisions.", tone: "impact" as const },
];

const audiences = [
  ["Classroom Teachers", "Strengthen planning, evidence gathering, differentiation and reflection."],
  ["Instructional Coaches", "Support observation, feedback and professional dialogue."],
  ["School Leaders", "Guide improvement planning, walkthroughs and instructional leadership."],
  ["Professional Learning Teams", "Structure moderation, collaborative inquiry and shared decisions."],
];

const resources = ["Core Models", "Worked Examples", "Professional Language", "Planning Tools", "Coaching Questions", "Walkthrough Resources", "Reflection Tools", "Printable Templates"];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">A practical professional resource</p>
              <h1>Connect learning, evidence, pedagogy and impact.</h1>
              <p className="hero-lead">The Assessment Informed Teaching Framework supports clearer planning, stronger professional dialogue and more responsive instructional decision-making.</p>
              <div className="hero-actions">
                <a className="button" href="#four-questions">Explore the Framework</a>
                <a className="button button-secondary" href="#framework">See how it connects</a>
              </div>
              <div className="hero-meta"><span>For teachers</span><span>For coaches</span><span>For leaders</span><span>For teams</span></div>
            </div>
            <FrameworkCycle />
          </div>
        </section>

        <section className="section" id="four-questions">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">The foundation</p><h2>The four enduring questions</h2><p>Enter the framework at the point of need, or use all four questions as one continuous professional reasoning cycle.</p></div>
            <div className="question-grid">{questions.map((question) => <QuestionCard key={question.number} {...question} />)}</div>
          </div>
        </section>

        <section className="section section-dark" id="framework">
          <div className="container split-grid">
            <div><p className="eyebrow eyebrow-light">One connected cycle</p><h2>Not four separate tasks. One disciplined way of thinking.</h2><p>Clarity in one area strengthens the others. Evidence informs pedagogy, pedagogy produces new evidence, and impact begins the next learning cycle.</p><a className="text-link" href="#in-practice">See the framework in practice →</a></div>
            <ol className="pathway">
              <li className="learning"><span>1</span><div><strong>Clarify the learning</strong><small>Make the intended learning and success criteria explicit.</small></div></li>
              <li className="assessment"><span>2</span><div><strong>Plan the evidence</strong><small>Decide what will reveal successful learning.</small></div></li>
              <li className="pedagogy"><span>3</span><div><strong>Select the pedagogy</strong><small>Match instruction to the learning need.</small></div></li>
              <li className="impact"><span>4</span><div><strong>Evaluate and respond</strong><small>Interpret change and determine what happens next.</small></div></li>
            </ol>
          </div>
        </section>

        <section className="section" id="in-practice">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">Designed for professional use</p><h2>Use the framework in your context</h2><p>Move quickly from ideas to practical application in classrooms, coaching conversations and school improvement work.</p></div>
            <div className="audience-grid">{audiences.map(([title, text]) => <article className="audience-card" key={title}><span className="audience-icon" aria-hidden="true">↗</span><h3>{title}</h3><p>{text}</p><a href="#tools">Explore resources →</a></article>)}</div>
          </div>
        </section>

        <section className="section section-soft" id="professional-language">
          <div className="container language-panel">
            <div><p className="eyebrow">Shared professional language</p><h2>Make the reasoning visible.</h2><p>Precise language helps teams move from broad impressions to evidence-informed conclusions and purposeful next actions.</p></div>
            <blockquote><span>“</span><p>Compared with the starting evidence, the strongest change was...</p><footer>Professional dialogue prompt</footer></blockquote>
          </div>
        </section>

        <section className="section" id="tools">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">Practical resources</p><h2>Tools that support better decisions</h2><p>Build the site over time as a growing professional knowledge hub.</p></div>
            <div className="resource-grid">{resources.map((resource, index) => <a className="resource-card" href="#" key={resource}><span>{String(index + 1).padStart(2, "0")}</span><strong>{resource}</strong><em>→</em></a>)}</div>
          </div>
        </section>

        <section className="section final-cta" id="about">
          <div className="container"><p className="eyebrow eyebrow-light">A framework for continuous improvement</p><h2>Clarity is not the end point.</h2><p>It enables educators to make better decisions for every learner, every day.</p><a className="button button-light" href="#four-questions">Begin with the four questions</a></div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><div><strong>Assessment Informed Teaching Framework</strong><p>Learning · Evidence · Pedagogy · Impact</p></div><p>Built as a practical resource for professional learning and instructional decision-making.</p></div></footer>
    </>
  );
}
