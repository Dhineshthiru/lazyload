import './App.css';
import { Posts } from './Posts';
import  LoadingPosts  from './LoadingPosts';
import LoadingCard from './LoadingCard';

function App() {
  return (
    <div className="container p-4">
      <LoadingPosts />
      <LoadingCard/>
    </div>
  );
}

export default App;