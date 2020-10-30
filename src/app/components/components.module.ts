import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PlayerAudioComponent } from './audio-player/player-audio.component';
import { TrackListComponent } from './track-list/track-list.component';

@NgModule({
	declarations: [
		PlayerAudioComponent,
		TrackListComponent
	],
	imports: [BrowserModule],
	providers: [],
	exports: [
		PlayerAudioComponent,
		TrackListComponent,
	]
})
export class ComponentsModule {}
