import { Component, Input } from '@angular/core';
import { Actor } from '../../models/actor.models';

@Component({
  selector: 'app-actor-card',
  standalone: true,
  imports: [],
  templateUrl: './actor-card.component.html',
  styleUrl: './actor-card.component.scss'
})
export class ActorCardComponent {

    @Input({required: true}) actor!: Actor
    get profilePath() {
      return 'https://image.tmdb.org/t/p/w500/' + this.actor.profile_path
    }
    get profileAlt() {
      return 'Poster di ' + this.actor.name
    }
}

