import { Component } from '@angular/core';
import { RandomMovieComponent } from '../../components/random-movie/random-movie.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { DUMMY_MOVIES } from '../../data/dummy-movies';
import { DUMMY_ACTORS } from '../../data/dummy-actors';
import { ActorListComponent } from '../../components/actor-list/actor-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RandomMovieComponent, MovieListComponent,ActorListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  movies = DUMMY_MOVIES
  actors =  DUMMY_ACTORS

  get bestFourMovies() {
    return [...this.movies]
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 4)
  }
    get bestFourActors() {
    return [...this.actors]
    .sort((a) => a.popularity)
    .slice(0, 4)
  }
}