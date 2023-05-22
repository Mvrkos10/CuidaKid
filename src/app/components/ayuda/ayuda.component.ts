import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {


  fontSize = 14;

  increaseFontSize() {
    this.fontSize += 2;
  }
  decreaseFontSize() {
    if (this.fontSize > 6) {
      this.fontSize -= 2;
    }
  }

  resetFontSize() {
    this.fontSize = 14;
  }


  isModalOpen = false;
  isModalOpen2 = false;
  isModalOpen3 = false;
  isModalOpen4 = false;
  isModalOpen5 = false;
  isModalOpen6 = false;


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }

  setOpen3(isOpen: boolean) {
    this.isModalOpen3 = isOpen;
  }

  setOpen4(isOpen: boolean) {
    this.isModalOpen4 = isOpen;
  }

  setOpen5(isOpen: boolean) {
    this.isModalOpen5 = isOpen;
  }

  setOpen6(isOpen: boolean) {
    this.isModalOpen6 = isOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
