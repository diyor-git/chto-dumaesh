import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../Forum.scss";

const ForumQuestion = () => {
  const question = [
    {
      id: 1,
      shortQuestion: "Как лечить боль в горле",
      question: "У меня заболела горло. Как лечить боль в горле?",
      answers: 8,
      views: 10,
    },
    {
      id: 2,
      shortQuestion: "Как лечить боль в голове",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore est non, sint odio excepturi cupiditate obcaecati at ab vitae quisquam animi officiis qui, ullam, sequi provident iusto eos voluptatibus esse",
      answers: 8,
      views: 10,
    },
    {
      id: 1,
      shortQuestion: "Как лечить боль в горле",
      question: "У меня заболела горло. Как лечить боль в горле?",
      answers: 8,
      views: 10,
    },
    {
      id: 2,
      shortQuestion: "Как лечить боль в голове",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore est non, sint odio excepturi cupiditate obcaecati at ab vitae quisquam animi officiis qui, ullam, sequi provident iusto eos voluptatibus esse",
      answers: 8,
      views: 10,
    },
    {
      id: 1,
      shortQuestion: "Как лечить боль в горле",
      question: "У меня заболела горло. Как лечить боль в горле?",
      answers: 8,
      views: 10,
    },
    {
      id: 2,
      shortQuestion: "Как лечить боль в голове",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore est non, sint odio excepturi cupiditate obcaecati at ab vitae quisquam animi officiis qui, ullam, sequi provident iusto eos voluptatibus esse",
      answers: 8,
      views: 10,
    },
    {
      id: 1,
      shortQuestion: "Как лечить боль в горле",
      question: "У меня заболела горло. Как лечить боль в горле?",
      answers: 8,
      views: 10,
    },
    {
      id: 2,
      shortQuestion: "Как лечить боль в голове",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore est non, sint odio excepturi cupiditate obcaecati at ab vitae quisquam animi officiis qui, ullam, sequi provident iusto eos voluptatibus esse",
      answers: 8,
      views: 10,
    },
    {
      id: 1,
      shortQuestion: "Как лечить боль в горле",
      question: "У меня заболела горло. Как лечить боль в горле?",
      answers: 8,
      views: 10,
    },
    {
      id: 2,
      shortQuestion: "Как лечить боль в голове",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore est non, sint odio excepturi cupiditate obcaecati at ab vitae quisquam animi officiis qui, ullam, sequi provident iusto eos voluptatibus esse",
      answers: 8,
      views: 10,
    },
    {
      id: 1,
      shortQuestion: "Как лечить боль в горле",
      question: "У меня заболела горло. Как лечить боль в горле?",
      answers: 8,
      views: 10,
    },
    {
      id: 2,
      shortQuestion: "Как лечить боль в голове",
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore est non, sint odio excepturi cupiditate obcaecati at ab vitae quisquam animi officiis qui, ullam, sequi provident iusto eos voluptatibus esse",
      answers: 8,
      views: 10,
    },
  ];
  const params = useParams();
  return (
    <div className="forumQuestion">
      <div className="container">
        <div className="content">
          <h2 className="title">99 Вопросов</h2>
          <div className="questions">
            {question.map((e: any, key: number) => (
              <Link to={`/forum/answers/${e.id}`}>
                <div className="question">
                  <div className="answers">
                    <span>{e.views} просмотров</span> |
                    <span>{e.answers} ответов</span>
                  </div>
                  <div className="question-content">
                    <h3 className="question-title">{e.shortQuestion}</h3>
                    <p className="question-text">{e.question}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumQuestion;
