import Link from "next/link";
import { useEffect, useState } from "react";
import ContainerWrapper from "./ContainerWrapper";
import { getPresignedUrlWithKey } from "../../../services/s3";
import { LOGO } from "../constants/imageKeys";
import HamburgerMenu from "../../global/components/HamburgerMenu";
// import awsconfig from '../../../../src/aws-exports'

// logger.debug('awsconfigs', awsconfig)

const NavBar = (): JSX.Element => {
  const [imgUrl, setImgUrl] = useState<string | undefined>();

  const fetchImage = async () => {
    const { error, presignedUrls } = await getPresignedUrlWithKey(
      "publicAssets",
      LOGO
    );

    setImgUrl(presignedUrls);
  };

  useEffect(() => {
    fetchImage();
  }, [imgUrl]);

  return (
    <ContainerWrapper color={"white"}>
      <div className="grid grid-cols-2 grid-rows-1">
        <Link href="/" className="w-20">
          {imgUrl ? (
            <img src={imgUrl} alt="cleaning with love logo" />
          ) : (
            <p>Loading...</p>
          )}
        </Link>
        <div className="flex justify-around items-center max-sm:hidden">
          <Link
            href="/booknow"
            className="font-sans text-primary focus:text-secondary"
          >
            Book Now
          </Link>
          <Link
            href="/"
            className="font-sans hover:text-tertiary focus:text-secondary focus:font-semibold"
          >
            Home
          </Link>
          <Link
            href="/faq"
            className="font-sans hover:text-tertiary focus:text-secondary focus:font-semibold"
          >
            FAQ
          </Link>
          {/* <Link
            href="/aboutus"
            className="font-sans hover:text-secondary focus:text-secondary focus:font-semibold"
          >
            About Us
          </Link> */}
        </div>
        <div className="sm:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default NavBar;
