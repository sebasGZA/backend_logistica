/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class EntidadRuta1775746876085 {
    name = 'EntidadRuta1775746876085'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."ruta_estado_enum" AS ENUM('pendiente', 'en curso', 'entregado')`);
        await queryRunner.query(`CREATE TABLE "ruta" ("id" SERIAL NOT NULL, "placa" character varying NOT NULL, "conductor" character varying NOT NULL, "fechaProgramacion" date NOT NULL, "estado" "public"."ruta_estado_enum" NOT NULL, CONSTRAINT "PK_0cc6eb7ab543d3367ef7848c88f" PRIMARY KEY ("id"))`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "ruta"`);
        await queryRunner.query(`DROP TYPE "public"."ruta_estado_enum"`);
    }
}
