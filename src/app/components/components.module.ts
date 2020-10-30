import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PlayerAudioComponent } from './audio-player/player-audio.component';

@NgModule({
	declarations: [PlayerAudioComponent],
	imports: [BrowserModule],
	providers: [],
	exports: [
		PlayerAudioComponent
	]
})
export class ComponentsModule {}
