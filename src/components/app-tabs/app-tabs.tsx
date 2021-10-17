import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.css',
  shadow: true,
})
export class AppTabs {

  render() {
    return (
      <ion-tabs>
        <ion-tab tab="tab-home">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab tab="tab-profile">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab-home">
            <ion-icon name="map"></ion-icon>
            <ion-label>Home</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-profile">
            <ion-icon name="information-circle"></ion-icon>
            <ion-label>Profile</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    );
  }

}
