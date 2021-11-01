import { Component, OnInit } from '@angular/core';
import {
    faChevronCircleRight,
    faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-finish-or-continue',
    templateUrl: './finish-or-continue.component.html',
    styleUrls: ['./finish-or-continue.component.scss'],
})
export class FinishOrContinueComponent implements OnInit {
    continueIcon = faChevronCircleRight;
    finishIcon = faShoppingBasket;
    constructor() {}

    ngOnInit(): void {}
}
