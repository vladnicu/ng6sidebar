import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebarWidth = 300;

  minSidebarWidth = 230;

  handlerMouseDown: boolean;

  @ViewChild('sidebarIdentifier') sidebarIdentifier: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  start(e) {
    this.handlerMouseDown = true;
  }

  @HostListener('document:mousemove', ['$event']) onmousemove(e) {
    if (this.handlerMouseDown) {
      // the current mouse horizonal position
      const mousePosition = e.pageX;

      // first initialize the new width using the current value
      let newWidth = this.sidebarWidth;

      // using the sidebar element identifier get the current width
      const sidebarCurrentWidth = this.sidebarIdentifier.nativeElement.offsetWidth;

      if (mousePosition === sidebarCurrentWidth) {
        return; // do nothing
      } else if (mousePosition > sidebarCurrentWidth) {
        // if the mouse position goes to right find the diffrence
        // beetwen the mouse position and the current width
        const difference = mousePosition - sidebarCurrentWidth;

        // now find the new width by adding the difference
        newWidth = this.sidebarWidth + difference;
      } else {
        // in this case the mouse positions goes to left
        const difference = sidebarCurrentWidth - mousePosition;
        newWidth = this.sidebarWidth - difference;
      }

      if (newWidth < this.minSidebarWidth) {
        // the new width is smaller than the minimum width
        newWidth = this.minSidebarWidth;
      }

      // now bind the new width
      this.sidebarWidth = newWidth;
    }
  }

  @HostListener('document:mouseup', ['$event']) onmouseup(e) {
    if (this.handlerMouseDown) {
      this.handlerMouseDown = false;
    }
  }

}
