import "../style/home.css";
import Text3line from "./text3line";
import Home2text from "./home2text";
export default function Home02() {
  return (
    <div className="home02">
      <Text3line
        title01="choose"
        title02="Why choose our headphones"
        title03="+ 3 Import special to choose"
      />
      <div className="home02pre">
        <div className="container">
          <Home2text
            className="item"
            value={"Crystal-Clear Audio Quality"}
            logo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="38"
                viewBox="0 0 35 38"
                fill="none"
              >
                <path
                  d="M2.91675 15.8333V20.5833M8.75008 9.5V26.9167M14.5834 4.75V33.25M20.4167 12.6667V23.75M26.2501 7.91667V28.5M32.0834 15.8333V20.5833"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <Home2text
            className="item"
            value={"Immersive Noise Isolation"}
            logo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M28.0001 18.6667H26.2094M12.1707 4.62675C13.9757 4.01898 15.8995 3.84957 17.7829 4.13253C19.6663 4.41549 21.4554 5.14269 23.0021 6.254C24.5488 7.36532 25.8088 8.82884 26.6779 10.5236C27.547 12.2183 28.0002 14.0955 28.0001 16.0001V20.4574M2.66675 2.66675L29.3334 29.3334M27.2187 27.2187C26.7188 27.7189 26.0406 27.9999 25.3334 28.0001H24.0001C23.2928 28.0001 22.6146 27.7191 22.1145 27.219C21.6144 26.7189 21.3334 26.0407 21.3334 25.3334V21.3334M4.00008 18.6667H8.00008C8.70733 18.6667 9.3856 18.9477 9.8857 19.4478C10.3858 19.9479 10.6667 20.6262 10.6667 21.3334V25.3334C10.6667 26.0407 10.3858 26.7189 9.8857 27.219C9.3856 27.7191 8.70733 28.0001 8.00008 28.0001H6.66675C5.9595 28.0001 5.28123 27.7191 4.78113 27.219C4.28103 26.7189 4.00008 26.0407 4.00008 25.3334V16.0001C4.00007 14.4242 4.31045 12.8638 4.91349 11.4079C5.51654 9.95194 6.40045 8.62906 7.51475 7.51475"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
        <Home2text
          className="item"
          value={"A good battery for your life"}
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
            >
              <path
                d="M25.1875 9.75H9.75C6.83325 9.75 4.46875 12.1145 4.46875 15.0312V23.9688C4.46875 26.8855 6.83325 29.25 9.75 29.25H25.1875C28.1043 29.25 30.4688 26.8855 30.4688 23.9688V15.0312C30.4688 12.1145 28.1043 9.75 25.1875 9.75Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.4688 13.8125H10.9688C9.62256 13.8125 8.53125 14.9038 8.53125 16.25V22.75C8.53125 24.0962 9.62256 25.1875 10.9688 25.1875H17.4688C18.8149 25.1875 19.9062 24.0962 19.9062 22.75V16.25C19.9062 14.9038 18.8149 13.8125 17.4688 13.8125Z"
                fill="black"
              />
              <path
                d="M34.5312 16.25V22.75"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
}
