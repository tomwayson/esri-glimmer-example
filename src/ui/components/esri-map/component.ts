import Component from '@glimmer/component';

export default class EsriMap extends Component {
    didInsertElement() {
        setTimeout(() => {
            require(['esri/WebMap', 'esri/views/MapView'], (WebMap, MapView) =>{
                const webmap = new WebMap({
                    portalItem: { // autocasts as new PortalItem()
                        id: this.args.itemId
                    }
                });

                /************************************************************
                * Set the WebMap instance to the map property in a MapView.
                ************************************************************/
                const view = new MapView({
                    map: webmap,
                    container: 'map'
                });
            });
        }, 500);
    }
};
