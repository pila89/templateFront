import { Component, OnInit } from '@angular/core';
import { AdvertisingService } from '../../services/advertising.service';
import { Advertising } from '../../models/advertising.model';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdvertisingAddEditComponent } from '../advertising-add-edit/advertising-add-edit.component';

@Component({
  selector: 'app-advertising-list',
  templateUrl: './advertising-list.component.html',
  styleUrls: ['./advertising-list.component.css'],
})
export class AdvertisingListComponent implements OnInit {
  public advertisingForm!: FormGroup;
  public advertisings!: Advertising[];
  selectedFile!: File;
  advertising: Advertising = new Advertising();

  constructor(
    private advertisingService: AdvertisingService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllAdvertising();
  }

  getAllAdvertising() {
    this.advertisingService.getAllAdvertisings().subscribe((data) => {
      this.advertisings = data;
    });
  }

  initForm() {
    this.advertisingForm = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
  }

  getAdvertisingBetweenTwoDate() {
    this.advertisingService
      .getAdvertisingBetweenTwoDate(
        this.advertisingForm.value.start,
        this.advertisingForm.value.end
      )
      .subscribe((data) => {
        this.advertisings = data;
      });
  }

  addAdvertising() {
    const dialogRef = this.dialog.open(AdvertisingAddEditComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.advertisings.push(result);
      }
    });
  }
  delete(idAd: number) {
    this.advertisingService.deleteAdvertising(idAd).subscribe(() => {
      const newlist = this.advertisings.filter((ad) => ad.idAd !== idAd);
      this.advertisings = newlist;
    });
  }
  updateAdvertising(advertising: Advertising) {
    const dialogRef = this.dialog.open(AdvertisingAddEditComponent, {
      width: '400px',
      data: advertising,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (!result.type) {
        this.advertisings.push(result);
      } else {
        console.log('');
        const index = this.advertisings.findIndex((key: any, value) => {
          return key.idAd == advertising.idAd;
        });
        this.advertisings[index] = {
          ...this.advertisings[index],
          ...result.advertising,
        };
      }
    });
  }
}
