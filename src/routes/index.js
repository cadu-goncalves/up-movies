import Home from '../components/Home';
import Movie from '../components/Movie';
import NotFound from '../components/NotFound';

export default [
  {
    path: '/', component: Home,
  },
  {
    path: '/movies', component: Movie
  },
  {
    component: NotFound
  }
]