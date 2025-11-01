import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(10);
  function decrease() {
    setCount((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      }
      return prevState;
    });
  }
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px", borderRadius: "5px" }}>
      <h2>Счетчик</h2>
      <button onClick={decrease}>Счет: {count}</button>
      {count === 0 && (
        <p style={{ color: "red" }}>
          Пожалуйста, измените количество, оно не может быть равно 0
        </p>
      )}
    </div>
  );
}

function PostFetcher() {
  const [postId, setPostId] = useState("");
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async () => {
    if (!postId) {
      setError("Введите ID поста");
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      
      if (!response.ok) {
        throw new Error("Пост не найден");
      }
      
      const postData = await response.json();
      setPost(postData);
    } catch (err) {
      setError(err.message);
      setPost(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px", borderRadius: "5px" }}>
      <h2>Получить пост по ID</h2>
      
      <div style={{ marginBottom: "15px" }}>
        <input
          type="number"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          placeholder="Введите ID поста (1-100)"
          style={{
            padding: "8px",
            marginRight: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        />
        <button
          onClick={fetchPost}
          disabled={loading}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "Загрузка..." : "Получить пост"}
        </button>
      </div>

      {error && (
        <p style={{ color: "red", fontWeight: "bold" }}>Ошибка: {error}</p>
      )}

      {post && (
        <div style={{
          marginTop: "20px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9"
        }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p style={{ color: "#666", fontSize: "14px" }}>
            ID поста: {post.id} | User ID: {post.userId}
          </p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Задания</h1>
      <Counter /> {}
      <PostFetcher />
    </div>
  );
}

export default App;