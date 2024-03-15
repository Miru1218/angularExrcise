import { Component } from '@angular/core';
import { BatteryInfo, Device, DeviceId, DeviceInfo, LanguageTag } from '@capacitor/device';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent {
  info! :DeviceInfo;
  bInfo! : BatteryInfo;
  lang!: LanguageTag;
  id!: DeviceId;
  async ngOnInit(): Promise<void> {
    this.info = await Device.getInfo();
    this.bInfo = await Device.getBatteryInfo();
    this.lang = await Device.getLanguageTag();
    this.id= await Device.getId();
  }

}
