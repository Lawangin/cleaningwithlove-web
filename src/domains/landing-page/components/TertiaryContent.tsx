import { useEffect, useState } from "react";
import { getPresignedUrlWithKey } from "../../../services/s3";
import { CLEANING_GUY_IMAGE } from "../constants/imageKeys";
import CallToActionCard from "./CallToActionCard";

const TertiaryContent = (): JSX.Element => {
  const [imgUrl, setImgUrl] = useState<string | undefined>();

  const fetchImage = async () => {
    const { error, presignedUrls } = await getPresignedUrlWithKey(
      "publicAssets",
      CLEANING_GUY_IMAGE
    );

    setImgUrl(presignedUrls);
  };

  useEffect(() => {
    fetchImage();
  }, [imgUrl]);

  return (
    <div className="grid gap-2 grid-cols-2 grid-rows-1 justify-items-center max-sm:grid-cols-1">
      {imgUrl ? (
        <img src={imgUrl} alt="cartoon man vacumming" className="max-w-lg" />
      ) : (
        <p>Loading...</p>
      )}
      <div className="place-self-center">
        <CallToActionCard />
      </div>
    </div>
  );
};

export default TertiaryContent;
