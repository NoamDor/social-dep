import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  requestForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      creatorName: ['', Validators.required],
      clientName: [],
      clientId: [],
      phoneNum:[],
      address: [],
      desc: [],
      decisions: [],
      status: [],
      category: []
    })
  }

  get f() {return this.requestForm.controls}

  onSubmit() {
    this.submitted = true;
  }

}
