import { Component, AfterViewInit,ElementRef, ViewChild  } from '@angular/core';
import { Network, DataSet, Data, Edge } from 'vis';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements AfterViewInit {

  @ViewChild('network') el: ElementRef;
  private networkInstance: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const nodes = new DataSet<any>([
      { id: 1, shape: "circularImage", image: "../../assets/images/node1.png"},
      { id: 2, shape: "circularImage", image: "../../assets/images/node2.png"},
      { id: 3, shape: "circularImage", image: "../../assets/images/node3.png"},
      { id: 4, shape: "circularImage", image: "../../assets/images/node4.png"},
      { id: 5, shape: "circularImage", image: "../../assets/images/node5.png"},
      { id: 6, shape: "circularImage", image: "../../assets/images/node6.png"},
      { id: 7, shape: "circularImage", image: "../../assets/images/node7.png"},
      { id: 8, shape: "circularImage", image: "../../assets/images/node8.png"},
      { id: 9, shape: "circularImage", image: "../../assets/images/node9.png"},
      { id: 10, shape: "circularImage", image: "../../assets/images/node10.png"},
    ]);

    const edges = new DataSet<any>([
      { from: 5, to: 3 }, { from: 5, to: 6 }, { from: 5, to: 8 }, { from: 5, to: 9 },{ from: 5, to: 1},
      { from: 3, to: 1}, {from: 3, to: 4},{ from: 4, to: 6}, { from: 1, to: 2},
      { from: 1, to: 7},{ from: 2, to: 7},{ from: 7, to: 8},{ from: 8, to: 9},
      { from: 9, to: 6}, { from: 9, to: 10},{ from: 6, to: 10},
    ]);
    
    setTimeout(() => {
      const data = { nodes, edges };
      const container = this.el.nativeElement;
      this.networkInstance = new Network(container, data, {});
    }, 0);
  }

}