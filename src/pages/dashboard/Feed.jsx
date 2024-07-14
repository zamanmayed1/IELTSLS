import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Helmet } from 'react-helmet-async';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostMedia, setNewPostMedia] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    // Load posts from JSON and localStorage
    const loadPosts = async () => {
      const response = await fetch('/Posts.json');
      const jsonPosts = await response.json();
      const savedPosts = JSON.parse(localStorage.getItem('posts')) || jsonPosts;
      setPosts(savedPosts.sort(() => Math.random() - 0.5));
    };
    
    loadPosts();
  }, []);

  const handleMediaUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      setIsUploading(true);

      try {
        const response = await fetch('https://api.imgbb.com/1/upload?key=cd70f8cec054dd9b24fe9d4902c4ba10', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        if (data.success) {
          setNewPostMedia(data.data.url);
        }
      } catch (error) {
        console.error('Image upload failed:', error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handlePostSubmit = () => {
    const newPost = {
      id: uuidv4(),
      username: 'Kamruzzaman Mayed',
      avatar: 'https://i.ibb.co/kmsbNMP/unnamed.jpg',
      content: newPostContent,
      media: newPostMedia,
      likes: 0,
      comments: [],
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    
    setNewPostContent('');
    setNewPostMedia(null);
  };

  const handleLike = (id) => {
    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        post.likes += 1;
      }
      return post;
    });
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleComment = (id, comment) => {
    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        post.comments.push(comment);
      }
      return post;
    });
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 border border-gray-300 rounded-lg">
      <Helmet>
        <title>Feed - Explore More, Learn More!</title>
      </Helmet>
      <div className="post-box mb-6 p-4 bg-white rounded-lg shadow">
        <ReactQuill
          value={newPostContent}
          onChange={setNewPostContent}
          placeholder="Write something..."
          className="mb-4"
        />
        <input type="file" onChange={handleMediaUpload} className="mb-4" />
        {isUploading && <p>Uploading image...</p>}
        <button
          onClick={handlePostSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Post
        </button>
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post mb-6 p-4 bg-white rounded-lg shadow">
            <div className="flex items-center mb-4">
              <img src={post.avatar} alt={post.username} className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="font-semibold">{post.username}</p>
              </div>
            </div>
            <div className="post-content mb-4" dangerouslySetInnerHTML={{ __html: post.content }} />
            {post.media && <img src={post.media} alt="Post Media" className="w-full h-auto mb-4" />}
            <div className="post-actions flex justify-between items-center">
              <button onClick={() => handleLike(post.id)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Like ({post.likes})
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Comment
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                Share
              </button>
            </div>
            <div className="comments mt-4">
              {post.comments.map((comment, index) => (
                <div key={index} className="comment mb-2">
                  <p className="text-gray-600">{comment}</p>
                </div>
              ))}
              <input
                type="text"
                placeholder="Add a comment..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleComment(post.id, e.target.value);
                    e.target.value = '';
                  }
                }}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
