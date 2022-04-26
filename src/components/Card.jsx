import { v4 as uuidv4 } from "uuid";
const Card = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map((book) => (
          <div key={uuidv4()} className="card col-md-4 mt-5 shadow">
            <img src={book.img} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-secondary">{book.title}</h5>
              <h6>{book.author}</h6>
              <p className="card-text">{book.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
