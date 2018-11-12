import { Injectable } from '@angular/core';
import swal, { SweetAlertType } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {
  public openAlertModal(error: string, title: string, type: SweetAlertType) {
    swal({
      title: title,
      text: error,
      type: type,
      heightAuto: false
    });
  }

  public openCustomWelcomeModal(title: string, text: string, confirmText: string) {
    swal({
      imageUrl: 'assets/images/welcome-2.png',
      imageWidth: 207,
      imageHeight: 204,
      imageAlt: 'Custom image',
      title: title,
      html: `${text}`,
      heightAuto: false,
      confirmButtonClass: 'alert-custom-confirm-button',
      confirmButtonText: confirmText
    });
  }

  public openHtmlAlertModal(error: string, title: string, type: SweetAlertType) {
    swal({
      title: title,
      html: error,
      type: type,
      heightAuto: false
    });
  }

  public openPaymentQrModal(error: string, title: string, type: SweetAlertType, qrDataAsString: string) {
    const qrData = ('{ "url": "' + qrDataAsString + '" }').toString();
    swal({
      title: title,
      text: error,
      type: type,
      inputValue: qrData,
      html: '<qrcode [qrdata]="qrData" [size]="256" [level]="150"></qrcode>',
      heightAuto: false
    });
  }

  public sessionTTLCountModal(duration: number) {
    let timerInterval: any;
    return swal({
      title: 'Session Expiring!',
      html: `Your Session will expire in <strong>${duration}</strong> seconds. Do you want to renew?`,
      timer: duration * 1000,
      onOpen: () => {
        let leftTime = duration - 1;
        timerInterval = setInterval(() => {
          swal.getContent().querySelector('strong').textContent = String(leftTime);
          leftTime--;
        }, 1000);
      },
      onClose: () => {
        clearInterval(timerInterval);
      },
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    });
  }
}
