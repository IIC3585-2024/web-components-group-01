import "./src/vanilla/sell-item.js";
// import "./src/vanilla/todo-list.js";
import "./src/lit/sell-item.js";
// import "./src/lit/todo-list.js";

const vanillaButton = document.getElementById('vanilla-components');
const litButton = document.getElementById('lit-components');
const view = document.getElementById('view');
const viewName = document.getElementById('view-name');
let currentView = 'vanilla';

const vanillaView = `
  <sell-item
    image="https://media.istockphoto.com/id/185278433/es/foto/c%C3%A1mara-de-fotograf%C3%ADa-digital.jpg?s=612x612&w=0&k=20&c=YHINvXIpTvMvyr5vZe9gYRNAYwu385Ekjkno3fRjBao="
    title="Cámara APS-C α6700 premium con montura E"
    price="1.000.000"
    discounted="800.000"
    discount="20"
    rating="4"
  >
  </sell-item>

  <sell-item
    image="https://clsonyb2c.vtexassets.com/arquivos/ids/208071/ILCE-6400L_1.jpg?v=636864206263200000"
    title="Cámara híbrida full-frame Alpha 7 IV. Sensor Alpha 7"
    price="1.300.000"
    discounted="910.000"
    discount="30"
    rating="5"
  >
  </sell-item>

  <sell-item
    image="https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw29b625f2/images/large/1CC16880078.jpg?sw=1200&sh=1200&sm=fit"
    title="Cámara Cinema Line Full-Frame FX3"
    price="1.200.000"
    discounted="960.000"
    discount="20"
    rating="3"
  >
  </sell-item>

  <sell-item
    image="https://clsonyb2c.vtexassets.com/arquivos/ids/458085/ZV-E10.jpg?v=637638739420230000"
    title="Cámara compacta full-frame Alpha 7C"
    price="850.000"
    discounted="729.000"
    discount="10"
    rating="2"
  >
  </sell-item>

  <!-- SEGUNDA FILA -->

  <sell-item
    image="https://www.canontiendaonline.cl/wcsstore/CCHCatalogAssetStore/KITS_FEB_bat-y-car-_0038_LP-E17_l.jpg"
    title="Batería Lp-E17-350 Canon-Negro. Segunda versión"
    price="100.000"
    discounted="50.000"
    discount="50"
    rating="3"
    discountcolor="#0066ff"
  >
  </sell-item>

  <sell-item
    image="https://www.sony.cl/image/dad03fcb90a51f01c16322ce84522217?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
    title="Trípode VCT-R640. Compatible con black series"
    price="120.000"
    discounted="84.000"
    discount="30"
    rating="4"
    discountcolor="#0066ff"
  >
  </sell-item>

  <sell-item
    image="https://falabella.scene7.com/is/image/Falabella/gsc_124390483_3711752_1?wid=800&hei=800&qlt=70"
    title="Samyang 8mm T3.8 VDSLR Asph IF MC Fisheye CS Lente."
    price="200.000"
    discounted="150.000"
    discount="25"
    rating="5"
    discountcolor="#0066ff"
  >
  </sell-item>

  <sell-item
    image="https://www.sony.cl/image/ddc9b88fc4410b190d82ea0c64bf485a?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
    title="Funda de transporte blanda para videocámara LCS-U11"
    price="100.000"
    discounted="90.000"
    discount="10"
    rating="3"
    discountcolor="#0066ff"
  >
  </sell-item>
`;

const litView = `
  <lit-sell-item
    image="https://media.istockphoto.com/id/185278433/es/foto/c%C3%A1mara-de-fotograf%C3%ADa-digital.jpg?s=612x612&w=0&k=20&c=YHINvXIpTvMvyr5vZe9gYRNAYwu385Ekjkno3fRjBao="
    title="Cámara APS-C α6700 premium con montura E"
    price="1.000.000"
    discounted="800.000"
    discount="20"
    rating="4"
  >
  </lit-sell-item>

  <lit-sell-item
    image="https://clsonyb2c.vtexassets.com/arquivos/ids/208071/ILCE-6400L_1.jpg?v=636864206263200000"
    title="Cámara híbrida full-frame Alpha 7 IV. Sensor Alpha 7"
    price="1.300.000"
    discounted="910.000"
    discount="30"
    rating="5"
  >
  </lit-sell-item>

  <lit-sell-item
    image="https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw29b625f2/images/large/1CC16880078.jpg?sw=1200&sh=1200&sm=fit"
    title="Cámara Cinema Line Full-Frame FX3"
    price="1.200.000"
    discounted="960.000"
    discount="20"
    rating="3"
  >
  </lit-sell-item>

  <lit-sell-item
    image="https://clsonyb2c.vtexassets.com/arquivos/ids/458085/ZV-E10.jpg?v=637638739420230000"
    title="Cámara compacta full-frame Alpha 7C"
    price="850.000"
    discounted="729.000"
    discount="10"
    rating="2"
  >
  </lit-sell-item>

  <!-- SEGUNDA FILA -->

  <lit-sell-item
    image="https://www.canontiendaonline.cl/wcsstore/CCHCatalogAssetStore/KITS_FEB_bat-y-car-_0038_LP-E17_l.jpg"
    title="Batería Lp-E17-350 Canon-Negro. Segunda versión"
    price="100.000"
    discounted="50.000"
    discount="50"
    rating="3"
    discountcolor="#0066ff"
  >
  </lit-sell-item>

  <lit-sell-item
    image="https://www.sony.cl/image/dad03fcb90a51f01c16322ce84522217?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
    title="Trípode VCT-R640. Compatible con black series"
    price="120.000"
    discounted="84.000"
    discount="30"
    rating="4"
    discountcolor="#0066ff"
  >
  </lit-sell-item>

  <lit-sell-item
    image="https://falabella.scene7.com/is/image/Falabella/gsc_124390483_3711752_1?wid=800&hei=800&qlt=70"
    title="Samyang 8mm T3.8 VDSLR Asph IF MC Fisheye CS Lente."
    price="200.000"
    discounted="150.000"
    discount="25"
    rating="5"
    discountcolor="#0066ff"
  >
  </lit-sell-item>

  <lit-sell-item
    image="https://www.sony.cl/image/ddc9b88fc4410b190d82ea0c64bf485a?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
    title="Funda de transporte blanda para videocámara LCS-U11"
    price="100.000"
    discounted="90.000"
    discount="10"
    rating="3"
    discountcolor="#0066ff"
  >
  </lit-sell-item>
`;

const restartAnimation = () => {
  view.classList.remove('fadeIn');
  void view.offsetWidth;
  view.classList.add('fadeIn');
}

const changeToVanilla = () => {
  view.innerHTML = vanillaView;
  currentView = 'vanilla';
  vanillaButton.setAttribute('disabled', true);
  litButton.removeAttribute('disabled');
  viewName.innerHTML = 'Viendo Vanilla Components';
  restartAnimation();
};

const changeToLit = () => {
  view.innerHTML = litView;
  currentView = 'lit';
  litButton.setAttribute('disabled', true);
  vanillaButton.removeAttribute('disabled');
  viewName.innerHTML = 'Viendo Lit Components';
  restartAnimation();
};

vanillaButton.addEventListener('click', () => {
  if (currentView === 'lit') changeToVanilla();
});

litButton.addEventListener('click', () => {
  if (currentView === 'vanilla') changeToLit();
});

changeToVanilla();
