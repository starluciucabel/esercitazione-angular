import { Component , Input} from '@angular/core';
import { Movie } from '../../models/movie.models';
import { MovieCardComponent } from '../movie-card/movie-card.component';


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  @Input() title?: string ;
  @Input ({required: true}) movies!: Movie[];
}
