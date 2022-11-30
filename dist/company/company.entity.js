"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
let Company = class Company {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.NotEquals)("string"),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 50 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.NotEquals)("string"),
    __metadata("design:type", String)
], Company.prototype, "document", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 100 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.NotEquals)("string"),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 50 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.NotEquals)("string"),
    __metadata("design:type", String)
], Company.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.NotEquals)(0),
    __metadata("design:type", Number)
], Company.prototype, "cars", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.NotEquals)(0),
    __metadata("design:type", Number)
], Company.prototype, "bikes", void 0);
Company = __decorate([
    (0, typeorm_1.Entity)()
], Company);
exports.Company = Company;
//# sourceMappingURL=company.entity.js.map