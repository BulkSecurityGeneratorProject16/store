import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GatewayProductModule as CrmProductModule } from './crm/product/product.module';
import { GatewayCustomerModule as CrmCustomerModule } from './crm/customer/customer.module';
import { GatewayProductOrderModule as CrmProductOrderModule } from './crm/product-order/product-order.module';
import { GatewayOrderItemModule as CrmOrderItemModule } from './crm/order-item/order-item.module';
import { GatewayInvoiceModule as AccountancyInvoiceModule } from './accountancy/invoice/invoice.module';
import { GatewayShipmentModule as AccountancyShipmentModule } from './accountancy/shipment/shipment.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        CrmProductModule,
        CrmCustomerModule,
        CrmProductOrderModule,
        CrmOrderItemModule,
        AccountancyInvoiceModule,
        AccountancyShipmentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayEntityModule {}
