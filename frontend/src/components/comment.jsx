import "./comment.css";
import User1 from "../assets/user1.png";

const Comment = () => {
  return (
    <div className="comment-container">
      <div className="post-comment">
        <div className="list">
          <div className="comment-user">
            <div className="user-image">
              <img src={User1} />
            </div>
            <div className="user-meta">
              <div className="comment-username">Ali Copter</div>
              <div className="comment-day">10 days ago</div>
            </div>
          </div>
          <div className="comment-post">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            provident autem animi numquam incidunt minus aut, temporibus velit
            tempora magnam!
          </div>
        </div>
        <div className="list">
          <div className="comment-user">
            <div className="user-image">
              <img src={User1} />
            </div>
            <div className="user-meta">
              <div className="comment-username">Ali Copter</div>
              <div className="comment-day">10 days ago</div>
            </div>
          </div>
          <div className="comment-post">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            provident autem animi numquam incidunt minus aut, temporibus velit
            tempora magnam!
          </div>
        </div>
      </div>
      <div className="comment-box">
        <div className="user">
          <div className="comment-image">
            <img src={User1} alt="" />
          </div>
          <div className="comment-name">Farhoude</div>
        </div>
        <form action="">
          <textarea name="comment" placeholder="Enter Your Message"></textarea>
          <button className="comment-submit">Comment</button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
