import { useEffect, useState } from 'react';

import { CanvasCardTags } from './StyledCanvasCard';

function Tags(props) {
  const [currency, setCurrency] = useState('₹');
  useEffect(() => {
    if (props.currency) {
      if (props.currency == 'INR') {
        setCurrency('₹');
      }
      if (props.currency == 'USD') {
        setCurrency('$');
      }
    }
  }, [props?.currency]);

  useEffect(() => {
    if (!props.currency) {
      if (props.userCountry == 'US') {
        setCurrency('$');
      } else {
        setCurrency('₹');
      }
    }
  }, [props?.userCountry, props.currency]);
  // if (props?.type == 'NFT') {
  //   return (
  //     <CanvasCardTags>
  //       <p className="tags">{props?.type}</p>
  //       <div className="value">
  //         <FaEthereum />
  //         <span>{props?.value}</span>
  //       </div>
  //       <p className="language">{props?.language?.toUpperCase()}</p>
  //       {/* {props?.engagment && (
  //         <div className="engagementGroup">
  //           <div className="group">
  //             <p>μ</p>
  //           </div>
  //           <p className="engagement">{props?.engagment}</p>
  //         </div>
  //       )} */}
  //     </CanvasCardTags>
  //   );
  // }
  // if (props?.type == 'microNFT') {
  //   return (
  //     <CanvasCardTags>
  //       <div className="microNft">
  //         <div className="micro">
  //           <p>μ</p>
  //         </div>

  //         <p className="microTags">NFT</p>
  //       </div>
  //       <div className="value">
  //         <FaEthereum />
  //         <span>{props?.value}</span>
  //       </div>
  //       <p className="language">{props?.language?.toUpperCase()}</p>
  //       {/* {props?.engagment && (
  //         <div className="engagementGroup">
  //           <div className="group">
  //             <p>μ</p>
  //           </div>
  //           <p className="engagement">{props?.engagment}</p>
  //         </div>
  //       )} */}
  //     </CanvasCardTags>
  //   );
  // }
  // if (props?.type == 'multimicroNFT') {
  //   return (
  //     <CanvasCardTags>
  //       <div className="microNft">
  //         <div className="micro">
  //           <p>μ</p>
  //         </div>
  //         <p className="microTags">NFT</p>
  //       </div>
  //       <div className="value">
  //         <FaEthereum />
  //         <span>MULTI</span>
  //       </div>
  //       <p className="language">{props?.language?.toUpperCase()}</p>
  //       {/* {props?.engagment && (
  //         <div className="engagementGroup">
  //           <div className="group">
  //             <p>μ</p>
  //           </div>
  //           <p className="engagement">{props?.engagment}</p>
  //         </div>
  //       )} */}
  //     </CanvasCardTags>
  //   );
  // }
  if (props?.type == 'paid') {
    return (
      <CanvasCardTags>
        <div className="value">
          <span>
            {currency}
            {props?.value}
          </span>
        </div>
        <p className="language">{props?.language?.toUpperCase()}</p>
        {/* {props?.engagment && (
          <div className="engagementGroup">
            <div className="group">
              <p>μ</p>
            </div>
            <p className="engagement">{props?.engagment}</p>
          </div>
        )} */}
      </CanvasCardTags>
    );
  }

  if (props?.type == 'micropaid') {
    return (
      <CanvasCardTags>
        <div className="microValue">
          <div className="micropaid">
            <p>μ</p>
          </div>
          <span>
            {currency}
            {props?.value}
          </span>
        </div>
        <p className="language">{props?.language?.toUpperCase()}</p>
        {/* {props?.engagment && (
          <div className="engagementGroup">
            <div className="group">
              <img src="/images/boxgroup.svg" alt="group" />
            </div>
            <p className="engagement">{props?.engagment}</p>
          </div>
        )} */}
      </CanvasCardTags>
    );
  }
  if (props?.type == 'multimicropaid') {
    return (
      <CanvasCardTags>
        <div className="microValue">
          <div className="micropaid">
            <p>μ</p>
          </div>
          <span>MULTI</span>
        </div>
        <p className="language">{props?.language?.toUpperCase()}</p>
        {/* {props?.engagment && (
          <div className="engagementGroup">
            <div className="group">
              <p>μ</p>
            </div>
            <p className="engagement">{props?.engagment}</p>
          </div>
        )} */}
      </CanvasCardTags>
    );
  }
  if (props?.type == 'draft') {
    return (
      <CanvasCardTags>
        <p className="draft">DRAFT</p>
      </CanvasCardTags>
    );
  }
  if (
    props?.type == 'free' ||
    props?.type == 'NFT' ||
    props?.type == 'multimicroNFT' ||
    props?.type == 'microNFT'
  ) {
    return (
      <CanvasCardTags>
        <div className="flex">
          <div className="free">
            <p>NFT</p>
          </div>
          {/* <p className="language">{props?.language?.toUpperCase()}</p> */}
        </div>

        {/* {props?.engagment && (
          <div className="engagementGroup">
            <div className="group">
              <p>μ</p>
            </div>
            <p className="engagement">{props?.engagment}</p>
          </div>
        )} */}
      </CanvasCardTags>
    );
  }
  return null;
}
export default Tags;
