import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  form: FormGroup;
  @Output() filter: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      min: [null, Validators.required],
      max: [null, Validators.required],
    });
  }

  onFilter(): void {
      const formValue = this.form.getRawValue();
      this.filter.emit(formValue);
  }

  onReset(): void {
    this.form.reset();
    this.form.updateValueAndValidity();
    this.filter.emit(null);
  }

}
