import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from "@angular/core";

export interface ITrack {
	name: string;
	src: string;
	img: string;
	artist: string;
}

export enum ETrackChangeAction {
	Next,
	Previous,
}

@Component({
	selector: "app-player-audio",
	templateUrl: "./player-audio.component.html",
	styleUrls: ["./player-audio.component.scss"]
})
export class PlayerAudioComponent implements OnChanges, AfterViewInit {
	@Input() track: ITrack;
	@Output() onTrackChange: EventEmitter<ETrackChangeAction> = new EventEmitter<ETrackChangeAction>();
	changeActions: typeof ETrackChangeAction = ETrackChangeAction;
	player: HTMLAudioElement;

	@ViewChild('player') set playerRef(ref: ElementRef<HTMLAudioElement>) {
		this.player = ref.nativeElement;
	}

	ngOnChanges(): void {
		if (this.player) {
			this.updateTrackSrc();
		}
	}

	ngAfterViewInit(): void {
		this.updateTrackSrc();
	}

	updateTrackSrc(): void {
		this.player.currentTime = 0;
		this.player.src = this.track.src;
		this.player.play();
	}

	updatePlayingState(): void {
		if (this.player.paused) {
			this.player.play();
		} else {
			this.player.pause();
		}
	}

	changeTrack(changeAction: ETrackChangeAction) {
		this.onTrackChange.emit(changeAction);
	}
}
