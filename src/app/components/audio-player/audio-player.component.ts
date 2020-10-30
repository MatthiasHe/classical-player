import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from "@angular/core";

export interface ITrack {
	name: string;
	src: string;
	img: string;
	artist: string;
}

@Component({
	selector: "app-player-audio",
	templateUrl: "./audio-player.component.html",
	styleUrls: ["./audio-player.component.scss"]
})
export class PlayerAudioComponent implements OnChanges, AfterViewInit {
	@Input() track: ITrack;

	@ViewChild('player') set playerRef(ref: ElementRef<HTMLAudioElement>) {
		this.player = ref.nativeElement;
	}

	player: HTMLAudioElement;

	ngOnChanges() {
		if (this.player) {
			this.updateTrack();
		}
	}

	ngAfterViewInit() {
		this.updateTrack();
	}

	updateTrack(): void {
		this.player.src = this.track.src;
		this.player.play();
	}
}
