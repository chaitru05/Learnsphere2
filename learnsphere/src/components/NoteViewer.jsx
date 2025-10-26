import { useState, useEffect } from 'react';
import { BookOpen, FileText, Layers, CheckCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import ChapterSidebar from './ChapterSidebar';
import DiagramViewer from './DiagramViewer';
import FlashcardSection from './FlashcardSection';
import QuizSection from './QuizSection';
import './NoteViewer.css';

const NoteViewer = ({ data }) => {
  const [activeSection, setActiveSection] = useState('notes');
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 200) {
          const sectionId = section.getAttribute('data-section');
          if (sectionId) setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="notes-container">
      <ChapterSidebar
        chapters={data.output.courseOutline}
        activeChapter={activeChapter}
        onChapterClick={setActiveChapter}
        activeSection={activeSection}
        onSectionClick={setActiveSection}
      />

      <main className="notes-content">
        <header className="notes-header">
          <div className="header-gradient">
            <div className="header-content">
              <h1 className="course-title">{data.subject}</h1>
            </div>
          </div>
        </header>

        <div className="content-wrapper">
          <section data-section="notes" className="content-section notes-section">
            <div className="section-header">
              <FileText className="section-icon" />
              <h2>Course Notes</h2>
            </div>
            <div className="markdown-content">
              <ReactMarkdown>{data.output.notes}</ReactMarkdown>
            </div>
          </section>

          <div className="section-divider" />

          <section data-section="diagram" className="content-section diagram-section">
            <div className="section-header">
              <Layers className="section-icon" />
              <h2>Visual Diagram</h2>
            </div>
            <DiagramViewer diagram={data.output.diagram} />
          </section>

          <div className="section-divider" />

          <section data-section="chapters" className="content-section chapters-section">
            <div className="section-header">
              <BookOpen className="section-icon" />
              <h2>Course Outline</h2>
            </div>
            <div className="chapters-grid">
              {data.output.courseOutline.map((chapter, index) => (
                <div
                  key={index}
                  className={`chapter-card ${activeChapter === index ? 'active' : ''}`}
                  onClick={() => setActiveChapter(index)}
                >
                  <div className="chapter-number">
                    <span>{index + 1}</span>
                  </div>
                  <p className="chapter-title">{chapter}</p>
                  {activeChapter === index && (
                    <CheckCircle className="chapter-check" size={20} />
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="section-divider" />

          <section data-section="flashcards" className="content-section">
            <FlashcardSection flashcards={data.output.flashcards} />
          </section>

          <div className="section-divider" />

          <section data-section="quiz" className="content-section">
            <QuizSection quiz={data.output.quiz} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default NoteViewer;