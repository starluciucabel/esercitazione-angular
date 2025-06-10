import { Component, Input , inject } from '@angular/core';
import { ActorService } from '../../actor.service';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.scss'
})
export class ActorComponent {

  
    @Input({required: true}) actorId!: string;
  
    private actorService = inject(ActorService);
  
    get actor(){
      return  this.actorService.getCurrentActor(parseInt(this.actorId));
    }
}
