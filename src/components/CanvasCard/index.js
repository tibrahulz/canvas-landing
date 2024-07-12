'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { AiOutlineShareAlt } from 'react-icons/ai';
// import { AiOutlineShareAlt } from 'react-icons/ai';
import { BsTelegram, BsThreeDotsVertical } from 'react-icons/bs';
import { BsFillPlayFill } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { MdOutlineClose, MdOutlineContentCopy } from 'react-icons/md';
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share';

import { clientSideUri } from '../../utils/app_config';

import CanvasViews from './CanvasViews';
import { StyledCanvasCard } from './StyledCanvasCard';
import Tags from './Tags';


const shareOptions = [
  {
    label: 'Facebook',
    render: shareUrl => {
      return (
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon className="shareIcon" round logoFillColor="red" />
        </FacebookShareButton>
      );
    }
  },
  {
    label: 'Messenger',
    render: shareUrl => {
      return (
        <FacebookMessengerShareButton url={shareUrl}>
          <FacebookMessengerIcon className="shareIcon" round />
        </FacebookMessengerShareButton>
      );
    }
  },
  {
    label: 'Twitter',
    render: shareUrl => {
      return (
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon className="shareIcon" round />
        </TwitterShareButton>
      );
    }
  },
  {
    label: 'WhatsApp',
    render: shareUrl => {
      return (
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon className="shareIcon" round />
        </WhatsappShareButton>
      );
    }
  },
  {
    label: 'Linkedin',
    render: shareUrl => {
      return (
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon className="shareIcon" round />
        </LinkedinShareButton>
      );
    }
  },
  {
    label: 'Gmail',
    render: shareUrl => {
      return (
        <div url={shareUrl}>
          <CgMail className="shareIcon" round />
        </div>
      );
    }
  },
  {
    label: 'Telegram',
    render: shareUrl => {
      return (
        <div url={shareUrl}>
          <BsTelegram
            className="shareIcon"
            style={{ color: '#039be5' }}
            round
          />
        </div>
      );
    }
  }
];
const isDisplayViews = process.env.NEXT_PUBLIC_DISPLAY_VIEWS === 'enabled';

function CanvasCard(props) {
  const {
    title = 'Untitled Canvas',
    type = '',
    price = 0.099,
    description = 'No Description Available',
    subCanvas = 2,
    userImage = '/images/humans.png',
    userName = 'Not Available',
    image = '',
    language = 'ENGLISH',
    customClassName = ' ',
    customStyle = {},
    engagment,
    currency,
    id,
    isStandAlone,
    userId,
    format
  } = props;

  const [share, setShare] = useState(null);
  const [copied, setCopied] = useState(false);
  const [subCanvasBox, setSubCanvasBox] = useState(false);

  const router = useRouter();

  let shareUrl = `${clientSideUri}/canvas/${id}`;

  function goToProfile(e) {
    e.stopPropagation();
    // router.push(`${appRoutes.PROFILE}/${userId}`);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied('Copied!');
    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  const handleSubCanvasBox = () => {
    if (subCanvas?.length > 0) {
      setSubCanvasBox(true);
    }
  };

  return (
    <StyledCanvasCard
      className={customClassName}
      style={customStyle}
      image={image}
      onClick={() => {
        if (isStandAlone) {
          router.push(`/canvas/${format}-${id}`);
        } else {
          router.push(`/canvas/${id}`);
        }
      }}
    >
      <div className="layer">
        <div className="canvasCardBody">
          <div className="heading">
            <img
              src={`/images/${isStandAlone
                ? format[0] === 'audio'
                  ? 'audio_icon_standalone.png'
                  : format[0] === 'video'
                    ? 'video_icon.svg'
                    : 'icon-text-canvas.png'
                : 'icon-text-canvas.png'
                }`}
              alt="Audio"
            />
            {title?.length > 0 ? title?.match(/.{1,40}/g)[0] : ''}
            {title?.length > 40 && '...'}
          </div>
          <p className="descriptions">
            {description?.length > 0 ? description?.match(/.{1,75}/g)[0] : ''}
            {description?.length > 40 && '...'}
          </p>
          <Tags
            type={type}
            value={price}
            language={language}
            engagment={engagment}
            currency={currency}
          />
          <div
            className="subCanvas"
            onClick={e => {
              e.stopPropagation();
              handleSubCanvasBox();
            }}
          >
            <p className="description">{subCanvas?.length || 0} Sub-Canvases</p>
          </div>
          {isDisplayViews && <CanvasViews views={5} />}
        </div>
        {subCanvasBox && (
          <div className="subCanvasBox">
            <div className="shareCanvasCardTitle">
              <p>SubCanvas</p>
              <MdOutlineClose
                className="closeBtn"
                onClick={e => {
                  e.stopPropagation();
                  setSubCanvasBox(false);
                }}
              />
            </div>
            {subCanvas?.map(singleSubCanvas => (
              <div className="subCanvases" key={singleSubCanvas._id}>
                <img
                  className="subCanvasImage"
                  src={
                    singleSubCanvas.cover_image || 'https://picsum.photos/200'
                  }
                  alt="userImage"
                />
                <p>{singleSubCanvas?.title || 'No Title'}</p>
              </div>
            ))}
          </div>
        )}
        {isStandAlone && (
          <div className="btn_area">
            <div className="play-button">
              <BsFillPlayFill className="icon" />
            </div>
          </div>
        )}

        {!share ? (
          <div className="footer-canvas">
            <div
              role="presentation"
              className="userCard"
              onClick={goToProfile}
              onKeyDown={goToProfile}
            >
              <img
                className="userImage"
                src={userImage || '/images/humans.png'}
                alt="userImage"
              />

              <p className="userName">@{userName}</p>
            </div>
          </div>
        ) : (
          <div className="shareCanvasCard">
            <div className="shareCanvasCardTitle">
              <p>Share Canvas</p>
              <MdOutlineClose
                className="closeBtn"
                onClick={e => {
                  e.stopPropagation();
                  setShare(false);
                }}
              />
            </div>

            <div className="shareCanvas">
              <div className="copy">
                <MdOutlineContentCopy
                  onClick={e => {
                    e.stopPropagation();
                    copyToClipboard();
                  }}
                  className="copyBtn"
                />
              </div>
              <div className="share">
                {shareOptions.map(_option => {
                  return (
                    <div
                      key={_option.label}
                      onClick={e => {
                        e.stopPropagation();
                        copyToClipboard();
                      }}
                      style={{ margin: '0.25rem 0.6rem' }}
                    >
                      {_option.render(shareUrl)}
                    </div>
                  );
                })}
              </div>
            </div>
            {copied && <span className="copied">Copied</span>}
          </div>
        )}
      </div>
    </StyledCanvasCard>
  );
}

export default CanvasCard;
