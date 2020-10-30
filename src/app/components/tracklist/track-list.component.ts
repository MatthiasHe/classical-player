import {
	AfterViewInit,
	Component,
	ElementRef, EventEmitter,
	Input,
	OnChanges,
	Output,
	ViewChild
} from "@angular/core";
import { ITrack } from '../audio-player/player-audio.component';

@Component({
	selector: "app-track-list",
	templateUrl: "./track-list.component.html",
	styleUrls: ["./track-list.component.scss"]
})
export class TrackListComponent {
	@Input() tracklist: ITrack[];
	@Input() currentTrackIndex: number;
	@Input() isPlaying: boolean;

	@Output() onTrackSelection: EventEmitter<number> = new EventEmitter<number>();

	selectTrack(newTrackIndex: number): void {
		this.onTrackSelection.emit(newTrackIndex);
	}
}
