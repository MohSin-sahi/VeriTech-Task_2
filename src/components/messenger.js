import React from "react";
import "./style.css";

const Messenger = () => {
  return (
    <>
      <section className="section">
        <div className="col-1">
          <i className="fa-solid fa-comment col-1_icon checked"></i>
          <i className="fa-solid fa-user-group col-1_icon"></i>
          <i className="fa-solid fa-archway col-1_icon hidden"></i>
          <i className="fa-solid fa-comment-dots col-1_icon hidden"></i>
          <i className="fa-solid fa-box-archive col-1_icon hidden"></i>
          <i className="fa-solid fa-compass col-1_icon display"></i>

          <img src="./image/ben.jpg" alt="" className="col-1_img hidden" />
          <svg
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            className="col-1_svg hidden"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0">
              <rect
                x="-2.4"
                y="-2.4"
                width="28.80"
                height="28.80"
                rx="14.4"
                fill="#fff"
                strokewidth="0"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M11 5V19M6 8H8M6 11H8M6 14H8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </div>

        <div className="col-2">
          <div className="col-2_title">
            <h1 className="col-2_heading">Chats</h1>
            <i className="fa-solid fa-pen-to-square col-2_icon"></i>
          </div>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass col-2_icon"></i>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Messenger"
            />
          </div>
          <div className="users">
            <div className="user_box checked">
              <img src="./image/hannah.jpg" alt="" className="user_info-img" />
              <div className="user_detail">
                <p className="user_name">Hannah</p>
                <p className="user_info">You are now connected on Messenger</p>
              </div>
            </div>
            <div className="user_box">
              <img src="./image/ben.jpg" alt="" className="user_info-img" />
              <div className="user_detail">
                <p className="user_name">Ben</p>
                <p className="user_info">You are now connected on Messenger</p>
              </div>
            </div>
            <div className="user_box">
              <img src="./image/dave.jpg" alt="" className="user_info-img" />
              <div className="user_detail">
                <p className="user_name">Dave</p>
                <p className="user_info">You are now connected on Messenger</p>
              </div>
            </div>
            <div className="user_box">
              <img src="./image/steve.jpg" alt="" className="user_info-img" />
              <div className="user_detail">
                <p className="user_name">Steve</p>
                <p className="user_info">You are now connected on Messenger</p>
              </div>
            </div>
            <div className="user_box">
              <img
                src="./image/customer-1.jpg"
                alt=""
                className="user_info-img"
              />
              <div className="user_detail">
                <p className="user_name">Laura</p>
                <p className="user_info">You are now connected on Messenger</p>
              </div>
            </div>
            <div className="user_box">
              <img
                src="./image/customer-2.jpg"
                alt=""
                className="user_info-img"
              />
              <div className="user_detail">
                <p className="user_name">Robert</p>
                <p className="user_info">You are now connected on Messenger</p>
              </div>
            </div>
            <div className="user_box">
              <img src="./image/ben.jpg" alt="" className="user_info-img" />
              <div className="user_detail">
                <p className="user_name">Stefen</p>
                <p className="user_info">You are now connected on Messenger</p>
              </div>
            </div>
            <div className="user_box">
              <img src="./image/hannah.jpg" alt="" className="user_info-img" />
              <div className="user_detail">
                <p className="user_name">Cherry</p>
                <p className="user_info">You are now connected on Messenger</p>
              </div>
            </div>
            <div className="user_box">
              <img src="./image/steve.jpg" alt="" className="user_info-img" />
              <div className="user_detail">
                <p className="user_name">Kevin</p>
                <p className="user_info">You are now connected on Messenger</p>
              </div>
            </div>
            <div className="user_box">
              <img src="./image/hannah.jpg" alt="" className="user_info-img" />
              <div className="user_detail">
                <p className="user_name">Ben</p>
                <p className="user_info">You are now connected on Messenger</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="chat-header">
            <div className="chat-detail">
              <img src="./image/hannah.jpg" alt="" className="chat-img" />
              <p className="chat-name">Hannah</p>
            </div>
            <i className="fa-solid fa-phone chat-icon"></i>
            <i className="fa-solid fa-video chat-icon"></i>
            <i className="fa-solid fa-ellipsis chat-icon"></i>
          </div>

          <div className="user-chats">
            <img src="./image/hannah.jpg" alt="" className="chats-img" />
            <p className="chat-username">Hannah</p>
            <p>You're friends on Facebook</p>
            <p>Lives in Pakistan</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium accusamus repellendus iusto officia explicabo neque
              nesciunt unde architecto quibusdam dicta!
            </p>
            <p className="chat-last">You are now connected on Messenger</p>
          </div>
          <div className="media">
            <i className="fa-solid fa-circle-plus media-icon"></i>
            <i className="fa-regular fa-image media-icon"></i>
            <i className="fa-solid fa-note-sticky media-icon"></i>
            <i className="fa-solid fa-camera media-icon"></i>

            <div className="media-input">
              <input type="text" name="text" id="text" placeholder="Aa" />
              <i className="fa-solid fa-face-smile media-icon"></i>
            </div>
            <i className="fa-solid fa-thumbs-up media-icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Messenger;
