import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './add-movie.component';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('AddMovieComponent', () => {
  let component: AddMovieComponent;
  let fixture: ComponentFixture<AddMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMovieComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.indicator = '';
  });

  afterAll(() => {
    component = null;
  });

  it('Create component instance', () => {
    expect(component).toBeTruthy();
  });

  it('Set movie genre', () => {
    // tslint:disable-next-line:comment-format
    //Arrange (component is already created!)
    const genreTestValue = 'Action';
    // Act
    component.setGenre(genreTestValue);
    // Assert
    expect(component.genre).toBe(genreTestValue);
  });

  it('Add movie with invalid youtube URL', () => {
    // tslint:disable-next-line:comment-format
    //Arrange (component is already created!)
    const data = { 'movie_url' : '' };
    // Act
    component.addMovie(data);
    // Assert
    expect(component.indicator).toContain('Please provide a valid YouTube URL');
  });

  it('Add movie with invalid/empty genre', () => {
    // tslint:disable-next-line:comment-format
    //Arrange (component is already created!)
    const data = { 'movie_url' : 'https://www.youtube.com/watch?v=yG4FH60fhUE&t=52s',
    'movie_genre' : '' };
    // Act
    component.addMovie(data);
    // Assert
    expect(component.indicator).toContain('Please select movie genre');
  });
});
