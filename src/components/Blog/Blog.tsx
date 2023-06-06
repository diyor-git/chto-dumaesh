import { Link } from "react-router-dom";
import "./Blog.scss";

const articles = [
  {
    pk: 21,
    tag: "wqwq",
    title: "dsds",
    photo:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    description: "dsds",
    created_at: "dsds",
    updated_at: "dsds",
    content: "dsds",
  },
  {
    pk: 22,
    tag: "wqwq",
    title: "dsds",
    photo:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    description: "dsds",
    created_at: "dsds",
    updated_at: "dsds",
    content: "dsds",
  },
  {
    pk: 21,
    tag: "wqwq",
    title: "dsds",
    photo:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    description: "dsds",
    created_at: "dsds",
    updated_at: "dsds",
    content: "dsds",
  },
  {
    pk: 22,
    tag: "wqwq",
    title: "dsds",
    photo:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    description: "dsds",
    created_at: "dsds",
    updated_at: "dsds",
    content: "dsds",
  },
  {
    pk: 21,
    tag: "wqwq",
    title: "dsds",
    photo:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    description: "dsds",
    created_at: "dsds",
    updated_at: "dsds",
    content: "dsds",
  },
  {
    pk: 22,
    tag: "wqwq",
    title: "dsds",
    photo:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    description: "dsds",
    created_at: "dsds",
    updated_at: "dsds",
    content: "dsds",
  },
  {
    pk: 21,
    tag: "wqwq",
    title: "dsds",
    photo:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    description: "dsds",
    created_at: "dsds",
    updated_at: "dsds",
    content: "dsds",
  },
  {
    pk: 22,
    tag: "wqwq",
    title: "dsds",
    photo:
      "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    description: "dsds",
    created_at: "dsds",
    updated_at: "dsds",
    content: "dsds",
  },
];
const memes = [
  {
    id: 1,
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    meme: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    title: "sa",
    description: "sa",
    mem: "sa",
  },
  {
    id: 2,
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    meme: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    title: "sa",
    description: "sa",
    mem: "sa",
  },
  {
    id: 1,
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    meme: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    title: "sa",
    description: "sa",
    mem: "sa",
  },
  {
    id: 2,
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    meme: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    title: "sa",
    description: "sa",
    mem: "sa",
  },
  {
    id: 1,
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    meme: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    title: "sa",
    description: "sa",
    mem: "sa",
  },
  {
    id: 2,
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    meme: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    title: "sa",
    description: "sa",
    mem: "sa",
  },
  {
    id: 1,
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    meme: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    title: "sa",
    description: "sa",
    mem: "sa",
  },
  {
    id: 2,
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    meme: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    title: "sa",
    description: "sa",
    mem: "sa",
  },
  {
    id: 1,
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    meme: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    title: "sa",
    description: "sa",
    mem: "sa",
  },
  {
    id: 2,
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    meme: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    title: "sa",
    description: "sa",
    mem: "sa",
  },
  {
    id: 1,
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    meme: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    title: "sa",
    description: "sa",
    mem: "sa",
  },
  {
    id: 2,
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
    meme: "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
    title: "sa",
    description: "sa",
    mem: "sa",
  },
];
const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-container">
        <div className="content">
          <div className="first-content">
            <h2 className="title">Последние новости</h2>
            <div className="cards">
              {articles.map((a, key: number) => (
                <Link to={`/article/${a.pk}`}>
                  <div key={key} className="card">
                    <div className="img">
                      <img src={a.photo} alt="Article" />
                    </div>
                    <div className="text">
                      {/* {a.tag && <button>{a.tag}</button>} */}
                      <h5>{a.title}</h5>
                      <p>{a.description && a.description.slice(0, 70)}...</p>
                      <h6>
                        Дата публикации:{" "}
                        {/* {moment(a.created_at).format("DD.MM.YYYY")} */}
                      </h6>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="side-bar">
            <nav>
              <h4>Скидки</h4>
              {memes.map((m, key: number) => (
                <Link to={`/memes`}>
                  <div key={key} className="memes">
                    <h5>{m.title}</h5>
                    <img src={m.meme} alt="Meme" />
                    <h6>
                      Дата публикации:
                      {/* {moment(m.created_at).format("DD.MM.YYYY")} */}
                    </h6>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
