import ImageCard from "../ImageCard";
import ProfileCard from "../ProfileCard";
import TextCard from "../TextCard";

const CardFactory = ({ type, data }: any) => {
  switch (type) {
    case "image":
      return <ImageCard imageSrc={data.src} altText={data.alt} />;
    case "text":
      return <TextCard text={data.text} />;
    case "profile":
      return (
        <ProfileCard name={data.name} bio={data.bio} avatar={data.avatar} />
      );
    default:
      return <div>Unknown Card Type</div>;
  }
};

export default CardFactory
