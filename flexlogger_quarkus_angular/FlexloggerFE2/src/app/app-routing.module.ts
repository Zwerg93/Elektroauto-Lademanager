import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CanvasChartComponent} from "./canvas-chart/canvas-chart.component";
import {CanvasChartLiveComponent} from "./canvas-chart-live/canvas-chart-live.component";
import {CanvasChartSingleComponent} from "./canvas-chart-single/canvas-chart-single.component";
import {StartPageComponent} from "./start-page/start-page.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'all/:dateBegin/:timeBegin/:dateEnd/:timeEnd', component: CanvasChartComponent},
  {path: 'live/:name', component: CanvasChartLiveComponent},
  {path: 'one/:name/:dateBegin/:timeBegin/:dateEnd/:timeEnd', component: CanvasChartSingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
