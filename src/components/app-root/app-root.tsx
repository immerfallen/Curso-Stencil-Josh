import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
        </ion-router>
        <ion-menu contentId="menu" side="start">
          <ion-header>
            <ion-toolbar color="primary">
              <ion-title>Start Menu</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-menu-toggle autoHide={ false}>
                <ion-item button>Some page</ion-item>
              </ion-menu-toggle>
              <ion-item>Menu Item</ion-item>
              <ion-item>Menu Item</ion-item>
              <ion-item>Menu Item</ion-item>
              <ion-item>Menu Item</ion-item>
              <ion-item>Menu Item</ion-item>
            </ion-list>
          </ion-content>
        </ion-menu>
        <ion-nav id="menu"/>
      </ion-app>
    );
  }
}
