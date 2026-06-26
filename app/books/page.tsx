// app/books/page.tsx
import SiteHeader from '@/app/components/SiteHeader';
import SiteFooter from '@/app/components/SiteFooter';
import '../css/books.css';
import '../css/adaptivebooks.css';

export default function BooksPage() {
  return (
    <div className="container">
      {/* HEADER & NAVIGATION */}
      <SiteHeader />

      {/* BOOKS CONTENT */}
      <div className="projectWrapper">
        <h4>Books that I would advise to read everybody.</h4>
        <div className="containerBooks">
          
          {/* FIRST BOOK */}
          <div className="book">
            <div className="bookPhotoLeft1"></div>
            <div className="bookDescriptionRight1">
              <p>Most people would say that it is a good book for people who just started working as QA.</p>
              <p>However, I am sure it is a good idea to read it before applying for a such position. There are a lot of basic and useful information about testing. That may clarify what testers do at work and what you should be able to do for starting working at a junior position. Definitely, all information will help to find a first job.</p>
            </div>
          </div>

          {/* SECOND BOOK */}
          <div className="book">
            <div className="bookDescriptionLeft2">
              <p>Must read book. The main attention is focused on different testing techniques. I'm sure it useful to refresh knowledge sometimes, despite the level of experience. And it is always possible to find something new while reading. Also, there are good examples of testing techniques and exercises after each chapter.</p>
              <p>Revising test techniques and combining it with a rising experience helps me to watch at a project I work on from different points,it opens new ways to test, brings new ideas.</p>
              <p>Also, I found there some new information about white-box testing. Hope, will be able to apply it soon. Provided examples and exercises help to understand information deeply.</p>
            </div>
            <div className="bookPhotoRight2"></div>
          </div>

        </div>
      </div>

      {/* FOOTER BAR */}
      <SiteFooter />
    </div>
  );
}