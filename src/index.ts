const Request = require('request');
const elios_sdk = require('elios-sdk');

const sdk = new elios_sdk.default();

export default class Weather {
  name: string = '';
  installId: string = '';

  requireVersion: string = '0.0.1';
  showOnStart: boolean = true;

  widget: any;
  it: any;

  render(sign:string) {
    this.widget.html('<iframe src="http://en.horoscopofree.com/object/html/iframe-sign-' + sign + '" width="460" height="100" frameborder="0" style="background-color:white !important;"></iframe>');
  }

  constructor() {
    console.log('Horoscope constructor.');
  }

  start() {
    console.log('Horoscope started.');

    let sign = "1";

    this.widget = sdk.createWidget();

    sdk.config().subscribe((config:any) => {
      console.log('config is ', config);
      if (config.sign)
        sign = config.sign.toString();
      this.render(sign);
    });

    setInterval(() => {
      this.render(sign);
    }, 3600000);
  }
}

const weather = new Weather();

weather.start();
