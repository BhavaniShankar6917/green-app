import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TrendingComponent } from './trending/trending.component';
import { FollowSuggestionComponent } from './follow-suggestion/follow-suggestion.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarComponent,
    TrendingComponent,
    FollowSuggestionComponent,
  ],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent {}
