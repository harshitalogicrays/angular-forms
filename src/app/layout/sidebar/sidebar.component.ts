import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  siderbarlinks:any[] =[
    {id:1,link:'/binding',text:'Data Binding'},
    {id:2,link:'/directive',text:'Directives'},
    {id:3,link:'/input',text:'Input Output decorator'},
    {id:4,link:'/pipe',text:'Pipes'},
    {id:5,link:'/content',text:'Template , Container and Content'},
    {id:6,link:'/customstructural',text:'custom structural directive'},
  ]
}
