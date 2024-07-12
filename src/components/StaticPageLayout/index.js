import { useRouter } from 'next/router';
import NewGradientButton from '../NewGradientButton';
import StaticFooter from '../StaticFooter';
import StaticNavBar from '../StaticNavBar';
import { StaticPageWrapper } from './StyledStaticPageLayout';
import { appRoutes } from '../utils/constants/app_constants';
import { useState } from 'react';
import LoginSignupModal from '../LoginSignupModal';
import { userService } from 'src/services';

function StaticPageLayout(props) {
  const {
    className,
    contentClassName,
    navbarTextColor,
    defaultNavbarBackground,
    showNavbarLogo,
    showBanner = false,
    subDomain = false,
    facebook,
    twitter,
    linkedIn,
    youtube,
    brand_logo,
    footer_logo
  } = props;

  const router = useRouter();
  const [showLoginSignupModal, setShowLoginSignupModal] = useState(false);
  const user = userService?.userValue;

  function handleOnCloseModal() {
    setShowLoginSignupModal(!showLoginSignupModal);
  }

  function onClickJoin() {
    if (user) {
      return router.push(appRoutes.CANVASES);
    }
    setShowLoginSignupModal(!showLoginSignupModal);
  }

  return (
    <StaticPageWrapper className={className}>
      <div className="header_container">
        <StaticNavBar
          navbarTextColor={navbarTextColor}
          defaultNavbarBackground={defaultNavbarBackground}
          showNavbarLogo={showNavbarLogo}
          showBanner={showBanner}
          subDomain={subDomain}
          brand_logo={brand_logo}
        />
        {/* <div className="black-background"></div> */}
      </div>
      <div className={`page_content_container ${contentClassName}`}>
        {props.children}
      </div>
      {/* <section className="canvasIntro">
        <h3 className="canvasIntroHeading mobile-intro">
          Your Creation, Your Rules, Your Profits!
        </h3>
        <div className="canvasIntroButtons">
          <NewGradientButton onClick={onClickJoin}>
            Monetize Now
          </NewGradientButton>
        </div>
        <p className="free-forever-no">
          Free Forever. No Credit Card Required.
        </p>
      </section> */}
      {showLoginSignupModal && (
        <LoginSignupModal
          isModal={true}
          handleOnCloseModal={handleOnCloseModal}
          activeForm="signup"
        />
      )}
      <StaticFooter
        subDomain={subDomain}
        facebook={facebook}
        twitter={twitter}
        linkedIn={linkedIn}
        youtube={youtube}
        brand_logo={brand_logo}
        footer_logo={footer_logo}
      />
    </StaticPageWrapper>
  );
}

export default StaticPageLayout;
