import { Component, Input } from '@angular/core';
import { PopcornRatingComponent } from '../popcorn-rating/popcorn-rating.component';
import { Movie } from '../../models/movie.models';



@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [PopcornRatingComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input({required: true}) movie!: Movie
  get posterPath() {
    return 'https://image.tmdb.org/t/p/w500/' + this.movie.poster_path
  }
  get posterAlt() {
    return 'Poster di ' + this.movie.title
  }
}