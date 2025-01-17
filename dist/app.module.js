"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const company_module_1 = require("./company/company.module");
const auth_module_1 = require("./auth/auth.module");
const parking_module_1 = require("./parking/parking.module");
const vehicle_module_1 = require("./vehicles/vehicle.module");
const upload_module_1 = require("./upload/upload.module");
const user_module_1 = require("./user/user.module");
const reports_module_1 = require("./reports/reports.module");
const database_1 = require("./config/database");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(database_1.databaseConfig),
            auth_module_1.AuthModule, company_module_1.CompanyModule, parking_module_1.ParkingModule, vehicle_module_1.VehicleModule, user_module_1.UserModule, upload_module_1.UploadModule, reports_module_1.ReportsModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..'),
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map