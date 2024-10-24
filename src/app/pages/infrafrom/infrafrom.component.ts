import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-infrafrom',
  templateUrl: './infrafrom.component.html',
  styleUrls: ['./infrafrom.component.css']
})
export class InfrafromComponent {
  @ViewChild('nsgRulesTable') nsgRulesTable!: ElementRef;
  nsgRules: any[] = []; // Store rows here
  addRow() {
    const tableBody = this.nsgRulesTable.nativeElement.getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    // Create input elements for each cell in the new row
    for (let i = 0; i < 7; i++) {
      const newCell = newRow.insertCell(i);
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = this.getPlaceholderForCell(i);
      newCell.appendChild(input);
    }

    // Create a delete button in the last cell
    const deleteCell = newRow.insertCell(7);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.type = 'button'; // Ensure button doesn't submit form
    deleteButton.className = 'delete-row';
    deleteButton.onclick = () => this.deleteRow(newRow); // Pass the newRow reference
    deleteCell.appendChild(deleteButton);
    this.nsgRules.push({ source: '', destination: '', port: '', direction: '', type: '', priority: '', purpose: '' });
  }

  deleteRow(row: HTMLTableRowElement) {
    const tableBody = this.nsgRulesTable.nativeElement.getElementsByTagName('tbody')[0];
    const rowIndex = row.rowIndex - 1; // Adjust index to account for the header
    tableBody.deleteRow(rowIndex);
  }

  private getPlaceholderForCell(index: number): string {
    const placeholders = [
      'SQL(x.x.x.x/y.y)',
      'SA(x.x.x.x/y.y)',
      '445',
      'Inbound',
      'TCP',
      '121',
      'SQL to SA connectivity.'
    ];
    return placeholders[index] || '';
  }
}
