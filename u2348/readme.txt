https://github.com/anitaloggg/u2348v15.git

ng generate module teacher --route teacher --module app.module --project=mod02
ng generate module student --route student --module app.module --project=mod02

npm install @capacitor/geolocation

  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-feature android:name="android.hardware.location.gps" />


npm install @capacitor/network

npm install @capacitor/device

http://localhost:4200/membercenter;name=anita

http://localhost:4200/membercenter;name=user1


http://localhost:4200/adminpage?name=admin

https://console.cloud.google.com/


ng add @angular/localize  --project mod10

ng extract-i18n mod10 --out-file projects/mod10/src/locale/message.xlf 


 "i18n": {
        "sourceLocale": "zh",
        "locales": {
          "en-US": "projects/mod10/src/locale/message.en-US.xlf"
        }},


    "en-US": {
              "localize": ["en-US"]
      },
    "zh": {
               "localize": ["zh"]
       },





      "zh": {
                 "browserTarget": "mod10:build:zh"
           }, 
      "en-US" : {
                "browserTarget": "mod10:build:en-US"
            },


ng build mod10 --base-href /mod10/  --localize