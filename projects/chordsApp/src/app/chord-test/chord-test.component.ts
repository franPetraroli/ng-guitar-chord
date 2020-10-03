import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

export type ChordType = [
  number | null,
  number | null,
  number | null,
  number | null,
  number | null,
  number | null
];

@Component({
  selector: 'app-chord-test',
  templateUrl: './chord-test.component.html',
  styleUrls: ['./chord-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChordTestComponent implements OnInit, OnChanges {
  @Input() data: ChordType;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
