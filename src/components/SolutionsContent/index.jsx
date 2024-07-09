import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import MicroLock from '../../../public/images/gifs/lap-gif.gif';
import EmbedLock from '../../../public/images/gifs/embed-gif.gif';
import UploadGif from '../../../public/images/gifs/upload-gif.gif';
import EarnGif from '../../../public/images/gifs/earn-gif.gif';
import Custom from '../../../public/images/gifs/customize-gif.gif';
import "./styles.css";
import Image from "next/image";
import Title from "antd/es/skeleton/Title";
import Paragraph from "antd/es/skeleton/Paragraph";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { title: 'UPLOAD', description: 'Drag, drop, add descriptions & upload.', image: UploadGif },
  { title: 'ADD THE MICRO LOGIC', description: 'Lock the peaks of your content & build unique interactions.', image: MicroLock },
  { title: 'CUSTOMIZE', description: 'Select from micro payments, promocodes, forms & more', image: Custom },
  { title: 'EMBED', description: 'Extract your unique embed code to add on your website.', image: EmbedLock },
  { title: 'EARN ', description: 'Earn audience engagement & build new revenue channels.', image: EarnGif },
];

export default function Scene() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      <div style={{ position: 'absolute' }}>
        <div >
          <ul>
            {sections.map((section, index) => (
              <li key={index}>
                <Title level={2}>{section.title}</Title>
                <Paragraph>{section.description}</Paragraph>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div ref={slider} className="container">
        {sections.map((num, index) => (
          <div
            className="panel red"
            key={index}
          >
            <Image
              src={num.image}
              style={{
                height: 450,
                width: 500,
                objectFit: 'contain'

              }}
              alt={num.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
