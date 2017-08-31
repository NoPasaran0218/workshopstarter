import {Component, Input} from "@angular/core";

import {Hero} from './hero';

@Component({
    selector:"hero-details",
    templateUrl:"./hero-details.component.html"
})

export class HeroDetailsComponent{
    @Input() selectedHero: Hero;
}