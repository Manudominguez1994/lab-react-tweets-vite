import ProfileImg from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  // console.log(props);
  const { name, image, handle } = props.tweet.user;
  const { timestamp, message } = props.tweet;
  return (
    <div className="tweet">
      <ProfileImg image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />

          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
