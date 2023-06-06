import React from "react";

const answers = [
  {
    id: 1,
    user: "@malikov",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi dolor corrupti porro asperiores consequuntur nemo corporis fugiat omnis beatae recusandae, temporibus, accusamus labore inventore ipsa quae magnam voluptatem at Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi dolor corrupti porro asperiores consequuntur nemo corporis fugiat omnis beatae recusandae, temporibus, accusamus labore inventore ipsa quae magnam voluptatem at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi dolor corrupti porro asperiores consequuntur nemo corporis fugiat omnis beatae recusandae, temporibus, accusamus labore inventore ipsa quae magnam voluptatem at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi dolor corrupti porro asperiores consequuntur nemo corporis fugiat omnis beatae recusandae, temporibus, accusamus labore inventore ipsa quae magnam voluptatem at?",
    likes: 10,
  },
  {
    user: "@malikov",
    id: 1,
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi dolor corrupti porro asperiores consequuntur nemo corporis fugiat omnis beatae recusandae, temporibus, accusamus labore inventore ipsa quae magnam voluptatem at?",
    likes: 10,
  },
  {
    user: "@malikov",
    id: 1,
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi dolor corrupti porro asperiores consequuntur nemo corporis fugiat omnis beatae recusandae, temporibus, accusamus labore inventore ipsa quae magnam voluptatem at?",
    likes: 10,
  },
  {
    user: "@malikov",
    id: 1,
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi dolor corrupti porro asperiores consequuntur nemo corporis fugiat omnis beatae recusandae, temporibus, accusamus labore inventore ipsa quae magnam voluptatem at?",
    likes: 10,
  },
];

const question = {
  id: 1,
  shortQuestion: "Как лечить боль в горле",
  question: "У меня заболела горло. Как лечить боль в горле?",
  answers: 8,
  views: 10,
};
const ForumAnswers = () => {
  return (
    <div className="forumAnswers">
      <div className="container">
        <div className="content">
          <div className="forumAnswers__question">
            <div className="forumAnswers__question__title">
              <h2>{question.shortQuestion}</h2>
            </div>
            <div className="forumAnswers__question__text">
              <p>{question.question}</p>
            </div>
          </div>
          <div className="forumAnswers__answers">
            <h3>Ответы</h3>
            {answers.map((answer) => (
              <div className="forumAnswers__answers__item">
                <div className="forumAnswers__answers__item__text">
                  <h4>{answer.user}:</h4>
                  <p>{answer.answer}</p>
                </div>
                <div className="forumAnswers__answers__item__likes">
                  <span>
                    <i className="fa-regular fa-heart" /> {answer.likes}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumAnswers;
