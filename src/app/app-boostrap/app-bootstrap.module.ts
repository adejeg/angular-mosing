import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { listLocales } from '../../../node_modules/ngx-bootstrap/index';
import { setTheme } from '../../../node_modules/ngx-bootstrap/index';
import { AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent } from '../../../node_modules/ngx-bootstrap/index';
import { AlertComponent, AlertConfig, AlertModule } from '../../../node_modules/ngx-bootstrap/index';
import { ButtonCheckboxDirective, ButtonRadioDirective, ButtonsModule } from '../../../node_modules/ngx-bootstrap/index';
import { CarouselComponent, CarouselConfig, CarouselModule, SlideComponent } from '../../../node_modules/ngx-bootstrap/index';
import { CollapseDirective, CollapseModule } from '../../../node_modules/ngx-bootstrap/index';
import { DateFormatter, DatePickerComponent, DatepickerConfig, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, BsDatepickerModule, BsDatepickerConfig, BsDaterangepickerConfig, BsLocaleService, BsDaterangepickerDirective, BsDatepickerDirective } from '../../../node_modules/ngx-bootstrap/index';
import { ModalDirective, ModalOptions, ModalBackdropOptions, ModalBackdropComponent, ModalModule, BsModalRef, BsModalService } from '../../../node_modules/ngx-bootstrap/index';
import { BsDropdownModule, BsDropdownConfig, BsDropdownState, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective } from '../../../node_modules/ngx-bootstrap/index';
import { PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, PageChangedEvent } from '../../../node_modules/ngx-bootstrap/index';
import { BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule } from '../../../node_modules/ngx-bootstrap/index';
import { RatingComponent, RatingModule } from '../../../node_modules/ngx-bootstrap/index';
import { DraggableItem, DraggableItemService, SortableItem, SortableComponent, SortableModule } from '../../../node_modules/ngx-bootstrap/index';
import { NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule } from '../../../node_modules/ngx-bootstrap/index';
import { TimepickerComponent, TimepickerConfig, TimepickerModule } from '../../../node_modules/ngx-bootstrap/index';
import { TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule } from '../../../node_modules/ngx-bootstrap/index';
import { TypeaheadOptions, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule } from '../../../node_modules/ngx-bootstrap/index';
import { PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule } from '../../../node_modules/ngx-bootstrap/index';
import { OnChange, LinkedList, isBs3, Trigger, Utils } from '../../../node_modules/ngx-bootstrap/index';
import { ComponentLoader, ComponentLoaderFactory, ContentRef } from '../../../node_modules/ngx-bootstrap/index';
import { Positioning, PositioningOptions, PositioningService, positionElements } from '../../../node_modules/ngx-bootstrap/index';
import { defineLocale, getSetGlobalLocale, LocaleData } from '../../../node_modules/ngx-bootstrap/index';


// import { arLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { csLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { daLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { deLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { enGbLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { esLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { esDoLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { esUsLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { fiLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { frLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { hiLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { huLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { idLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { itLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { jaLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { koLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { mnLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { nlLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { nlBeLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { plLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { ptBrLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { svLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { ruLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { roLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { zhCnLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { trLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { heLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { thLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { slLocale } from '../../../node_modules/ngx-bootstrap/locale';
// import { glLocale } from '../../../node_modules/ngx-bootstrap/locale';


@NgModule({
    declarations: [],
    imports: [ CommonModule, AccordionModule.forRoot(), AlertModule.forRoot(), ButtonsModule.forRoot(), CarouselModule.forRoot(), CollapseModule.forRoot(), DatepickerModule.forRoot(), BsDatepickerModule.forRoot(), ModalModule.forRoot(), BsDropdownModule.forRoot(), PaginationModule.forRoot(), ProgressbarModule.forRoot(), RatingModule.forRoot(), SortableModule.forRoot(), TabsModule.forRoot(), TimepickerModule.forRoot(), TooltipModule.forRoot(), TypeaheadModule.forRoot(), PopoverModule.forRoot() ],
    exports: [ AccordionModule, AlertModule, ButtonsModule, CarouselModule, CollapseModule, DatepickerModule, BsDatepickerModule, ModalModule, BsDropdownModule, PaginationModule, ProgressbarModule, RatingModule, SortableModule, TabsModule, TimepickerModule, TooltipModule, TypeaheadModule, PopoverModule ],
    providers: [],
})
export class AppBootstrapModule {}