import { Component, OnInit, ViewChild } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



interface NameNode {
  name: string;
  study: string;
  children?: NameNode[];
}

const TREE_DATA: NameNode[] = [
 {
    name: 'Chanakya Venkata Lokam',
    study: '',
    children: [
      {
        name: 'Siva Kusampudi',
        study: 'Manager-web, content&social',
        children: [
          {
            name: 'Dinesh kumar Boddepalli',
            study: 'Jr.Web Master',
          },
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal) {
    this.dataSource.data = TREE_DATA;
  }

  public tree: any;

  ngOnInit(): void {
  }

  //tree ts from material
  private _transformer = (node: NameNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;



  ngAfterViewInit(): void {
    this.treeControl.expandAll();
  }


  //modal ts from ngb
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }





}
