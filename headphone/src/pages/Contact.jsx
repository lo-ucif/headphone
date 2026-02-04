import Text3line from "../components/text3line";
import { useState } from "react";
import imgst01 from "../img/tom iphone.webp";
import "../style/contact.css";
import Contact4but from "../components/contact4but";

export default function Contact() {
  const icons = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M14 18.6666V13.9999M14 9.33325H14.0117M25.6667 13.9999C25.6667 20.4432 20.4434 25.6666 14 25.6666C7.55672 25.6666 2.33337 20.4432 2.33337 13.9999C2.33337 7.5566 7.55672 2.33325 14 2.33325C20.4434 2.33325 25.6667 7.5566 25.6667 13.9999Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 38 38"
      fill="none"
    >
      <path
        d="M7.67949 9.65031L15.992 5.15364C16.9162 4.65476 17.95 4.39355 19.0003 4.39355C20.0506 4.39355 21.0844 4.65476 22.0087 5.15364L30.3212 9.65031C31.3242 10.1917 32.1625 10.9938 32.7477 11.9719C33.3329 12.9501 33.6433 14.068 33.6462 15.2078V27.2728C33.6462 28.9525 32.9789 30.5634 31.7912 31.7512C30.6034 32.9389 28.9925 33.6061 27.3128 33.6061H10.6878C9.00812 33.6061 7.39721 32.9389 6.20948 31.7512C5.02175 30.5634 4.35449 28.9525 4.35449 27.2728V15.2078C4.35733 14.068 4.66772 12.9501 5.25292 11.9719C5.83813 10.9938 6.67646 10.1917 7.67949 9.65031Z"
        stroke="black"
        strokeWidth="1.5"
      />
      <path
        d="M4.60742 13.4502L15.8333 19.9419C16.796 20.4977 17.8882 20.7904 18.9999 20.7904C20.1117 20.7904 21.2038 20.4977 22.1666 19.9419L33.4716 13.6085"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 38 38"
      fill="none"
    >
      <path
        d="M12.667 17.4167V25.3334M12.667 12.6667V12.6826M19.0003 25.3334V17.4167M25.3337 25.3334V20.5834C25.3337 19.7436 25 18.9381 24.4062 18.3442C23.8123 17.7504 23.0068 17.4167 22.167 17.4167C21.3271 17.4167 20.5217 17.7504 19.9278 18.3442C19.334 18.9381 19.0003 19.7436 19.0003 20.5834"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75 11.0833C4.75 9.40363 5.41726 7.79272 6.60499 6.60499C7.79272 5.41726 9.40363 4.75 11.0833 4.75H26.9167C28.5964 4.75 30.2073 5.41726 31.395 6.60499C32.5827 7.79272 33.25 9.40363 33.25 11.0833V26.9167C33.25 28.5964 32.5827 30.2073 31.395 31.395C30.2073 32.5827 28.5964 33.25 26.9167 33.25H11.0833C9.40363 33.25 7.79272 32.5827 6.60499 31.395C5.41726 30.2073 4.75 28.5964 4.75 26.9167V11.0833Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 38 38"
      fill="none"
    >
      <path
        d="M19.0003 3.16675C16.9211 3.16675 14.8622 3.57629 12.9412 4.37199C11.0202 5.16769 9.27473 6.33396 7.80447 7.80422C4.83514 10.7735 3.16699 14.8008 3.16699 19.0001C3.16699 25.9984 7.71116 31.9359 13.997 34.0417C14.7887 34.1684 15.042 33.6776 15.042 33.2501V30.5742C10.6562 31.5242 9.72199 28.4526 9.72199 28.4526C8.99366 26.6159 7.96449 26.1251 7.96449 26.1251C6.52366 25.1434 8.07533 25.1751 8.07533 25.1751C9.65866 25.2859 10.4978 26.8059 10.4978 26.8059C11.8753 29.2126 14.2028 28.5001 15.1053 28.1201C15.2478 27.0909 15.6595 26.3942 16.1028 25.9984C12.5878 25.6026 8.89866 24.2409 8.89866 18.2084C8.89866 16.4509 9.50033 15.0417 10.5295 13.9176C10.3712 13.5217 9.81699 11.8751 10.6878 9.73758C10.6878 9.73758 12.0178 9.31008 15.042 11.3526C16.2928 11.0042 17.6545 10.8301 19.0003 10.8301C20.3462 10.8301 21.7078 11.0042 22.9587 11.3526C25.9828 9.31008 27.3128 9.73758 27.3128 9.73758C28.1837 11.8751 27.6295 13.5217 27.4712 13.9176C28.5003 15.0417 29.102 16.4509 29.102 18.2084C29.102 24.2567 25.397 25.5867 21.8662 25.9826C22.4362 26.4734 22.9587 27.4392 22.9587 28.9117V33.2501C22.9587 33.6776 23.212 34.1842 24.0195 34.0417C30.3053 31.9201 34.8337 25.9984 34.8337 19.0001C34.8337 16.9208 34.4241 14.8619 33.6284 12.9409C32.8327 11.0199 31.6664 9.27448 30.1962 7.80422C28.7259 6.33396 26.9805 5.16769 25.0595 4.37199C23.1385 3.57629 21.0796 3.16675 19.0003 3.16675Z"
        fill="black"
      />
    </svg>,
  ];

  const [active, setActive] = useState(null);

  const contactItems = [
    {
      title: "About me",
      text: "Software Engineering student | Front-End development. I work with Figma for UI/UX design and build interfaces using React and JavaScript, with experience in Java.",
      svg: icons[0],
      link: null,
    },
    {
      title: "Contact us",
      svg: icons[1],
      link: "https://mail.google.com/mail/?view=cm&to=louciftamer3@gmail.com",
    },
    {
      title: "LinkedIn",
      svg: icons[2],
      link: "https://www.linkedin.com/in/ahmed-loucif-757854342",
    },
    {
      title: "GitHub",
      svg: icons[3],
      link: "https://github.com/lo-ucif",
    },
  ];

  return (
    <div className="contact">
      <Text3line
        title01={"Contact"}
        title02={"Contact me for more information"}
        title03={"+3"}
      />
      <div className="contactprepre">
        <div className="contactpref1">
          {contactItems.map((item, index) => {
            const button = (
              <Contact4but
                key={index}
                title={item.title}
                text={item.text}
                svg={item.svg}
                active={active}
                onClick={() => setActive(index + 1)}
              />
            );

            if (item.link) {
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  {button}
                </a>
              );
            }

            return button;
          })}
        </div>

        <div className="contactpref2">
          <img src={imgst01} />
        </div>
      </div>
    </div>
  );
}
