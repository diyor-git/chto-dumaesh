import { Link } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import "./Forum.scss";

const Forum = () => {
  const centers = [
    {
      id: 21,
      image:
        "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
      title: "Медицина",
    },
    {
      id: 22,
      image:
        "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
      title: "Программирование",
    },
    {
      id: 23,
      image:
        "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
      title: "Точные науки",
    },
    {
      id: 24,
      image:
        "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
      title: "Техника",
    },
  ];
  if (!centers) {
    return <Preloader />;
  }
  return (
    <div className="Forum">
      <div className="container">
        <h2 className="title">Форумы</h2>
        <div className="forum-content">
          {centers.map((e: any, key: number) => (
            <div className="carousel__item">
              <Link to={`/forum/${e.id}`}>
                <img src={e.image} className="course_img" alt="Center" />

                <div className="carousel__item__info">
                  <h2 className="carousel__item__title">{e.title}</h2>
                  <div>
                    <button className="centers-btn">
                      <span>Посетить</span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
