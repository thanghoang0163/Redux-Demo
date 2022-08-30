import PostsList from "./feature/posts/PostsList/postsList";
import AddPostForm from "./feature/posts/AddPostForm/AddPostForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
