import { ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { PlaceHolderDirective } from './place-holder.directive';
import { DefaultComponent } from './recepies/default/default.component';
import { MainService } from './services/main.service';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(PlaceHolderDirective, {static: false}) container: any;
  title = 'storybook';
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private mainService: MainService,
    private utilService: UtilService,
    private def: ChangeDetectorRef
    ) {}

  ngOnInit(){
   
  }

  ngAfterViewInit(){
     this.mainService.serveToppingsAbs.subscribe(
      val => this.createComponent(this.utilService.mapTopping(val))
    ) 
this.def.detectChanges();
    //setTimeout( () => this.createComponent({component: DefaultComponent}))
  }

  createComponent(obj: any) {
   this.container && this.container.viewContainer.clear(); 
 console.log(obj)
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(obj.component);
    const viewContainerRef = this.container.viewContainer;
    const componentRef = viewContainerRef.createComponent(factory);
    //componentRef.instance.data = obj.data;
  }
}
