import { Component, ViewChild } from "@angular/core";
import { ETrackChangeAction, ITrack, PlayerAudioComponent } from "./components/audio-player/player-audio.component";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent {
	@ViewChild(PlayerAudioComponent) playerAudio: PlayerAudioComponent;

	playlist: ITrack[] = [
		{
			name: "Brandenburg Concerto no 1 in F m",
			src: "../../../assets/mp3/Brandenburg-Concerto-no-1-in-F-m.mp3",
			img: "../../../assets/images/Bach.jpg",
			artist: 'Bach',
		},
		{
			name: "Concerto No1 in F major III Rond",
			src: "../../../assets/mp3/Concerto-No1-in-F-major-III-Rond.mp3",
			img: "../../../assets/images/Mozart.jpg",
			artist: 'Mozart',
		},
		{
			name: "Polonaise in C minor Op 40 no 2",
			src: "../../../assets/mp3/Polonaise-in-C-minor-Op-40-no-2.mp3",
			img: "../../../assets/images/Chopin.jpeg",
			artist: 'Chopin',
		},
		{
			name: "Symphony no 3 in D major D 200 I",
			src: "../../../assets/mp3/Symphony-no-3-in-D-major-D-200-I.mp3",
			img: "../../../assets/images/Schubert.jpg",
			artist: 'Schubert',
		},
		{
			name: "Symphony No 8 in F Major Op 93 I",
			src: "../../../assets/mp3/Symphony-No-8-in-F-Major-Op-93-I.mp3",
			img: "../../../assets/images/Beethoven.jpg",
			artist: 'Beethoven',
		}
	];
	currentTrackIndex = 0;
	currentTrack: ITrack = this.playlist[this.currentTrackIndex];

	changeTrack(index: number): void {
		this.currentTrackIndex = index;
		this.currentTrack = this.playlist[this.currentTrackIndex];
	}

	changeTrackFromAction(trackChangeAction: ETrackChangeAction): void {
		if (trackChangeAction === ETrackChangeAction.Previous) {
			this.currentTrackIndex = (this.currentTrackIndex - 1) >= 0 ? this.currentTrackIndex - 1 : this.playlist.length - 1;
			this.currentTrack = this.playlist[this.currentTrackIndex];
		} else {
			this.currentTrackIndex = (this.currentTrackIndex + 1) === this.playlist.length ? 0 : this.currentTrackIndex + 1;
			this.currentTrack = this.playlist[this.currentTrackIndex];
		}
	}
}
