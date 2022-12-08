import React from "react";
import s from "./Profile.module.css";

function Profile() {
  return (
    <div className={s.content}>
      <div className={s.banner}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/559/005/original/black-and-green-material-perforated-header-design-banner-with-polygonal-grid-and-blank-space-for-your-logo-vector.jpg"
          alt=""
          className={s.banner_i}
        />
      </div>
      <div className={s.profile}>
        <img
          src="https://yt3.ggpht.com/z6YQmYQGBANYbYBE6NCKbML6W9gXfiT9UKC8jAIQb1iVmh4mdd3czuo-TtjbF2k6muhBgwXr=s900-c-k-c0x00ffffff-no-rj"
          alt=""
          className={s.profile_i}
        ></img>
        <div className={s.profile_info}>
          <h1 className={s.profile_h1}>___Unknxwnnn</h1>
          <ul className={s.profile_ul}>
            <li className={s.profile_li}>Date of Birth:04 February</li>
            <li className={s.profile_li}>CIty:Almaty</li>
            <li className={s.profile_li}> Education:School</li>
          </ul>
        </div>
      </div>
      <div className={s.posts}>
        <h1 className={s.posts_h1}>My Posts</h1>
        <hr className={s.posts_hr} />
        <div className={s.type}>
          <input
            type="text"
            placeholder="Type your messages"
            className={s.posts_input}
          />
          <button className={s.type_button}>Send</button>
        </div>
      </div>
    </div>
  );
}
export default Profile;
