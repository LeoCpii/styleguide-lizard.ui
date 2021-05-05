import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { CollapsibleComponent } from './collapsible.component';
import { CollapsibleService } from './collapsible.service';

describe('CollapsibleComponent', () => {
  let component: CollapsibleComponent;
  let fixture: ComponentFixture<CollapsibleComponent>;
  let service: CollapsibleService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleComponent);
    service = new CollapsibleService();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open collapsible', () => {
    component.toggle();

    // Recupera a instancia do componente com os estados atualizados
    const instace = fixture.componentInstance;

    expect(instace.isOpen).toBeTrue();
  });

  it('should close collapsible', () => {
    // Novo estado do componente
    component.isOpen = true;

    // Utilizado para atualizar o componente de acordo com o padrão estabelecido
    fixture.detectChanges();

    component.toggle();

    // Recupera a instancia do componente com os estados atualizados
    const instace = fixture.componentInstance;

    expect(instace.isOpen).toBeFalse();
  });

  it('should be group', () => {
    // Novo estado do componente
    component.group = true;

    // Utilizado para atualizar o componente de acordo com o padrão estabelecido
    fixture.detectChanges();

    component.toggle();

    // Recupera a instancia do componente com os estados atualizados
    const instace = fixture.componentInstance;

    expect(instace.group).toBeTrue();
  });

  it('should add component to service', () => {
    const id = component.id;
    service.add({ id, state: false });
    const collapsibles = service.collapsibles;

    // Utilizado para atualizar o componente de acordo com o padrão estabelecido
    fixture.detectChanges();

    expect(collapsibles.length).toBeGreaterThanOrEqual(1);
  });
});
