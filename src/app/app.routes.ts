
import { NgModule } from '@angular/core';

// Router module
import { RouterModule, Routes } from '@angular/router';

// Routing components
import { PartecipaComponent } from './partecipa/partecipa.component';
import { PremiComponent } from './premi/premi.component';
import { VideoComponent } from './video/video.component';
import { PartecipantiComponent } from './partecipanti/partecipanti.component';


const appRoutes: Routes = [

    { path: 'partecipa', component: PartecipaComponent },
    { path: 'premi', component: PremiComponent },
    { path: 'video', component: VideoComponent },
    { path: 'partecipanti', component: PartecipantiComponent },

    { path: '', redirectTo: 'partecipa', pathMatch: 'full' },
    { path: '**', redirectTo: 'partecipa', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutesModule { }

export const routeComponents = [PartecipaComponent, PremiComponent, VideoComponent, PartecipantiComponent];
