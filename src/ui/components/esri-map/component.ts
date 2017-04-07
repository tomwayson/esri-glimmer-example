import Component from '@glimmer/component';
import { isLoaded, bootstrap, dojoRequire } from 'esri-loader';

export default class EsriMap extends Component {
    didInsertElement() {
        // has the ArcGIS API been added to the page?
        if (!isLoaded()) {
            // no, lazy load it the ArcGIS API before using its classes
            bootstrap((err) => {
                if (err) {
                    console.error(err);
                } else {
                    // once it's loaded, create the map
                    this.createMap();
                }
            });
        } else {
            // ArcGIS API is already loaded, just create the map
            this.createMap();
        }
    }

    // create a map on the page
    createMap() {
        // first, we use Dojo's loader to require the map class
        dojoRequire(['esri/WebMap', 'esri/views/MapView'], (WebMap, MapView) =>{
            const webmap = new WebMap({
                portalItem: { // autocasts as new PortalItem()
                    id: (<any> this.args).itemId
                }
            });

            const view = new MapView({
                map: webmap,
                container: 'map'
            });
        });
    }
};
