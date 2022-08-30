import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "../postsSlice";
import { selectAllUsers } from "../../users/usersSlice";
import "./AddPostForm.css";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("1");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content);

  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <div className="postTitleContainer">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          ></input>
        </div>
        <div className="postAuthorContainer">
          <label htmlFor="postAuthor">Author:</label>
          <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            {userOptions}
          </select>
        </div>
        <div className="postContentContainer">
          <label htmlFor="postContent">Content:</label>
          <textarea
            rows="4"
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          ></textarea>
        </div>
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
