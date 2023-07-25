import ImageCloudy from "../ImageCloudy";

const CloudyContainer = () => {
  return (
    <div>
      <ImageCloudy left="-10rem" top="50%" />
      <ImageCloudy left="-8rem" top="25%" />
      <ImageCloudy right="-8rem" top="25%" />
      <ImageCloudy right="-5rem" top="50%" />
    </div>
  );
};

export default CloudyContainer;
