import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DescriptionComponent } from './pages/description/description.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
    },
    {
        path: 'anime/:id',
        component: DescriptionComponent,
    },
    {
        path: 'team',
        component: AboutUsComponent,
    },
    {
        path: 'tools',
        component: ToolsComponent,
    },
    {
        path: 'search',
        component: SearchComponent,
    },
];
