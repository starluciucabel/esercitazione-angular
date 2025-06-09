import { Component, Input} from '@angular/core';
import { Movie } from '../../models/movie.models';
import { MovieCardComponent } from '../movie-card/movie-card.component';


@Component({
  selector: 'app-popcorn-rating',
  standalone: true,
  imports: [],
  templateUrl: './popcorn-rating.component.html',
  styleUrl: './popcorn-rating.component.scss'
})
export class PopcornRatingComponent {

  @Input() rating?: number | null;

  get ratingWidth(){

    return this.rating ? this.rating *10 + '%' : 0;
  }


}
